'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: "It depends on scope. A simple landing page takes 1-2 weeks. A full web app typically ranges from 4-12 weeks. We'll give you a precise timeline in your discovery call.",
  },
  {
    q: 'Do you work with international clients?',
    a: "Absolutely. Our team works fully remotely and we've delivered projects to clients across 20+ countries. Time zones are never an obstacle.",
  },
  {
    q: "What's your payment structure?",
    a: 'We typically work on a 50% upfront / 50% on delivery structure for fixed projects. Retainer clients are billed monthly. We accept bank transfers, Stripe, and Crypto.',
  },
  {
    q: 'Will I own the code and design assets?',
    a: 'Yes, 100%. Upon final payment you receive full ownership of all code, design files, and assets. No lock-in, ever.',
  },
  {
    q: 'Can you maintain and update our product after launch?',
    a: "Yes - we offer both one-time post-launch support windows and ongoing monthly retainers for teams who want us as their long-term tech partners.",
  },
  {
    q: 'Do you offer a free consultation?',
    a: 'Yes! We offer a free 30-minute discovery call for all new inquiries. No pressure, just a straightforward conversation about your goals.',
  },
];

// FAQ items stagger
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div
        className="orb orb-teal"
        style={{ width: '400px', height: '400px', left: '-100px', top: '0', position: 'absolute', opacity: 0.5 }}
      />

      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'start' }}>

          {/* Left — sticky heading */}
          <motion.div
            style={{ position: 'sticky', top: '100px' }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="section-tag"
              style={{ marginBottom: '20px' }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
            >
              FAQ
            </motion.div>

            <motion.h2
              style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px', lineHeight: 1.15 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Got{' '}
              <span className="gradient-text-teal">questions?</span>
              <br />We&apos;ve got answers.
            </motion.h2>

            <motion.p
              style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
            >
              Can&apos;t find what you&apos;re looking for? Drop us a message anytime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.34, ease: 'easeOut' }}
            >
              <a href="#contact">
                <button className="btn-outline" id="faq-contact-btn" style={{ fontSize: '15px' }}>
                  Ask Us Anything
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Accordion */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`faq-item ${open === i ? 'open' : ''}`}
                style={{ background: 'rgba(17,24,39,0.8)' }}
                variants={itemVariants}
                whileHover={open !== i ? {
                  x: 4,
                  transition: { duration: 0.2, ease: 'easeOut' },
                } : {}}
              >
                {/* Question button */}
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 24px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: open === i ? '#00D4AA' : '#F1F5F9',
                    fontFamily: 'Outfit',
                    fontWeight: 600,
                    fontSize: '16px',
                    textAlign: 'left',
                    gap: '16px',
                    transition: 'color 0.3s ease',
                  }}
                  id={`faq-${i}`}
                >
                  <span>{faq.q}</span>

                  {/* Chevron — smooth rotate */}
                  <motion.div
                    style={{ flexShrink: 0, color: '#00D4AA' }}
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Answer — AnimatePresence for smooth open/close */}
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <motion.p
                        style={{
                          padding: '0 24px 20px',
                          color: '#94A3B8',
                          fontSize: '16px',
                          lineHeight: 1.7,
                        }}
                        initial={{ y: -8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -8, opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
                      >
                        {faq.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #faq .section-container > div {
            grid-template-columns: 1fr !important;
          }
          #faq .section-container > div > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
