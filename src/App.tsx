import { lazy, Suspense } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import PageLoader from '@/components/PageLoader';
import Hero from '@/sections/Hero';
import Intro from '@/sections/Intro';
import Services from '@/sections/Services';

// Lazy-load below-the-fold sections for faster initial page load
const Work = lazy(() => import('@/sections/Work'));
const About = lazy(() => import('@/sections/About'));
const TechStack = lazy(() => import('@/sections/TechStack'));
const Process = lazy(() => import('@/sections/Process'));
const WhyWorkWithMe = lazy(() => import('@/sections/WhyWorkWithMe'));
const FreelanceCTA = lazy(() => import('@/sections/FreelanceCTA'));
const Contact = lazy(() => import('@/sections/Contact'));
const Footer = lazy(() => import('@/sections/Footer'));

function SectionFallback() {
  return <div className="min-h-[40vh]" />;
}

export default function App() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero />
        <Intro />
        <Services />

        <Suspense fallback={<SectionFallback />}>
          <Work />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyWorkWithMe />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FreelanceCTA />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
