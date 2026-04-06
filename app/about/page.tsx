import { Target, Cpu, Globe, Zap, Shield, Layout, Mail, Phone, CheckCircle2 } from 'lucide-react';

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
            <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8">
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

        {/* Right Side: CEO & Lead Card */}
      

      </div>
    </section>
  );
}