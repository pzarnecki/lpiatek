import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import data from './content.json';

// Simple Icons using SVG fragments
const HeartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);

const UserIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { hero, keywords, services, pricing, about, contact } = data;

  // Simple "routing" for Admin panel
  if (window.location.hash === '#admin') {
    return <AdminPanel initialData={data} />;
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      {/* Navigation - Pływające Menu */}
      <header className={`navbar-header ${scrolled ? 'scrolled glass' : ''}`}>
        <nav className="navbar container" style={{padding: scrolled ? '15px 20px' : '30px 20px', transition: 'var(--transition)'}}>
          <div className="logo">
            <span style={{fontWeight: 400}}>mgr <span style={{fontWeight: 800}}>Łukasz Piątek</span></span>
          </div>
          
          <div className="nav-links desktop-only">
            <a href="#home">Strona Główna</a>
            <a href="#services">Usługi</a>
            <a href="#pricing">Cennik</a>
            <a href="#about">O mnie</a>
            <a href="#contact" className="btn btn-secondary" style={{padding: '8px 20px'}}>Kontakt</a>
          </div>

          {/* Otwieranie Menu (Mobile) */}
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>

        {/* Wysuwane Menu Mobilne */}
        {isMenuOpen && (
          <motion.div 
            className="mobile-nav glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Strona Główna</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Usługi</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)}>Cennik</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>O mnie</a>
            <a href="#contact" className="btn btn-secondary" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
          </motion.div>
        )}
      </header>

      <div className="container" style={{marginTop: '100px'}}>
        {/* Hero */}
        <motion.section 
          id="home" 
          className="hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="hero-subtitle">{hero.subtitle}</h2>
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-content">{hero.description}</p>
          
          <div className="hero-tags">
            {keywords.map((kw, i) => (
              <span key={i} className="tag">{kw}</span>
            ))}
          </div>
          
          <div style={{display: 'flex', gap: '20px', marginTop: '20px'}}>
            <a href="#pricing" className="btn btn-primary">Sprawdź Ofertę</a>
            <a href="https://www.znanylekarz.pl/lukasz-piatek-2" target="_blank" rel="noreferrer" className="btn btn-secondary">Umów Wizytę</a>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section 
          id="services" 
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Jak mogę pomóc?</h2>
          <p className="section-subtitle">Specjalistyczna wsparcie dostosowane do Twoich unikalnych potrzeb w bezpiecznym, dyskretnym środowisku.</p>
          
          <motion.div className="cards" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((service) => (
              <motion.div 
                key={service.id} 
                className="card glass" 
                variants={fadeInUp}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02, 
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                  borderColor: "rgba(255, 255, 255, 0.25)"
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-icon">
                  {service.id === 'dzieci' ? <HeartIcon /> : <UserIcon />}
                </div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.description}</p>
                <a href="#pricing" className="btn btn-secondary" style={{width: '100%'}}>Szczegóły</a>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Pricing */}
        <motion.section 
          id="pricing" 
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Cennik Usług</h2>
          <p className="section-subtitle">{pricing.intro}</p>
          
          <div className="pricing-wrapper glass" style={{borderRadius: 'var(--radius-card)', padding: '20px 0'}}>
            {pricing.items.map((item, idx) => (
              <div key={idx} className="pricing-item">
                <div className="price-details">
                  <span className="price-name">{item.name}</span>
                  <span className="price-duration">Czas trwania: {item.duration}</span>
                </div>
                <div className="price-value">{item.price}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* About */}
        <motion.section 
          id="about" 
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="about-grid glass" style={{padding: '60px', borderRadius: 'var(--radius-card)'}}>
            <div className="about-img">
              <img src="https://psychoterapiawroclaw.com.pl/images/41a861f963902c875ed8c429b38660e3_large.jpg" alt="mgr Łukasz Piątek" onError={(e) => { e.target.onerror = null; e.target.src = "https://psychoterapiawroclaw.com.pl/images/e2893576-0aa9-47d6-9ece-d5a51bd4d98e.jpg"; }} />
            </div>
            <div className="about-content">
              <h3>{about.name}</h3>
              <h4>Psycholog, Psychoterapeuta</h4>
              <p><strong>{about.short_desc}</strong></p>
              <p style={{fontSize: '0.95rem', opacity: 0.8}}>{about.long_desc}</p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">Gabinet</h3>
              <p className="footer-text logo"><span style={{fontWeight: 400}}>mgr <span style={{fontWeight: 800}}>Łukasz Piątek</span></span></p>
              <p className="footer-text">{about.short_desc.split('.')[0]}.</p>
            </div>
            <div>
              <h3 className="footer-title">Kontakt</h3>
              <p className="footer-text">📍 {contact.address}</p>
              <p className="footer-text">📞 <a href={`tel:${contact.phone?.replace(/\s/g, '')}`}>{contact.phone}</a></p>
              <p className="footer-text">✉️ <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
            </div>
            <div>
              <h3 className="footer-title">Online</h3>
              <p className="footer-text">{contact.online_note}</p>
              <div style={{marginTop: '20px'}}>
                <a href="#admin" style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.2)'}}>Panel Administracyjny</a>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center', paddingTop: '30px', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
            © {new Date().getFullYear()} {about.name}. Wszelkie prawa zastrzeżone. Design: Nowoczesny Gabinet 2026.
          </div>
        </div>
      </footer>

      {/* ZnanyLekarz Floating Widget */}
      <motion.a 
        href="https://www.znanylekarz.pl/lukasz-piatek-2"
        target="_blank"
        rel="noreferrer"
        className="booking-widget"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(0, 166, 156, 0.7)", translateY: -5 }}
      >
        <div className="booking-widget-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
        </div>
        Umów wizytę
      </motion.a>
    </>
  );
}

// Simple Admin Component
function AdminPanel({ initialData }) {
  const [jsonData, setJsonData] = useState(JSON.stringify(initialData, null, 2));

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonData);
    alert('Skopiowano! Możesz teraz podmienić zawartość pliku src/content.json na serwerze.');
  };

  return (
    <div className="container">
      <div className="admin-panel glass">
        <div className="admin-header">
          <h2>Panel Sterowania Treścią</h2>
          <a href="#" className="btn btn-secondary">Wróć do strony</a>
        </div>
        <p style={{marginBottom: '20px', color: 'var(--text-secondary)'}}>
          Edytuj poniższy kod JSON, aby zmienić treści na stronie. Po zakończeniu skopiuj wynik i zaktualizuj plik <code>content.json</code> u hostingodawcy. 
          Docelowo wdrożymy tu wizualne formularze.
        </p>
        <textarea 
          className="admin-textarea"
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
        />
        <button onClick={copyToClipboard} className="btn btn-primary">Kopiuj Gotowy Plik JSON</button>
      </div>
    </div>
  );
}

export default App;
