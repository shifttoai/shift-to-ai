export default function Contact() {
  return (
    <section className="px-8 py-32 max-w-4xl mx-auto" id="contact">
      <div className="text-center mb-16">
        <h2 className="font-headline text-5xl font-black mb-6">Scale Your Voice with shiftToAI</h2>
        <p className="text-on-surface-variant text-lg">Partner with the world&apos;s most advanced AI voice agency. Let&apos;s build your custom agent.</p>
      </div>
      <div className="glass-panel p-10 md:p-16 rounded-lg border border-outline-variant/10">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
            <input className="w-full bg-surface-container-low border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="John Doe" type="text" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
            <input className="w-full bg-surface-container-low border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="john@company.com" type="email" />
          </div>
          <div className="md:col-span-2 space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Project Scope</label>
            <textarea className="w-full bg-surface-container-low border-outline-variant/20 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Tell us about your language requirements and call volume..." rows="4"></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="button" className="w-full py-5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-black text-lg uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-xl">
              Initialize Consultation
            </button>
          </div>
        </form>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center gap-2"><span className="material-symbols-outlined">security</span> <span className="font-bold text-sm tracking-widest uppercase">GDPR Compliant</span></div>
        <div className="flex items-center gap-2"><span className="material-symbols-outlined">verified_user</span> <span className="font-bold text-sm tracking-widest uppercase">SOC2 Type II</span></div>
        <div className="flex items-center gap-2"><span className="material-symbols-outlined">language</span> <span className="font-bold text-sm tracking-widest uppercase">Global Edge Nodes</span></div>
      </div>
    </section>
  );
}
