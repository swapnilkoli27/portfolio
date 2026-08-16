/**
 * Placeholder Spline scene component.
 *
 * To use a real Spline 3D scene:
 * 1. Install: npm install @splinetool/react-spline @splinetool/runtime
 * 2. Replace the placeholder below with:
 *    import Spline from '@splinetool/react-spline';
 *    <Spline scene="YOUR_SPLINE_SCENE_URL" />
 *
 * The scene URL can be obtained from https://spline.design by publishing
 * your scene and copying the "React" export URL.
 */
export default function SplineScene() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl glass p-8">
      <div className="text-center">
        <p className="text-sm text-white/40">Spline 3D Scene</p>
        <p className="mt-2 text-xs text-white/30">
          Insert your Spline scene URL here
        </p>
      </div>
    </div>
  );
}
