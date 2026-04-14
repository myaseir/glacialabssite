"use client";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-600 pt-32 md:pt-48 pb-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation: Refined Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-emerald-700 text-[10px] md:text-xs font-mono mb-8 md:mb-12 hover:gap-3 transition-all uppercase tracking-[0.2em] font-bold"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Home
        </Link>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
          <div className="w-fit p-4 rounded-2xl bg-white border border-stone-200 text-emerald-700 shadow-sm">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-stone-800 leading-tight">
            Terms of <span className="font-serif italic text-emerald-700 pr-1">Use</span>
          </h1>
        </div>

        {/* Corporate Status Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 border-b border-stone-200 pb-6">
          <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">
            Official Infrastructure Document • Glacia Labs
          </p>
          <span className="text-[10px] font-mono text-emerald-700/50 hidden md:block uppercase tracking-tighter">
            Ref: TOU-2026-GL-ARCH
          </span>
        </div>

        {/* Content Sections */}
        <section className="space-y-12 md:space-y-16 text-stone-500 leading-relaxed font-light">
          
          <div className="relative pl-0 md:pl-10 group">
            <span className="hidden md:block absolute left-0 top-1 text-[10px] font-mono text-emerald-700 opacity-30 group-hover:opacity-100 transition-opacity">01</span>
            <h2 className="text-stone-800 font-medium text-lg md:text-xl mb-4 tracking-tight flex items-center gap-3 transition-colors group-hover:text-emerald-800">
              <span className="md:hidden text-emerald-700 font-mono text-xs">1.</span> Service Governance
            </h2>
            <p className="pl-0 md:pl-2 border-l-0 md:border-l border-stone-100 group-hover:border-emerald-700 transition-colors duration-500">
              By accessing the digital services provided by Glacia Labs, you agree to be bound by these Terms of Use and all applicable laws and regulations in the Islamic Republic of Pakistan. Our services are tailored for professional use and compliance with regional digital standards.
            </p>
          </div>

          <div className="relative pl-0 md:pl-10 group">
            <span className="hidden md:block absolute left-0 top-1 text-[10px] font-mono text-emerald-700 opacity-30 group-hover:opacity-100 transition-opacity">02</span>
            <h2 className="text-stone-800 font-medium text-lg md:text-xl mb-4 tracking-tight flex items-center gap-3 transition-colors group-hover:text-emerald-800">
              <span className="md:hidden text-emerald-700 font-mono text-xs">2.</span> Intellectual Property
            </h2>
            <p className="pl-0 md:pl-2 border-l-0 md:border-l border-stone-100 group-hover:border-emerald-700 transition-colors duration-500">
              All specialized codebases, UI/UX designs, and brand assets—including the Glacia Labs mark—are the exclusive intellectual property of the studio. Unauthorized reproduction, "scraping," or reverse-engineering of our bespoke digital artifacts is strictly prohibited.
            </p>
          </div>

          <div className="relative pl-0 md:pl-10 group">
            <span className="hidden md:block absolute left-0 top-1 text-[10px] font-mono text-emerald-700 opacity-30 group-hover:opacity-100 transition-opacity">03</span>
            <h2 className="text-stone-800 font-medium text-lg md:text-xl mb-4 tracking-tight flex items-center gap-3 transition-colors group-hover:text-emerald-800">
              <span className="md:hidden text-emerald-700 font-mono text-xs">3.</span> Service Limitations
            </h2>
            <p className="pl-0 md:pl-2 border-l-0 md:border-l border-stone-100 group-hover:border-emerald-700 transition-colors duration-500">
              Our digital infrastructure is provided "as-is." While we engineer for 99.9% uptime across our hospitality and operational deployments, Glacia Labs is not liable for indirect losses resulting from temporary service interruptions or third-party cloud provider failures.
            </p>
          </div>

          <div className="relative pl-0 md:pl-10 group">
            <span className="hidden md:block absolute left-0 top-1 text-[10px] font-mono text-emerald-700 opacity-30 group-hover:opacity-100 transition-opacity">04</span>
            <h2 className="text-stone-800 font-medium text-lg md:text-xl mb-4 tracking-tight flex items-center gap-3 transition-colors group-hover:text-emerald-800">
              <span className="md:hidden text-emerald-700 font-mono text-xs">4.</span> Governing Jurisdiction
            </h2>
            <p className="pl-0 md:pl-2 border-l-0 md:border-l border-stone-100 group-hover:border-emerald-700 transition-colors duration-500">
              These terms are governed by the laws of Pakistan. Any disputes arising from the use of our services shall be subject to the exclusive jurisdiction of the courts in Rawalpindi/Islamabad.
            </p>
          </div>

        </section>

        {/* Professional Footer Stamp */}
        <div className="mt-28 py-10 border-t border-stone-200 flex flex-col items-center">
           <div className="h-1.5 w-1.5 bg-emerald-700 rounded-full animate-pulse-soft mb-4" />
           <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-stone-400">End of Infrastructure Document</p>
        </div>
      </div>
    </main>
  );
}