import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Background Decorative Glow - Scaled for mobile */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-glacia-green/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Availability Badge: Smaller font on mobile */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-glacia-green/5 border border-glacia-green/20 text-glacia-green text-[10px] md:text-xs font-mono mb-6 md:mb-8 animate-fade-in tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-glacia-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-glacia-green"></span>
          </span>
          Available for new projects
        </div>
        
        {/* Main Heading: text-5xl on mobile, 8xl on desktop */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.9] italic uppercase">
          WE BUILD <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-glacia-green via-emerald-400 to-cyan-500 drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            DIGITAL ICE.
          </span>
        </h1>
        
        {/* Subtext: max-w ensures it doesn't stretch too wide on desktop */}
        <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4">
          Glacia Labs is a boutique development studio crafting high-performance 
          web applications with chilling precision and emerald-class design.
        </p>

        {/* Action Buttons: Full width on mobile, inline on desktop */}
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  <Link href="/contact" className="w-full sm:w-auto">
    <button className="w-full px-10 py-5 bg-glacia-green text-glacia-dark font-black rounded-full shadow-glow hover:scale-105 transition-all flex items-center justify-center gap-2 uppercase tracking-tighter text-sm">
      Start a Project <ArrowRight size={18} />
    </button>
  </Link>
  
  <Link href="/work" className="w-full sm:w-auto">
    <button className="w-full px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all uppercase tracking-tighter text-sm">
      View Archive
    </button>
  </Link>
</div>
      </div>
    </section>
  );
}