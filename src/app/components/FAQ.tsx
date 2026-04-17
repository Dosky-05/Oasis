'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-teal" style={{ width: '400px', height: '400px', left: '-100px', top: '0', position: 'absolute', opacity: 0.5 }} />

      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="section-tag" style={{ marginBottom: '20px' }}>FAQ</div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px', lineHeight: 1.15 }}>
              Got{' '}
              <span className="gradient-text-teal">questions?</span>
              <br />We&apos;ve got answers.
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
              Can&apos;t find what you&apos;re looking for? Drop us a message anytime.
            </p>
            <a href="#contact">
              <button className="btn-outline" id="faq-contact-btn" style={{ fontSize: '15px' }}>
                Ask Us Anything
              </button>
            </a>
          </div>

          {/* Right - Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${open === i ? 'open' : ''}`}
                style={{ background: 'rgba(17,24,39,0.8)' }}
              >
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
                    color: '#F1F5F9',
                    fontFamily: 'Outfit',
                    fontWeight: 600,
                    fontSize: '16px',
                    textAlign: 'left',
                    gap: '16px',
                  }}
                  id={`faq-${i}`}
                >
                  <span>{faq.q}</span>
                  <div style={{
                    flexShrink: 0,
                    color: '#00D4AA',
                    transition: 'transform 0.3s ease',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div style={{
                  overflow: 'hidden',
                  maxHeight: open === i ? '200px' : '0',
                  transition: 'max-height 0.35s ease',
                }}>
                  <p style={{
                    padding: '0 24px 20px',
                    color: '#94A3B8',
                    fontSize: '16px',
                    lineHeight: 1.7,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
