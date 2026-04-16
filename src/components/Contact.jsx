import { useEffect, useRef, useState } from 'react';

function useInView(ref, threshold = 0.1) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

const services = [
  'Manpower Solutions',
  'Heavy Equipment',
  'Horticulture Services',
  'Facility Management',
  'Multiple Services',
];

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 9999026401',
    href: 'tel:+919999026401',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'Labiquipspvt.ltd@gmail.com',
    href: 'mailto:Labiquipspvt.ltd@gmail.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'New Delhi, India',
    href: 'https://maps.google.com/?q=New+Delhi,+India',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Working Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM',
    href: null,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a short delay then show thank-you
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#070e24] grid-pattern" />
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[200px] opacity-8"
        style={{ background: 'radial-gradient(ellipse at center bottom, #d4a520, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line" />
            <span className="text-[#d4a520] text-xs font-bold tracking-[0.3em] uppercase">Get in Touch</span>
            <div className="section-line" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Ready to Build<br />
            <span className="gold-text">Something Great?</span>
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            Have a project in mind? Reach out for a free consultation and discover how Labiquip can support your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass-card rounded-sm p-8 flex flex-col gap-6 h-full">
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Contact Information</h3>
                <p className="text-white/40 text-sm">We're available to take on new projects and partnerships.</p>
              </div>

              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(212, 165, 32, 0.1)', color: '#d4a520' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] text-white/40 font-bold tracking-[0.15em] uppercase mb-0.5">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-white/80 text-sm hover:text-[#d4a520] transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white/80 text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-white/5 pt-6">
                <p className="text-white/30 text-xs leading-relaxed">
                  Labiquip Solutions Pvt. Ltd. · CIN: U74999DL2020PTC372…<br />
                  Registered in New Delhi, India
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass-card rounded-sm p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(212, 165, 32, 0.15)', border: '2px solid rgba(212,165,32,0.3)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d4a520" strokeWidth="2" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Thank You!</h3>
                    <p className="text-white/50 text-sm">Your message has been received. We'll get back to you within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', service: '', message: '' }); }}
                    className="btn-outline px-6 py-2.5 rounded-sm text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] text-[#d4a520] font-bold tracking-[0.2em] uppercase">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-sm text-sm text-white placeholder-white/25 outline-none focus:border-[#d4a520] transition-colors duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] text-[#d4a520] font-bold tracking-[0.2em] uppercase">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-sm text-sm text-white placeholder-white/25 outline-none focus:border-[#d4a520] transition-colors duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] text-[#d4a520] font-bold tracking-[0.2em] uppercase">Service Required</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm text-sm text-white outline-none focus:border-[#d4a520] transition-colors duration-200 appearance-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <option value="" style={{ background: '#0a1528' }}>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: '#0a1528' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] text-[#d4a520] font-bold tracking-[0.2em] uppercase">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 rounded-sm text-sm text-white placeholder-white/25 outline-none focus:border-[#d4a520] transition-colors duration-200 resize-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold px-8 py-4 rounded-sm text-sm w-full flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
