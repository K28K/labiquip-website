import { useEffect, useRef, useState } from 'react';

const pillars = [
  {
    icon: '🎯',
    title: 'Mission',
    text: 'To deliver reliable, high-quality manpower and equipment solutions that empower India\'s most critical institutions to operate at peak performance.',
  },
  {
    icon: '🔭',
    title: 'Vision',
    text: 'To be India\'s most trusted integrated solutions partner — known for integrity, operational excellence, and delivering results when it matters most.',
  },
  {
    icon: '⚖️',
    title: 'Values',
    text: 'Trust, precision, and accountability. We treat every project as a commitment to the nation — delivered on time, within scope, without compromise.',
  },
];

function useInView(ref, threshold = 0.2) {
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

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  return (
    <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f0ede6] grid-pattern" />

      {/* Decorative gold circle */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #d4a520, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span className="text-[#d4a520] text-xs font-bold tracking-[0.3em] uppercase">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f1c3f] leading-tight max-w-xl">
            Built on Trust,<br />
            <span className="gold-text">Driven by Excellence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-[#0f1c3f]/65 text-base leading-relaxed mb-6">
              Founded in 2020 and headquartered in <strong className="text-[#0f1c3f]">New Delhi</strong>, Labiquip Solutions Pvt. Ltd. has rapidly grown into a trusted partner for India's most demanding projects. We combine modern heavy earth moving equipment, skilled personnel, and deep operational expertise to deliver results that matter.
            </p>
            <p className="text-[#0f1c3f]/65 text-base leading-relaxed mb-10">
              We proudly serve institutions including the <strong className="text-[#0f1c3f]">Indian Army, Indian Navy, Indian Railways,</strong> and <strong className="text-[#0f1c3f]">Rashtrapati Bhavan</strong> — a testament to the confidence and trust our clients place in us every day.
            </p>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2020' },
                { label: 'Headquarters', value: 'New Delhi' },
                { label: 'Service Area', value: 'Pan India' },
                { label: 'Delivery', value: 'On Time, Every Time' },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded p-4">
                  <div className="text-[10px] text-[#d4a520] font-bold tracking-[0.2em] uppercase mb-1">{item.label}</div>
                  <div className="text-[#0f1c3f] font-semibold text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mission/Vision/Values */}
          <div className="flex flex-col gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`glass-card rounded-sm p-6 flex gap-5 service-card transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</div>
                <div>
                  <h3 className="text-[#0f1c3f] font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-[#0f1c3f]/55 text-sm leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
