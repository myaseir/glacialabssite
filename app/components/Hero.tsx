import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-24 px-4 md:px-6 bg-[#FDFBF7] overflow-hidden selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Background Soft Gradient - Replaces the harsh neon blur */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#F3EFEA] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        
        {/* Availability Badge: Refined from a glowing pill to an elegant status indicator */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200 bg-white shadow-sm text-stone-600 text-xs font-medium mb-8 md:mb-10 tracking-wide uppercase transition-all hover:border-stone-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          Accepting new clients
        </div>
        
        {/* Main Heading: Transitioned from heavy/black/italic to a clean, editorial layout */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 md:mb-8 text-stone-800 leading-[1.1]">
          We build <br className="hidden sm:block" />
          <span className="font-serif italic text-emerald-700 pr-2">
            digital ice.
          </span>
        </h1>
        
        {/* Subtext: Shifted from slate to a warm stone gray for better integration with the beige canvas */}
        <p className="text-stone-500 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4 font-light">
          Glacia Labs is a boutique development studio crafting high-performance 
          web applications with chilling precision and emerald-class design.
        </p>

        {/* Action Buttons: Removed heavy drop-shadows; introduced elegant, tactile button states */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link href="/contact" className="w-full sm:w-auto">
            <button className="group w-full px-8 py-4 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center gap-3 text-sm font-medium tracking-wide">
              Start a Project 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <Link href="/work" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-transparent border border-stone-300 text-stone-700 rounded-full hover:bg-stone-100 transition-all duration-300 text-sm font-medium tracking-wide">
              View Archive
            </button>
          </Link>
        </div>
        
      </div>
    </section>
  );
}