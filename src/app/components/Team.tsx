'use client';
import Image from 'next/image';
import { Code2, Globe, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Joshua Ajisafe',
    role: 'Founder & Technical Director',
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
    bio: 'Cross-platform mobile developer with hands-on experience in Kotlin',
    socials: { site: '#', updates: '#', code: '#' },
    color: '#A78BFA',
  },
];

// Stagger container
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Each card fades up
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

// Image zoom in
const imageVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

// Text cascade
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

export default function Team() {
  return (
    <section id="team" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div
        className="orb orb-amber"
        style={{ width: '400px', height: '400px', left: '-100px', top: '20%', position: 'absolute' }}
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
              Meet the Team
            </div>
            The people behind{' '}
            <span className="gradient-text">the magic</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            A tight-knit crew of creatives and engineers passionate about your success.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(255px, 1fr))',
            gap: '24px',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="glass-card"
              style={{ padding: '0', overflow: 'hidden', textAlign: 'center' }}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: `0 24px 56px rgba(0,0,0,0.4), 0 0 0 1px ${member.color}25`,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
            >
              {/* Image */}
              <motion.div
                style={{ position: 'relative', height: '220px', overflow: 'hidden' }}
                variants={imageVariants}
              >
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
              </motion.div>

              {/* Content */}
              <div style={{ padding: '24px 24px 28px' }}>

                {/* Name */}
                <motion.h4
                  style={{ fontSize: '19px', fontWeight: 700, color: '#F1F5F9', marginBottom: '4px' }}
                  variants={textVariants}
                >
                  {member.name}
                </motion.h4>

                {/* Role */}
                <motion.p
                  style={{ color: member.color, fontSize: '13px', fontWeight: 600, fontFamily: 'Outfit', marginBottom: '14px' }}
                  variants={textVariants}
                >
                  {member.role}
                </motion.p>

                {/* Bio */}
                <motion.p
                  style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '20px' }}
                  variants={textVariants}
                >
                  {member.bio}
                </motion.p>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
