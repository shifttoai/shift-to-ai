import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileDrawer from './ProfileDrawer';

export default function TopNavBar() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl shadow-[0_40px_80px_rgba(172,137,255,0.06)]">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <div
            className="text-2xl font-black tracking-tighter text-[#00F0FF] italic cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            shiftToAI
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="font-['Space_Grotesk'] tracking-tight leading-none text-sm font-bold uppercase text-[#00F0FF] border-b-2 border-[#00F0FF] pb-1 hover:scale-105 transition-all" href="#">Home</a>
            <a className="font-['Space_Grotesk'] tracking-tight leading-none text-sm font-bold uppercase text-on-surface-variant/70 hover:text-[#8ff5ff] hover:scale-105 transition-all" href="#dashboard-sneak-peek">Dashboard</a>
            <a className="font-['Space_Grotesk'] tracking-tight leading-none text-sm font-bold uppercase text-on-surface-variant/70 hover:text-[#8ff5ff] hover:scale-105 transition-all" href="#services">Services</a>
            <a className="font-['Space_Grotesk'] tracking-tight leading-none text-sm font-bold uppercase text-on-surface-variant/70 hover:text-[#8ff5ff] hover:scale-105 transition-all" href="#demo">Demo</a>
            <a className="font-['Space_Grotesk'] tracking-tight leading-none text-sm font-bold uppercase text-on-surface-variant/70 hover:text-[#8ff5ff] hover:scale-105 transition-all" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">dark_mode</span>

            {/* Profile Icon — opens right-side drawer */}
            <button
              id="profile-icon-btn"
              onClick={() => setDrawerOpen(true)}
              title="Open profile panel"
              className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors bg-transparent border-none p-0 leading-none"
              style={{ fontFamily: 'Material Symbols Outlined', fontSize: '24px' }}
            >
              account_circle
            </button>

            {/* Login Button */}
            <button
              id="login-btn"
              onClick={() => navigate('/login')}
              className="hidden lg:block px-6 py-2 rounded-full border border-outline-variant/20 font-bold text-sm uppercase tracking-wider hover:bg-surface-variant transition-all hover:border-primary/40 hover:text-primary active:scale-95"
            >
              Login
            </button>

            {/* Sign Up Button */}
            <button
              id="signup-btn"
              onClick={() => navigate('/signup')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-bold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(143,245,255,0.3)] hover:scale-105 active:scale-95 transition-all"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Profile Drawer */}
      <ProfileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
