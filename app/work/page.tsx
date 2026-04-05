"use client";
import { useState } from 'react';
import BentoGrid from "../components/BentoGrid";
import { PROJECTS } from "../constants";
import { ExternalLink, Sparkles, Droplets, Utensils } from "lucide-react";

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Next.js", "FastAPI", "E-Commerce", "Service-Based"];

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-glacia-green text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-glacia-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-glacia-green"></span>
            </span>
            Our Archive
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic mb-8 tracking-tighter leading-[0.9]">
            SELECTED <br />
            <span className="text-glacia-green not-italic">WORKS_</span>
          </h1>
          
          <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
            From high-performance <span className="text-white">Next.js</span> storefronts to artisan 
            service platforms. We build digital legacies, not just websites.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 md:pb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeTab === tab 
                ? "bg-glacia-green text-black border-glacia-green" 
                : "bg-transparent text-slate-500 border-white/10 hover:border-white/40"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-glacia-green/20 to-transparent blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
        <BentoGrid projects={PROJECTS} activeFilter={activeTab} />
      </div>
      
      {/* Visual CTA Footer */}
      <section className="mt-32 relative overflow-hidden rounded-[4rem] bg-[#0a0a0a] border border-white/5 p-12 md:p-24 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-glacia-green/10 blur-[120px]" />
        
        <div className="relative z-10">
          <h3 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-6">
            READY TO <span className="text-glacia-green">SCALE?</span>
          </h3>
          <p className="text-slate-400 max-w-lg mx-auto mb-12 text-lg font-light">
            Whether it's a high-scale ERP or a boutique luxury brand, 
            we have the stack to bring your vision to life.
          </p>
          
          <a 
            href="/contact" 
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all"
          >
            Start a Project <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}