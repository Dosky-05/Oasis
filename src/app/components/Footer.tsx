'use client';
import { AtSign, Code2, Globe, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'Brand Identity', href: '#services' },
    { label: 'SEO & Growth', href: '#services' },
    { label: 'AI Integration', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#hero' },
    { label: 'Our Work', href: '#work' },
    { label: 'Meet the Team', href: '#team' },
  ],
  Resources: [
    { label: 'Case Studies', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      style={{
        background: '#060B18',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '72px 0 32px',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="section-container">

        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(3, 1fr)',
          gap: '48px',
          marginBottom: '64px',
        }} className="footer-grid">

          {/* Brand col */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <div style={{ marginBottom: '20px' }}>
              <img
                src="/Logo.png"
                alt="Oasis"
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            <p style={{
              color: '#64748B',
              fontSize: '15px',
              lineHeight: 1.7,
              marginBottom: '28px',
              maxWidth: '260px',
            }}>
              Where digital vision meets execution. Building products that scale and brands that endure.
            </p>
          </motion.div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([category, links], colIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2 + colIndex * 0.1,
                ease: 'easeOut',
              }}
            >
              <h6 style={{
                fontFamily: 'Outfit',
                fontWeight: 700,
                fontSize: '13px',
                color: '#F1F5F9',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '20px',
              }}>
                {category}
              </h6>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        color: '#64748B',
                        textDecoration: 'none',
                        fontSize: '14px',
                        transition: 'color 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4AA'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B'; }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider — wipe in */}
        <motion.div
          className="divider"
          style={{ marginBottom: '28px' }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        />

        {/* Bottom bar */}
        <motion.div
          className="footer-bottom"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
        >
          <p style={{ color: '#475569', fontSize: '14px', margin: 0 }}>
            &copy; {year} Oasis Agency. All rights reserved.
          </p>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 56px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 56px !important;
          }
        }
      `}</style>
    </motion.footer>
  );
}
