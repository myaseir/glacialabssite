import { Code2, Layout, Zap, Search } from 'lucide-react';

const SERVICES = [
  { icon: <Code2 className="text-glacia-green" />, title: "Web Apps", desc: "Custom Next.js solutions built for speed and scale." },
  { icon: <Layout className="text-glacia-green" />, title: "UI/UX Design", desc: "Modern, high-conversion interfaces with a greenish touch." },
  { icon: <Zap className="text-glacia-green" />, title: "Performance", desc: "Optimizing Core Web Vitals to reach 100/100 scores." },
  { icon: <Search className="text-glacia-green" />, title: "SEO Strategy", desc: "Ensuring your digital presence is found by the right audience." },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Optional Heading Section for better context on mobile */}
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-glacia-green mb-4 font-bold">Expertise</h2>
        <p className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter">Technical <span className="text-glacia-green">Solutions</span></p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {SERVICES.map((s, i) => (
          <div 
            key={i} 
            className="p-6 md:p-8 rounded-[2rem] md:rounded-3xl border border-white/5 bg-white/[0.02] hover:border-glacia-green/30 transition-all group flex flex-col items-center text-center md:items-start md:text-left"
          >
            {/* Icon container with haptic hover effect */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-glacia-green/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-glacia-green/20 transition-all duration-500">
              <div className="group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all">
                {s.icon}
              </div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-black italic uppercase tracking-tight mb-3">
              {s.title}
            </h3>
            
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}