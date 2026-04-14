"use client";

import { useState } from 'react';
import { ArrowUpRight, ExternalLink } from "lucide-react";

// Mock data - replace with your actual 20+ websites

import { BRAND_ARCHIVE } from "../constants";
export default function BrandArchivePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  
  // Extract unique categories for the filter tabs
  const categories = ["All", ...Array.from(new Set(BRAND_ARCHIVE.map(item => item.category)))];

  // Filter logic
  const filteredProjects = activeFilter === "All" 
    ? BRAND_ARCHIVE 
    : BRAND_ARCHIVE.filter(project => project.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-32 md:pt-44 pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <header className="mb-20 md:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200 bg-white shadow-sm text-emerald-700 text-[10px] font-semibold tracking-widest uppercase mb-8">
                Brand Architecture
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[1.1] text-stone-800">
                The Brand <br className="hidden md:block"/>
                <span className="font-serif italic text-emerald-700">Archive.</span>
              </h1>
              
              <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                A comprehensive index of our bespoke digital storefronts, corporate identities, and aesthetic deployments across multiple industries.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-3 lg:pb-4 lg:max-w-md lg:justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 border ${
                    activeFilter === cat 
                    ? "bg-stone-800 text-white border-stone-800 shadow-md" 
                    : "bg-white text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* The Directory List */}
        <section className="bg-white border border-stone-200 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden">
          
          {/* Table Header (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-6 px-8 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 border-b border-stone-100 bg-[#FDFBF7]/50">
            <div className="col-span-1">Year</div>
            <div className="col-span-5">Client / Brand</div>
            <div className="col-span-3">Deployment Type</div>
            <div className="col-span-2">Industry</div>
            <div className="col-span-1 text-right">Link</div>
          </div>

          {/* Directory Items */}
          <div className="flex flex-col">
            {filteredProjects.map((project, index) => (
              <a 
                key={index} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 py-6 md:py-8 px-6 md:px-8 border-b border-stone-100 last:border-0 hover:bg-[#FDFBF7] transition-colors duration-300 items-start md:items-center relative"
              >
                {/* Mobile Top Row */}
                <div className="md:hidden flex justify-between items-center w-full mb-3">
                  <span className="text-[10px] font-mono text-stone-400">{project.year}</span>
                  <div className="p-2 rounded-full bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                    <ExternalLink size={14} />
                  </div>
                </div>

                {/* Desktop Year */}
                <div className="hidden md:block col-span-1 text-xs font-mono text-stone-400 group-hover:text-emerald-700 transition-colors">
                  {project.year}
                </div>
                
                {/* Project Name */}
                <div className="col-span-5 text-2xl md:text-3xl font-light text-stone-800 group-hover:text-emerald-800 transition-all duration-300 md:group-hover:translate-x-2 w-full">
                  {project.name}
                </div>
                
                {/* Meta Tags for Mobile */}
                <div className="md:hidden flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-[10px] text-stone-500 uppercase tracking-widest">{project.type}</span>
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-[10px] text-stone-500 uppercase tracking-widest">{project.category}</span>
                </div>

                {/* Desktop Meta Data */}
                <div className="hidden md:block col-span-3 text-sm text-stone-500 font-light group-hover:text-stone-900 transition-colors">
                  {project.type}
                </div>
                
                <div className="hidden md:block col-span-2 text-sm text-stone-500 font-light group-hover:text-stone-900 transition-colors">
                  {project.category}
                </div>
                
                {/* Desktop Link Icon */}
                <div className="hidden md:flex col-span-1 justify-end items-center">
                  <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center bg-white group-hover:border-emerald-700/30 group-hover:bg-emerald-50 transition-all duration-300 group-hover:scale-105 shadow-sm group-hover:shadow-md">
                    <ArrowUpRight size={20} strokeWidth={1.5} className="text-stone-400 group-hover:text-emerald-700 transition-colors" />
                  </div>
                </div>
              </a>
            ))}
            
            {/* Empty State (if filter yields no results) */}
            {filteredProjects.length === 0 && (
              <div className="py-20 text-center text-stone-500 font-light">
                No projects found in this category.
              </div>
            )}
          </div>
        </section>

      </div>
    </main>
  );
}