'use client';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Oasis didn't just build our app — they elevated our entire vision. The attention to detail and proactive communication was unlike any agency we'd worked with before.",
    name: 'Chloe Bernstein',
    role: 'CEO, NovaPulse',
    avatar: '🌟',
    rating: 5,
    color: '#00D4AA',
  },
  {
    quote: "We went from a rough idea to a polished, live product in 6 weeks. The team at Oasis is sharp, creative, and genuinely cares about your success.",
    name: 'David Okonkwo',
    role: 'Co-Founder, FlowPay',
    avatar: '🚀',
    rating: 5,
    color: '#00A8FF',
  },
  {
    quote: "The brand identity they created for us is stunning. We've gotten more compliments on our visual identity in 3 months than in the 3 years prior.",
    name: 'Irina Volkov',
    role: 'Marketing Director, Apex',
    avatar: '✨',
    rating: 5,
    color: '#F59E0B',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-blue" style={{ width: '500px', height: '500px', right: '-150px', top: '0', position: 'absolute' }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px', position: 'relative', paddingTop: '40px' }}>
            <div className="section-tag" style={{ margin: '0 auto 20px', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: 'fit-content' }}>Testimonials</div>
            Don't take our{' '}
            <span className="gradient-text">word for it</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            Here's what our clients say about working with Oasis.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{ position: 'relative' }}
            >
              {/* Quote icon */}
              <div style={{
                position: 'absolute',
                top: '28px', right: '28px',
                color: `${t.color}30`,
              }}>
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                color: '#94A3B8',
                fontSize: '16px',
                lineHeight: 1.7,
                marginBottom: '28px',
                fontStyle: 'italic',
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '48px', height: '48px',
                  borderRadius: '50%',
                  background: `${t.color}20`,
                  border: `1px solid ${t.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px',
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '15px', color: '#F1F5F9' }}>{t.name}</div>
                  <div style={{ color: t.color, fontSize: '13px', fontWeight: 500 }}>{t.role}</div>
                </div>
              </div>

              {/* Accent border at bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: '50%',
                transform: 'translateX(-50%)',
                width: '60%', height: '1px',
                background: `linear-gradient(90deg, transparent, ${t.color}40, transparent)`,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
