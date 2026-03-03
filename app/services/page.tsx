import { SERVICES_DETAILED } from "../constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return <Icons.Code className={className} />;
  return <LucideIcon className={className} />;
};

export default function ServicesPage() {
  return (
    // Reduced top padding for mobile (pt-32) vs desktop (pt-44)
    <main className="pt-32 md:pt-44 pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="mb-16 md:mb-24 text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter italic mb-6 uppercase leading-[0.9]">
          CORE <span className="text-glacia-green">SERVICES</span>
        </h1>
        <p className="text-slate-500 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm">
          Technical Capabilities • 2026 Registry
        </p>
      </div>
      
      <div className="space-y-8 md:space-y-16">
        {SERVICES_DETAILED.map((s, i) => (
          <div 
            key={i} 
            // Mobile: Always flex-col | Tablet+: Alternates row/row-reverse
            className={`group relative bg-white/[0.01] border border-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden hover:border-glacia-green/20 transition-all duration-700 flex flex-col ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-8 md:gap-12 items-center`}
          >
            {/* Background Number: Scaled down and moved for mobile */}
            <div className="absolute top-2 right-6 md:top-5 md:right-10 text-[80px] md:text-[120px] font-black text-white/[0.02] group-hover:text-glacia-green/[0.04] transition-colors duration-700 italic select-none">
              0{i + 1}
            </div>

            <div className="flex-1 z-10 w-full">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                 <div className="h-px w-6 md:w-8 bg-glacia-green" />
                 <span className="text-glacia-green font-mono text-[10px] tracking-widest uppercase font-bold">Module {i + 1}</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter group-hover:text-glacia-green transition-colors leading-tight">
                {s.title}
              </h2>
              
              <p className="text-slate-400 text-sm md:text-base mb-8 leading-relaxed max-w-lg">
                {s.desc}
              </p>

              {/* Feature Grid: 1 col on mobile, 2 on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8">
                {s.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] md:text-xs text-slate-300">
                    <CheckCircle2 size={14} className="text-glacia-green flex-shrink-0" /> 
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="inline-block px-4 py-2 rounded-lg bg-glacia-green/5 border border-glacia-green/10 text-[9px] md:text-[10px] font-mono text-glacia-green uppercase font-bold tracking-widest">
                Stack: {s.tech}
              </div>
            </div>

            {/* Visual Icon Box: Full width on mobile, 1/3 on desktop */}
            <div className="w-full md:w-1/3 aspect-square rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center justify-center relative order-first md:order-none">
               <div className="absolute inset-0 bg-glacia-green/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
               <IconRenderer 
                name={s.iconName} 
                className="w-16 h-16 md:w-20 md:h-20 text-glacia-green/40 group-hover:text-glacia-green group-hover:scale-110 transition-all duration-500" 
               />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section: Optimized padding and text scaling */}
      <div className="mt-24 md:mt-32 p-8 md:p-20 rounded-[2.5rem] md:rounded-[5rem] bg-glacia-green text-glacia-dark text-center group relative overflow-hidden">
         <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6 italic uppercase leading-none">Ready to deploy?</h2>
            <p className="font-bold text-base md:text-lg mb-8 md:mb-10 opacity-70 max-w-md mx-auto">Glacia Labs is currently accepting new partnerships.</p>
            <a 
              href="mailto:glacialabs@gmail.com" 
              className="inline-flex items-center justify-center w-full sm:w-auto gap-4 bg-glacia-dark text-white px-8 py-4 md:py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              Initialize Project <ArrowRight size={20} />
            </a>
         </div>
      </div>
    </main>
  );
}