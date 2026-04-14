import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactCTA from "./components/ContactCTA";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative bg-[#FDFBF7] text-stone-800 min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header/Navigation */}
      <header>
        <Navbar />
      </header>

      {/* 2. Hero Section */}
      <section aria-label="Introduction">
        <Hero />
      </section>

      {/* 3. Tech Stack - Subtle, premium indicator */}
      <section className="py-10 md:py-16 border-y border-stone-200 bg-[#F3EFEA]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-center text-stone-400 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] mb-8 md:mb-12">
            Engineered with Modern Architecture
          </p>
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-items-center justify-center items-center gap-8 md:gap-16">
            <span className="text-sm md:text-lg font-medium tracking-[0.2em] text-stone-300 hover:text-emerald-700 transition-colors duration-500 cursor-default">NEXT.JS</span>
            <span className="text-sm md:text-lg font-medium tracking-[0.2em] text-stone-300 hover:text-emerald-700 transition-colors duration-500 cursor-default">FASTAPI</span>
            <span className="text-sm md:text-lg font-medium tracking-[0.2em] text-stone-300 hover:text-emerald-700 transition-colors duration-500 cursor-default">MONGODB</span>
            <span className="text-sm md:text-lg font-medium tracking-[0.2em] text-stone-300 hover:text-emerald-700 transition-colors duration-500 cursor-default">TAILWIND</span>
          </div>
        </div>
      </section>

      {/* 4. Expertise / Technical Solutions - REDESIGNED ARCHITECTURAL GRID */}
      <section id="expertise" className="py-24 md:py-32 px-4 md:px-6 bg-white border-b border-stone-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
            <div>
              <span className="text-emerald-700 font-mono text-[10px] tracking-widest uppercase mb-6 block">
                // Our Expertise
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-800 leading-[1.1]">
                Technical <br className="hidden md:block"/>
                <span className="font-serif italic text-emerald-700">Solutions</span>
              </h2>
            </div>
            <p className="text-stone-500 text-base md:text-lg font-light max-w-md leading-relaxed">
              We deliver end-to-end digital architecture, focusing on high-performance frameworks and bespoke, high-conversion aesthetics.
            </p>
          </div>

          {/* 1px Structural Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
            
            {/* Service 01 */}
            <div className="bg-white p-10 md:p-16 group hover:bg-[#FDFBF7] transition-colors duration-500">
              <div className="text-stone-300 font-mono text-sm mb-8 group-hover:text-emerald-700 transition-colors duration-500">01</div>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-800 mb-4">Web Apps</h3>
              <p className="text-stone-500 font-light leading-relaxed">
                Custom Next.js solutions built for speed and scale. We engineer robust platforms designed to handle complex logic seamlessly.
              </p>
            </div>

            {/* Service 02 */}
            <div className="bg-white p-10 md:p-16 group hover:bg-[#FDFBF7] transition-colors duration-500">
              <div className="text-stone-300 font-mono text-sm mb-8 group-hover:text-emerald-700 transition-colors duration-500">02</div>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-800 mb-4">UI/UX Design</h3>
              <p className="text-stone-500 font-light leading-relaxed">
                Modern, high-conversion interfaces. We craft digital experiences with a refined touch, ensuring your brand stands out in a crowded market.
              </p>
            </div>

            {/* Service 03 */}
            <div className="bg-white p-10 md:p-16 group hover:bg-[#FDFBF7] transition-colors duration-500">
              <div className="text-stone-300 font-mono text-sm mb-8 group-hover:text-emerald-700 transition-colors duration-500">03</div>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-800 mb-4">Performance</h3>
              <p className="text-stone-500 font-light leading-relaxed">
                Relentless optimization. We tune Core Web Vitals to reach 100/100 scores, guaranteeing lightning-fast load times for your users.
              </p>
            </div>

            {/* Service 04 */}
            <div className="bg-white p-10 md:p-16 group hover:bg-[#FDFBF7] transition-colors duration-500">
              <div className="text-stone-300 font-mono text-sm mb-8 group-hover:text-emerald-700 transition-colors duration-500">04</div>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-800 mb-4">SEO Strategy</h3>
              <p className="text-stone-500 font-light leading-relaxed">
                Algorithmic alignment. We ensure your digital presence is built on technical SEO fundamentals so you are found by the exact right audience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Feature Highlight - Softened Bento Design */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-[#FDFBF7] via-[#F3EFEA]/50 to-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Minimalist Card */}
          <article className="order-2 md:order-1 bg-white border border-stone-200 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.08)] transition-shadow duration-500">
            <span className="text-emerald-700 font-mono text-[10px] mb-6 block tracking-widest uppercase">
              // 01 System Core
            </span>
            <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4 leading-snug text-stone-800">
              Chillingly Fast <br className="hidden md:block"/> Load Times
            </h3>
            <p className="text-stone-500 text-sm md:text-base leading-relaxed font-light">
              We optimize every line of code to ensure your users never wait. High performance isn't a feature; it's our standard in the digital market.
            </p>
          </article>

          {/* Text Side - Editorial Typography */}
          <div className="order-1 md:order-2 space-y-6 md:space-y-8 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-tight text-stone-800">
              We build for the <br/>
              <span className="font-serif italic text-emerald-700">future</span> of the web.
            </h2>
            <p className="text-stone-500 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
              Glacia Labs bridges the gap between complex backend logic and a stunning, emerald-class frontend aesthetic.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Final Call to Action */}
      <section aria-label="Contact">
        <ContactCTA />
      </section>

      {/* 7. Footer - Refined Typography */}
      <footer className="py-16 border-t border-stone-200 text-center bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xl font-bold tracking-[0.2em] text-stone-800 uppercase mb-6">
            Glacia<span className="text-emerald-700 font-light">Labs</span>
          </div>
          <p className="text-stone-400 text-[10px] font-mono uppercase tracking-[0.2em] leading-relaxed">
            © {currentYear} Glacia Labs Service. <br className="md:hidden" /> Engineering Digital Artifacts.
          </p>
        </div>
      </footer>
    </main>
  );
}