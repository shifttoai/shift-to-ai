import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function BillingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <TopNavBar />
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary atmospheric-glow rounded-full pointer-events-none" />
      
      <main className="flex-1 relative z-10 pt-32 pb-20 px-8 max-w-5xl mx-auto w-full">
        <div className="mb-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-on-surface mb-4">Billing & Subscription</h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Manage your enterprise sonic resources, monitor real-time AI usage, and optimize your vocal output scale.</p>
        </div>

        {/* Usage Stats */}
        <div className="glass-panel rounded-3xl border border-outline-variant/15 p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black tracking-tight flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">data_usage</span>
              Voice Minutes Usage
            </h2>
            <div className="text-xs font-mono text-on-surface-variant bg-surface-variant/30 px-3 py-1 rounded-full">Resets in 12 days</div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-on-surface">Standard AI</span>
                <span className="text-primary font-mono">14,200m / 20k</span>
              </div>
              <div className="w-full bg-surface-variant/50 rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '71%' }} />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm font-bold mb-2">
                <span className="text-on-surface">High-Fidelity</span>
                <span className="text-secondary font-mono">3,120m / 5k</span>
              </div>
              <div className="w-full bg-surface-variant/50 rounded-full h-2 overflow-hidden">
                <div className="bg-secondary h-full rounded-full" style={{ width: '62%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Starter */}
          <div className="glass-panel p-8 rounded-3xl border border-outline-variant/10 flex flex-col">
            <div className="text-on-surface-variant font-bold tracking-widest uppercase text-xs mb-2">Starter</div>
            <div className="text-3xl font-black mb-6 text-on-surface">$49<span className="text-lg text-on-surface-variant/60 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-[18px] text-primary">check_circle</span> 2,000 Minutes</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-[18px] text-primary">check_circle</span> 5 Voice Profiles</li>
            </ul>
            <button className="w-full py-3 rounded-full border border-outline-variant/30 font-bold hover:bg-surface-variant/30 transition-all text-sm uppercase tracking-wider">Downgrade</button>
          </div>

          {/* Growth - Active */}
          <div className="glass-panel p-8 rounded-3xl border border-primary/50 relative flex flex-col scale-105 z-10 shadow-[0_0_40px_rgba(143,245,255,0.1)] bg-surface-variant/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              Current Plan
            </div>
            <div className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Growth Tier</div>
            <div className="text-3xl font-black mb-1 text-on-surface">$299<span className="text-lg text-on-surface-variant/60 font-medium">/mo</span></div>
            <div className="text-xs text-on-surface-variant font-mono mb-6">Billed Annually ($3,588/yr)</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm font-bold text-on-surface"><span className="material-symbols-outlined text-[18px] text-primary">check_circle</span> 20,000 Voice Minutes</li>
              <li className="flex items-center gap-3 text-sm font-bold text-on-surface"><span className="material-symbols-outlined text-[18px] text-primary">check_circle</span> 50 Voice Profiles</li>
              <li className="flex items-center gap-3 text-sm font-bold text-on-surface"><span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span> Neural Voice Cloning</li>
              <li className="flex items-center gap-3 text-sm font-bold text-on-surface"><span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span> API Integration Access</li>
            </ul>
            <button className="w-full py-3 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all text-sm uppercase tracking-wider">Manage Plan</button>
          </div>

          {/* Enterprise */}
          <div className="glass-panel p-8 rounded-3xl border border-outline-variant/10 flex flex-col">
            <div className="text-on-surface-variant font-bold tracking-widest uppercase text-xs mb-2">Enterprise</div>
            <div className="text-3xl font-black mb-6 text-on-surface">Custom</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-[18px] text-primary">check_circle</span> Unlimited Minutes</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-[18px] text-primary">check_circle</span> Dedicated GPU Cluster</li>
              <li className="flex items-center gap-3 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-[18px] text-primary">check_circle</span> Custom Voice Engineering</li>
            </ul>
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(143,245,255,0.2)]">Contact Sales</button>
          </div>
        </div>

        {/* Invoices */}
        <div className="glass-panel rounded-3xl border border-outline-variant/15 p-8">
          <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3 border-b border-outline-variant/10 pb-4">
            <span className="material-symbols-outlined text-on-surface-variant">receipt_long</span>
            Invoice History
          </h2>
          <div className="space-y-3">
            {[
              { id: 'INV-2024-03', date: 'Mar 1, 2024', amount: '$299.00', status: 'Paid' },
              { id: 'INV-2024-02', date: 'Feb 1, 2024', amount: '$299.00', status: 'Paid' },
              { id: 'INV-2024-01', date: 'Jan 1, 2024', amount: '$299.00', status: 'Paid' },
            ].map((inv) => (
              <div key={inv.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-surface-variant/20 transition-colors border border-transparent hover:border-outline-variant/10">
                <div className="flex gap-4 items-center">
                  <span className="material-symbols-outlined text-outline-variant text-[20px]">description</span>
                  <div>
                    <div className="font-bold text-on-surface text-sm">{inv.date}</div>
                    <div className="text-xs text-on-surface-variant font-mono">{inv.id}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="font-mono font-bold text-sm text-on-surface">{inv.amount}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-[#00ffab] bg-[#00ffab]/10 px-2 py-1 rounded-md">{inv.status}</div>
                  <button className="text-primary hover:underline text-xs font-bold uppercase tracking-widest">PDF</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
