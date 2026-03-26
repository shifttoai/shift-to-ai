export default function DashboardPreview() {
  return (
    <section className="px-8 py-24 max-w-screen-2xl mx-auto" id="dashboard-sneak-peek">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Enterprise Command Center</span>
          <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tight">Full Visibility into <span className="gradient-text">AI Operations</span></h2>
        </div>
        <p className="text-on-surface-variant max-w-md">The same high-performance dashboard our enterprise clients use to manage their voice workforce in real-time.</p>
      </div>
      <div className="glass-panel p-1 rounded-3xl border border-outline-variant/10 shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden">
        <div className="bg-surface-container-lowest/80 rounded-[calc(2rem-4px)] p-6 md:p-10">
          {/* 1. Core Growth Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-surface-container-low border border-outline-variant/10 p-6 rounded-2xl hover:border-primary/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">call</span>
                <span className="text-xs font-bold text-tertiary">+12.4%</span>
              </div>
              <div className="text-on-surface-variant text-sm font-bold uppercase tracking-wider mb-1">Total Calls Handled</div>
              <div className="text-3xl font-headline font-black">12,482</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 p-6 rounded-2xl hover:border-primary/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-secondary bg-secondary/10 p-2 rounded-lg">timer</span>
                <span className="text-xs font-bold text-tertiary">+8.1%</span>
              </div>
              <div className="text-on-surface-variant text-sm font-bold uppercase tracking-wider mb-1">Voice Minutes Used</div>
              <div className="text-3xl font-headline font-black">42,906</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 p-6 rounded-2xl hover:border-primary/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-2 rounded-lg">verified</span>
                <span className="text-xs font-bold text-tertiary">+4.2%</span>
              </div>
              <div className="text-on-surface-variant text-sm font-bold uppercase tracking-wider mb-1">Success Rate (Bookings)</div>
              <div className="text-3xl font-headline font-black">28.5%</div>
            </div>
            <div className="bg-surface-container-low border border-outline-variant/10 p-6 rounded-2xl hover:border-primary/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary-fixed-dim bg-primary-fixed-dim/10 p-2 rounded-lg">avg_time</span>
                <span className="text-xs font-bold text-error">-0.5%</span>
              </div>
              <div className="text-on-surface-variant text-sm font-bold uppercase tracking-wider mb-1">Avg. Call Duration</div>
              <div className="text-3xl font-headline font-black">03:42</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* 2. Active Agents Section */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-headline font-bold">Active Agents</h3>
                <span className="text-xs font-bold text-primary uppercase bg-primary/10 px-2 py-1 rounded">3 Live</span>
              </div>
              
              {/* Agent Sarah */}
              <div className="bg-surface-container-low border border-outline-variant/10 p-5 rounded-2xl flex items-center gap-4 group hover:bg-surface-container transition-all">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
                    <span className="material-symbols-outlined text-3xl">face</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-tertiary border-2 border-surface-container-low rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-on-surface">Sarah</h4>
                  <p className="text-xs text-on-surface-variant font-medium">Customer Support • Inbound</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-on-surface">842</div>
                  <div className="text-[10px] uppercase font-bold text-on-surface-variant/60">Calls</div>
                </div>
              </div>
              
              {/* Agent Marcus */}
              <div className="bg-surface-container-low border border-outline-variant/10 p-5 rounded-2xl flex items-center gap-4 group hover:bg-surface-container transition-all">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary overflow-hidden">
                    <span className="material-symbols-outlined text-3xl">face_5</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-tertiary border-2 border-surface-container-low rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-on-surface">Marcus</h4>
                  <p className="text-xs text-on-surface-variant font-medium">Outbound Sales • Outbound</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-on-surface">406</div>
                  <div className="text-[10px] uppercase font-bold text-on-surface-variant/60">Calls</div>
                </div>
              </div>
              
              {/* Agent Elena */}
              <div className="bg-surface-container-low border border-outline-variant/10 p-5 rounded-2xl flex items-center gap-4 group hover:bg-surface-container transition-all">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-on-surface-variant/20 flex items-center justify-center text-on-surface-variant/60 overflow-hidden">
                    <span className="material-symbols-outlined text-3xl">face_4</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-orange-400 border-2 border-surface-container-low rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-on-surface">Elena</h4>
                  <p className="text-xs text-on-surface-variant font-medium">Appointment Setter • Outbound</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-on-surface-variant/50">0</div>
                  <div className="text-[10px] uppercase font-bold text-on-surface-variant/40">Training</div>
                </div>
              </div>
            </div>
            
            {/* 3. Recent Call Logs Table */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-headline font-bold">Recent AI Interactions</h3>
                {/* 4. Export CSV Button */}
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant/20 hover:bg-surface-container transition-all text-sm font-bold">
                  <span className="material-symbols-outlined text-sm">download</span>
                  Export CSV
                </button>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden flex-grow">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/10 bg-surface-container/50">
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-on-surface-variant">Contact</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-on-surface-variant">Agent</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-on-surface-variant">Duration</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-on-surface-variant">Outcome</th>
                      <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-black text-on-surface-variant">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr className="hover:bg-surface-container/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-sm">+1 (555) 012-9843</td>
                      <td className="px-6 py-4 text-sm">Sarah</td>
                      <td className="px-6 py-4 text-sm font-mono text-on-surface-variant">04:12</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-black uppercase">Booked</span>
                      </td>
                      <td className="px-6 py-4 flex gap-3">
                        <span className="material-symbols-outlined text-primary text-sm cursor-pointer hover:scale-110 transition-transform">play_circle</span>
                        <span className="material-symbols-outlined text-on-surface-variant text-sm cursor-pointer hover:scale-110 transition-transform">visibility</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-sm">Ankit Sharma</td>
                      <td className="px-6 py-4 text-sm">Marcus</td>
                      <td className="px-6 py-4 text-sm font-mono text-on-surface-variant">02:54</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase">In-Progress</span>
                      </td>
                      <td className="px-6 py-4 flex gap-3">
                        <span className="material-symbols-outlined text-primary text-sm cursor-pointer hover:scale-110 transition-transform">play_circle</span>
                        <span className="material-symbols-outlined text-on-surface-variant text-sm cursor-pointer hover:scale-110 transition-transform">visibility</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-sm">Priya V.</td>
                      <td className="px-6 py-4 text-sm">Sarah</td>
                      <td className="px-6 py-4 text-sm font-mono text-on-surface-variant">00:15</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-error/10 text-error text-[10px] font-black uppercase">No Answer</span>
                      </td>
                      <td className="px-6 py-4 flex gap-3">
                        <span className="material-symbols-outlined text-on-surface-variant/30 text-sm cursor-not-allowed">play_circle</span>
                        <span className="material-symbols-outlined text-on-surface-variant text-sm cursor-pointer hover:scale-110 transition-transform">visibility</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container/30 transition-colors">
                      <td className="px-6 py-4 font-bold text-sm">+91 98765 43210</td>
                      <td className="px-6 py-4 text-sm">Marcus</td>
                      <td className="px-6 py-4 text-sm font-mono text-on-surface-variant">08:22</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-black uppercase">Booked</span>
                      </td>
                      <td className="px-6 py-4 flex gap-3">
                        <span className="material-symbols-outlined text-primary text-sm cursor-pointer hover:scale-110 transition-transform">play_circle</span>
                        <span className="material-symbols-outlined text-on-surface-variant text-sm cursor-pointer hover:scale-110 transition-transform">visibility</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
