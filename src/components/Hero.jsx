export default function Hero() {
  return (
    <section className="relative px-8 py-20 lg:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/20 border border-secondary/20 mb-8">
        <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
        <span className="text-secondary text-xs font-bold tracking-widest uppercase">The Future of Enterprise Voice</span>
      </div>
      <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
          Exponential Growth with <span className="gradient-text">24/7 AI Voice</span> Agents
      </h1>
      <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          Break communication barriers with hyper-realistic AI agents from <span className="text-primary font-bold">shiftToAI</span>. Native support for all <span className="text-primary font-semibold">Indian languages, Hinglish,</span> and international markets. Scale your reach, not your headcount.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary-container font-black text-lg uppercase tracking-tight shadow-[0_15px_30px_rgba(0,238,252,0.2)] hover:scale-105 active:scale-95 transition-all">
            Get Started Now
        </button>
        <button className="w-full sm:w-auto px-10 py-5 rounded-full border border-outline-variant/30 font-bold text-lg uppercase tracking-tight flex items-center justify-center gap-3 hover:bg-surface-variant transition-all group">
          <span className="material-symbols-outlined group-hover:text-primary transition-colors">play_circle</span>
            Watch Demo
        </button>
      </div>
      {/* Hero Image/Visual */}
      <div className="mt-24 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <div className="glass-panel p-4 rounded-xl border border-outline-variant/10 shadow-2xl overflow-hidden">
          <img alt="Voice AI Dashboard Visual" className="w-full h-[400px] md:h-[600px] object-cover rounded-lg" data-alt="Futuristic glowing holographic interface displaying voice frequencies and abstract data nodes in a deep blue neon environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5_d1762EvoGeW_22hpJW7jgtXHtrIn8C-QX--yiWuLDU7PJmAFDa67eENa0Aix83rufHIqze6bNEfgLrs6Wu_U54ABM2uKxJsEbF50pDaoEZLb5HlaDGf5BLHwpWdaSQz8kdni_0hfCO4-Q1kNXr7XWnDPbhPvWdBP3gDYaMhJXt2m5pVTZLP-vV9w7zt-e0iYbWj_xELZjsiX8Mlv4H0YzL-YZyqlIYcGRggqImr0ToY7YpHPATPO_NHVe7aJHztmFIBXMt7Ll34"/>
        </div>
      </div>
    </section>
  );
}
