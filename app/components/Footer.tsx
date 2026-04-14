import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Mail, 
  ArrowUpRight,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-stone-200 bg-[#FDFBF7] pt-20 pb-12 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* Grid: 1 col on Mobile, 2 on Tablet, 4 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section: Spans 2 columns on desktop */}
          <div className="sm:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-2 mb-6 outline-none">
              <span className="text-2xl font-bold tracking-[0.2em] text-stone-800 uppercase">
                Glacia<span className="text-emerald-700 font-light">Labs</span>
              </span>
            </Link>
            
            <p className="text-stone-500 text-sm max-w-sm leading-relaxed mb-8 font-light">
              We build fast, modern websites and applications. 
              Helping businesses scale their digital infrastructure with high-performance, bespoke architecture.
            </p>
            
            {/* Social Icons - Tactile, Minimalist Buttons */}
            <div className="flex flex-wrap gap-4">
              {[
                { 
                  Icon: Instagram, 
                  href: "https://www.instagram.com/glacialabs?igsh=cXE1aGpvNXl4eXJ6", 
                  label: "Instagram" 
                },
                { 
                  Icon: Facebook, 
                  href: "https://www.instagram.com/glacialabs?igsh=cXE1aGpvNXl4eXJ6", 
                  label: "Facebook" 
                },
                { 
                  Icon: MessageCircle, 
                  href: "https://wa.me/923413975290", 
                  label: "WhatsApp" 
                },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full bg-white border border-stone-200 text-stone-400 hover:text-emerald-700 hover:border-emerald-700/30 transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgb(16,185,129,0.08)]"
                >
                  <social.Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-2 sm:mt-0">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-6 font-semibold">
              Explore
            </h4>
            <ul className="space-y-4">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="group text-sm font-light text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1 w-fit"
                  >
                    {item} 
                    <ArrowUpRight 
                      size={12} 
                      className="opacity-0 group-hover:opacity-100 text-emerald-700 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" 
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Location */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 mb-6 font-semibold">
              Connect
            </h4>
            <p className="text-sm text-stone-500 mb-6 font-mono tracking-tight">
              Based in Rawalpindi, PK.
            </p>
            
            <a 
              href="mailto:glacialabs@gmail.com" 
              className="group inline-flex items-center gap-3 text-sm text-stone-700 hover:text-emerald-700 transition-all duration-300"
            >
              <div className="p-2.5 rounded-full bg-white border border-stone-200 text-stone-400 group-hover:border-emerald-700/30 group-hover:text-emerald-700 transition-all duration-300 shadow-sm">
                <Mail size={16} strokeWidth={1.5} />
              </div>
              <span className="font-light tracking-wide">glacialabs@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400 leading-relaxed">
              © {currentYear} Glacia Labs • SECP Registered
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
              Engineered by <a href="https://glacialabs.com" target="_blank" rel="noreferrer" className="text-emerald-700 hover:text-emerald-800 transition-colors">Glacia Labs</a>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/privacy" className="text-[9px] font-medium uppercase tracking-[0.2em] text-stone-400 hover:text-stone-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[9px] font-medium uppercase tracking-[0.2em] text-stone-400 hover:text-stone-800 transition-colors">
              Terms of Use
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
}