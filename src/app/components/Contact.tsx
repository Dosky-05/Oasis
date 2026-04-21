'use client';
import { useState } from 'react';
import { Mail, ArrowRight, MessageCircle, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', project: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_68fo1fl",
        "template_cxgzu5c",
        {
          name: formData.name,
          email: formData.email,
          project: formData.project,
          budget: formData.budget,
          message: formData.message,
        },
        "eHzQRPWSqYycwQkaA"
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

  const contactItems = [
    { icon: <Mail size={18} />, label: 'Email', value: 'oasiscodes07@gmail.com', color: '#00D4AA' },
    { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: '+234 (816) 605-9298', color: '#00A8FF', href: 'https://wa.me/2348166059298' },
    { icon: <MapPin size={18} />, label: 'Based in', value: 'Remote - Worldwide', color: '#A78BFA' },
    { icon: <Clock size={18} />, label: 'Response time', value: '< 24 hours', color: '#F59E0B' },
  ];

  // Stagger variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>

      {/* ── CTA Banner ── */}
      <motion.div
        style={{
          background: 'linear-gradient(135deg, rgba(0,212,170,0.08) 0%, rgba(0,168,255,0.05) 100%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '80px 0',
          marginBottom: '80px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="orb orb-teal" style={{ width: '600px', height: '400px', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', position: 'absolute' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Headline */}
          <motion.h2
            style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Ready to build something{' '}
            <span className="gradient-text">extraordinary?</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '500px', margin: '0 auto 36px', lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
          >
            Get in touch with us to bring your Digital vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.34, ease: 'easeOut' }}
          >
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
          </motion.div>
        </div>
      </motion.div>

      {/* ── Form Section ── */}
      <div className="section-container" id="contact-form">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'start' }}>

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="section-tag"
              style={{ marginBottom: '20px' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
            >
              Get In Touch
            </motion.div>

            <motion.h3
              style={{ fontSize: '36px', fontWeight: 800, marginBottom: '20px', color: '#F1F5F9', letterSpacing: '-1px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Let's start a conversation
            </motion.h3>

            <motion.p
              style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '40px' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26, ease: 'easeOut' }}
            >
              Tell us about your project. The more detail you share, the better we can tailor our response.
            </motion.p>

            {/* Contact items — staggered */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              {contactItems.map(item => (
                <motion.div
                  key={item.label}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}
                  variants={itemVariants}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: item.color, flexShrink: 0,
                    }}
                    whileHover={{
                      scale: 1.12,
                      background: `${item.color}28`,
                      transition: { duration: 0.25 },
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 500, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '15px', color: '#F1F5F9', fontWeight: 500 }}>
                      {'href' in item ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#F1F5F9', textDecoration: 'none' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#00A8FF'}
                          onMouseLeave={e => e.currentTarget.style.color = '#F1F5F9'}
                        >
                          {item.value}
                        </a>
                      ) : item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="glass-card"
            style={{ padding: '40px', borderRadius: '20px' }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                /* ── Success State ── */
                <motion.div
                  key="success"
                  style={{ textAlign: 'center', padding: '48px 0' }}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    style={{ fontSize: '48px', marginBottom: '16px' }}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    🎉
                  </motion.div>
                  <motion.h4
                    style={{ fontSize: '24px', fontWeight: 700, color: '#F1F5F9', marginBottom: '12px' }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25, ease: 'easeOut' }}
                  >
                    Message sent!
                  </motion.h4>
                  <motion.p
                    style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '28px' }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.33, ease: 'easeOut' }}
                  >
                    We'll review your brief and get back to you within 24 hours.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.41, ease: 'easeOut' }}
                  >
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
                  </motion.div>
                </motion.div>

              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.div variants={formFieldVariants}>
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
                    </motion.div>
                    <motion.div variants={formFieldVariants}>
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
                    </motion.div>
                  </motion.div>

                  {[
                    {
                      id: 'contact-project', label: 'Project Type', key: 'project',
                      type: 'select', options: [
                        { value: '', label: 'Select a service...' },
                        { value: 'web', label: 'Web Development' },
                        { value: 'mobile', label: 'Mobile App' },
                        { value: 'design', label: 'UI/UX Design' },
                        { value: 'brand', label: 'Brand Identity' },
                        { value: 'ai', label: 'AI Integration' },
                        { value: 'other', label: 'Other' },
                      ],
                    },
                    {
                      id: 'contact-budget', label: 'Estimated Budget', key: 'budget',
                      type: 'select', options: [
                        { value: '', label: 'Select a range...' },
                        { value: '1k-3k', label: '$1,000 – $3,000' },
                        { value: '3k-7k', label: '$3,000 – $7,000' },
                        { value: '7k-15k', label: '$7,000 – $15,000' },
                        { value: '15k+', label: '$15,000+' },
                        { value: 'custom', label: "Let's discuss" },
                      ],
                    },
                  ].map((field, i) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                    >
                      <label style={{ display: 'block', color: '#94A3B8', fontSize: '13px', fontWeight: 500, marginBottom: '8px' }}>{field.label}</label>
                      <select
                        id={field.id}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => e.target.style.borderColor = 'rgba(0,212,170,0.4)'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      >
                        {field.options.map(opt => (
                          <option key={opt.value} value={opt.value} style={{ background: '#111827' }}>{opt.label}</option>
                        ))}
                      </select>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.26, ease: 'easeOut' }}
                  >
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
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.34, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    <button type="submit" className="btn-primary" id="contact-submit" style={{ fontSize: '16px', marginTop: '8px', width: '100%' }}>
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        Send Your Brief <ArrowRight size={18} />
                      </span>
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

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
