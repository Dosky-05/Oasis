'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s ease;
        }

        .navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .navbar-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #00D4AA, #00A8FF);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 16px rgba(0, 212, 170, 0.4);
        }

        .navbar-logo-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: #F1F5F9;
          letter-spacing: -0.5px;
        }

        .navbar-desktop {
          display: flex;
          align-items: center;
          gap: 36px;
          flex: 1;
          justify-content: center;
        }

        .navbar-nav-link {
          color: #94A3B8;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .navbar-nav-link:hover {
          color: #00D4AA;
        }

        .navbar-cta-desktop {
          display: flex;
          align-items: center;
        }

        .navbar-menu-btn {
          display: none;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          width: 44px;
          height: 44px;
          cursor: pointer;
          color: #F1F5F9;
          padding: 0;
        }

        .navbar-menu-btn:active {
          background: rgba(255, 255, 255, 0.1);
        }

        .navbar-mobile-menu {
          display: none;
          flex-direction: column;
          gap: 2px;
          background: rgba(10, 15, 30, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 16px 40px 24px;
          animation: slideDown 0.3s ease-out forwards;
          position: relative;
          z-index: 999;
        }

        .navbar-mobile-link {
          display: block;
          padding: 12px 16px;
          color: #94A3B8;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          font-size: 16px;
          border-radius: 10px;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .navbar-mobile-link:active,
        .navbar-mobile-link:hover {
          color: #00D4AA;
          background: rgba(0, 212, 170, 0.07);
        }

        .navbar-mobile-cta {
          width: 100%;
          background: linear-gradient(135deg, #00D4AA, #00A8FF);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 12px;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .navbar-inner {
            padding: 0 20px;
          }

          .navbar-desktop {
            display: none !important;
          }

          .navbar-cta-desktop {
            display: none !important;
          }

          .navbar-menu-btn {
            display: flex;
          }

          .navbar-mobile-menu.open {
            display: flex;
          }

          .navbar-container {
            background: rgba(10, 15, 30, 0.95) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          }
        }

        @media (min-width: 769px) {
          .navbar-menu-btn {
            display: none !important;
          }

          .navbar-mobile-menu {
            display: none !important;
          }
        }
      `}</style>

      <header
        className="navbar-container"
        style={{
          background: scrolled ? 'rgba(10,15,30,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <a href="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <span style={{ color: '#fff', fontFamily: 'Outfit', fontWeight: 800, fontSize: '18px' }}>O</span>
            </div>
            <span className="navbar-logo-text">Oasis</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="navbar-desktop">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="navbar-nav-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="#contact" className="navbar-cta-desktop">
            <button
              style={{
                background: 'linear-gradient(135deg, #00D4AA, #00A8FF)',
                color: '#fff',
                fontFamily: 'Outfit',
                fontWeight: 600,
                padding: '14px 32px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(-2px)';
                target.style.boxShadow = '0 10px 30px rgba(0,212,170,0.3)';
              }}
              onMouseLeave={e => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = 'none';
              }}
            >
              Start a Project
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="navbar-menu-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Menu clicked, current state:', mobileOpen);
              setMobileOpen(prev => !prev);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Menu touched, current state:', mobileOpen);
              setMobileOpen(prev => !prev);
            }}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            style={{
              pointerEvents: 'auto',
              touchAction: 'manipulation',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
            }}
          >
            {mobileOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="navbar-mobile-menu open">
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="navbar-mobile-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="#contact" onClick={handleLinkClick}>
              <button className="navbar-mobile-cta">
                Start a Project
              </button>
            </a>
          </div>
        )}
      </header>
    </>
  );
}
