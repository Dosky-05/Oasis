'use client';
import { Globe, Smartphone, Palette, TrendingUp, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Web Development',
    image: '/Web-Development.jpg',
    desc: 'High-performance websites and web apps built with Next.js, React, and modern stacks that scale.',
    tags: ['Next.js', 'React', 'Node.js'],
    color: '#00D4AA',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Mobile Apps',
    image: '/Mobile-Apps.jpg',
    desc: 'Native and cross-platform mobile experiences for iOS & Android that users love to open.',
    tags: ['React Native', 'iOS', 'Android'],
    color: '#00A8FF',
  },
  {
    icon: <Palette size={28} />,
    title: 'UI/UX Design',
    image: '/UI-UX-Design.jpg',
    desc: 'Intuitive, beautiful interfaces crafted to convert visitors into loyal customers.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    color: '#A78BFA',
  },
  {
    icon: <Shield size={28} />,
    title: 'Brand Identity',
    image: '/Brand-Identity.jpg',
    desc: 'Distinctive visual identities - logos, type systems, color palettes, that make you unforgettable.',
    tags: ['Logo Design', 'Style Guide', 'Motion'],
    color: '#F59E0B',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'SEO & Growth',
    image: '/SEO-Growth.jpg',
    desc: 'Data-driven strategies that put you at the top of search results and drive compounding traffic.',
    tags: ['SEO', 'Analytics', 'CRO'],
    color: '#34D399',
  },
  {
    icon: <Zap size={28} />,
    title: 'AI Integration',
    image: '/AI-Integration.jpg',
    desc: 'Supercharge your product with bespoke AI features - chatbots, recommendations, automation.',
    tags: ['LLMs', 'Automation', 'APIs'],
    color: '#F472B6',
  },
];

// Container stagger — children animate in sequence
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Each card fades up + slight scale
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section id="services" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle orb */}
      <div className="orb orb-blue" style={{ width: '500px', height: '500px', right: '-100px', top: '0', position: 'absolute' }} />

      <div className="section-container">

        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '64px', position: 'relative' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 54px)',
            fontWeight: 800,
            marginBottom: '8px',
            letterSpacing: '-1px',
            position: 'relative',
            paddingTop: '40px',
          }}>
            <div className="section-tag" style={{
              margin: '0 auto 20px',
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'fit-content',
            }}>
              Our Services
            </div>
            Everything you need to{' '}
            <span className="gradient-text-teal">dominate online</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            From concept to launch we cover every layer of your digital presence.
          </p>
        </motion.div>

        {/* Grid — staggered cards */}
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
            position: 'relative',
            zIndex: 1,
          }}
          className="services-scroll"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card"
              style={{
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                flex: '1 1 280px',
                maxWidth: '380px',
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'default',
              }}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              {/* Dark overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.75) 100%)',
                zIndex: 1,
              }} />

              {/* Accent line */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(90deg, ${service.color}60, transparent)`,
                opacity: 0.8,
                zIndex: 2,
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
                position: 'relative',
                zIndex: 2,
              }}>
                {service.icon}
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#F1F5F9', position: 'relative', zIndex: 2 }}>
                {service.title}
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px', position: 'relative', zIndex: 2 }}>
                {service.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative', zIndex: 2 }}>
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
                zIndex: 2,
              }}>
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
