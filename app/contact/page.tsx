"use client";
import { useState } from "react";
import { Copy, Mail, MessageCircle, Check, MapPin, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const email = "glacialabs@gmail.com";
  // Consider standardizing the number format if possible, e.g., +92 341 3975290, 
  // but for the wa.me link, it must remain digits only.
  const whatsappNumber = "923413975290"; 
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-32 md:pt-48 pb-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Refined Availability Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200 bg-white shadow-sm text-stone-600 text-[10px] font-semibold tracking-widest uppercase mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          Accepting New Projects
        </div>
        
        {/* Editorial Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight leading-[1.1] text-stone-800">
          Let's initiate <br className="hidden md:block"/> 
          <span className="font-serif italic text-emerald-700">the build.</span>
        </h1>
        
        <p className="text-stone-500 mb-16 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4 font-light">
          Whether you require a custom enterprise application or a boutique digital storefront, our engineers are ready to architect your vision.
        </p>

        {/* Contact Matrix - Clean, Tactile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          
          {/* Main Action: Email */}
          <a 
            href={`mailto:${email}`} 
            className="group flex items-center justify-between p-8 md:p-10 bg-emerald-800 rounded-[2rem] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(4,120,87,0.15)] hover:-translate-y-1"
          >
            <div className="text-left z-10">
              <span className="block text-emerald-100/70 text-[10px] font-semibold uppercase tracking-widest mb-2">Send Brief</span>
              <span className="text-white text-2xl md:text-3xl font-light tracking-tight">Email Us</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all duration-300">
              <Mail size={24} className="text-white group-hover:text-emerald-800 transition-colors" strokeWidth={1.5} />
            </div>
          </a>

          {/* Main Action: WhatsApp */}
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-8 md:p-10 bg-white border border-stone-200 rounded-[2rem] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-emerald-700/30"
          >
            <div className="text-left">
              <span className="block text-stone-400 text-[10px] font-semibold uppercase tracking-widest mb-2">Instant Chat</span>
              <span className="text-stone-800 text-2xl md:text-3xl font-light tracking-tight group-hover:text-emerald-800 transition-colors">WhatsApp</span>
            </div>
            <div className="w-14 h-14 rounded-full border border-stone-100 bg-[#FDFBF7] flex items-center justify-center group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-all duration-300">
              <MessageCircle size={24} className="text-stone-400 group-hover:text-[#25D366] transition-colors" strokeWidth={1.5} />
            </div>
          </a>

          {/* Secondary Action: Copy Email Tool */}
          <button 
            onClick={copyEmail} 
            className="md:col-span-2 flex items-center justify-between p-6 bg-white border border-stone-200 rounded-[1.5rem] hover:bg-[#FDFBF7] transition-all duration-300 group shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full transition-colors duration-300 ${copied ? 'bg-emerald-100 text-emerald-700' : 'bg-stone-100 text-stone-500 group-hover:bg-white group-hover:text-emerald-700'}`}>
                {copied ? <Check size={18} strokeWidth={2} /> : <Copy size={18} strokeWidth={1.5} />}
              </div>
              <span className="text-sm md:text-base font-mono text-stone-600 group-hover:text-stone-900 transition-colors">
                {email}
              </span>
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${copied ? 'text-emerald-700' : 'text-stone-400 group-hover:text-emerald-700'}`}>
              {copied ? "Copied to Clipboard" : "Copy Address"}
            </span>
          </button>
        </div>

        {/* Minimalist Trust & Location Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 pt-12 border-t border-stone-200">
          
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-stone-100 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
              <MapPin size={20} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-1">Location</p>
              <p className="text-sm font-medium text-stone-800">Rawalpindi, Pakistan</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-stone-200" />

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-stone-100 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
              <ShieldCheck size={20} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-1">Registry</p>
              <p className="text-sm font-medium text-stone-800">SECP Certified Entity</p>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}