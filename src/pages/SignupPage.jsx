import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', company: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agentType, setAgentType] = useState('client'); // 'client' | 'agent'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1400);
  };

  const plans = [
    { id: 'client', label: 'Client', icon: 'business', desc: 'Deploy AI agents for your business' },
    { id: 'agent', label: 'AI Agent Partner', icon: 'support_agent', desc: 'Build and list agents on the platform' },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Ambient glows */}
      <div className="fixed top-[-15%] right-[-10%] w-[50%] h-[60%] rounded-full bg-secondary atmospheric-glow" />
      <div className="fixed bottom-[-15%] left-[-10%] w-[45%] h-[55%] rounded-full bg-primary atmospheric-glow" />

      <div className="w-full max-w-lg relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block text-3xl font-black tracking-tighter text-[#00F0FF] italic hover:opacity-80 transition-opacity">
            shiftToAI
          </Link>
          <p className="text-on-surface-variant text-sm mt-2 tracking-widest uppercase font-mono">
            Join the Neural Network
          </p>
        </div>

        {/* Card */}
        <div className="glass-panel rounded-3xl border border-outline-variant/15 p-8 shadow-[0_40px_80px_rgba(172,137,255,0.08)]">
          <h1 className="text-2xl font-black tracking-tight text-on-surface mb-1">Request Access</h1>
          <p className="text-on-surface-variant text-sm mb-8">Start your AI transformation journey today.</p>

          {/* Account Type Selector */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {plans.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setAgentType(p.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  agentType === p.id
                    ? 'border-primary/60 bg-primary/10 shadow-[0_0_20px_rgba(143,245,255,0.15)]'
                    : 'border-outline-variant/20 bg-surface-variant/10 hover:bg-surface-variant/20'
                }`}
              >
                <span className={`material-symbols-outlined text-2xl mb-2 block ${agentType === p.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {p.icon}
                </span>
                <div className={`text-sm font-bold ${agentType === p.id ? 'text-primary' : 'text-on-surface'}`}>{p.label}</div>
                <div className="text-[11px] text-on-surface-variant/60 mt-0.5">{p.desc}</div>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">person</span>
                <input
                  name="name" type="text" required value={form.name} onChange={handleChange}
                  placeholder="Jane Smith"
                  className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl pl-10 pr-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(143,245,255,0.12)] transition-all text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Work Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">mail</span>
                <input
                  name="email" type="email" required value={form.email} onChange={handleChange}
                  placeholder="jane@company.com"
                  className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl pl-10 pr-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(143,245,255,0.12)] transition-all text-sm"
                />
              </div>
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                {agentType === 'agent' ? 'Agency / Studio Name' : 'Company Name'}
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">
                  {agentType === 'agent' ? 'hub' : 'domain'}
                </span>
                <input
                  name="company" type="text" required value={form.company} onChange={handleChange}
                  placeholder={agentType === 'agent' ? 'VoiceForge Studios' : 'Acme Corp'}
                  className="w-full bg-surface-variant/30 border border-outline-variant/20 rounded-xl pl-10 pr-4 py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_0_3px_rgba(143,245,255,0.12)] transition-all text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60 text-[20px]">lock</span>
                <input
                  name="password" type={showPassword ? 'text' : 'password'} required value={form.password} onChange={handleChange}
                  placeholder="Min. 8 characters"
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
            </div>

            {/* Terms */}
            <p className="text-[11px] text-on-surface-variant/50 leading-relaxed">
              By creating an account, you agree to our{' '}
              <button type="button" className="text-primary/70 hover:text-primary underline transition-colors">Terms of Service</button>{' '}
              and{' '}
              <button type="button" className="text-primary/70 hover:text-primary underline transition-colors">Privacy Policy</button>.
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(143,245,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                  Creating Account...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                  Launch My Workspace
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-on-surface-variant/60 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:text-primary/80 font-bold transition-colors">
              Sign in →
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
