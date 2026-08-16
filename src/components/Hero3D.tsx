import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery';

/**
 * Lightweight 3D hero visual — an animated wireframe orb with particles
 * built on a 2D canvas. No heavy 3D library needed; responds to mouse.
 *
 * To use a Spline scene instead, drop a <SplineScene /> component here
 * with your scene URL (see SplineScene.tsx).
 */
export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let time = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };

    resize();

    // Sphere points
    const points: { lat: number; lon: number; size: number; color: string }[] = [];
    const latCount = 14;
    const lonCount = 24;
    for (let i = 0; i < latCount; i++) {
      for (let j = 0; j < lonCount; j++) {
        const lat = (i / latCount) * Math.PI - Math.PI / 2;
        const lon = (j / lonCount) * Math.PI * 2;
        const hueChoice = Math.random();
        const color =
          hueChoice < 0.33 ? '#4d7cff' : hueChoice < 0.66 ? '#22d3ee' : '#8b5cf6';
        points.push({ lat, lon, size: Math.random() * 1.5 + 1, color });
      }
    }

    // Orbiting particles
    const particles: { angle: number; radius: number; speed: number; size: number; y: number; color: string }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 180 + Math.random() * 80,
        speed: (Math.random() - 0.5) * 0.008,
        size: Math.random() * 2 + 0.5,
        y: (Math.random() - 0.5) * 200,
        color: Math.random() < 0.5 ? '#4d7cff' : '#22d3ee',
      });
    }

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.32;
      const rotX = time * 0.0003 + mouseRef.current.y * 0.5;
      const rotY = time * 0.0005 + mouseRef.current.x * 0.8;

      // Draw sphere wireframe lines
      const projected = points.map((p) => {
        // 3D point on sphere
        let x = Math.cos(p.lat) * Math.cos(p.lon);
        let y = Math.sin(p.lat);
        let z = Math.cos(p.lat) * Math.sin(p.lon);

        // Rotate Y
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        x = x1;
        z = z1;

        // Rotate X
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const y1 = y * cosX - z * sinX;
        const z2 = y * sinX + z * cosX;
        y = y1;
        z = z2;

        return {
          x: cx + x * radius,
          y: cy + y * radius,
          z: z,
          size: p.size,
          color: p.color,
          lat: p.lat,
          lon: p.lon,
        };
      });

      // Draw latitude/longitude lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < latCount; i++) {
        ctx.beginPath();
        for (let j = 0; j < lonCount; j++) {
          const idx = i * lonCount + j;
          const p = projected[idx];
          if (j === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(100, 130, 220, 0.12)`;
        ctx.stroke();
      }
      for (let j = 0; j < lonCount; j++) {
        ctx.beginPath();
        for (let i = 0; i < latCount; i++) {
          const idx = i * lonCount + j;
          const p = projected[idx];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(100, 130, 220, 0.08)`;
        ctx.stroke();
      }

      // Draw points
      projected.forEach((p) => {
        const depth = (p.z + 1) / 2; // 0 to 1
        const alpha = 0.3 + depth * 0.7;
        const size = p.size * (0.5 + depth * 0.8);
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        const hex = p.color;
        ctx.fillStyle = hex + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Glow
        if (depth > 0.7) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
          grad.addColorStop(0, hex + '40');
          grad.addColorStop(1, hex + '00');
          ctx.fillStyle = grad;
          ctx.fill();
        }
      });

      // Orbiting particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const px = cx + Math.cos(p.angle) * p.radius;
        const py = cy + p.y + Math.sin(p.angle) * 10;
        const z = Math.sin(p.angle) * 0.5 + 0.5;
        const alpha = 0.2 + z * 0.6;
        ctx.beginPath();
        ctx.arc(px, py, p.size * (0.5 + z), 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });

      // Central glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.8);
      glowGrad.addColorStop(0, 'rgba(77, 124, 255, 0.08)');
      glowGrad.addColorStop(0.5, 'rgba(34, 211, 238, 0.04)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.8, 0, Math.PI * 2);
      ctx.fill();

      time += 1;
      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('resize', resize);
    };
  }, [reduced]);

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Ambient glow behind */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-accent-blue/20 blur-[80px] animate-pulse-glow" />
      </div>
    </div>
  );
}
