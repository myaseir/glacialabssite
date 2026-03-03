"use client";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-300 pt-24 md:pt-40 pb-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation: Enhanced for mobile thumbs */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-glacia-green text-[10px] md:text-xs font-mono mb-8 md:mb-12 hover:gap-3 transition-all uppercase tracking-[0.2em] font-bold"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Header: Responsive flex layout */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8 md:mb-10">
          <div className="w-fit p-3.5 rounded-2xl bg-glacia-green/10 text-glacia-green shadow-[0_0_25px_rgba(16,185,129,0.1)]">
            <FileText size={32} />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic leading-none">
            Terms of <span className="text-glacia-green">Use</span>
          </h1>
        </div>

        {/* Corporate Status Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-10 md:mb-12 border-b border-white/5 pb-6">
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            OFFICIAL CORPORATE DOCUMENT • GLACIA CONNECTION
          </p>
          <span className="text-[9px] font-mono text-glacia-green/50 hidden md:block">
            REF: TOU-2026-GL
          </span>
        </div>

        {/* Content Sections: Increased spacing for mobile readability */}
        <section className="space-y-12 md:space-y-16 text-sm md:text-base leading-relaxed">
          
          <div className="relative pl-0 md:pl-8">
            <span className="hidden md:block absolute left-0 top-1 text-[10px] font-mono text-glacia-green/40">01</span>
            <h2 className="text-white font-bold text-lg md:text-xl mb-4 uppercase tracking-tighter flex items-center gap-3">
              <span className="md:hidden text-glacia-green font-mono text-xs">1.</span> Agreement to Terms
            </h2>
            <p className="text-slate-400">
              By accessing the services provided by Glacia Labs or Glacia Connection, you agree to be bound by these Terms of Use and all applicable laws and regulations in the Islamic Republic of Pakistan.
            </p>
          </div>

          <div className="relative pl-0 md:pl-8">
            <span className="hidden md:block absolute left-0 top-1 text-[10px] font-mono text-glacia-green/40">02</span>
            <h2 className="text-white font-bold text-lg md:text-xl mb-4 uppercase tracking-tighter flex items-center gap-3">
              <span className="md:hidden text-glacia-green font-mono text-xs">2.</span> Intellectual Property
            </h2>
            <p className="text-slate-400">
              All code, designs, and brand assets (including the Glacia Labs name and logo) are the exclusive property of Glacia Connection. Unauthorized reproduction or "scraping" of our digital artifacts is strictly prohibited.
            </p>
          </div>

          <div className="relative pl-0 md:pl-8">
            <span className="hidden md:block absolute left-0 top-1 text-[10px] font-mono text-glacia-green/40">03</span>
            <h2 className="text-white font-bold text-lg md:text-xl mb-4 uppercase tracking-tighter flex items-center gap-3">
              <span className="md:hidden text-glacia-green font-mono text-xs">3.</span> Service Limitations
            </h2>
            <p className="text-slate-400">
              Our services are provided "as-is." While we strive for 99.9% uptime for our hotel and e-commerce deployments, Glacia Labs is not liable for indirect losses resulting from temporary service interruptions or third-party API failures.
            </p>
          </div>

          <div className="relative pl-0 md:pl-8">
            <span className="hidden md:block absolute left-0 top-1 text-[10px] font-mono text-glacia-green/40">04</span>
            <h2 className="text-white font-bold text-lg md:text-xl mb-4 uppercase tracking-tighter flex items-center gap-3">
              <span className="md:hidden text-glacia-green font-mono text-xs">4.</span> Governing Law
            </h2>
            <p className="text-slate-400">
              These terms are governed by the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts in Rawalpindi/Islamabad.
            </p>
          </div>

        </section>

        {/* Professional Footer Stamp */}
        <div className="mt-20 py-8 border-t border-white/5 flex flex-col items-center opacity-40">
           <div className="h-1 w-1 bg-glacia-green rounded-full animate-pulse mb-4" />
           <p className="text-[10px] font-mono tracking-[0.5em] uppercase">End of Document</p>
        </div>
      </div>
    </main>
  );
}