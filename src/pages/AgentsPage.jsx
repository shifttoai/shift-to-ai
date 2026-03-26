import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function AgentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <TopNavBar />
      <div className="fixed top-[20%] right-[-10%] w-[40%] h-[40%] bg-primary atmospheric-glow rounded-full pointer-events-none opacity-50" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[35%] h-[40%] bg-secondary atmospheric-glow rounded-full pointer-events-none opacity-50" />
      
      <main className="flex-1 relative z-10 pt-32 pb-20 px-8 max-w-[1400px] mx-auto w-full flex flex-col h-full min-h-screen">
        <div className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-on-surface mb-4">Agent Ecosystem</h1>
            <p className="text-on-surface-variant text-lg">Monitor, calibrate, and deploy your neural workforce across the sonic ether.</p>
          </div>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(143,245,255,0.2)] flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Initialize New Agent
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
          {/* Left Column - Agent List */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              { name: 'Sarah', role: 'Inbound Sales', avatarColor: 'bg-primary/20 text-primary', active: true },
              { name: 'Marcus', role: 'Customer Support', avatarColor: 'bg-secondary/20 text-secondary', active: true },
              { name: 'Elena', role: 'Outbound Leads', avatarColor: 'bg-[#ffb4ab]/20 text-[#ffb4ab]', active: false },
            ].map((agent, i) => (
              <button key={i} className={`text-left glass-panel p-5 rounded-3xl border transition-all ${
                i === 0 ? 'border-primary shadow-[0_0_30px_rgba(143,245,255,0.15)] bg-surface-variant/30 scale-105 ml-2 mr-[-8px] relative z-20' : 'border-outline-variant/15 hover:bg-surface-variant/20 hover:border-outline-variant/30'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${agent.avatarColor} flex items-center justify-center font-black text-xl`}>
                      {agent.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-on-surface text-lg">{agent.name}</div>
                      <div className="text-xs text-on-surface-variant uppercase tracking-widest">{agent.role}</div>
                    </div>
                  </div>
                  {agent.active && <span className="w-2.5 h-2.5 rounded-full bg-[#00ffab] animate-pulse" title="Online" />}
                </div>
                {i === 0 && (
                  <div className="mt-4 pt-4 border-t border-outline-variant/20 flex justify-between gap-4">
                    <div>
                      <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Success Rate</div>
                      <div className="text-primary font-mono font-bold">92.4%</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Avg Duration</div>
                      <div className="text-on-surface font-mono font-bold">4m 12s</div>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right Column - Agent Editor/Stream */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Live Stream */}
            <div className="glass-panel p-6 rounded-3xl border border-primary/30 relative overflow-hidden bg-primary/5">
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] animate-pulse">radio_button_checked</span>
                  Active Stream: Sarah
                </h3>
                <span className="text-xs font-mono text-on-surface-variant">00:04:12</span>
              </div>
              <div className="pl-4 border-l border-outline-variant/20 space-y-3">
                <p className="text-on-surface-variant text-sm"><span className="text-on-surface font-bold text-xs uppercase tracking-widest mr-2">User:</span>"I want to upgrade my tier today."</p>
                <p className="text-primary text-sm font-medium"><span className="font-bold text-xs uppercase tracking-widest mr-2">Sarah:</span>"I can certainly help you upgrade your enterprise tier today. Let's look at your options..."</p>
              </div>
            </div>

            {/* Neural Configuration / Script Editor */}
            <div className="glass-panel p-0 rounded-3xl border border-outline-variant/15 flex-1 flex flex-col overflow-hidden">
              <div className="p-4 border-b border-outline-variant/20 bg-surface-variant/30 flex justify-between items-center">
                <h2 className="font-bold text-sm tracking-widest text-on-surface flex items-center gap-2 uppercase">
                  <span className="material-symbols-outlined">code</span>
                  Neural Configuration: Sarah
                </h2>
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded bg-secondary/20 text-secondary text-[10px] font-bold font-mono border border-secondary/20">v4.2.1</span>
                </div>
              </div>
              <div className="p-6 bg-[#0a0e16] flex-1 font-mono text-sm overflow-x-auto">
                <pre className="text-on-surface-variant/80">
                  <code className="block">
{`{
  "intent": "upgrade_tier",
  "conditions": {
    "usage_limit": "> 90%",
    "current_plan": "essential"
  },
  "response": [
    "I notice you're reaching your peak. Would you like to explore our Enterprise Sonic layer?",
    "You're doing great! To keep momentum, shall we bump your API limits?"
  ],
  "fallback": "handoff_to_human"
}`}
                  </code>
                </pre>
              </div>
              <div className="p-4 border-t border-outline-variant/20 bg-surface-variant/30 flex justify-end gap-3">
                <button className="px-6 py-2 rounded-full border border-outline-variant/30 text-on-surface font-bold text-xs hover:bg-surface-variant transition-colors uppercase tracking-wider">Test Sandbox</button>
                <button className="px-6 py-2 rounded-full bg-primary text-on-primary-container font-black text-xs hover:bg-primary/90 transition-colors uppercase tracking-wider">Deploy Config</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
