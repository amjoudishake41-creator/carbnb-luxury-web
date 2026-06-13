import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
      {/* TOP INFORMATION BAR (NahlaCar style) */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-info">
            <div className="top-bar-item">
              <Clock size={14} />
              <span>Lundi - Dimanche: 08:00 - 19:00</span>
            </div>
            <div className="top-bar-item">
              <MapPin size={14} />
              <span>Hamam Istambul, Safi 46000</span>
            </div>
            <div className="top-bar-item">
              <Phone size={14} />
              <a href="tel:+212621109846">+212 621-109846</a>
            </div>
          </div>
          <div className="top-bar-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" style={{ fontSize: '11px', fontWeight: '700', fontFamily: 'var(--font-display)' }}>IG</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" style={{ fontSize: '11px', fontWeight: '700', fontFamily: 'var(--font-display)' }}>FB</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="navbar">
        {/* Navbar Top Section: Logo & Call Action */}
        <div className="navbar-top">
          <div className="container navbar-top-inner">
            <Link to="/" className="logo">
              <div className="logo-icon">M</div>
              <span>MAROUAZI <em>RENT CARS</em></span>
            </Link>

            <a href="tel:+212621109846" className="navbar-call-btn">
              <Phone size={16} fill="currentColor" />
              <span>+212 621-109846</span>
            </a>

            <button 
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Navbar Bottom Section: Links Menu */}
        <div className="navbar-bottom">
          <div className="container navbar-bottom-inner">
            <div className="nav-links">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
              <Link to="/fleet" className={`nav-link ${location.pathname === '/fleet' ? 'active' : ''}`}>Nos Véhicules</Link>
              <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>À Propos</Link>
              <Link to="/locations" className={`nav-link ${location.pathname === '/locations' ? 'active' : ''}`}>Nos Agences</Link>
              <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}>FAQ</Link>
              <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            </div>
            <Link to="/booking" className="btn btn-gold btn-sm">Réserver en ligne</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-nav">
            <div className="flex-between" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <Link to="/" className="logo">
                <div className="logo-icon">M</div>
                <span style={{ color: 'white' }}>MAROUAZI</span>
              </Link>
              <button onClick={() => setMenuOpen(false)} style={{ color: 'white' }}><X size={28} /></button>
            </div>
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/fleet" className="nav-link">Nos Véhicules</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/about" className="nav-link">À Propos</Link>
            <Link to="/locations" className="nav-link">Nos Agences</Link>
            <Link to="/faq" className="nav-link">FAQ</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/booking" className="btn btn-gold" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}>
              Réserver Maintenant
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
