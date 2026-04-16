export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#04091a] border-t border-white/5">
      {/* Top gold line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, #d4a520, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #d4a520 0%, #f0c96a 100%)' }}
              >
                <span className="text-[#04091a] font-black text-lg">L</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight">Labiquip</div>
                <div className="text-[10px] text-[#d4a520] font-semibold tracking-[0.15em] uppercase">Solutions Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Delivering excellence in manpower, heavy equipment, horticulture, and facility management since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Our Clients', href: '#clients' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-white/40 text-sm hover:text-[#d4a520] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Our Services</h4>
            <div className="flex flex-col gap-3">
              {[
                'Manpower Solutions',
                'Heavy Equipment',
                'Horticulture Services',
                'Facility Management',
              ].map((s) => (
                <a
                  key={s}
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}
                  className="text-white/40 text-sm hover:text-[#d4a520] transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Labiquip Solutions Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            New Delhi, India · +91 9999026401
          </p>
        </div>
      </div>
    </footer>
  );
}
