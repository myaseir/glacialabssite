"use client";

import { SERVICES_DETAILED } from "../constants";
import { CheckCircle2, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

// ----------------------------------------------------------------------
// Types & Interfaces
// ----------------------------------------------------------------------
interface IconRendererProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

// ----------------------------------------------------------------------
// Dynamic Icon Component
// ----------------------------------------------------------------------
const IconRenderer = ({ name, className, strokeWidth = 1.5 }: IconRendererProps) => {
  const LucideIcon = (Icons as any)[name];
  
  // Fallback to 'Code' icon if the specified name isn't found
  if (!LucideIcon) {
    return <Icons.Code className={className} strokeWidth={strokeWidth} />;
  }
  
  return <LucideIcon className={className} strokeWidth={strokeWidth} />;
};

// ----------------------------------------------------------------------
// Main Page Component
// ----------------------------------------------------------------------
export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-32 md:pt-44 pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <header className="mb-20 md:mb-32 text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 leading-[1.1] text-stone-800">
            Digital <br className="hidden md:block"/>
            <span className="font-serif italic text-emerald-700">Solutions</span>
          </h1>
          <p className="text-stone-400 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">
            Structured Service Tiers • 2026
          </p>
        </header>

        {/* Services Grid (Alternating Layout) */}
        <section className="space-y-12 md:space-y-24" aria-label="Service Offerings">
          {SERVICES_DETAILED.map((service, index) => {
            const isEven = index % 2 === 0;
            const numberString = `0${index + 1}`;

            return (
              <article
                key={service.title}
                className={`group relative bg-white border border-stone-200 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.06)] hover:border-emerald-700/20 transition-all duration-700 flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 md:gap-20 items-center`}
              >
                {/* Background Watermark Number */}
                <div className="absolute top-4 right-8 md:top-8 md:right-12 text-[100px] md:text-[180px] font-bold text-stone-50 group-hover:text-emerald-50/50 transition-colors duration-700 italic select-none pointer-events-none leading-none z-0">
                  {numberString}
                </div>

                {/* Text Content */}
                <div className="flex-1 z-10 w-full">
                  
                  {/* Category Tag */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-8 bg-emerald-700/40" />
                    <span className="text-emerald-700 font-mono text-[10px] tracking-[0.2em] uppercase font-semibold">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight text-stone-800 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-stone-500 text-base md:text-lg mb-8 leading-relaxed max-w-xl font-light">
                    {service.desc}
                  </p>

                  {/* Target Audience / Best For */}
                  {service.bestFor && (
                    <p className="text-xs md:text-sm text-stone-500 mb-10 font-mono uppercase tracking-widest">
                      <span className="text-emerald-700 font-semibold mr-2">Best For:</span> 
                      {service.bestFor}
                    </p>
                  )}

                  {/* Deliverables / Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-stone-600 font-light">
                        <CheckCircle2 
                          size={18} 
                          className="text-emerald-600 flex-shrink-0 mt-0.5" 
                          strokeWidth={1.5} 
                        />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Meta Information (Stack & Pricing) */}
                  <div className="flex flex-wrap gap-4 items-center pt-8 border-t border-stone-100">
                    <div className="px-5 py-2.5 rounded-full bg-stone-50 border border-stone-200 text-[10px] font-mono text-stone-600 uppercase tracking-widest transition-colors group-hover:border-stone-300">
                      <span className="text-emerald-700 font-semibold mr-2">Stack:</span> 
                      {service.tech}
                    </div>

                    {service.startingPrice && (
                      <div className="px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] font-mono text-emerald-800 uppercase tracking-widest transition-colors group-hover:bg-emerald-100/50">
                        <span className="font-semibold mr-2">Starts at:</span> 
                        {service.startingPrice}
                      </div>
                    )}
                  </div>
                </div>

                {/* Visual Icon Box */}
                <div className="w-full md:w-[40%] aspect-square rounded-[2rem] md:rounded-[2.5rem] bg-[#FDFBF7] border border-stone-100 flex items-center justify-center relative order-first md:order-none overflow-hidden group-hover:bg-white transition-colors duration-700 z-10">
                  {/* Subtle Ambient Glow on Hover */}
                  <div className="absolute inset-0 bg-emerald-100/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full scale-150" />
                  
                  <IconRenderer
                    name={service.iconName}
                    strokeWidth={1}
                    className="w-20 h-20 md:w-32 md:h-32 text-stone-200 group-hover:text-emerald-700 group-hover:scale-105 transition-all duration-700 relative z-10"
                  />
                </div>
              </article>
            );
          })}
        </section>

        {/* Call To Action Section */}
        <section className="mt-28 md:mt-40 p-10 md:p-24 rounded-[2.5rem] md:rounded-[4rem] bg-emerald-800 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Architectural Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8 leading-tight">
              Ready to engineer your <br className="hidden md:block"/>
              <span className="font-serif italic text-emerald-200">digital infrastructure?</span>
            </h2>
            <p className="font-light text-emerald-50/90 text-base md:text-xl mb-12 leading-relaxed">
              I am currently accepting new enterprise and boutique projects for 2026. Let’s discuss your technical requirements and build a solution that scales.
            </p>
            <a
              href="mailto:glacialabs@gmail.com"
              className="group inline-flex items-center justify-center gap-4 bg-white text-emerald-900 px-10 py-5 rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-stone-50 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-0.5"
            >
              Start a Project 
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}