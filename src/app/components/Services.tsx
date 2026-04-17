'use client';
import { Globe, Smartphone, Palette, TrendingUp, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Web Development',
    desc: 'High-performance websites and web apps built with Next.js, React, and modern stacks that scale.',
    tags: ['Next.js', 'React', 'Node.js'],
    color: '#00D4AA',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences for iOS & Android that users love to open.',
    tags: ['React Native', 'iOS', 'Android'],
    color: '#00A8FF',
  },
  {
    icon: <Palette size={28} />,
    title: 'UI/UX Design',
    desc: 'Intuitive, beautiful interfaces crafted to convert visitors into loyal customers.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    color: '#A78BFA',
  },
  {
    icon: <Shield size={28} />,
    title: 'Brand Identity',
    desc: 'Distinctive visual identities — logos, type systems, color palettes — that make you unforgettable.',
    tags: ['Logo Design', 'Style Guide', 'Motion'],
    color: '#F59E0B',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'SEO & Growth',
    desc: 'Data-driven strategies that put you at the top of search results and drive compounding traffic.',
    tags: ['SEO', 'Analytics', 'CRO'],
    color: '#34D399',
  },
  {
    icon: <Zap size={28} />,
    title: 'AI Integration',
    desc: 'Supercharge your product with bespoke AI features — chatbots, recommendations, automation.',
    tags: ['LLMs', 'Automation', 'APIs'],
    color: '#F472B6',
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle orb */}
      <div className="orb orb-blue" style={{ width: '500px', height: '500px', right: '-100px', top: '0', position: 'absolute' }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '8px', letterSpacing: '-1px', position: 'relative', paddingTop: '40px' }}>
            <div className="section-tag" style={{ margin: '0 auto 20px', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: 'fit-content' }}>Our Services</div>
            Everything you need to{' '}
            <span className="gradient-text-teal">dominate online</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            From concept to launch — we cover every layer of your digital presence.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          position: 'relative',
          zIndex: 1,
        }} className="services-scroll">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="glass-card"
              style={{ 
                padding: '32px', 
                position: 'relative', 
                overflow: 'hidden',
                flex: '1 1 280px',
                maxWidth: '380px',
              }}
            >
              {/* Subtle accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(90deg, ${service.color}60, transparent)`,
                opacity: 0.8,
              }} />

              {/* Icon */}
              <div style={{
                width: '56px', height: '56px',
                background: `${service.color}15`,
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: service.color,
                marginBottom: '20px',
                border: `1px solid ${service.color}25`,
              }}>
                {service.icon}
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#F1F5F9' }}>
                {service.title}
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
                {service.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {service.tags.map(tag => (
                  <span key={tag} style={{
                    background: `${service.color}12`,
                    border: `1px solid ${service.color}25`,
                    color: service.color,
                    fontSize: '12px',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: '50px',
                    fontFamily: 'Outfit',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Number watermark */}
              <div style={{
                position: 'absolute',
                bottom: '20px', right: '24px',
                fontFamily: 'Outfit',
                fontWeight: 900,
                fontSize: '48px',
                color: `${service.color}08`,
                lineHeight: 1,
                userSelect: 'none',
              }}>
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
