import { Code2, Layout, Zap, Search, ArrowRight } from 'lucide-react';

const SERVICES = [
  { 
    id: "01",
    icon: Code2, 
    title: "Web Apps", 
    desc: "Custom Next.js solutions built for speed and scale. We engineer robust platforms designed to handle complex logic seamlessly." 
  },
  { 
    id: "02",
    icon: Layout, 
    title: "UI/UX Design", 
    desc: "Modern, high-conversion interfaces. We craft digital experiences with a refined touch, ensuring your brand stands out in a crowded market." 
  },
  { 
    id: "03",
    icon: Zap, 
    title: "Performance", 
    desc: "Relentless optimization. We tune Core Web Vitals to reach 100/100 scores, guaranteeing lightning-fast load times for your users." 
  },
  { 
    id: "04",
    icon: Search, 
    title: "SEO Strategy", 
    desc: "Algorithmic alignment. We ensure your digital presence is built on technical SEO fundamentals so you are found by the exact right audience." 
  },
];

export default function Services() {
  return (
    <section id="expertise" className="py-24 md:py-32 px-4 md:px-6 bg-[#FDFBF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - Mirrored perfectly from the Home Page editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
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

        {/* The Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((s) => (
            <div 
              key={s.id} 
              className="group relative bg-white border border-stone-200 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col h-full"
            >
              {/* Top Row: Floating Icon & Mono Number */}
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 rounded-full bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors duration-500">
                  <s.icon strokeWidth={1.5} className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-stone-300 font-mono text-sm group-hover:text-emerald-700 transition-colors duration-500">
                  {s.id}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-800 mb-4">
                  {s.title}
                </h3>
                <p className="text-stone-500 font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Interactive Bottom Anchor */}
              <div className="mt-10 pt-6 border-t border-stone-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                  Explore Spec
                </span>
                <ArrowRight size={16} className="text-emerald-700 -translate-x-4 group-hover:translate-x-0 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}