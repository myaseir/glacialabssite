import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-stone-600 pt-32 md:pt-48 pb-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation: Minimalist Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-emerald-700 text-[10px] md:text-xs font-mono mb-8 md:mb-12 hover:gap-3 transition-all uppercase tracking-widest font-bold"
        >
          <ArrowLeft size={14} strokeWidth={2.5} /> Back to Home
        </Link>

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
          <div className="w-fit p-4 rounded-2xl bg-white border border-stone-200 text-emerald-700 shadow-sm">
            <ShieldCheck size={32} strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-stone-800 leading-tight">
            Privacy <span className="font-serif italic text-emerald-700 pr-1">Policy</span>
          </h1>
        </div>

        {/* Metadata Bar */}
        <p className="text-[10px] font-mono text-stone-400 mb-12 border-b border-stone-200 pb-6 tracking-[0.1em] uppercase">
          Last Updated: April 14, 2026 • Glacia Architecture V2.0
        </p>

        {/* Policy Content */}
        <section className="space-y-12 md:space-y-16 text-stone-500 leading-relaxed font-light">
          
          <div className="group">
            <h2 className="text-stone-800 font-medium text-lg md:text-xl mb-4 tracking-tight flex items-center gap-3 transition-colors group-hover:text-emerald-800">
              <span className="text-emerald-700 font-mono text-xs opacity-50">01.</span> Data Collection
            </h2>
            <p className="pl-8 border-l border-stone-200 group-hover:border-emerald-700 transition-colors duration-500">
              Glacia Labs collects minimal data necessary to provide our bespoke digital services. This includes voluntarily provided information via contact forms (Name, Email) and technical metadata (IP address, browser type) utilized strictly for performance optimization and security integrity.
            </p>
          </div>

          <div className="group">
            <h2 className="text-stone-800 font-medium text-lg md:text-xl mb-4 tracking-tight flex items-center gap-3 transition-colors group-hover:text-emerald-800">
              <span className="text-emerald-700 font-mono text-xs opacity-50">02.</span> Use of Information
            </h2>
            <p className="pl-8 border-l border-stone-200 group-hover:border-emerald-700 transition-colors duration-500">
              Your information is used exclusively to maintain our boutique digital infrastructure and provide enterprise-grade software solutions. We do not sell, trade, or rent user data to third parties. All data processing complies with the SECP corporate guidelines of Pakistan.
            </p>
          </div>

          <div className="group">
            <h2 className="text-stone-800 font-medium text-lg md:text-xl mb-4 tracking-tight flex items-center gap-3 transition-colors group-hover:text-emerald-800">
              <span className="text-emerald-700 font-mono text-xs opacity-50">03.</span> Security Architecture
            </h2>
            <p className="pl-8 border-l border-stone-200 group-hover:border-emerald-700 transition-colors duration-500">
              As a technical engineering division, we implement industry-standard encryption and FastAPI-secured backends to protect your information. While we strive for 100% security, we encourage users to maintain robust personal security practices for all digital transmissions.
            </p>
          </div>

          {/* Contact Box: Refined Alabaster Surface */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-stone-200 text-center sm:text-left shadow-sm">
            <p className="text-xs md:text-sm text-stone-500 font-light leading-relaxed">
              For specific inquiries regarding your data governance or SECP compliance, please contact our administrative desk: 
              <a href="mailto:glacialabs@gmail.com" className="text-emerald-700 ml-1 font-semibold hover:text-emerald-900 block sm:inline mt-3 sm:mt-0 transition-colors">
                glacialabs@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}