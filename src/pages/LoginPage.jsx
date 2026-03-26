import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth — replace with real logic
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden px-4">
      {/* Ambient glows */}
      <div className="fixed top-[-15%] left-[-10%] w-[50%] h-[60%] rounded-full bg-primary atmospheric-glow" />
      <div className="fixed bottom-[-15%] right-[-10%] w-[45%] h-[55%] rounded-full bg-secondary atmospheric-glow" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block text-3xl font-black tracking-tighter text-[#00F0FF] italic hover:opacity-80 transition-opacity">
            shiftToAI
          </Link>
          <p className="text-on-surface-variant text-sm mt-2 tracking-widest uppercase font-mono">
            System Node: 0x8F22-AUTH
          </p>
        </div>

        {/* Card */}
        <div className="glass-panel rounded-3xl border border-outline-variant/15 p-8 shadow-[0_40px_80px_rgba(143,245,255,0.08)]">
          <h1 className="text-2xl font-black tracking-tight text-on-surface mb-1">Enterprise Login</h1>
          <p className="text-on-surface-variant text-sm mb-8">Secure access to your neural workspace.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Email Address
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">
                  mail
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@enterprise.com"
                  className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl pl-10 pr-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(143,245,255,0.12)] transition-all text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Password
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">
                  lock
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl pl-10 pr-12 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(143,245,255,0.12)] transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
              <div className="flex justify-end">
                <button type="button" className="text-xs text-primary/70 hover:text-primary transition-colors">
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(143,245,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                  Authenticating...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">login</span>
                  Access Workspace
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-outline-variant/20" />
            <span className="text-xs text-on-surface-variant/50 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-outline-variant/20" />
          </div>

          {/* Google SSO */}
          <button className="w-full py-3 rounded-full border border-outline-variant/25 hover:bg-surface-variant/30 transition-all flex items-center justify-center gap-3 text-sm font-bold text-on-surface-variant hover:text-on-surface">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-xs text-on-surface-variant/60 mt-6">
            New to the platform?{' '}
            <Link to="/signup" className="text-primary hover:text-primary/80 font-bold transition-colors">
              Request Access →
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-xs text-on-surface-variant/50 hover:text-on-surface-variant transition-colors flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
