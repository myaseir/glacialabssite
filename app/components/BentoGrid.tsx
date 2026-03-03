import * as Icons from "lucide-react";
import { ExternalLink, Cpu } from "lucide-react";

const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return <Icons.Code className={className} />;
  return <LucideIcon className={className} />;
};

export default function BentoGrid({ projects }: { projects: any[] }) {
  return (
    // Mobile: 1 col, Desktop: 12 cols. auto-rows adjusted for mobile
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[320px] md:auto-rows-[380px]">
      {projects.map((p, i) => (
        <a 
          href={p.link} 
          key={i} 
          className={`group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#030712] transition-colors duration-500 will-change-transform hover:border-glacia-green/40 ${
            p.size === "large" ? "md:col-span-8" : "md:col-span-4"
          }`}
        >
          {/* 1. FAST TEXTURE */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* 2. FAST GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* 3. NUMBER WATERMARK: Hidden on smallest mobile to prevent text overlap */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[70px] md:text-[100px] font-black text-white/[0.02] group-hover:text-glacia-green/[0.04] transition-all duration-700 select-none leading-none group-hover:-translate-y-2 hidden xs:block">
            0{i + 1}
          </div>

          {/* 4. CONTENT: Responsive Padding (p-6 mobile, p-10 desktop) */}
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              {/* Glass Icon Box: Scaled for mobile */}
              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-glacia-green group-hover:bg-glacia-green/10 transition-all duration-500 shadow-xl">
                <IconRenderer name={p.iconName} className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              <div className="flex flex-col items-end gap-2">
                 <ExternalLink className="text-white/10 group-hover:text-glacia-green transition-all" size={18} />
                 {p.size === 'large' && (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.03] text-[7px] md:text-[8px] font-mono text-slate-500">
                       <span className="w-1 h-1 rounded-full bg-glacia-green animate-pulse" /> SYSTEM READY
                    </div>
                 )}
              </div>
            </div>

            <div className="relative">
              <span className="text-[9px] md:text-[10px] font-mono tracking-[0.2em] md:tracking-[0.3em] text-glacia-green uppercase font-bold mb-2 md:mb-3 block">
                {p.tag}
              </span>
              
              <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-3 md:mb-4 italic uppercase group-hover:text-white transition-colors leading-tight">
                {p.name}
              </h3>
              
              {/* Tech Tags: Wrapped for small screens */}
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {p.tech.split('•').map((t: string, idx: number) => (
                  <span key={idx} className="text-[8px] md:text-[9px] px-1.5 py-0.5 md:px-2 md:py-1 rounded-md bg-white/[0.03] border border-white/5 text-slate-400 font-mono group-hover:border-glacia-green/20 transition-colors">
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-glacia-green transition-all duration-500" />
        </a>
      ))}
    </div>
  );
}