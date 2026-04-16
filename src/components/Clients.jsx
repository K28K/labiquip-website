import { useEffect, useRef, useState } from 'react';

const clients = [
  {
    name: 'Indian Army',
    logo: '/indian-army.png',
    description: 'Manpower & Equipment Support',
    tag: 'Defence',
  },
  {
    name: 'Indian Navy',
    logo: '/indian-navy.png',
    description: 'Facility & Maintenance Services',
    tag: 'Defence',
  },
  {
    name: 'Indian Railways',
    logo: '/indian-railways.png',
    description: 'Horticulture & Manpower',
    tag: 'Infrastructure',
  },
  {
    name: 'Rashtrapati Bhavan',
    logo: '/rashtrapati-bhavan.png',
    description: 'Estate & Horticulture Management',
    tag: 'Government',
  },
];

function useInView(ref, threshold = 0.15) {
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

export default function Clients() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <section id="clients" ref={sectionRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#070e24] grid-pattern" />

      {/* Decorative radial */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] opacity-10"
        style={{ background: 'radial-gradient(ellipse at center top, #d4a520, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-line" />
            <span className="text-[#d4a520] text-xs font-bold tracking-[0.3em] uppercase">Our Clients</span>
            <div className="section-line" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Trusted by India's<br />
            <span className="gold-text">Finest Institutions.</span>
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto leading-relaxed">
            Proudly serving the nation's most prestigious organizations with unwavering commitment to quality and reliability.
          </p>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className={`service-card glass-card rounded-sm p-8 flex flex-col items-center text-center relative group transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#d4a520] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag */}
              <span
                className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-sm"
                style={{
                  background: 'rgba(212, 165, 32, 0.1)',
                  color: '#d4a520',
                  border: '1px solid rgba(212, 165, 32, 0.2)',
                }}
              >
                {client.tag}
              </span>

              {/* Logo */}
              <div className="w-20 h-20 flex items-center justify-center mb-5">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(212,165,32,0.15))' }}
                />
              </div>

              <h3 className="text-white font-bold text-sm mb-1">{client.name}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{client.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className={`mt-14 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-sm">
            <div className="w-2 h-2 rounded-full bg-[#d4a520] animate-pulse" />
            <span className="text-white/50 text-xs">
              Delivering excellence to government and defence since 2020
            </span>
            <div className="w-2 h-2 rounded-full bg-[#d4a520] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
