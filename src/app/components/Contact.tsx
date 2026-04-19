'use client';
import { useState } from 'react';
import { Mail, ArrowRight, MessageCircle, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          project: formData.project,
          budget: formData.budget,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setSubmitted(true);
    } catch (error) {
  alert('Something went wrong. Please try again.');
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    padding: '14px 18px',
    color: '#F1F5F9',
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box' as const,
  };

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Full bleed dark CTA banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(0,168,255,0.05) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '80px 0',
        marginBottom: '80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="orb orb-teal" style={{ width: '600px', height: '400px', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', position: 'absolute' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Ready to build something{' '}
            <span className="gradient-text">extraordinary?</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.7 }}>
            Join 50+ brands who chose Oasis to bring their digital vision to life.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hello@oasis.agency">
              <button className="btn-primary" id="cta-email-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Mail size={18} /> oasiscodes07@gmail.com
                </span>
              </button>
            </a>
            <a href="#contact-form">
              <button className="btn-outline" id="cta-form-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
                Send us a brief <ArrowRight size={16} />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="section-container" id="contact-form">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start' }}>

          {/* Left info */}
          <div>
            <div className="section-tag" style={{ marginBottom: '20px' }}>Get In Touch</div>
            <h3 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '20px', color: '#F1F5F9', letterSpacing: '-1px' }}>
              Let's start a conversation
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '40px' }}>
              Tell us about your project. The more detail you share, the better we can tailor our response.
            </p>

            {[
              { icon: <Mail size={18} />, label: 'Email', value: 'oasiscodes07@gmail.com', color: '#00D4AA' },
              { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: '+234 (816) 605-9298', color: '#00A8FF', href: 'https://wa.me/2348166059298' },
              { icon: <MapPin size={18} />, label: 'Based in', value: 'Remote - Worldwide', color: '#A78BFA' },
              { icon: <Clock size={18} />, label: 'Response time', value: '< 24 hours', color: '#F59E0B' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: item.color, flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 500, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.label}</div>
                 <div style={{ fontSize: '15px', color: '#F1F5F9', fontWeight: 500 }}>
                    {'href' in item ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: '#F1F5F9', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#00A8FF'}
                        onMouseLeave={e => e.currentTarget.style.color = '#F1F5F9'}
                      >
                        {item.value}
                      </a>
                    ) : item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right form */}
          <div className="glass-card" style={{ padding: '40px', borderRadius: '20px' }}>
            {submitted ? (
             <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#F1F5F9', marginBottom: '12px' }}>
                  Message sent!
                </h4>
                <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}>
                  We'll review your brief and get back to you within 24 hours.
                </p>
                <button
                  className="btn-outline"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', project: '', budget: '', message: '' });
                  }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', color: '#94A3B8', fontSize: '13px', fontWeight: 500, marginBottom: '8px' }}>Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Alex Johnson"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(0,212,170,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#94A3B8', fontSize: '13px', fontWeight: 500, marginBottom: '8px' }}>Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(0,212,170,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#94A3B8', fontSize: '13px', fontWeight: 500, marginBottom: '8px' }}>Project Type</label>
                  <select
                    id="contact-project"
                    value={formData.project}
                    onChange={e => setFormData({ ...formData, project: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,212,170,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  >
                    <option value="" style={{ background: '#111827' }}>Select a service...</option>
                    <option value="web" style={{ background: '#111827' }}>Web Development</option>
                    <option value="mobile" style={{ background: '#111827' }}>Mobile App</option>
                    <option value="design" style={{ background: '#111827' }}>UI/UX Design</option>
                    <option value="brand" style={{ background: '#111827' }}>Brand Identity</option>
                    <option value="ai" style={{ background: '#111827' }}>AI Integration</option>
                    <option value="other" style={{ background: '#111827' }}>Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#94A3B8', fontSize: '13px', fontWeight: 500, marginBottom: '8px' }}>Estimated Budget</label>
                  <select
                    id="contact-budget"
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,212,170,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  >
                    <option value="" style={{ background: '#111827' }}>Select a range...</option>
                    <option value="1k-3k" style={{ background: '#111827' }}>$1,000 – $3,000</option>
                    <option value="3k-7k" style={{ background: '#111827' }}>$3,000 – $7,000</option>
                    <option value="7k-15k" style={{ background: '#111827' }}>$7,000 – $15,000</option>
                    <option value="15k+" style={{ background: '#111827' }}>$15,000+</option>
                    <option value="custom" style={{ background: '#111827' }}>Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#94A3B8', fontSize: '13px', fontWeight: 500, marginBottom: '8px' }}>Tell us about your project *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Describe your project, goals, timeline, and anything else we should know..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,212,170,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>

                <button type="submit" className="btn-primary" id="contact-submit" style={{ fontSize: '16px', marginTop: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    Send Your Brief <ArrowRight size={18} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .section-container > div {
            grid-template-columns: 1fr !important;
          }
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
