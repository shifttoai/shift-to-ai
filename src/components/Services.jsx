export default function Services() {
  return (
    <section className="px-8 py-24 max-w-screen-2xl mx-auto" id="services">
      <div className="mb-16">
        <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">Master the shiftToAI Engine</h2>
        <p className="text-on-surface-variant text-lg">Four dimensions of automated excellence for your business.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
        {/* Card 1: 24/7 Support */}
        <div className="md:col-span-7 bg-surface-container rounded-lg p-10 flex flex-col justify-between group hover:bg-surface-container-high transition-all relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
            <span className="material-symbols-outlined text-9xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>all_inclusive</span>
          </div>
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Availability</span>
            <h3 className="text-3xl font-headline font-bold mt-4 mb-6">24/7 Support: Infinite Reach</h3>
            <p className="text-on-surface-variant leading-relaxed max-w-md">Your customers never wait. shiftToAI agents handle thousands of simultaneous calls at 3 AM with the same warmth and precision as high noon.</p>
          </div>
          <div className="flex gap-4 mt-8">
            <span className="px-4 py-2 rounded-full bg-surface-container-highest text-primary text-xs font-bold uppercase">Zero Latency</span>
            <span className="px-4 py-2 rounded-full bg-surface-container-highest text-primary text-xs font-bold uppercase">Infinite Scale</span>
          </div>
        </div>
        
        {/* Card 2: Multilingual */}
        <div className="md:col-span-5 bg-gradient-to-br from-secondary/10 to-transparent border border-outline-variant/10 rounded-lg p-10 flex flex-col justify-end group hover:border-secondary/40 transition-all">
          <div className="mb-auto">
            <span className="material-symbols-outlined text-5xl text-secondary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>translate</span>
          </div>
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-xs">Language Matrix</span>
            <h3 className="text-3xl font-headline font-bold mt-4 mb-4">Multilingual Mastery</h3>
            <p className="text-on-surface-variant leading-relaxed">Full support for all Indian regional dialects + fluent Hinglish. shiftToAI speaks the language of your people, natively.</p>
          </div>
        </div>
        
        {/* Card 3: Lead Qualification */}
        <div className="md:col-span-4 glass-panel border border-outline-variant/10 rounded-lg p-10 flex flex-col group hover:scale-[1.02] transition-all">
          <span className="material-symbols-outlined text-4xl text-tertiary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>filter_list</span>
          <h3 className="text-2xl font-headline font-bold mb-4">Lead Qualification</h3>
          <p className="text-on-surface-variant mb-8 flex-grow">Instant sorting of high-value prospects. shiftToAI bots qualify leads in real-time based on your specific custom criteria.</p>
          <div className="flex items-center text-tertiary font-bold text-sm uppercase gap-2">
              View Logic <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>
        
        {/* Card 4: Workflow Automation */}
        <div className="md:col-span-8 bg-surface-container-low rounded-lg p-1 flex relative group overflow-hidden border border-outline-variant/10">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <span className="text-primary-dim font-bold tracking-widest uppercase text-xs">Precision</span>
            <h3 className="text-3xl font-headline font-bold mt-4 mb-4">Workflow Automation</h3>
            <p className="text-on-surface-variant max-w-sm">From CRM logging to automated follow-up scheduling. shiftToAI voice agents are integrated into your entire ecosystem.</p>
          </div>
          <div className="flex-1 hidden lg:block bg-surface-container-high m-2 rounded-lg relative">
            <img alt="Automation Visualization" className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-40 group-hover:scale-110 transition-transform duration-700" data-alt="Sophisticated digital dashboard with multiple data streams, nodes connecting via fiber optic lines in a sleek dark theme" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCikkgUN036cXHtcdimL2oQHHtnLKUCeqTrnYMT-nNtWWqPqVL3W1yhjaHNTZlLwDg-qFl1zH_WQz26_ABYoH9VAXKrQogQMIKBnf3zjAZwYZMH9ms6ezkco06rBTu3bzxa_lZ0TAk6dUzSHAAshTT2FtBngWqe_sOggVMmzpwo5BY8P4vDyjZTFLdCQceV6wGK1vGkBApRiUIbMiuJlpsDmqfuShwd2vokRZcrFrwQZaHFmq6Od5VdiZAhW0Foax15y6aqRUTfRYQ7"/>
          </div>
        </div>
      </div>
    </section>
  );
}
