'use client';
import Image from 'next/image';
import { Code2, Globe, Send } from 'lucide-react';

const team = [
  {
    name: 'Joshua Ajisafe',
    role: 'Founder & Backend Developer',
    image: '/Ajisafe.jpg',
    bio: 'Designing scalable server architectures that power products built for millions.',
    socials: { site: '#', updates: '#', code: '#' },
    color: '#00D4AA',
  },
  {
    name: 'Modesireoluwa Adedokun',
    role: 'Co-Founder & Frontend Developer',
    image: '/Modesireoluwa (2).jpg',
    bio: 'Engineering intuitive interfaces where clean code meets human-centered design.',
    socials: { site: '#', updates: '#', code: '#' },
    color: '#00A8FF',
  },
  {
    name: 'Felix Bamidele',
    role: 'Mobile Engineer',
    image: '/Bamidele.jpg',
    bio: 'Cross-platform mobile wizard. React Native specialist with 50+ apps shipped.',
    socials: { site: '#', updates: '#', code: '#' },
    color: '#A78BFA',
  },
  {
    name: 'Sofia Reyes',
    role: 'Brand & Growth Strategist',
    image: '/Sofia-Reyes.jpg',
    bio: 'Data-driven storyteller who builds brands that people remember and businesses that grow.',
    socials: { site: '#', updates: '#', code: '#' },
    color: '#F59E0B',
  },
];

export default function Team() {
  return (
    <section id="team" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-amber" style={{ width: '400px', height: '400px', left: '-100px', top: '20%', position: 'absolute' }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px', position: 'relative', paddingTop: '40px' }}>
            <div className="section-tag" style={{ margin: '0 auto 20px', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: 'fit-content' }}>Meet the Team</div>
            The people behind{' '}
            <span className="gradient-text">the magic</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            A tight-knit crew of creatives and engineers passionate about your success.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(255px, 1fr))',
          gap: '24px',
        }}>
          {team.map((member) => (
            <div
              key={member.name}
              className="glass-card"
              style={{ padding: '0', overflow: 'hidden', textAlign: 'center' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,15,30,0.9) 0%, rgba(10,15,30,0.1) 50%, transparent 100%)',
                }} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${member.color}, transparent)`,
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '24px 24px 28px' }}>
                <h4 style={{ fontSize: '19px', fontWeight: 700, color: '#F1F5F9', marginBottom: '4px' }}>
                  {member.name}
                </h4>
                <p style={{ color: member.color, fontSize: '13px', fontWeight: 600, fontFamily: 'Outfit', marginBottom: '14px' }}>
                  {member.role}
                </p>
                <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}>
                  {member.bio}
                </p>

                {/* Socials */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  {[
                    { icon: <Globe size={16} />, href: member.socials.site, label: 'Website' },
                    { icon: <Send size={16} />, href: member.socials.updates, label: 'Social' },
                    { icon: <Code2 size={16} />, href: member.socials.code, label: 'Code' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      style={{
                        width: '36px', height: '36px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#64748B',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = member.color;
                        e.currentTarget.style.color = member.color;
                        e.currentTarget.style.background = `${member.color}12`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.currentTarget.style.color = '#64748B';
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
