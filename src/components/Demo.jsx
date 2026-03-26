export default function Demo() {
  return (
    <section className="px-8 py-24 bg-surface-container-low relative overflow-hidden" id="demo">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="font-headline text-5xl font-bold tracking-tight mb-8">Experience <span className="gradient-text">shiftToAI</span></h2>
          <p className="text-on-surface-variant text-xl leading-relaxed mb-10">
              Interact with our flagship agent in real-time. Witness the future of Voice AI Calling with zero-latency response and perfect emotional intelligence.
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 glass-panel rounded-lg border border-primary/10">
              <span className="material-symbols-outlined text-primary p-3 bg-primary/10 rounded-full">record_voice_over</span>
              <div>
                <h4 className="font-bold text-lg mb-1">Human-Grade Prosody</h4>
                <p className="text-sm text-on-surface-variant">Intonations and pauses that make it impossible to tell it&apos;s an AI.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 glass-panel rounded-lg border border-secondary/10">
              <span className="material-symbols-outlined text-secondary p-3 bg-secondary/10 rounded-full">language</span>
              <div>
                <h4 className="font-bold text-lg mb-1">On-the-fly Translation</h4>
                <p className="text-sm text-on-surface-variant">Switch between Hindi, English, and Tamil mid-sentence without missing a beat.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Calling Interface UI */}
        <div className="flex-1 w-full max-w-lg bg-[#121620] rounded-[2.5rem] shadow-2xl border border-outline-variant/20 overflow-hidden flex flex-col h-[700px] relative calling-glow">
          {/* Background decorative shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 blur-[100px] rounded-full -z-0"></div>
          
          {/* App Header */}
          <div className="p-8 flex flex-col items-center z-10">
            <div className="w-full flex justify-between items-center mb-12">
              <span className="material-symbols-outlined text-on-surface-variant">expand_more</span>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">End-to-End Encrypted</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
            </div>
            
            <div className="relative mb-8">
              <div className="absolute inset-0 ring-animation bg-primary/20 rounded-full"></div>
              <div className="absolute inset-0 ring-animation bg-primary/10 rounded-full" style={{ animationDelay: "1s" }}></div>
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 relative z-10">
                <div className="w-full h-full rounded-full bg-[#121620] flex items-center justify-center overflow-hidden">
                  <img alt="AI Avatar" className="w-full h-full object-cover opacity-80" data-alt="Abstract portrait of a minimalist human bust made of glass and light particles on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_SDr_chNNPcjsVLaZBzHF0JTjuoTHw5XZAw_HBqfmZ6FAGJ4x4Ge2xLEJBE_hoq61caKGy3afPI5YvSONYeCC_WHKpbNiGuEmIfpPZgye7uLSB_2wdph79wyrQYns5NsRH2KZ1VL3bdRUiOGBEFDO8R0j9kl6ofYN8ES1qY-Ydpey8YpJLwiP590sqqKhmhBBwWAUIjQz6snOsAwdjv6Ov0kjWot8tKAsox3Iki0bSh5bt_GJhA2PpdB9Wlai__7LYUG-7aZkaR-O"/>
                </div>
              </div>
            </div>
            
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-2">shiftToAI Aurora</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">Active Call • 04:12</span>
            </div>
          </div>
          
          {/* Waveform Visualizer */}
          <div className="flex-grow flex items-center justify-center px-12 z-10">
            <div className="flex items-center gap-1.5 h-24 w-full justify-between">
              <div className="w-1.5 bg-primary/20 rounded-full h-8 animate-[bounce_1.2s_infinite]"></div>
              <div className="w-1.5 bg-primary/40 rounded-full h-12 animate-[bounce_1.8s_infinite]"></div>
              <div className="w-1.5 bg-primary/60 rounded-full h-16 animate-[bounce_1.1s_infinite]"></div>
              <div className="w-1.5 bg-primary rounded-full h-20 animate-[bounce_1.5s_infinite]"></div>
              <div className="w-1.5 bg-secondary rounded-full h-24 animate-[bounce_1.3s_infinite]"></div>
              <div className="w-1.5 bg-primary rounded-full h-20 animate-[bounce_1.6s_infinite]"></div>
              <div className="w-1.5 bg-primary/60 rounded-full h-16 animate-[bounce_1.2s_infinite]"></div>
              <div className="w-1.5 bg-primary/40 rounded-full h-12 animate-[bounce_1.9s_infinite]"></div>
              <div className="w-1.5 bg-primary/20 rounded-full h-8 animate-[bounce_1.4s_infinite]"></div>
            </div>
          </div>
          
          {/* Call Actions Bar */}
          <div className="p-12 pb-16 z-10">
            <div className="flex items-center justify-between">
              <button className="w-16 h-16 rounded-full bg-surface-variant/30 flex items-center justify-center hover:bg-surface-variant transition-colors group">
                <span className="material-symbols-outlined text-on-surface group-active:scale-90 transition-transform">volume_up</span>
              </button>
              <button className="w-16 h-16 rounded-full bg-surface-variant/30 flex items-center justify-center hover:bg-surface-variant transition-colors group">
                <span className="material-symbols-outlined text-on-surface group-active:scale-90 transition-transform">mic_off</span>
              </button>
              <button className="w-16 h-16 rounded-full bg-surface-variant/30 flex items-center justify-center hover:bg-surface-variant transition-colors group">
                <span className="material-symbols-outlined text-on-surface group-active:scale-90 transition-transform">videocam_off</span>
              </button>
              <button className="w-20 h-20 rounded-full bg-error flex items-center justify-center shadow-[0_10px_30px_rgba(255,113,108,0.3)] hover:scale-105 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-white text-3xl">call_end</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
