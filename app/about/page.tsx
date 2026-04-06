import { Target, Cpu, Globe, Zap, Shield, Layout, Mail, Phone, CheckCircle2, User } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Performance", value: "100%", icon: <Cpu size={16} /> },
    { label: "Uptime", value: "99.9%", icon: <Globe size={16} /> },
    { label: "Support", value: "24/7", icon: <Target size={16} /> },
  ];

  const pillars = [
    {
      title: "Fast Loading",
      desc: "We build websites that load instantly so your users don't have to wait.",
      icon: <Zap className="text-glacia-green" size={20} />
    },
    {
      title: "Modern Design",
      desc: "Clean, professional layouts that look great on any screen size.",
      icon: <Layout className="text-glacia-green" size={20} />
    },
    {
      title: "Secure Code",
      desc: "We use the latest security tools to keep your data safe and private.",
      icon: <Shield className="text-glacia-green" size={20} />
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-glacia-green mb-6 font-bold flex items-center gap-2">
              <span className="w-8 h-[1px] bg-glacia-green"></span>
              Who We Are
            </h2>
            <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8 text-white">
              We build <span className="text-glacia-green">better</span> <br /> 
              ways to work online.
            </h3>
            <div className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              <p>
                Glacia Labs is a software studio that helps businesses grow. 
                We focus on making fast, reliable websites and apps that are easy to use.
              </p>
              <p className="text-base md:text-lg opacity-80 font-light">
                Whether you need a simple shop or a complex system, we use the best 
                tools to get the job done right. Our goal is to make high-quality 
                tech accessible to everyone.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-3 mb-2">
                  {pillar.icon}
                  <h4 className="text-white font-bold uppercase text-[11px] tracking-widest">{pillar.title}</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/5">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-glacia-green/20 transition-colors">
                <div className="text-glacia-green mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black tracking-tighter text-white">{stat.value}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: CEO Detail Card */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 overflow-hidden group">
            {/* Background Accent Decor */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-glacia-green/10 blur-[100px] rounded-full group-hover:bg-glacia-green/20 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-glacia-green/20 flex items-center justify-center border border-glacia-green/30 text-glacia-green">
                  <User size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">Muhammad Yasir</h4>
                  <p className="text-glacia-green font-mono text-[10px] uppercase tracking-widest">CEO & Backend Engineer</p>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/5">
                <a href="mailto:muhd.yaseir@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group/link">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-glacia-green/10 group-hover/link:text-glacia-green transition-all">
                    <Mail size={18} />
                  </div>
                  <span className="text-sm font-medium">muhd.yaseir@gmail.com</span>
                </a>

                <a href="tel:+923169030178" className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group/link">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-glacia-green/10 group-hover/link:text-glacia-green transition-all">
                    <Phone size={18} />
                  </div>
                  <span className="text-sm font-medium">+92 316 9030178</span>
                </a>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-glacia-green/5 border border-glacia-green/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-glacia-green mt-1" size={16} />
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Leading the technical architecture and backend strategy for Glacia Labs projects.
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