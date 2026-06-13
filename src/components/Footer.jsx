import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link to="/" className="logo">
              <div className="logo-icon">M</div>
              <span>MAROUAZI</span>
            </Link>
            <p className="footer-brand-desc">
              L'excellence de la location de voitures à Safi. Des véhicules de confiance, un service sur-mesure et une assistance 24h/7 pour tous vos déplacements au Maroc.
            </p>
            <div className="footer-rating" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1rem 0', color: 'var(--gold)' }}>
              <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>4.8 ⭐</span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>(46 avis Google)</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">X</a>
              <a href="#" className="social-link">IN</a>
            </div>
          </div>
          
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links">
              <Link to="/fleet" className="footer-link">Notre Flotte</Link>
              <Link to="/services" className="footer-link">Services Premium</Link>
              <Link to="/corporate" className="footer-link">Espace Corporate</Link>
              <Link to="/locations" className="footer-link">Nos Agences</Link>
              <Link to="/faq" className="footer-link">Questions Fréquentes</Link>
            </div>
          </div>
          
          <div>
            <h4 className="footer-col-title">Informations</h4>
            <div className="footer-links">
              <Link to="/about" className="footer-link">À Propos</Link>
              <Link to="/faq" className="footer-link">Questions Fréquentes</Link>
              <Link to="/contact" className="footer-link">Contactez-nous</Link>
              <Link to="/terms" className="footer-link">Conditions Générales</Link>
              <Link to="/privacy" className="footer-link">Politique de Confidentialité</Link>
            </div>
          </div>
          
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-links">
              <div className="flex items-start gap-2 text-sm text-white-70 mb-2">
                <MapPin size={16} className="text-gold mt-1 flex-shrink-0" />
                <span>Hamam Istambul, 32 R Smara QU, Safi 46000, Maroc</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white-70 mb-2">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span>+212 621-109846</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white-70 mb-4">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span>marouazirentcars@gmail.com</span>
              </div>
              <Link to="/booking" className="btn btn-gold btn-sm">Réserver</Link>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Marouazi Rent Cars. Tous droits réservés.</p>
          <div className="flex gap-4">
            <span>Design by Antigravity AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
