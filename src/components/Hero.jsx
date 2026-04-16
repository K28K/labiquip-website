import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 4, suffix: '+', label: 'Years Active' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 4, suffix: '', label: 'Govt. Clients' },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, suffix, label, startCount }) {
  const count = useCountUp(value, 1600, startCount);
  return (
    <div className="text-center px-6 border-r border-white/10 last:border-0">
      <div className="text-3xl lg:text-4xl font-black gold-text counter-number">
        {count}{suffix}
      </div>
      <div className="text-xs text-white/50 font-medium tracking-wider uppercase mt-1">{label}</div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
      setTimeout(() => setStartCount(true), 800);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-equipment.jpg"
          alt="Heavy Equipment"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for premium dark look */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04091a]/95 via-[#04091a]/85 to-[#04091a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04091a] via-transparent to-[#04091a]/50" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 grid-pattern opacity-40" />

      {/* Gold accent line on left */}
      <div
        className="absolute left-0 top-1/4 h-1/2 w-1"
        style={{ background: 'linear-gradient(to bottom, transparent, #d4a520, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="w-8 h-px bg-[#d4a520]" />
            <span className="text-[#d4a520] text-xs font-bold tracking-[0.3em] uppercase">
              Trusted by India's Finest Institutions
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Building India's
            <br />
            <span className="gold-text">Future</span> with
            <br />
            Excellence.
          </h1>

          {/* Subtext */}
          <p
            className={`text-base lg:text-lg text-white/60 leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            End-to-end manpower, heavy equipment, horticulture, and facility
            management services — powering India's most demanding projects since 2020.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-gold px-8 py-4 rounded-sm text-sm font-bold tracking-wide"
            >
              Get a Free Quote
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-outline px-8 py-4 rounded-sm text-sm"
            >
              Our Services ↓
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-20 inline-flex flex-wrap gap-y-6 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {stats.map((s) => (
            <StatItem key={s.label} {...s} startCount={startCount} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#d4a520] animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#d4a520]" />
      </div>
    </section>
  );
}
