import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking, VEHICLES } from '../context/BookingContext';

export default function Fleet() {
  const [filter, setFilter] = useState('All');
  const [filteredVehicles, setFilteredVehicles] = useState(VEHICLES);
  const { updateBooking } = useBooking();
  const navigate = useNavigate();

  const categories = ['All', ...new Set(VEHICLES.map(v => v.category))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredVehicles(VEHICLES);
    } else {
      setFilteredVehicles(VEHICLES.filter(v => v.category === filter));
    }
  }, [filter]);

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
            <div className="section-label">Sélection Marouazi</div>
            <h1 className="page-title">Notre <em>Flotte</em></h1>
            <p className="page-desc">Découvrez notre gamme de véhicules de confiance à Safi. Des citadines économiques aux SUV spacieux, tous révisés et nettoyés avant chaque location.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div className="filter-tabs">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-tab ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat === 'All' ? 'Tous les modèles' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-3">
            {filteredVehicles.map((car, i) => (
              <motion.div 
                className="vehicle-card" 
                key={car.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/fleet/${car.id}`}>
                  <div className="vehicle-img-wrap">
                    {car.badge && <span className="badge badge-gold vehicle-badge">{car.badge}</span>}
                    <img src={car.image} alt={car.name} loading="lazy" />
                  </div>
                  <div className="vehicle-body">
                    <div className="vehicle-category">{car.category}</div>
                    <h3 className="vehicle-name">{car.name}</h3>
                    
                    <div className="vehicle-specs">
                      <div className="spec-item">🔧 {car.specs.transmission}</div>
                      <div className="spec-item">⛽ {car.specs.fuel}</div>
                      <div className="spec-item">👥 {car.specs.seats} Pl.</div>
                    </div>
                    
                    <div className="vehicle-footer" style={{ flexDirection: 'column', gap: '0.75rem', alignItems: 'stretch' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div className="vehicle-price">
                          <span className="price-amount">{car.price} MAD</span>
                          <span className="price-period">/ jour</span>
                        </div>
                        <span style={{ fontSize: '11px', color: 'var(--white-50)' }}>Assurance incluse</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', width: '100%' }}>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            updateBooking({ vehicle: car, step: 2 });
                            navigate('/booking');
                          }}
                          className="btn btn-gold btn-sm"
                          style={{ justifyContent: 'center', fontSize: '11px', padding: '10px 0' }}
                        >
                          Réserver
                        </button>
                        <a
                          href={`https://wa.me/212621109846?text=Bonjour%20Marouazi%20Rent%20Cars%2C%20je%20souhaite%20r%C3%A9server%20la%20voiture%20%3A%20${encodeURIComponent(car.name)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-whatsapp btn-sm"
                          style={{ justifyContent: 'center', fontSize: '11px', padding: '10px 0', display: 'inline-flex', alignItems: 'center' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {filteredVehicles.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--white-50)' }}>
              Aucun véhicule disponible pour cette catégorie.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
