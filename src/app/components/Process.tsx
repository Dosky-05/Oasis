'use client';
import { Search, Paintbrush, Code, Rocket } from 'lucide-react';

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

export default function Process() {
  return (
    <section id="process" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-blue" style={{ width: '400px', height: '400px', right: '-100px', top: '50%', transform: 'translateY(-50%)', position: 'absolute' }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px', position: 'relative', paddingTop: '40px' }}>
            <div className="section-tag" style={{ margin: '0 auto 20px', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: 'fit-content' }}>How We Work</div>
            From idea to{' '}
            <span className="gradient-text-teal">launch</span>
            {' '}- in 4 steps
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            Our proven process delivers results on time, on budget, and beyond expectations.
          </p>
        </div>

        {/* Steps */}
        <div className="process-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0', position: 'relative' }}>
          {/* Arrows between steps */}
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
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(0,212,170,0.6)', opacity: 0.8 }}>→</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(0,168,255,0.6)', opacity: 0.8 }}>→</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: 'rgba(167,139,250,0.6)', opacity: 0.8 }}>→</div>
          </div>

          {steps.map((step, i) => (
            <div
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
            >
              {/* Circle */}
              <div style={{
                width: '88px',
                height: '88px',
                borderRadius: '50%',
                background: `${step.color}15`,
                border: `2px solid ${step.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: step.color,
                marginBottom: '24px',
                position: 'relative',
                transition: 'all 0.3s ease',
                flexShrink: 0,
              }}
                className="process-circle"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = `${step.color}25`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${step.color}40`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = `${step.color}15`;
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {step.icon}
                {/* Number badge */}
                <div style={{
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
                }}>
                  {i + 1}
                </div>
              </div>

              <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#F1F5F9', marginBottom: '12px' }}>
                {step.title}
              </h4>
              <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
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
