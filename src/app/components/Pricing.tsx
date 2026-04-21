'use client';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'For Pricing',
    price: 'Custom',
    period: 'contact us',
    desc: 'End-to-end digital transformation for established businesses with complex needs.',
    features: [
      'Bespoke web & mobile suite',
      'AI/ML integration',
      'Full brand identity',
      'Dedicated team',
      'Ongoing retainer support',
      'SLA guarantee',
      'Priority delivery',
    ],
    color: '#F59E0B',
    popular: false,
  },
];

// Feature list stagger
const featuresContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div
        className="orb orb-teal"
        style={{ width: '500px', height: '500px', right: '-150px', bottom: '-100px', position: 'absolute' }}
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
              Pricing
            </div>
            Transparent pricing,{' '}
            <span className="gradient-text">zero surprises</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            Every project is unique - but here's a guide to get you oriented.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '24px',
          alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              style={{
                position: 'relative',
                background: plan.popular ? 'rgba(0,168,255,0.06)' : 'rgba(17,24,39,0.8)',
                border: plan.popular ? '1px solid rgba(0,168,255,0.35)' : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '36px 32px',
              }}

              // Entry animation — scale up from slightly below
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.75,
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}

              // Hover lift
              whileHover={{
                y: -8,
                boxShadow: `0 28px 60px rgba(0,0,0,0.45), 0 0 0 1px ${plan.color}30`,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00D4AA, #00A8FF)',
                    color: '#0A0F1E',
                    fontFamily: 'Outfit',
                    fontWeight: 700,
                    fontSize: '12px',
                    padding: '5px 18px',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    whiteSpace: 'nowrap',
                  }}
                  initial={{ opacity: 0, y: -10, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Sparkles size={11} /> Most Popular
                </motion.div>
              )}

              {/* Plan name */}
              <motion.div
                style={{ marginBottom: '8px' }}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
              >
                <span style={{
                  color: plan.color,
                  fontFamily: 'Outfit',
                  fontWeight: 700,
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  {plan.name}
                </span>
              </motion.div>

              {/* Price */}
              <motion.div
                style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '4px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.28 + i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span style={{
                  fontFamily: 'Outfit',
                  fontWeight: 900,
                  fontSize: '44px',
                  color: '#F1F5F9',
                  letterSpacing: '-2px',
                }}>
                  {plan.price}
                </span>
                {plan.price !== 'Custom' && (
                  <span style={{ color: '#64748B', fontSize: '14px' }}>/{plan.period.split(' ')[1]}</span>
                )}
              </motion.div>

              {/* Description */}
              <motion.p
                style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.12, ease: 'easeOut' }}
              >
                {plan.desc}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.42 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <a href="#contact">
                  <button
                    style={{
                      width: '100%',
                      padding: '13px 24px',
                      borderRadius: '50px',
                      border: plan.popular ? 'none' : `1px solid ${plan.color}`,
                      background: plan.popular ? 'linear-gradient(135deg, #00D4AA, #00A8FF)' : 'transparent',
                      color: plan.popular ? '#0A0F1E' : plan.color,
                      fontFamily: 'Outfit',
                      fontWeight: 700,
                      fontSize: '15px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      marginBottom: '28px',
                    }}
                    onMouseEnter={e => {
                      if (!plan.popular) {
                        (e.currentTarget as HTMLElement).style.background = `${plan.color}15`;
                      }
                    }}
                    onMouseLeave={e => {
                      if (!plan.popular) {
                        (e.currentTarget as HTMLElement).style.background = 'transparent';
                      }
                    }}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                  </button>
                </a>
              </motion.div>

              {/* Divider */}
              <motion.div
                style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: 'easeOut' }}
              />

              {/* Features — slide in one by one */}
              <motion.ul
                style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}
                variants={featuresContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >
                {plan.features.map(f => (
                  <motion.li
                    key={f}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                    variants={featureItemVariants}
                  >
                    <motion.div
                      style={{
                        width: '20px', height: '20px', borderRadius: '50%',
                        background: `${plan.color}20`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                      whileHover={{
                        scale: 1.2,
                        background: `${plan.color}40`,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Check size={11} color={plan.color} strokeWidth={3} />
                    </motion.div>
                    <span style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.5 }}>{f}</span>
                  </motion.li>
                ))}
              </motion.ul>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
