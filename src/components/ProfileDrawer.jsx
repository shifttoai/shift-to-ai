import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NAV_ITEMS = [
  { icon: 'dashboard', label: 'Dashboard', path: '/dashboard', badge: null },
  { icon: 'settings', label: 'Settings', path: '/settings', badge: null },
  { icon: 'payments', label: 'Billing', path: '/billing', badge: 'Pro' },
  { icon: 'support_agent', label: 'AI Agents', path: '/agents', badge: '3' },
];

export default function ProfileDrawer({ isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          isOpen ? 'bg-black/50 backdrop-blur-sm pointer-events-auto' : 'bg-transparent pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-[70] flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'rgba(22, 26, 33, 0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(143, 245, 255, 0.08)',
          boxShadow: '-20px 0 60px rgba(0,0,0,0.4), -1px 0 0 rgba(143,245,255,0.06)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-outline-variant/10">
          <span className="text-sm font-black italic tracking-tighter text-[#00F0FF]">shiftToAI</span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant/40 transition-colors text-on-surface-variant hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* User Profile Block */}
        <div className="px-5 py-6 border-b border-outline-variant/10">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-on-primary-container font-black text-lg flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #8ff5ff, #00eefc)' }}
            >
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-on-surface truncate">Alex Johnson</p>
              <p className="text-xs text-on-surface-variant/70 truncate">alex@enterprise.com</p>
              {/* Status badge */}
              <div className="mt-1.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Pro Plan</span>
              </div>
            </div>
          </div>

          {/* Workspace */}
          <div className="mt-4 p-3 rounded-xl bg-surface-variant/20 border border-outline-variant/10 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[18px]">domain</span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-on-surface truncate">Elite Property Group</p>
              <p className="text-[10px] text-on-surface-variant/60">Real Estate</p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant/40 text-[14px] ml-auto">unfold_more</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 px-2 mb-3">
            Navigation
          </p>
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-surface-variant/30 transition-all group"
                >
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:text-primary transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-sm font-bold text-on-surface-variant group-hover:text-on-surface transition-colors flex-1">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                      item.badge === 'Pro'
                        ? 'bg-secondary/20 text-secondary border border-secondary/20'
                        : 'bg-primary/15 text-primary border border-primary/15'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-outline-variant/10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40 px-2 mb-3">
              Support
            </p>
            <ul className="space-y-1">
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-surface-variant/30 transition-all group text-left">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant group-hover:text-primary transition-colors">help</span>
                  <span className="text-sm font-bold text-on-surface-variant group-hover:text-on-surface transition-colors">Help Center</span>
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-surface-variant/30 transition-all group text-left">
                  <span className="material-symbols-outlined text-[20px] text-on-surface-variant/60 group-hover:text-[#ff716c] transition-colors">logout</span>
                  <span className="text-sm font-bold text-on-surface-variant/60 group-hover:text-[#ff716c] transition-colors">Sign out</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-outline-variant/10">
          <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/10 text-center">
            <p className="text-xs font-bold text-on-surface mb-0.5">🚀 Scale your AI fleet</p>
            <p className="text-[10px] text-on-surface-variant/60 mb-2">Add more agents to your workspace</p>
            <button className="w-full py-1.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_15px_rgba(143,245,255,0.2)]">
              Upgrade Plan
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
