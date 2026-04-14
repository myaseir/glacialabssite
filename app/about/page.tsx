import { Target, Cpu, Globe, Zap, Shield, Layout, Mail, Phone, CheckCircle2, User } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Performance", value: "100%", icon: <Cpu size={16} /> },
    { label: "Architecture", value: "Bespoke", icon: <Globe size={16} /> },
    { label: "Support", value: "24/7", icon: <Target size={16} /> },
  ];

  const pillars = [
    {
      title: "Performance First",
      desc: "We engineer interfaces that load instantly, ensuring zero friction for your users.",
      icon: <Zap className="text-emerald-700" size={20} />
    },
    {
      title: "Bespoke UI/UX",
      desc: "Clean, professional layouts tailored to elevate your brand's unique digital footprint.",
      icon: <Layout className="text-emerald-700" size={20} />
    },
    {
      title: "Robust Security",
      desc: "Utilizing modern encryption and secure backend logic to safeguard your data.",
      icon: <Shield className="text-emerald-700" size={20} />
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FDFBF7] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-700 mb-8 font-bold flex items-center gap-3">
                <span className="w-10 h-[1px] bg-emerald-700/40"></span>
                The Studio
              </h2>
              
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-800 leading-[1.1] mb-10">
                We engineer <span className="font-serif italic text-emerald-700 pr-2">superior</span> 
                digital experiences.
              </h3>

              <div className="space-y-6 text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                <p>
                  Glacia Labs is a boutique software studio specializing in high-performance web architecture and bespoke digital products. 
                  We help businesses scale by bridging the gap between complex backend engineering and world-class design.
                </p>
                <p className="text-base md:text-lg opacity-90">
                  Whether developing a sophisticated SaaS portal or an artisanal brand storefront, 
                  we utilize modern tech stacks like Next.js and FastAPI to ensure your infrastructure 
                  is fast, secure, and infinitely scalable.
                </p>
              </div>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {pillars.map((pillar, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300">
                      {pillar.icon}
                    </div>
                    <h4 className="text-stone-800 font-semibold uppercase text-[10px] tracking-widest">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed font-light">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-stone-200">
              {stats.map((stat, i) => (
                <div key={i} className="group relative">
                  <div className="text-emerald-700 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-light tracking-tighter text-stone-800">{stat.value}</div>
                  <div className="text-[9px] font-mono uppercase tracking-widest text-stone-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: CEO Detail Card */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative p-10 rounded-[2.5rem] bg-white border border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group">
              
              {/* Subtle architectural background light */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-50 blur-[80px] rounded-full group-hover:bg-emerald-100 transition-colors duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-2xl bg-[#FDFBF7] border border-stone-100 flex items-center justify-center text-emerald-700 shadow-sm transition-transform duration-500 group-hover:rotate-3">
                    <User size={40} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-light text-stone-800 tracking-tight">Muhammad Yasir</h4>
                    <p className="text-emerald-700 font-mono text-[9px] uppercase tracking-widest mt-1">CEO & Backend Engineer</p>
                  </div>
                </div>

                <div className="space-y-6 pt-8 border-t border-stone-100">
                  <a href="mailto:muhd.yaseir@gmail.com" className="flex items-center gap-5 text-stone-500 hover:text-emerald-700 transition-colors group/link">
                    <div className="w-11 h-11 rounded-full bg-stone-50 flex items-center justify-center group-hover/link:bg-emerald-700 group-hover/link:text-white transition-all duration-300">
                      <Mail size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium tracking-wide">muhd.yaseir@gmail.com</span>
                  </a>

                  <a href="tel:+923169030178" className="flex items-center gap-5 text-stone-500 hover:text-emerald-700 transition-colors group/link">
                    <div className="w-11 h-11 rounded-full bg-stone-50 flex items-center justify-center group-hover/link:bg-emerald-700 group-hover/link:text-white transition-all duration-300">
                      <Phone size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium tracking-wide">+92 316 9030178</span>
                  </a>
                </div>

                <div className="mt-10 p-6 rounded-2xl bg-[#FDFBF7] border border-stone-100 flex items-start gap-4">
                  <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={18} strokeWidth={1.5} />
                  <p className="text-xs text-stone-400 leading-relaxed font-light">
                    Directing technical architecture and backend strategy to ensure every Glacia Labs deployment is industry-leading.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}