import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactCTA from "./components/ContactCTA";
import Link from 'next/link';
export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative">
      {/* 1. Header/Navigation - Essential for Site Structure */}
      <header>
        <Navbar />
      </header>

      {/* 2. Hero Section - Labeled as the main heading for SEO */}
      <section aria-label="Introduction">
        <Hero />
      </section>

      {/* 3. Tech Stack - Semantic 'Aside' or Section */}
      <section className="py-8 md:py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-center text-slate-500 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] mb-6 md:mb-10">
            Engineered with Modern Architecture
          </p>
          {/* Responsive Wrap: Grid on mobile, Flex on desktop */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-items-center justify-center items-center gap-6 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-sm md:text-xl font-black tracking-widest">NEXT.JS</span>
            <span className="text-sm md:text-xl font-black tracking-widest">TAILWIND</span>
            <span className="text-sm md:text-xl font-black tracking-widest">VERCEL</span>
            <span className="text-sm md:text-xl font-black tracking-widest">FASTAPI</span>
          </div>
        </div>
      </section>

      {/* 4. Services - Using an ID for internal link navigation (SEO) */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>

      {/* 5. Feature Highlight - Responsive Grid Adjustments */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-gradient-to-b from-transparent via-glacia-green/5 to-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          
          {/* Bento Card: Always first on mobile for context */}
          <article className="order-2 md:order-1 glass-bento p-[1px] rounded-[2rem] bg-gradient-to-br from-glacia-green/20 to-transparent">
             <div className="bg-glacia-dark/90 backdrop-blur-sm rounded-[calc(2rem-1px)] p-6 md:p-10">
                <span className="text-glacia-green font-mono text-xs mb-4 block tracking-tighter">// 01_SYSTEM_CORE</span>
                <h3 className="text-2xl md:text-3xl font-black italic uppercase mb-4 leading-tight">Chillingly Fast <br/> Load Times</h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  We optimize every line of code to ensure your users never wait. High performance isn't a feature; it's our standard in the Pakistan digital market.
                </p>
             </div>
          </article>

          {/* Text Side */}
          <div className="order-1 md:order-2 space-y-6 md:space-y-8 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-[0.9] uppercase italic tracking-tighter">
              We build for the <br/>
              <span className="text-glacia-green">Future</span> of the web.
            </h2>
            <p className="text-slate-400 text-base md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
              Glacia Labs bridges the gap between complex backend logic and a stunning, emerald-class frontend aesthetic.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action */}
      <section aria-label="Contact">
        <ContactCTA />
      </section>

      {/* 7. Footer - Simplified for SEO (Links handled by separate Footer component) */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xl font-black mb-4 tracking-tighter italic uppercase">
            GLACIA<span className="text-glacia-green">LABS</span>
          </div>
          <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
            © {currentYear} Glacia Labs Service. <br className="md:hidden" /> Engineering Digital Artifacts.
          </p>
        </div>
      </footer>
    </main>
  );
}