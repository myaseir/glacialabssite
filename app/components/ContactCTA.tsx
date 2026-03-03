export default function ContactCTA() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-b from-glacia-green/10 to-transparent border border-white/5 md:border-glacia-green/20 text-center relative overflow-hidden">
        
        {/* Responsive Background Glow: Scaled down for mobile */}
        <div className="absolute -top-12 -right-12 md:-top-24 md:-right-24 w-32 h-32 md:w-64 md:h-64 bg-glacia-green/20 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 md:mb-10 leading-[0.9] md:leading-tight uppercase italic tracking-tighter">
            HAVE A PROJECT <br className="hidden sm:block" /> 
            <span className="text-glacia-green drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              IN MIND?
            </span>
          </h2>
          
          <p className="text-slate-400 text-sm md:text-lg mb-8 md:mb-12 max-w-md mx-auto leading-relaxed px-4">
            Let’s engineer your vision into a high-performance digital artifact.
          </p>
          
          <a 
            href="mailto:glacialabs@gmail.com" 
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 md:px-14 py-4 md:py-6 bg-glacia-green text-glacia-dark font-black rounded-full hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(16,185,129,0.2)] transition-all uppercase tracking-widest text-sm md:text-base"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}