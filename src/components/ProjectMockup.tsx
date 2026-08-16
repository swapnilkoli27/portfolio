import { 
  Sparkles, 
  Globe2, 
  Cpu, 
  ShieldAlert, 
  Eye, 
  Radio, 
  Layers, 
  Activity,
  Terminal,
  ScanLine,
  Dna,
  Fingerprint,
  FileCheck
} from 'lucide-react';
import type { ProjectItem } from '@/data/content';

interface ProjectMockupProps {
  project: ProjectItem;
}

export default function ProjectMockup({ project }: ProjectMockupProps) {
  const isVorqentra = project.image === 'vorqentra' || project.image === 'vorqquentra';
  const isTechryon = project.image === 'techryon';
  const isEminsphere = project.image === 'eminsphere';
  const isVirtualDNA = project.image === 'virtualdna';
  const isMazeCryptX = project.image === 'mazecryptx';
  const isShieldVision = project.image === 'shieldvision';
  const isGuardianAI = project.image === 'guardianai';

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink-950 via-ink-900 to-black overflow-hidden select-none pointer-events-none">
      {/* Background grid overlay */}
      <div className="absolute inset-0 grid-bg-fine opacity-25" />

      {/* 1. Vorqentra Labs Visualization: Acoustic Rosette, Harmonic Rings & Golden Particles */}
      {isVorqentra && (
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Radial acoustic glow */}
          <div className="absolute h-56 w-56 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-600/10 blur-3xl animate-pulse" />
          
          {/* Outer rosette rings */}
          <div className="absolute h-48 w-48 rounded-full border border-amber-500/20 animate-[spin_40s_linear_infinite]" />
          <div className="absolute h-40 w-40 rounded-full border border-dashed border-amber-400/30 animate-[spin_25s_linear_infinite_reverse]" />
          <div className="absolute h-32 w-32 rounded-full border border-amber-300/40" />

          {/* Central emblem */}
          <div className="relative flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/40 bg-amber-950/40 shadow-[0_0_30px_rgba(245,158,11,0.25)] backdrop-blur-md">
              <Sparkles className="h-7 w-7 text-amber-300 animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-950/60 px-3 py-0.5 text-[10px] font-mono tracking-widest text-amber-200 uppercase">
              <span>Acoustic AI Engine</span>
            </div>
          </div>

          {/* Harmonic sound frequency lines */}
          <div className="absolute bottom-6 left-8 right-8 flex items-end justify-center gap-1 opacity-50">
            {[24, 42, 18, 55, 38, 70, 48, 85, 62, 45, 78, 32, 60, 28, 48, 20].map((h, i) => (
              <div
                key={i}
                className="w-1 rounded-t bg-gradient-to-t from-amber-600/40 to-amber-300"
                style={{ height: `${h * 0.5}px` }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 2. Techryon Global: Enterprise Global Grid, Isometric Nodes & Tech Circuit */}
      {isTechryon && (
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Blue cyan glow */}
          <div className="absolute h-56 w-56 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl" />

          {/* Circuit nodes matrix */}
          <div className="absolute inset-8 grid grid-cols-4 gap-4 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="rounded-lg border border-cyan-500/20 bg-cyan-950/10 p-2 flex flex-col justify-between">
                <div className="h-1.5 w-6 rounded bg-cyan-400/40" />
                <div className="h-1 w-full rounded bg-white/10" />
              </div>
            ))}
          </div>

          {/* Central enterprise icon */}
          <div className="relative flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/40 bg-blue-950/50 shadow-[0_0_30px_rgba(6,182,212,0.25)] backdrop-blur-md">
              <Globe2 className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-blue-950/70 px-3 py-0.5 text-[10px] font-mono tracking-widest text-cyan-200 uppercase">
              <span>Enterprise Systems</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. Eminsphere: Academic Global Orbit, Scopus Indexing Network */}
      {isEminsphere && (
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Emerald glow */}
          <div className="absolute h-56 w-56 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />

          {/* Orbital rings */}
          <div className="absolute h-52 w-52 rounded-full border border-emerald-500/20 animate-[spin_30s_linear_infinite]" />
          <div className="absolute h-36 w-36 rounded-full border border-dashed border-teal-400/30 animate-[spin_20s_linear_infinite_reverse]" />

          {/* Orbiting data badges */}
          <div className="absolute top-6 right-8 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-2.5 py-1 text-[9px] font-mono text-emerald-300">
            120+ Countries
          </div>
          <div className="absolute bottom-6 left-8 rounded-full border border-teal-500/30 bg-teal-950/60 px-2.5 py-1 text-[9px] font-mono text-teal-300">
            Scopus & WoS Indexed
          </div>

          {/* Central hub */}
          <div className="relative flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-950/50 shadow-[0_0_30px_rgba(16,185,129,0.25)] backdrop-blur-md">
              <Layers className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/70 px-3 py-0.5 text-[10px] font-mono tracking-widest text-emerald-200 uppercase">
              <span>Global Conference Hub</span>
            </div>
          </div>
        </div>
      )}

      {/* 4. VirtualDNA: Multi-Modal AI Provenance, DNA Double Helix & Forensic Ledger */}
      {isVirtualDNA && (
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Neon teal/cyan radial glow */}
          <div className="absolute h-56 w-56 rounded-full bg-gradient-to-r from-teal-400/25 to-cyan-500/20 blur-3xl animate-pulse" />

          {/* DNA helix circular lattice */}
          <div className="absolute h-52 w-52 rounded-full border border-teal-500/20 animate-[spin_35s_linear_infinite]" />
          <div className="absolute h-40 w-40 rounded-full border border-dashed border-cyan-400/30 animate-[spin_20s_linear_infinite_reverse]" />
          <div className="absolute h-24 w-24 rounded-full border border-teal-300/30" />

          {/* Provenance telemetry HUD badges */}
          <div className="absolute top-5 left-6 flex items-center gap-1.5 text-[9px] font-mono text-teal-300 bg-teal-950/70 px-2.5 py-1 rounded-full border border-teal-500/30 backdrop-blur-sm">
            <Fingerprint className="h-3 w-3 text-teal-400" />
            <span>LSB + SHA-256 EMBEDDED</span>
          </div>

          <div className="absolute bottom-5 right-6 flex items-center gap-1.5 text-[9px] font-mono text-cyan-300 bg-cyan-950/70 px-2.5 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">
            <FileCheck className="h-3 w-3 text-cyan-400" />
            <span>CLIP ViT · RESNET-18 · YAMNET</span>
          </div>

          {/* Central DNA Emblem */}
          <div className="relative flex flex-col items-center gap-3 z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-400/40 bg-teal-950/60 shadow-[0_0_35px_rgba(45,212,191,0.3)] backdrop-blur-md">
              <Dna className="h-8 w-8 text-teal-300 animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-950/80 px-3 py-0.5 text-[10px] font-mono tracking-widest text-teal-200 uppercase">
              <span>Multi-Modal Provenance</span>
            </div>
          </div>
        </div>
      )}

      {/* 5. MazeCryptX: Cyber Honeypot Radar, Terminal Code Streams & Threat Matrix */}
      {isMazeCryptX && (
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Crimson glow */}
          <div className="absolute h-56 w-56 rounded-full bg-gradient-to-r from-rose-600/25 to-purple-600/15 blur-3xl" />


          {/* Radar circle & crosshair */}
          <div className="absolute h-48 w-48 rounded-full border border-rose-500/20" />
          <div className="absolute h-32 w-32 rounded-full border border-dashed border-rose-500/30 animate-[spin_15s_linear_infinite]" />
          <div className="absolute inset-x-8 top-1/2 h-px bg-rose-500/20" />
          <div className="absolute inset-y-8 left-1/2 w-px bg-rose-500/20" />

          {/* Terminal telemetry tags */}
          <div className="absolute top-5 left-6 flex items-center gap-1.5 text-[9px] font-mono text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30">
            <Terminal className="h-3 w-3" />
            <span>HONEYPOT ACTIVE</span>
          </div>

          <div className="absolute bottom-5 right-6 flex items-center gap-1.5 text-[9px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
            <span>IoC SANDBOX: ONLINE</span>
          </div>

          {/* Central shield */}
          <div className="relative flex flex-col items-center gap-3 z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/40 bg-rose-950/50 shadow-[0_0_30px_rgba(244,63,94,0.3)] backdrop-blur-md">
              <ShieldAlert className="h-8 w-8 text-rose-400" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/80 px-3 py-0.5 text-[10px] font-mono tracking-widest text-rose-200 uppercase">
              <span>ML Persona Analysis</span>
            </div>
          </div>
        </div>
      )}

      {/* 5. ShieldVision: Multimodal Deepfake Scan HUD, Facial Mesh & XAI Heatmap */}
      {isShieldVision && (
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Purple pink glow */}
          <div className="absolute h-56 w-56 rounded-full bg-gradient-to-r from-purple-600/25 to-pink-500/15 blur-3xl" />

          {/* Facial Scan frame / HUD brackets */}
          <div className="absolute inset-10 border border-purple-500/20 rounded-2xl flex flex-col justify-between p-2">
            <div className="flex justify-between text-[8px] font-mono text-purple-400">
              <span>[FACE_MESH_VERIFIED]</span>
              <span>CONF: 99.4%</span>
            </div>
            <div className="flex justify-between text-[8px] font-mono text-pink-400">
              <span>SHAP / LIME: ATTENTION MAP</span>
              <span>AUDIO: MFCC SYNTH</span>
            </div>
          </div>

          {/* Laser scanning bar */}
          <div className="absolute inset-x-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-[float_2.5s_ease-in-out_infinite]" style={{ top: '48%' }} />

          {/* Central Eye / Forensics icon */}
          <div className="relative flex flex-col items-center gap-3 z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/40 bg-purple-950/50 shadow-[0_0_30px_rgba(168,85,247,0.3)] backdrop-blur-md">
              <Eye className="h-8 w-8 text-purple-300" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-950/80 px-3 py-0.5 text-[10px] font-mono tracking-widest text-purple-200 uppercase">
              <span>Explainable AI (XAI)</span>
            </div>
          </div>
        </div>
      )}

      {/* 6. GuardianAI: Wearable IoT Telemetry, Motion Sensors & GPS Radar */}
      {isGuardianAI && (
        <div className="relative flex h-full w-full items-center justify-center">
          {/* Cyan emerald glow */}
          <div className="absolute h-56 w-56 rounded-full bg-gradient-to-r from-cyan-500/25 to-emerald-500/15 blur-3xl" />

          {/* Sensor waves */}
          <div className="absolute h-48 w-48 rounded-full border border-cyan-500/20 animate-ping opacity-20" />
          <div className="absolute h-40 w-40 rounded-full border border-cyan-400/30" />
          <div className="absolute h-28 w-28 rounded-full border border-dashed border-emerald-400/30 animate-[spin_20s_linear_infinite]" />

          {/* Telemetry chips */}
          <div className="absolute top-5 right-6 flex items-center gap-1.5 text-[9px] font-mono text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
            <Activity className="h-3 w-3 text-cyan-400" />
            <span>MPU6050 & GPS LIVE</span>
          </div>

          <div className="absolute bottom-5 left-6 flex items-center gap-1.5 text-[9px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
            <ScanLine className="h-3 w-3 text-emerald-400" />
            <span>OBSTACLE DETECTION: ON</span>
          </div>

          {/* Central AIoT Icon */}
          <div className="relative flex flex-col items-center gap-3 z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-950/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-md">
              <Radio className="h-8 w-8 text-cyan-300 animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/80 px-3 py-0.5 text-[10px] font-mono tracking-widest text-cyan-200 uppercase">
              <span>Raspberry Pi & ESP32</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

