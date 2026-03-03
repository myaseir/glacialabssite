"use client";
import { useState } from "react";
import { Copy, Mail, MessageCircle, Check, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const email = "glacialabs@gmail.com";
  const whatsappNumber = "923413975290";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#030712] pt-32 md:pt-48 pb-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Mobile-Friendly Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-glacia-green/5 border border-glacia-green/20 text-glacia-green text-[10px] font-mono font-bold mb-8 tracking-[0.2em] uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-glacia-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-glacia-green"></span>
          </span>
          Available for Projects
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 md:mb-10 tracking-tighter italic uppercase leading-[0.9]">
          Let's Start <br/> 
          <span className="text-glacia-green drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">The Thaw</span>
        </h1>
        
        <p className="text-slate-400 mb-12 text-base md:text-xl max-w-xl mx-auto leading-relaxed px-4">
          Whether it's a custom Web App or an E-commerce powerhouse, we're ready to engineer your vision.
        </p>

        {/* Contact Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          
          {/* Main Action: Email */}
          <a 
            href={`mailto:${email}`} 
            className="group relative flex items-center justify-between p-6 md:p-8 bg-glacia-green rounded-[2rem] overflow-hidden transition-transform active:scale-95 hover:brightness-110"
          >
            <div className="text-left z-10">
              <span className="block text-glacia-dark/60 text-[10px] font-black uppercase tracking-widest mb-1">Send Brief</span>
              <span className="text-glacia-dark text-2xl font-black italic uppercase">Email Us</span>
            </div>
            <Mail size={32} className="text-glacia-dark/20 group-hover:text-glacia-dark transition-colors" strokeWidth={3} />
          </a>

          {/* Main Action: WhatsApp */}
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between p-6 md:p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] transition-all active:scale-95 hover:border-[#25D366]/50"
          >
            <div className="text-left">
              <span className="block text-[#25D366] text-[10px] font-black uppercase tracking-widest mb-1">Instant Chat</span>
              <span className="text-white text-2xl font-black italic uppercase">WhatsApp</span>
            </div>
            <MessageCircle size={32} className="text-[#25D366] opacity-40 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
          </a>

          {/* Secondary Action: Copy Email (Full Width on Mobile) */}
          <button 
            onClick={copyEmail} 
            className="md:col-span-2 flex items-center justify-between p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg transition-colors ${copied ? 'bg-glacia-green text-glacia-dark' : 'bg-white/5 text-slate-400'}`}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </div>
              <span className="text-xs md:text-sm font-mono text-slate-400 group-hover:text-white transition-colors">
                {email}
              </span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:text-glacia-green transition-colors">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>
        </div>

        {/* Social / Location Footer for Mobile */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 border-t border-white/5 pt-12">
          <div className="text-center md:text-left">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-2">Location Hub</p>
            <p className="text-sm font-bold text-white uppercase italic">Pakistan</p>
          </div>
          <div className="h-px w-12 bg-white/10 hidden md:block" />
          <div className="text-center md:text-right">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500 mb-2">Registry</p>
            <p className="text-sm font-bold text-white uppercase italic">SECP Certified Entity</p>
          </div>
        </div>
      </div>
    </main>
  );
}