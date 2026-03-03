import BentoGrid from "../components/BentoGrid";
import { PROJECTS } from "../constants";
import { ExternalLink } from "lucide-react";

export default function WorkPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 rounded-full bg-glacia-green/10 text-glacia-green text-xs font-mono mb-4">
            OUR ARCHIVE
          </div>
          <h1 className="text-5xl md:text-7xl font-black italic mb-6 tracking-tighter">
            SELECTED <span className="text-glacia-green">WORKS</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            From high-speed E-commerce to complex ERP systems and interactive games. 
            Explore how Glacia Labs delivers excellence across the stack.
          </p>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[ "Next.js", "FastAPI", "WordPress", "Shopify"].map((tab) => (
            <span key={tab} className="px-5 py-2 rounded-full border border-white/10 text-sm font-medium hover:border-glacia-green/50 cursor-pointer transition-colors whitespace-nowrap">
              {tab}
            </span>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <BentoGrid projects={PROJECTS} />
      
      {/* Visual Footer for the page */}
      <div className="mt-20 p-12 rounded-[3rem] bg-glacia-green/5 border border-glacia-green/10 text-center">
        <h3 className="text-2xl font-bold mb-4">Have a similar project in mind?</h3>
        <p className="text-slate-400 mb-8 italic text-sm">We specialize in FastAPI + Next.js integrations for high-scale apps.</p>
        <a href="/contact" className="text-glacia-green font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all">
          Let&apos;s talk about your build <ExternalLink size={18} />
        </a>
      </div>
    </main>
  );
}