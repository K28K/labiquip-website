import { useEffect, useRef, useState } from 'react';

const posts = [
  {
    slug: 'heavy-earth-moving-equipment-rental-india',
    tag: 'Equipment',
    date: 'April 10, 2026',
    readTime: '5 min read',
    title: 'Why Renting Heavy Earth Moving Equipment Makes More Sense Than Buying in India',
    excerpt:
      'For infrastructure projects, government contracts, and construction sites across India, renting heavy earth moving equipment — excavators, JCBs, and bulldozers — is increasingly the smarter financial choice over outright purchase.',
    body: `
For government contractors, defence projects, and infrastructure builders across India, the question always comes up: should you buy or rent heavy earth moving equipment?

The case for renting is compelling. A new excavator costs upward of ₹40–80 lakh depending on capacity and brand. Add fuel, maintenance, operator salaries, insurance, and storage — and ownership becomes a significant capital burden, especially for project-based work.

**Key reasons to rent heavy earth moving equipment in India:**

1. **No maintenance overhead.** When you rent from Labiquip, you receive well-serviced machinery with certified operators included. You're not managing breakdowns, spare parts, or service schedules.

2. **Right machine for the right job.** Different projects need different equipment — a road-widening project needs a grader or bulldozer, while a foundation dig needs a large excavator. Renting lets you match the machine to the task.

3. **Cash flow flexibility.** For government contractors working on tenders and milestone payments, renting keeps your capital free for bidding on the next contract.

4. **Compliance & certification.** Certified operators who understand safety protocols are critical on government and defence sites. Our operators are trained and background-verified.

Labiquip Solutions has been providing heavy earth moving equipment to India's most demanding institutional projects since 2020 — including for defence, infrastructure, and agricultural research institutions across Delhi and Pan-India.

If you have an upcoming project and need excavators, JCBs, or bulldozers, contact us for a free site assessment and quote.
    `,
  },
  {
    slug: 'manpower-solutions-government-contracts-india',
    tag: 'Manpower',
    date: 'March 28, 2026',
    readTime: '4 min read',
    title: 'How to Choose a Reliable Manpower Solutions Provider for Government Projects',
    excerpt:
      'Supplying manpower to government institutions in India requires more than just headcount. Security clearances, background verification, discipline, and on-time deployment are non-negotiable.',
    body: `
Government and defence institutions in India have zero tolerance for operational lapses. Whether it's the Indian Army, Indian Railways, or a central research institution like IARI or ICAR, the personnel you deploy on their premises must meet a higher bar.

Here's what separates reliable manpower contractors from the rest:

**1. Background verification is non-negotiable**
Every worker deployed to a sensitive government or defence campus must have a clean criminal record, verified address, and documented identity. A good manpower provider maintains these records and can produce them at any time.

**2. Training and discipline**
Security personnel, horticulture workers, and facility management staff need domain-specific training. Untrained personnel lead to complaints, early termination of contracts, and reputational damage.

**3. Rapid deployment capability**
Government projects often have tight mobilization windows. Your manpower partner must be able to scale up or down quickly without disrupting operations.

**4. Compliance with labour laws**
EPF, ESIC, minimum wage compliance — these are requirements on government contracts. Any shortfall can attract legal and contractual penalties.

**5. Track record with similar institutions**
Experience with defence, railways, or research institutions is a significant differentiator. Protocols, security norms, and site requirements at these organizations are unique.

Labiquip Solutions has supplied manpower to the Indian Army, Indian Navy, Indian Railways, Rashtrapati Bhavan, IARI, and ICAR — institutions where quality is enforced, not requested.

Reach out to discuss your next manpower requirement.
    `,
  },
  {
    slug: 'horticulture-services-government-estates-india',
    tag: 'Horticulture',
    date: 'March 15, 2026',
    readTime: '4 min read',
    title: 'Horticulture Services for Government Estates and Research Institutions: What to Expect',
    excerpt:
      'Maintaining the gardens and green spaces of prestigious government estates and research campuses like IARI and ICAR demands specialized horticultural knowledge, disciplined scheduling, and sensitivity to institutional protocols.',
    body: `
Government estates, defence campuses, and agricultural research institutions like IARI (Indian Agricultural Research Institute) and ICAR (Indian Council of Agricultural Research) maintain significant green infrastructure. These aren't just decorative spaces — they serve ecological, research, and heritage purposes.

Managing these landscapes professionally requires a combination of horticultural expertise, institutional discipline, and logistical coordination.

**What professional horticulture services include:**

- **Landscape design and redesign** — Seasonal planting plans, ornamental garden layouts, and lawn redesign tailored to institutional standards
- **Garden maintenance** — Mowing, pruning, edging, fertilizing, and pest management on a regular schedule
- **Plantation and nursery management** — Maintaining on-site nurseries for seasonal replanting, managing tree health, and supporting biodiversity goals
- **Lawn care** — Specialized care for large turf areas common to defence campuses and research stations

**Why institutional horticulture is different from residential:**
The scale is significantly larger. A research campus or estate might cover hundreds of acres. Maintenance teams must operate without disrupting ongoing research activities, security protocols, or ceremonial events.

At IARI and ICAR, for example, green spaces are directly adjacent to living research plots — requiring care that doesn't introduce contaminants or disrupt controlled environments.

Labiquip Solutions has provided horticulture services to some of India's most prestigious institutions, including Rashtrapati Bhavan, Indian Railways, IARI, and ICAR. Our teams are trained for the unique requirements of institutional green space management.

Contact us to discuss your campus horticulture needs.
    `,
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

function BlogModal({ post, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto"
      style={{ background: 'rgba(15,28,63,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-sm shadow-2xl p-8 md:p-12 mb-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-sm hover:bg-[#0f1c3f]/8 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[#0f1c3f]/50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span
            className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-sm"
            style={{ background: 'rgba(212,165,32,0.12)', color: '#b8860b', border: '1px solid rgba(212,165,32,0.25)' }}
          >
            {post.tag}
          </span>
          <span className="text-[#0f1c3f]/40 text-xs">{post.date} · {post.readTime}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-[#0f1c3f] leading-snug mb-6">{post.title}</h2>

        <div className="prose prose-sm max-w-none text-[#0f1c3f]/70 leading-relaxed space-y-4">
          {post.body.trim().split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h3 key={i} className="text-[#0f1c3f] font-bold text-base mt-6 mb-2">{para.replace(/\*\*/g, '')}</h3>;
            }
            if (para.startsWith('- ')) {
              const items = para.split('\n').filter(l => l.startsWith('- '));
              return (
                <ul key={i} className="list-disc list-inside space-y-1 text-sm">
                  {items.map((item, j) => {
                    const text = item.replace(/^- /, '');
                    const parts = text.split(/\*\*(.*?)\*\*/g);
                    return (
                      <li key={j}>
                        {parts.map((part, k) => k % 2 === 1 ? <strong key={k} className="text-[#0f1c3f] font-semibold">{part}</strong> : part)}
                      </li>
                    );
                  })}
                </ul>
              );
            }
            const lines = para.split('\n');
            return (
              <p key={i} className="text-sm leading-relaxed">
                {lines.map((line, j) => {
                  const parts = line.split(/\*\*(.*?)\*\*/g);
                  return (
                    <span key={j}>
                      {parts.map((part, k) => k % 2 === 1 ? <strong key={k} className="text-[#0f1c3f] font-semibold">{part}</strong> : part)}
                      {j < lines.length - 1 && <br />}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-[#0f1c3f]/8">
          <a
            href="#contact"
            onClick={(e) => { onClose(); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100); e.preventDefault(); }}
            className="btn-gold px-6 py-3 rounded-sm text-sm inline-block"
          >
            Contact Us About This Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);
  const [activePost, setActivePost] = useState(null);

  return (
    <section id="blog" ref={sectionRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#f0ede6] grid-pattern" />

      <div
        className="absolute right-0 top-0 w-96 h-96 opacity-10"
        style={{ background: 'radial-gradient(circle at top right, #d4a520, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line" />
            <span className="text-[#d4a520] text-xs font-bold tracking-[0.3em] uppercase">Knowledge Hub</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1c3f] leading-tight">
              Insights &<br />
              <span className="gold-text">Resources.</span>
            </h2>
            <p className="text-[#0f1c3f]/50 text-sm max-w-sm leading-relaxed">
              Practical guidance on manpower, heavy earth moving equipment, and facility management for India's institutions.
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.slug}
              className={`service-card glass-card rounded-sm overflow-hidden group cursor-pointer transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
              onClick={() => setActivePost(post)}
            >
              {/* Colored top strip by tag */}
              <div
                className="h-1 w-full"
                style={{ background: 'linear-gradient(90deg, #d4a520, #f0c96a)' }}
              />

              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-0.5 rounded-sm"
                    style={{ background: 'rgba(212,165,32,0.12)', color: '#b8860b', border: '1px solid rgba(212,165,32,0.25)' }}
                  >
                    {post.tag}
                  </span>
                  <span className="text-[#0f1c3f]/35 text-xs">{post.readTime}</span>
                </div>

                <h3 className="text-[#0f1c3f] font-bold text-base leading-snug mb-3 group-hover:text-[#b8860b] transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-[#0f1c3f]/55 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[#0f1c3f]/35 text-xs">{post.date}</span>
                  <span className="text-[#d4a520] text-xs font-semibold group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                    Read more
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activePost && <BlogModal post={activePost} onClose={() => setActivePost(null)} />}
    </section>
  );
}
