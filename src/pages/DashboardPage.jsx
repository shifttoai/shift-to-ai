import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Calls Handled', value: '12,482', trend: '+14% vs last week', icon: 'phone_in_talk' },
    { label: 'Voice Minutes Used', value: '45,210', trend: '85% of quota', icon: 'mic' },
    { label: 'Avg Resolution Rate', value: '94.8%', trend: '+2.1% improvement', icon: 'task_alt' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <TopNavBar />
      {/* Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary atmospheric-glow rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary atmospheric-glow rounded-full pointer-events-none" />

      <main className="flex-1 relative z-10 pt-32 pb-20 px-8 max-w-screen-2xl mx-auto w-full">
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-on-surface mb-2">Welcome back, Alex!</h1>
          <p className="text-on-surface-variant font-mono text-sm tracking-widest uppercase">System Status: Optimal | Node 0x8F22</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="glass-panel p-6 rounded-3xl border border-outline-variant/15 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary text-[28px]">{s.icon}</span>
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded-full">{s.trend}</span>
              </div>
              <div>
                <div className="text-on-surface-variant text-sm tracking-widest uppercase font-bold mb-1">{s.label}</div>
                <div className="text-4xl font-black tracking-tighter text-on-surface">{s.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Agents */}
          <div className="lg:col-span-2 glass-panel rounded-3xl border border-outline-variant/15 p-8">
            <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">support_agent</span>
              Active Agents Overview
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Sarah', role: 'Inbound Sales', calls: 142, status: 'Active' },
                { name: 'Marcus', role: 'Customer Support', calls: 384, status: 'Active' },
                { name: 'Elena', role: 'Outbound Leads', calls: 0, status: 'Training' },
              ].map((agent, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-surface-variant/20 border border-outline-variant/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black">
                      {agent.name[0]}
                    </div>
                    <div>
                      <div className="font-bold text-on-surface">{agent.name}</div>
                      <div className="text-xs text-on-surface-variant">{agent.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-on-surface-variant mb-1">Today's Calls</div>
                    <div className="font-mono font-bold">{agent.calls}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${agent.status === 'Active' ? 'bg-[#00ffab] animate-pulse' : 'bg-[#ffb4ab]'}`} />
                    <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{agent.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call Logs */}
          <div className="glass-panel rounded-3xl border border-outline-variant/15 p-8">
            <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">graphic_eq</span>
              Recent Call Logs
            </h2>
            <div className="space-y-4">
              {[
                { time: '10:42 AM', duration: '4m 12s', sentiment: 'Positive' },
                { time: '10:28 AM', duration: '1m 45s', sentiment: 'Neutral' },
                { time: '09:15 AM', duration: '12m 30s', sentiment: 'Positive' },
                { time: '08:44 AM', duration: '3m 05s', sentiment: 'Negative' },
              ].map((log, i) => (
                <div key={i} className="flex flex-col gap-2 p-3 rounded-xl hover:bg-surface-variant/20 transition-colors border-l-2 border-primary/40">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-mono text-on-surface-variant">{log.time}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-surface-variant text-on-surface">{log.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${
                      log.sentiment === 'Positive' ? 'text-[#00ffab]' : log.sentiment === 'Negative' ? 'text-[#ffb4ab]' : 'text-on-surface-variant'
                    }`}>
                      {log.sentiment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
