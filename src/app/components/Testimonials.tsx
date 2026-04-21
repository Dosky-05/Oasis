'use client';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Oasis didn't just build our app - they elevated our entire vision. The attention to detail and proactive communication was unlike any agency we'd worked with before.",
    name: 'Chloe Bernstein',
    role: 'Founder, StudyForge',
    avatar: '🌟',
    rating: 5,
    color: '#F472B6',
  },
  {
    quote: "We went from a rough idea to a polished, live product in 6 weeks. The team at Oasis is sharp, creative, and genuinely cares about your success.",
    name: 'David Okonkwo',
    role: 'CEO, CaraStore',
    avatar: '🚀',
    rating: 4,
    color: '#00D4AA',
  },
];

// Stagger container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Card — fade up + slight scale
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

// Stars stagger
const starsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const starVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.35,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

// Text fade
const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

// Author slide in
const authorVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div
        className="orb orb-blue"
        style={{ width: '500px', height: '500px', right: '-150px', top: '0', position: 'absolute' }}
      />

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
            marginBottom: '20px',
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
              Testimonials
            </div>
            Don't take our{' '}
            <span className="gradient-text">word for it</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            Here's what our clients say about working with Oasis.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              style={{ position: 'relative' }}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: `0 24px 56px rgba(0,0,0,0.35), 0 0 0 1px ${t.color}20`,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              {/* Quote icon — fade in */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '28px', right: '28px',
                  color: `${t.color}30`,
                }}
                variants={textVariants}
              >
                <Quote size={40} fill="currentColor" />
              </motion.div>

              {/* Stars — spring pop one by one */}
              <motion.div
                style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}
                variants={starsContainerVariants}
              >
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div key={j} variants={starVariants}>
                    <Star size={16} fill="#F59E0B" color="#F59E0B" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote text */}
              <motion.p
                style={{
                  color: '#94A3B8',
                  fontSize: '16px',
                  lineHeight: 1.7,
                  marginBottom: '28px',
                  fontStyle: 'italic',
                }}
                variants={textVariants}
              >
                "{t.quote}"
              </motion.p>

              {/* Author — slides in from left */}
              <motion.div
                style={{ display: 'flex', alignItems: 'center', gap: '14px' }}
                variants={authorVariants}
              >
                <motion.div
                  style={{
                    width: '48px', height: '48px',
                    borderRadius: '50%',
                    background: `${t.color}20`,
                    border: `1px solid ${t.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px',
                    flexShrink: 0,
                  }}
                  whileHover={{
                    scale: 1.15,
                    background: `${t.color}35`,
                    transition: { duration: 0.25 },
                  }}
                >
                  {t.avatar}
                </motion.div>
                <div>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '15px', color: '#F1F5F9' }}>
                    {t.name}
                  </div>
                  <div style={{ color: t.color, fontSize: '13px', fontWeight: 500 }}>
                    {t.role}
                  </div>
                </div>
              </motion.div>

              {/* Accent border */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: '50%',
                transform: 'translateX(-50%)',
                width: '60%', height: '1px',
                background: `linear-gradient(90deg, transparent, ${t.color}40, transparent)`,
              }} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
