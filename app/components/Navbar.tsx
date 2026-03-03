"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Our Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-glacia-dark/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity italic uppercase">
            GLACIA<span className="text-glacia-green">LABS</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-glacia-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="bg-glacia-green/10 text-glacia-green border border-glacia-green/20 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-glacia-green hover:text-glacia-dark transition-all">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-glacia-green transition-colors z-[110]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-glacia-dark z-[105] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-glacia-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={toggleMenu}
              className="mt-4 flex items-center gap-3 bg-glacia-green text-glacia-dark px-8 py-4 rounded-2xl text-xl font-black uppercase italic"
            >
              Get in Touch <ArrowRight />
            </Link>
            
            {/* Mobile Footer Info */}
            <div className="absolute bottom-12 text-center">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">HQ • Rawalpindi, PK</p>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Background Dimmer for when menu is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] md:hidden" onClick={toggleMenu} />
      )}
    </>
  );
}