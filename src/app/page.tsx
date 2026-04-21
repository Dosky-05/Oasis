import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Services from '@/app/components/Services';
import Work from '@/app/components/Work';
import Process from '@/app/components/Process';
import Team from '@/app/components/Team';
import Testimonials from '@/app/components/Testimonials';
import Pricing from '@/app/components/Pricing';
import FAQ from '@/app/components/FAQ';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oasis — Digital Tech Agency',
  description: 'Oasis crafts premium digital experiences — web development, mobile apps, UI/UX design, and brand identity. Where digital vision meets execution.',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <div className="divider" />
        <section id="services">
          <Services />
        </section>
        <div className="divider" />
        <section id="work">
          <Work />
        </section>
        <div className="divider" />
        <section id="process">
          <Process />
        </section>
        <div className="divider" />
        <section id="team">
          <Team />
        </section>
        <div className="divider" />
        <section id="testimonials">
          <Testimonials />
        </section>
        <div className="divider" />
        <section id="pricing">
          <Pricing />
        </section>
        <div className="divider" />
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}