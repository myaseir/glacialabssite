"use client";
import * as Icons from "lucide-react";
import { ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) return <Icons.Code className={className} />;
  return <LucideIcon className={className} />;
};

interface BentoGridProps {
  projects: any[];
  activeFilter: string;
}

export default function BentoGrid({ projects, activeFilter }: BentoGridProps) {
  // Filtering Logic
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    
    // Check tags (from your constants) or the category/tab name
    const categoryMatch = p.tag?.toLowerCase().includes(activeFilter.toLowerCase());
    const techMatch = p.tech?.toLowerCase().includes(activeFilter.toLowerCase());
    
    return categoryMatch || techMatch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[320px] md:auto-rows-[380px]">
      <AnimatePresence mode="popLayout">
        {filteredProjects.map((p, i) => (
          <motion.a
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            href={p.link}
            target="_blank"
            key={p.name}
            className={`group relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#030712] transition-colors duration-500 hover:border-glacia-green/40 ${
              p.size === "large" ? "md:col-span-8" : "md:col-span-4"
            }`}
          >
            {/* 1. TEXTURE & GLOW */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* 2. WATERMARK */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[70px] md:text-[100px] font-black text-white/[0.02] group-hover:text-glacia-green/[0.04] transition-all duration-700 select-none leading-none group-hover:-translate-y-2 hidden sm:block">
              0{i + 1}
            </div>

            {/* 3. CONTENT */}
            <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-glacia-green group-hover:bg-glacia-green/10 transition-all duration-500 shadow-xl">
                  <IconRenderer name={p.iconName || 'Code'} className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                
                <div className="flex flex-col items-end gap-2">
                   <ExternalLink className="text-white/20 group-hover:text-glacia-green transition-all" size={20} />
                   {p.size === 'large' && (
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/[0.03] text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                         <span className="w-1 h-1 rounded-full bg-glacia-green animate-pulse" /> Deployment Active
                      </div>
                   )}
                </div>
              </div>

              <div className="relative">
                <span className="text-[10px] font-mono tracking-[0.3em] text-glacia-green uppercase font-bold mb-3 block">
                  {p.tag}
                </span>
                
                <h3 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 italic uppercase group-hover:text-white transition-colors leading-[0.9]">
                  {p.name}
                </h3>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tech?.split('•').map((t: string, idx: number) => (
                    <span key={idx} className="text-[9px] px-2 py-1 rounded-md bg-white/[0.03] border border-white/5 text-slate-400 font-mono group-hover:border-glacia-green/20 transition-colors uppercase">
                      {t.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Progress Line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-glacia-green transition-all duration-700 ease-out" />
          </motion.a>
        ))}
      </AnimatePresence>
    </div>
  );
}