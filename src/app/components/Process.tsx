'use client';
import { Search, Paintbrush, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    icon: <Search size={24} />,
    title: 'Discovery',
    desc: 'We deep-dive into your goals, audience, and competitive landscape to build a crystal-clear project strategy.',
    color: '#00D4AA',
  },
  {
    number: '02',
    icon: <Paintbrush size={24} />,
    title: 'Design',
    desc: 'Our designers craft wireframes and high-fidelity prototypes that look incredible and feel just right.',
    color: '#00A8FF',
  },
  {
    number: '03',
    icon: <Code size={24} />,
    title: 'Build',
    desc: 'We engineer clean, scalable, performant code — tested across devices and built to last.',
    color: '#A78BFA',
  },
  {
    number: '04',
    icon: <Rocket size={24} />,
    title: 'Launch',
    desc: 'We deploy, monitor, and support your project post-launch to ensure a flawless go-live experience.',
    color: '#F59E0B',
  },
];

// Stagger container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

// Each step
const stepVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

// Circle pop
const circleVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

// Badge pop — inherits from parent stagger
const badgeVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: [0.34, 1.56, 0.64, 1] as const,
    },
  },
};

// Text fade up — inherits from parent stagger
const textVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut' as const,
    },
  },
};

export default function Process() {
  return (
    <section id="process" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div
        className="orb orb-blue"
        style={{ width: '400px', height: '400px', right: '-100px', top: '50%', transform: 'translateY(-50%)', position: 'absolute' }}
      />

      <div className="section-container">

        {/* Header */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '72px', position: 'relative' }}
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
              How We Work
            </div>
            From idea to{' '}
            <span className="gradient-text-teal">launch</span>
            {' '}- in 4 steps
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            Our proven process delivers results on time, on budget, and beyond expectations.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="process-steps"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '0',
            position: 'relative',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Arrows — outside stagger so no variant conflict */}
          <div className="process-arrows" style={{
            position: 'absolute',
            top: '34px',
            left: '15%',
            right: '15%',
            width: '70%',
            height: '24px',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'space-around',
            pointerEvents: 'none',
          }}>
            {[
              'rgba(0,212,170,0.6)',
              'rgba(0,168,255,0.6)',
              'rgba(167,139,250,0.6)',
            ].map((color, i) => (
              <motion.div
                key={i}
                style={{ fontSize: '18px', fontWeight: 700, color, opacity: 0 }}
                animate={{ opacity: 0.8, x: 0 }}
                initial={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.18, ease: 'easeOut' }}
              >
                →
              </motion.div>
            ))}
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px',
                position: 'relative',
                zIndex: 2,
              }}
              variants={stepVariants}
            >
              {/* Circle */}
              <motion.div
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '50%',
                  background: `${step.color}15`,
                  border: `2px solid ${step.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: step.color,
                  marginBottom: '24px',
                  position: 'relative',
                  flexShrink: 0,
                  cursor: 'default',
                }}
                className="process-circle"
                variants={circleVariants}
                whileHover={{
                  scale: 1.12,
                  background: `${step.color}25`,
                  boxShadow: `0 0 32px ${step.color}50`,
                  transition: { duration: 0.3 },
                }}
              >
                {step.icon}

                {/* Number badge */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    width: '28px', height: '28px',
                    borderRadius: '50%',
                    background: step.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Outfit',
                    fontWeight: 800,
                    fontSize: '12px',
                    color: '#0A0F1E',
                  }}
                  variants={badgeVariants}
                >
                  {i + 1}
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h4
                style={{ fontSize: '20px', fontWeight: 700, color: '#F1F5F9', marginBottom: '12px' }}
                variants={textVariants}
              >
                {step.title}
              </motion.h4>

              {/* Description */}
              <motion.p
                style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7 }}
                variants={textVariants}
              >
                {step.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-steps {
            grid-template-columns: 1fr !important;
            gap: 48px 0 !important;
          }
          .process-arrows {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
