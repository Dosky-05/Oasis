'use client';
import Image from 'next/image';
import { ExternalLink, Tag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
  {
    image: '/Studyapp.png',
    tag: 'AI Integration',
    title: 'StudyForge',
    desc: 'An AI-powered study assistant that helps students learn smarter, generating study plans, quizzes and summaries.',
    tech: ['React.js', 'Tailwind CSS', 'PostgreSQL'],
    color: '#F472B6',
    link: 'https://study-forge-chi.vercel.app/',
  },
  {
    image: '/caraapp.png',
    tag: 'Web Development',
    title: 'CaraStore',
    desc: 'A full-featured clothing brand e-commerce site with product pages, cart functionality, and a polished multi-page layout.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js'],
    color: '#00D4AA',
    link: 'https://cara-store-pi.vercel.app/',
  },
];

export default function Work() {
  return (
    <section id="work" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb orb-teal" style={{ width: '400px', height: '400px', left: '-100px', bottom: '0', position: 'absolute', opacity: 0.5 }} />

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
              Featured Work
            </div>
            Projects we're{' '}
            <span className="gradient-text">proud of</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            A glimpse into work that made clients' jaws drop.
          </p>
        </motion.div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {projects.map((project, i) => (
            <motion.div
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

              // Scroll-triggered entry — alternates left/right
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}

              // Hover lift
              whileHover={{
                y: -6,
                boxShadow: `0 24px 56px rgba(0,0,0,0.45)`,
                borderColor: `${project.color}35`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${project.color}35`;
                e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.4)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image */}
              <motion.div
                style={{
                  order: i % 2 === 0 ? 0 : 1,
                  position: 'relative',
                  minHeight: '320px',
                  overflow: 'hidden',
                }}
                initial={{ scale: 1.08, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
              </motion.div>

              {/* Content */}
              <motion.div
                style={{
                  order: i % 2 === 0 ? 1 : 0,
                  padding: '48px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Tag */}
                <motion.div
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
                >
                  <Tag size={14} color={project.color} />
                  <span style={{
                    color: project.color,
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: 'Outfit',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    {project.tag}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  style={{ fontSize: '28px', fontWeight: 800, color: '#F1F5F9', marginBottom: '16px', letterSpacing: '-0.5px' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
                >
                  {project.desc}
                </motion.p>

                {/* Tech tags */}
                <motion.div
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
                >
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
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.65, ease: 'easeOut' }}
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <span
                      className="case-btn"
                      style={{
                        border: `1px solid ${project.color}`,
                        color: project.color,
                        '--hover-color': project.color,
                      } as React.CSSProperties}
                    >
                      View Case Study <ExternalLink size={14} />
                    </span>
                  </Link>
                </motion.div>

              </motion.div>
            </motion.div>
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

        .case-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          padding: 10px 22px;
          border-radius: 50px;
          font-family: 'Outfit';
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: fit-content;
          position: relative;
        }

        .case-btn:hover {
          background: color-mix(in srgb, var(--hover-color) 15%, transparent);
          box-shadow: 0 0 20px var(--hover-color);
          transform: translateY(-2px);
        }

        .case-btn:active {
          transform: scale(0.96);
        }
      `}</style>
    </section>
  );
}
