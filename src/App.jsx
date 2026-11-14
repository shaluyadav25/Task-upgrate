
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { WhyChoose } from './components/WhyChoose';
import { Process } from './components/Process';
import { Values } from './components/Values';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/ui/CursorGlow';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Desktop Ambient Cursor Glow */}
      <CursorGlow />

      {/* 1. Navbar: Floating pill-shaped navbar with mega-dropdown */}
      <Navbar />

      <main id="main-content">
        {/* 2. Hero: Huge typography, hand-drawn highlight, floating cards collage */}
        <Hero />

        {/* 3. Marquee Strip: Infinite ticker */}
        <Marquee />

        {/* 4. Services: Numbered Bento Grid (8 services) */}
        <Services />

        {/* 5. Dark Inverted Section: Manifesto & Animated Counters */}
        <Stats />

        {/* 6. Why Choose upgrate: Sticky left heading, stacked right cards */}
        <WhyChoose />

        {/* 7. Process: Discover -> Design -> Develop -> Deliver horizontal timeline */}
        <Process />

        {/* 8. Core Values: Interactive accordion list */}
        <Values />

        {/* 9. Testimonials: Large quote carousel */}
        <Testimonials />

        {/* 10. CTA: High-impact Electric Indigo section with Lime & WhatsApp buttons */}
        <CTA />
      </main>

      {/* 11. Footer: Full contact info, links, socials, giant wordmark */}
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollToTop />
    </>
  );
}

export default App;
