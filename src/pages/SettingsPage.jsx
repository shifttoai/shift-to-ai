import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <TopNavBar />
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary atmospheric-glow rounded-full pointer-events-none" />
      
      <main className="flex-1 relative z-10 pt-32 pb-20 px-8 max-w-4xl mx-auto w-full">
        <div className="mb-10">
          <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-on-surface mb-2">Account Settings</h1>
          <p className="text-on-surface-variant text-lg">Manage your sonic ether presence, security protocols, and enterprise integrations from one central hub.</p>
        </div>

        <div className="space-y-8">
          {/* Plan Info */}
          <div className="glass-panel p-6 rounded-3xl border border-primary/30 bg-primary/5 flex items-center justify-between">
            <div>
              <div className="text-primary font-bold tracking-widest uppercase text-xs mb-1">Pro Plan Active</div>
              <div className="text-on-surface">You're currently using the Enterprise Tier with unlimited API access.</div>
            </div>
            <button className="px-6 py-2 rounded-full border border-primary/40 text-primary font-bold text-sm hover:bg-primary/10 transition-colors uppercase tracking-wider">
              Upgrade
            </button>
          </div>

          {/* Personal Info */}
          <div className="glass-panel rounded-3xl border border-outline-variant/15 p-8">
            <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3 border-b border-outline-variant/10 pb-4">
              <span className="material-symbols-outlined text-primary">person</span>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                <input type="text" defaultValue="Alex Johnson" className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary/60 transition-colors text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                <input type="email" defaultValue="alex@enterprise.com" className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface focus:outline-none focus:border-primary/60 transition-colors text-sm" />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2.5 rounded-full bg-surface-variant hover:bg-surface-variant/80 text-on-surface font-bold text-sm transition-colors tracking-wide">Save Changes</button>
            </div>
          </div>

          {/* Security */}
          <div className="glass-panel rounded-3xl border border-outline-variant/15 p-8">
            <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3 border-b border-outline-variant/10 pb-4">
              <span className="material-symbols-outlined text-secondary">lock</span>
              Security Protocols
            </h2>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-on-surface text-lg">Two-Factor Authentication</div>
                <div className="text-sm text-on-surface-variant">Add an extra layer of security to your account.</div>
              </div>
              <button className="px-6 py-2 rounded-full border border-outline-variant/30 text-on-surface font-bold text-sm hover:bg-surface-variant transition-colors uppercase tracking-wider">
                Enable 2FA
              </button>
            </div>
          </div>

          {/* APIs */}
          <div className="glass-panel rounded-3xl border border-outline-variant/15 p-8">
            <h2 className="text-xl font-black tracking-tight mb-6 flex items-center gap-3 border-b border-outline-variant/10 pb-4">
              <span className="material-symbols-outlined text-primary">api</span>
              Integrations & Developers
            </h2>
            <div className="space-y-6">
              <div>
                <div className="font-bold text-on-surface mb-2">Primary API Key</div>
                <div className="flex items-center gap-3">
                  <input type="password" value="sk_live_1234567890abcdef" readOnly className="flex-1 bg-surface-variant/30 border border-outline-variant/20 rounded-xl px-4 py-3 text-on-surface font-mono text-sm" />
                  <button className="p-3 rounded-xl bg-surface-variant hover:bg-surface-variant/80 text-on-surface transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">content_copy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
