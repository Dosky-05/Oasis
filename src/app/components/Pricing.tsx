'use client';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$1,500',
    period: 'per project',
    desc: 'Perfect for startups and small businesses ready to establish their digital presence.',
    features: [
      '5-page responsive website',
      'Custom UI design',
      'Mobile-first development',
      'Basic SEO setup',
      '2 revision rounds',
      '30-day post-launch support',
    ],
    color: '#00D4AA',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$4,500',
    period: 'per project',
    desc: 'For scaling businesses that need a robust digital product and brand presence.',
    features: [
      'Full web app or e-commerce',
      'UI/UX design system',
      'CMS integration',
      'Advanced SEO & analytics',
      'Unlimited revisions',
      '90-day post-launch support',
      'Performance optimization',
    ],
    color: '#00A8FF',
    popular: true,
  },
  {
    name: 'Enterprise',
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

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-teal" style={{ width: '500px', height: '500px', right: '-150px', bottom: '-100px', position: 'absolute' }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px', position: 'relative', paddingTop: '40px' }}>
            <div className="section-tag" style={{ margin: '0 auto 20px', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: 'fit-content' }}>Pricing</div>
            Transparent pricing,{' '}
            <span className="gradient-text">zero surprises</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            Every project is unique - but here's a guide to get you oriented.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '24px',
          alignItems: 'start',
        }}>
          {plans.map(plan => (
            <div
              key={plan.name}
              style={{
                position: 'relative',
                background: plan.popular ? 'rgba(0,168,255,0.06)' : 'rgba(17,24,39,0.8)',
                border: plan.popular ? '1px solid rgba(0,168,255,0.35)' : '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '36px 32px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div style={{
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
                }}>
                  <Sparkles size={11} /> Most Popular
                </div>
              )}

              {/* Plan name */}
              <div style={{ marginBottom: '8px' }}>
                <span style={{ color: plan.color, fontFamily: 'Outfit', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: '44px', color: '#F1F5F9', letterSpacing: '-2px' }}>{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span style={{ color: '#64748B', fontSize: '14px' }}>/{plan.period.split(' ')[1]}</span>
                )}
              </div>

              <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
                {plan.desc}
              </p>

              {/* CTA */}
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

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' }} />

              {/* Features */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{
                      width: '20px', height: '20px', borderRadius: '50%',
                      background: `${plan.color}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}>
                      <Check size={11} color={plan.color} strokeWidth={3} />
                    </div>
                    <span style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
