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
    <main className="pt-32 md:pt-44 pb-24 px-4 md:px-6 max-w-7xl mx-auto">

      {/* Header Section */}
      <div className="mb-20 md:mb-28 text-center md:text-left">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter italic mb-6 uppercase leading-[0.9]">
          DIGITAL <span className="text-glacia-green">SOLUTIONS</span>
        </h1>
        <p className="text-slate-400 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm">
          Structured Service Tiers • 2026
        </p>
      </div>

      <div className="space-y-12 md:space-y-20">
        {SERVICES_DETAILED.map((s, i) => (
          <div
            key={i}
            className={`group relative bg-white/[0.02] border border-white/5 p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden hover:border-glacia-green/30 transition-all duration-700 flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-10 md:gap-14 items-center`}
          >
            {/* Background Number */}
            <div className="absolute top-3 right-6 md:top-6 md:right-12 text-[80px] md:text-[130px] font-black text-white/[0.03] group-hover:text-glacia-green/[0.05] transition-colors duration-700 italic select-none">
              0{i + 1}
            </div>

            {/* Content */}
            <div className="flex-1 z-10 w-full">
              {/* Tier Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-glacia-green" />
                <span className="text-glacia-green font-mono text-[11px] tracking-widest uppercase font-bold">
                  {s.tag}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter group-hover:text-glacia-green transition-colors leading-tight">
                {s.title}
              </h2>

              {/* Description */}
              <p className="text-slate-400 text-sm md:text-base mb-4 leading-relaxed max-w-lg">
                {s.desc}
              </p>

              {/* Best For */}
              {s.bestFor && (
                <p className="text-xs md:text-sm text-glacia-green/80 mb-8 font-mono uppercase tracking-wide">
                  Best For: {s.bestFor}
                </p>
              )}

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-8">
                {s.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[12px] text-slate-300">
                    <CheckCircle2 size={15} className="text-glacia-green flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Stack + Pricing */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="px-4 py-2 rounded-lg bg-glacia-green/5 border border-glacia-green/20 text-[10px] font-mono text-glacia-green uppercase font-bold tracking-widest">
                  Stack: {s.tech}
                </div>

                {s.startingPrice && (
                  <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white uppercase font-bold tracking-widest">
                    Starting From: {s.startingPrice}
                  </div>
                )}
              </div>
            </div>

            {/* Icon Box */}
            <div className="w-full md:w-1/3 aspect-square rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 flex items-center justify-center relative order-first md:order-none">
              <div className="absolute inset-0 bg-glacia-green/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <IconRenderer
                name={s.iconName}
                className="w-16 h-16 md:w-24 md:h-24 text-glacia-green/40 group-hover:text-glacia-green group-hover:scale-110 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-28 md:mt-36 p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] bg-glacia-green text-glacia-dark text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-6 italic uppercase leading-none">
            Let’s Build Something Scalable
          </h2>
          <p className="font-semibold text-base md:text-lg mb-10 opacity-80 max-w-xl mx-auto">
            I’m currently accepting new projects for 2026. Let’s discuss your requirements and build a solution that grows with your business.
          </p>
          <a
            href="mailto:glacialabs@gmail.com"
            className="inline-flex items-center justify-center gap-4 bg-glacia-dark text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            Start a Project <ArrowRight size={20} />
          </a>
        </div>
      </div>

    </main>
  );
}