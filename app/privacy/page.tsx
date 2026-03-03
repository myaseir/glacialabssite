import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#030712] text-slate-300 pt-24 md:pt-40 pb-20 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button: Larger tap target for mobile */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-glacia-green text-[10px] md:text-xs font-mono mb-8 md:mb-12 hover:gap-3 transition-all uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Header Section: Flex-col on small mobile, row on tablet+ */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 md:mb-10">
          <div className="w-fit p-3 rounded-2xl bg-glacia-green/10 text-glacia-green shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic leading-tight">
            Privacy <span className="text-glacia-green">Policy</span>
          </h1>
        </div>

        {/* Metadata Bar */}
        <p className="text-[10px] md:text-xs font-mono text-slate-500 mb-10 md:mb-12 border-b border-white/5 pb-6 tracking-wide">
          LAST UPDATED: MARCH 03, 2026 • GLACIA DEPLOYMENT V1.0
        </p>

        {/* Policy Content */}
        <section className="space-y-10 md:space-y-16 text-sm md:text-base leading-relaxed">
          <div className="group">
            <h2 className="text-white font-bold text-base md:text-xl mb-3 md:mb-4 uppercase tracking-tighter flex items-center gap-3">
              <span className="text-glacia-green font-mono text-xs">01.</span> Data Collection
            </h2>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
              Glacia Labs collects minimal data necessary to provide our digital services. This includes voluntarily provided information via contact forms (Name, Email) and technical metadata (IP address, browser type) used for security and performance optimization.
            </p>
          </div>

          <div className="group">
            <h2 className="text-white font-bold text-base md:text-xl mb-3 md:mb-4 uppercase tracking-tighter flex items-center gap-3">
              <span className="text-glacia-green font-mono text-xs">02.</span> Use of Information
            </h2>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
              Your data is used exclusively to maintain our eSports platforms and provide corporate digital solutions. We do not sell, trade, or rent user information to third parties. All data processing complies with the relevant digital privacy standards of Pakistan.
            </p>
          </div>

          <div className="group">
            <h2 className="text-white font-bold text-base md:text-xl mb-3 md:mb-4 uppercase tracking-tighter flex items-center gap-3">
              <span className="text-glacia-green font-mono text-xs">03.</span> Security Architecture
            </h2>
            <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
              As a technology division, we implement industry-standard encryption and FastAPI-secured backends to protect your information. However, no digital transmission is 100% secure; we encourage users to maintain robust personal security practices.
            </p>
          </div>

          {/* Contact Box: Full width and centered on mobile */}
          <div className="p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 italic text-center sm:text-left shadow-inner">
            <p className="text-xs md:text-sm text-slate-400">
              For inquiries regarding your data under the SECP corporate guidelines, please contact 
              <a href="mailto:glacialabs@gmail.com" className="text-glacia-green ml-1 font-bold hover:underline block sm:inline mt-2 sm:mt-0">
                glacialabs@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}