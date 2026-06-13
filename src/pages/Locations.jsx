import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Locations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locations = [
    {
      city: 'Safi (Siège)',
      address: 'Hamam Istambul, 32 R Smara QU, Safi 46000',
      phone: '+212 621-109846',
      hours: 'Lun-Dim: 08:00 - 19:00',
      mapBg: './images/carbnb_hero_bg.png'
    },
    {
      city: 'Aéroport Marrakech Menara (RAK)',
      address: 'Service Livraison VIP - Terminal des Arrivées',
      phone: '+212 621-109846',
      hours: '7j/7 - 24h/24 (Sur réservation préalable)',
      mapBg: './images/carbnb_hero_bg.png'
    },
    {
      city: 'Aéroport Essaouira Mogador (ESU)',
      address: 'Service Livraison VIP - Terminal des Arrivées',
      phone: '+212 621-109846',
      hours: '7j/7 - 24h/24 (Sur réservation préalable)',
      mapBg: './images/carbnb_hero_bg.png'
    }
  ];

  return (
    <div className="page-transition-wrapper">
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label">Nos Points de Retrait</div>
            <h1 className="page-title">Toujours <em>proches</em> de vous</h1>
            <p className="page-desc">Retrouvez nos véhicules à notre agence de Safi ou optez pour notre service de livraison directe aux aéroports régionaux.</p>
          </motion.div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid-3">
            {locations.map((loc, i) => (
              <motion.div 
                key={i}
                className="location-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="location-map" style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img src={loc.mapBg} alt={`Map ${loc.city}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.9)' }} />
                </div>
                <div className="location-body" style={{ padding: '25px', backgroundColor: 'var(--card-bg)', border: '1px solid #eeeeee', borderTop: 'none', borderBottomLeftRadius: 'var(--radius-sm)', borderBottomRightRadius: 'var(--radius-sm)' }}>
                  <h3 className="location-city" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--teal-primary)', marginBottom: '15px' }}>{loc.city}</h3>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--white-70)', fontSize: '14px', marginBottom: '12px' }}>
                    <MapPin size={18} style={{ color: 'var(--gold-accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span>{loc.address}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--white-70)', fontSize: '14px', marginBottom: '12px' }}>
                    <Phone size={18} style={{ color: 'var(--gold-accent)', flexShrink: 0 }} />
                    <span>{loc.phone}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--white-70)', fontSize: '14px' }}>
                    <Clock size={18} style={{ color: 'var(--gold-accent)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ whiteSpace: 'pre-line' }}>{loc.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            style={{ marginTop: '60px', backgroundColor: '#f0f3f7', border: '1px solid #eeeeee', borderRadius: 'var(--radius-lg)', padding: '40px', textAlign: 'center' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '800', color: 'var(--teal-primary)', marginBottom: '15px' }}>Service de Livraison Personnalisée</h2>
            <p style={{ color: 'var(--white-70)', fontSize: '16px', maxWidth: '700px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
              Pour votre confort, notre équipe se déplace pour vous livrer votre voiture directement à votre hôtel ou domicile sur Safi et les régions.
            </p>
            <a href="https://wa.me/212621109846?text=Bonjour%20Marouazi%20Rent%20Cars%2C%20je%20souhaite%20r%C3%A9server%20une%20livraison%20de%20voiture." target="_blank" rel="noreferrer" className="btn btn-gold">
              Commander une livraison via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
