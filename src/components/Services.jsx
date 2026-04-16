import { useEffect, useRef, useState } from 'react';

const services = [
  {
    number: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Manpower Solutions',
    subtitle: 'Skilled & Unskilled Workforce',
    description:
      'Deployment of verified, trained personnel for diverse operational needs. From skilled technicians to support staff — reliable manpower on demand.',
    features: ['Skilled Technicians', 'Security Personnel', 'Support & Admin Staff', 'Rapid Deployment'],
  },
  {
    number: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Heavy Equipment',
    subtitle: 'Excavators, Bulldozers & JCBs',
    description:
      'Modern, well-maintained heavy machinery for construction, earthmoving, and infrastructure projects. Operated by certified professionals.',
    features: ['Excavators & JCBs', 'Bulldozers', 'Operator Included', 'On-site Support'],
  },
  {
    number: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Horticulture Services',
    subtitle: 'Landscaping & Garden Maintenance',
    description:
      'Professional landscaping, garden design, and ongoing maintenance for institutional campuses, government estates, and large facilities.',
    features: ['Landscape Design', 'Garden Maintenance', 'Plantation & Nursery', 'Lawn Care'],
  },
  {
    number: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Facility Management',
    subtitle: 'Housekeeping, Security & Maintenance',
    description:
      'Comprehensive facility management ensuring clean, safe, and well-maintained environments for critical institutional operations around the clock.',
    features: ['Housekeeping', 'Security Services', 'Preventive Maintenance', 'Waste Management'],
  },
];

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

export default function Services() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <section id="services" ref={sectionRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#04091a]" />

      {/* Decorative */}
      <div
        className="absolute left-0 top-0 w-px h-full opacity-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #d4a520 30%, #d4a520 70%, transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span className="text-[#d4a520] text-xs font-bold tracking-[0.3em] uppercase">What We Do</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Our Core<br />
              <span className="gold-text">Services.</span>
            </h2>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              Comprehensive solutions tailored for India's most demanding projects and prestigious institutions.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`service-card glass-card rounded-sm p-8 relative overflow-hidden group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Number watermark */}
              <div className="absolute -top-4 -right-2 text-[80px] font-black text-white/[0.03] select-none leading-none">
                {service.number}
              </div>

              {/* Gold accent on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#d4a520] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-sm mb-6"
                style={{ background: 'rgba(212, 165, 32, 0.1)', color: '#d4a520' }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <div className="text-[10px] text-[#d4a520] font-bold tracking-[0.2em] uppercase mb-2">
                {service.subtitle}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">{service.description}</p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-sm font-medium"
                    style={{
                      background: 'rgba(212, 165, 32, 0.08)',
                      color: 'rgba(230, 184, 74, 0.9)',
                      border: '1px solid rgba(212, 165, 32, 0.15)',
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
