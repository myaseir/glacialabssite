"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Our Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* MAIN NAVIGATION */}
      <nav className={`fixed top-0 w-full z-[120] transition-all duration-500 ${
        scrolled || isOpen ? 'py-4 bg-black/60 backdrop-blur-sm border-b border-white/10' : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO SECTION */}
         <Link href="/" className="group flex items-center gap-4 outline-none">
  <div className="relative w-30 h-30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
    <Image
      src="/logo.png" // Path to your logo in the /public folder
      alt="Glacia Labs Logo"
      fill
      className="object-contain"
      priority // Ensures the logo loads instantly
    />
  </div>
  <span className="text-xl font-bold tracking-[0.2em] text-white transition-colors uppercase">
    Glacia<span className="text-glacia-green font-light">Labs</span>
  </span>
</Link>
          
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-glacia-green transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <Link 
              href="/contact" 
              className="group relative overflow-hidden bg-white text-black px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project <ArrowUpRight size={14} />
              </span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white z-[130]"
            aria-label="Toggle Menu"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-[8px]' : 'w-8'}`} />
              <span className={`h-[2px] bg-glacia-green transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-5'}`} />
              <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-[8px]' : 'w-6'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE OVERLAY */}
      <div 
        className={`fixed inset-0 bg-[#080808] z-[110] md:hidden transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? 'clip-path-open opacity-100' : 'clip-path-closed opacity-0 pointer-events-none'
        }`}
        style={{
          clipPath: isOpen ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)'
        }}
      >
        <div className="h-full flex flex-col justify-center px-10">
          <div className="space-y-6">
            <p className="text-glacia-green font-mono text-xs tracking-widest uppercase mb-4 opacity-50">Navigation</p>
            {navLinks.map((link, i) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="block text-5xl font-bold text-white hover:text-glacia-green transition-colors lowercase tracking-tighter"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}.
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={toggleMenu}
              className="inline-flex items-center gap-4 text-2xl font-light text-slate-400 hover:text-white transition-all pt-8"
            >
              Let's talk <ArrowUpRight size={28} className="text-glacia-green" />
            </Link>
          </div>
          
          <div className="absolute bottom-12 left-10 border-l border-white/10 pl-6">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Based in PK</p>
            <p className="text-[10px] text-slate-600 font-mono mt-1">Available for global projects</p>
          </div>
        </div>
      </div>
    </>
  );
}