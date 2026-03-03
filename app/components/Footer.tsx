import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Mail, 
  ArrowUpRight ,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#030712] pt-16 pb-12 px-6 overflow-hidden">
      {/* Background Accent - A soft green glow to finish the page */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-glacia-green/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Grid: 1 col on Mobile, 2 on Tablet (sm), 4 on Desktop (md) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section: Spans 2 columns on desktop */}
         <div className="sm:col-span-2">
  <Link href="/" className="text-2xl font-black tracking-tighter mb-6 block uppercase italic">
    GLACIA<span className="text-glacia-green">LABS</span>
  </Link>
  
  <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8 font-medium">
    We build fast, modern websites and apps. 
    Helping businesses in Pakistan and beyond reach their full digital potential.
  </p>
  
  <div className="flex flex-wrap gap-4">
    {[
      { 
        Icon: Instagram, 
        href: "https://www.instagram.com/glacialabs?igsh=cXE1aGpvNXl4eXJ6", 
        label: "Instagram" 
      },
      { 
        Icon: Facebook, 
        href: "https://www.instagram.com/glacialabs?igsh=cXE1aGpvNXl4eXJ6", // Update this link
        label: "Facebook" 
      },
      { 
        Icon: MessageCircle, 
        href: "https://wa.me/923413975290", // Replace with your WhatsApp number
        label: "WhatsApp" 
      },
    ].map((social, i) => (
      <a 
        key={i} 
        href={social.href} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={social.label}
        className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-slate-400 hover:text-glacia-green hover:border-glacia-green/30 transition-all hover:-translate-y-1 shadow-lg"
      >
        <social.Icon size={20} />
      </a>
    ))}
  </div>
</div>

          {/* Navigation Links */}
          <div className="mt-2 sm:mt-0">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-glacia-green mb-6 font-bold">Explore</h4>
            <ul className="space-y-4">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="group text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                    {item} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Location */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-glacia-green mb-6 font-bold">Connect</h4>
            <p className="text-sm text-slate-500 mb-4 font-mono tracking-tight italic">Based in Pakistan</p>
            
            <a 
              href="mailto:glacialabs@gmail.com" 
              className="group relative z-10 inline-flex items-center gap-3 text-sm text-white font-bold hover:text-glacia-green transition-all"
            >
              <div className="p-2.5 rounded-lg bg-glacia-green/10 text-glacia-green group-hover:bg-glacia-green group-hover:text-glacia-dark transition-all duration-300">
                <Mail size={18} />
              </div>
              <span className="truncate max-w-[200px] sm:max-w-none italic">glacialabs@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Stacked on mobile, row on desktop */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 leading-relaxed">
              © {currentYear} Glacia Connection • SECP Registered
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
              Powered by <a href="https://glacialabs.com" target="_blank" className="text-glacia-green hover:brightness-125 transition-all">Glacia Labs</a>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/privacy" className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}