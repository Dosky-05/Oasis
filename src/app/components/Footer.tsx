'use client';
import { AtSign, Code2, Globe, Send } from 'lucide-react';

const footerLinks = {
  Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Brand Identity', 'SEO & Growth', 'AI Integration'],
  Company: ['About Us', 'Our Work', 'Meet the Team', 'Blog', 'Careers'],
  Resources: ['Case Studies', 'Process', 'Pricing', 'FAQ', 'Contact'],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: '#060B18',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '72px 0 32px',
    }}>
      <div className="section-container">
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(3, 1fr)',
          gap: '48px',
          marginBottom: '64px',
        }} className="footer-grid">
          {/* Brand col */}
          <div>
          <div style={{ marginBottom: '20px' }}>
            <img
              src="/Logo.png"
              alt="Oasis"
              style={{ height: '40px', width: 'auto' }}
            />
          </div>

            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.7, marginBottom: '28px', maxWidth: '260px' }}>
              Where digital vision meets execution. Building products that scale and brands that endure.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: <Globe size={16} />, href: '#', label: 'Website' },
                { icon: <Send size={16} />, href: '#', label: 'Updates' },
                { icon: <Code2 size={16} />, href: '#', label: 'Projects' },
                { icon: <AtSign size={16} />, href: '#', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: '38px', height: '38px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#64748B',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,212,170,0.4)';
                    e.currentTarget.style.color = '#00D4AA';
                    e.currentTarget.style.background = 'rgba(0,212,170,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = '#64748B';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h6 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '13px', color: '#F1F5F9', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '20px' }}>
                {category}
              </h6>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s ease', display: 'flex', alignItems: 'center', gap: '4px' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4AA'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#64748B'; }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: '28px' }} />

        {/* Bottom bar */}
        <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
          <p style={{ color: '#475569', fontSize: '14px', margin: 0 }}>
            Copyright {year} Oasis Agency. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                style={{ color: '#475569', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#00D4AA'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569'; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
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
    </footer>
  );
}
