export default function Footer() {
  return (
    <footer className="w-full border-t border-[#45484f]/15 bg-[#0b0e14]">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 w-full gap-6 max-w-screen-2xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-lg font-bold text-[#00F0FF] italic">shiftToAI</div>
          <p className="font-['Manrope'] text-xs tracking-wide text-on-surface-variant/50">© 2024 shiftToAI. Built for the New Voice Frontier.</p>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          <a className="font-['Manrope'] text-xs tracking-wide text-on-surface-variant/50 hover:text-[#00F0FF] transition-colors" href="#">Privacy Policy</a>
          <a className="font-['Manrope'] text-xs tracking-wide text-on-surface-variant/50 hover:text-[#00F0FF] transition-colors" href="#">Terms of Service</a>
          <a className="font-['Manrope'] text-xs tracking-wide text-on-surface-variant/50 hover:text-[#00F0FF] transition-colors" href="#">Security Compliance</a>
          <a className="font-['Manrope'] text-xs tracking-wide text-on-surface-variant/50 hover:text-[#00F0FF] transition-colors" href="#">Hinglish Support</a>
        </div>
        <div className="flex gap-4">
          <a className="p-2 rounded-full border border-outline-variant/10 text-on-surface-variant hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined text-sm">language</span>
          </a>
          <a className="p-2 rounded-full border border-outline-variant/10 text-on-surface-variant hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined text-sm">share</span>
          </a>
        </div>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </footer>
  );
}
