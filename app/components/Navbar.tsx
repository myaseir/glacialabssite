"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        scrolled || isOpen ? 'py-4 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-stone-200 shadow-sm' : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO SECTION - Refined Typography */}
          <Link href="/" className="group flex items-center gap-3 outline-none">
            <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-6">
              <Image
                src="/logo.png"
                alt="Glacia Labs Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-sm md:text-xl font-bold tracking-[0.2em] text-stone-800 uppercase">
              Glacia<span className="text-emerald-700 font-light">Labs</span>
            </span>
          </Link>
          
          {/* DESKTOP MENU - Softened Colors & Hover States */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500 hover:text-stone-900 transition-colors group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <Link 
              href="/contact" 
              className="bg-emerald-700 text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-emerald-800 flex items-center gap-2 group"
            >
              Start a Project <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* MOBILE TOGGLE - Matched to Light Theme */}
          <button 
            onClick={toggleMenu}
            className="md:hidden relative flex flex-col gap-1.5 items-end z-[130]"
            aria-label="Toggle Menu"
          >
            <span className={`h-[1.5px] bg-stone-800 transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-[7.5px]' : 'w-7'}`} />
            <span className={`h-[1.5px] bg-emerald-700 transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-[1.5px] bg-stone-800 transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-[7.5px]' : 'w-5'}`} />
          </button>
        </div>
      </nav>

      {/* SMART SIDE DRAWER OVERLAY - Softened Shadow */}
      <div 
        className={`fixed inset-0 bg-stone-900/20 backdrop-blur-sm z-[105] md:hidden transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* MOBILE DRAWER - Bright, Minimalist Canvas */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[320px] bg-[#FDFBF7] z-[110] md:hidden transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border-l border-stone-200 shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col justify-between px-8 py-24">
          <div className="space-y-8">
            <p className="text-emerald-700 font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">
              Navigation
            </p>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="block text-2xl font-light text-stone-800 hover:text-emerald-700 transition-colors lowercase tracking-tight"
                >
                  {link.name}.
                </Link>
              ))}
            </div>
            
            <Link 
              href="/contact"
              onClick={toggleMenu}
              className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-all pt-6 border-t border-stone-200 w-full group"
            >
              let's talk <ArrowUpRight size={16} className="text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
          
          <div className="border-l-2 border-emerald-700/30 pl-4">
            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em]">Based in PK</p>
            <p className="text-[10px] text-stone-500 font-mono mt-1">Ready for global shifts</p>
          </div>
        </div>
      </div>
    </>
  );
}