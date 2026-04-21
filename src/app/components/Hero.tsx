'use client';
import { ArrowRight, Play, Sparkles, Code2, Smartphone, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

// Reusable fade-up helper
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function Hero() {

  // ✅ Moved inside component
  const floatingCards = [
    { icon: <Code2 size={18} />, label: 'Web Development', sub: '120+ projects', delay: '0s', x: '8%', y: '22%' },
    { icon: <Smartphone size={18} />, label: 'Mobile Apps', sub: 'iOS & Android', delay: '1s', x: '75%', y: '15%' },
    { icon: <Palette size={18} />, label: 'UI/UX Design', sub: '98% satisfaction', delay: '2s', x: '80%', y: '68%' },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '96px',
      }}
    >
      {/* Background Orbs — soft fade in */}
      <motion.div
        className="orb orb-teal"
        style={{ width: '600px', height: '600px', top: '-100px', left: '-150px', position: 'absolute' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />
      <motion.div
        className="orb orb-blue"
        style={{ width: '500px', height: '500px', top: '200px', right: '-100px', position: 'absolute' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
      />
      <motion.div
        className="orb orb-amber"
        style={{ width: '300px', height: '300px', bottom: '0', left: '40%', position: 'absolute' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
      />

      {/* Grid Background */}
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>

          {/* Badge */}
          <motion.div
            className="section-tag"
            style={{ margin: '0 auto 32px' }}
            {...fadeUp(0.1)}
          >
            <Sparkles size={12} />
            Digital Tech Agency
          </motion.div>

          {/* Headline */}
          <motion.h1
            style={{
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-2px',
              marginBottom: '28px',
              color: '#F1F5F9',
            }}
            {...fadeUp(0.25)}
          >
            Where Digital{' '}
            <span className="gradient-text">Vision</span>
            {' '}Meets<br />
            <span style={{ color: '#F1F5F9' }}>Execution</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            style={{
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#94A3B8',
              maxWidth: '560px',
              margin: '0 auto 44px',
            }}
            {...fadeUp(0.4)}
          >
            We craft premium digital experiences from blazing-fast web apps and mobile products
            to stunning brand identities that leave your audience in awe.
          </motion.p>

          {/* CTAs */}
          <motion.div
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            {...fadeUp(0.55)}
          >
            <a href="#contact">
              <button
                className="btn-primary"
                id="hero-cta-primary"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Start a Project <ArrowRight size={18} />
                </span>
              </button>
            </a>
            <a href="#work">
              <button
                className="btn-outline"
                id="hero-cta-secondary"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}
              >
                <Play size={16} fill="currentColor" /> View Our Work
              </button>
            </a>
          </motion.div>

        </div>
      </div>

      {/* Floating Cards — staggered pop in */}
      {floatingCards.map((card, index) => (
        <motion.div
          key={card.label}
          className="animate-float"
          style={{
            position: 'absolute',
            left: card.x,
            top: card.y,
            animationDelay: card.delay,
            display: 'none',
          }}
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.9 + index * 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div
            className="glass-card"
            style={{ padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '12px', minWidth: '190px' }}
          >
            <div style={{ color: '#00D4AA', background: 'rgba(0,212,170,0.1)', padding: '8px', borderRadius: '8px' }}>
              {card.icon}
            </div>
            <div>
              <div style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: '13px', color: '#F1F5F9' }}>{card.label}</div>
              <div style={{ fontSize: '12px', color: '#64748B' }}>{card.sub}</div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '120px',
        background: 'linear-gradient(to bottom, transparent, #0A0F1E)',
        pointerEvents: 'none',
      }} />

      <style>{`
        @media (min-width: 1200px) {
          .floating-card { display: flex !important; }
        }
        @media (min-width: 1200px) {
          section > div:last-of-type > div { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
