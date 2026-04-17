'use client';
import Image from 'next/image';
import { ExternalLink, Tag } from 'lucide-react';

const projects = [
  {
    image: '/Studyapp.png',
    tag: 'AI Integration',
    title: 'StudyForge',
    desc: 'An AI-powered study assistant that helps students learn smarter, generating study plans, quizzes and summaries.',
    tech: ['React.js', 'Tailwind CSS', 'PostgreSQL'],
    color: '#F472B6',
  },
  {
    image: '/caraapp.png',
    tag: 'Web Development',
    title: 'CaraStore',
    desc: 'A full-featured clothing brand e-commerce site with product pages, cart functionality, and a polished multi-page layout..',
    tech: ['React.js', 'Tailwind CSS', 'Node.js'],
    color: '#00D4AA',
  },
  {
    image: '/portfolio-brand.png',
    tag: 'Brand Identity',
    title: 'Apex Brand System',
    desc: 'Complete visual identity for a Series-A tech startup - logo, motion, style guide, and component library.',
    tech: ['Figma', 'After Effects', 'Design System'],
    color: '#F59E0B',
  },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-teal" style={{ width: '400px', height: '400px', left: '-100px', bottom: '0', position: 'absolute', opacity: 0.5 }} />

      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px', position: 'relative', paddingTop: '40px' }}>
            <div className="section-tag" style={{ margin: '0 auto 20px', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: 'fit-content' }}>Featured Work</div>
            Projects we're{' '}
            <span className="gradient-text">proud of</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            A glimpse into work that made clients' jaws drop.
          </p>
        </div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
                gap: '0',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(17,24,39,0.7)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              className="project-row"
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${project.color}35`;
                e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image — order based on index */}
              <div
                style={{
                  order: i % 2 === 0 ? 0 : 1,
                  position: 'relative',
                  minHeight: '320px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                {/* Overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to right, rgba(17,24,39,0.4), transparent)',
                }} />
              </div>

              {/* Content */}
              <div
                style={{
                  order: i % 2 === 0 ? 1 : 0,
                  padding: '48px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Tag size={14} color={project.color} />
                  <span style={{ color: project.color, fontSize: '13px', fontWeight: 600, fontFamily: 'Outfit', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {project.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#F1F5F9', marginBottom: '16px', letterSpacing: '-0.5px' }}>
                  {project.title}
                </h3>

                <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
                  {project.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: '#94A3B8',
                      fontSize: '12px',
                      fontWeight: 500,
                      padding: '4px 12px',
                      borderRadius: '50px',
                    }}>{t}</span>
                  ))}
                </div>

                <button style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  border: `1px solid ${project.color}`,
                  color: project.color,
                  padding: '10px 22px',
                  borderRadius: '50px',
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: 'fit-content',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${project.color}15`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${project.color}30`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  View Case Study <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr !important;
          }
          .project-row > div {
            order: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
