import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Shield, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useBooking, VEHICLES } from '../context/BookingContext';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const statsRef = useRef(null);
  const navigate = useNavigate();
  const { booking, updateBooking } = useBooking();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.to('.hero-eyebrow', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
        .to('.hero-title', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.6')
        .to('.hero-subtitle', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.8')
        .to('.hero-ctas', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .to('.hero-stats', { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.4');

      // Parallax bg
      gsap.to('.hero-bg img', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
      
      // Reveal items
      gsap.utils.toArray('.reveal-up').forEach(item => {
        gsap.fromTo(item, 
          { y: 50, opacity: 0 },
          { 
            y: 0, opacity: 1, duration: 1, ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  const featuredVehicles = VEHICLES.slice(0, 3);

  return (
    <div className="page-transition-wrapper">
      {/* HERO SECTION */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <img 
            src="./images/carbnb_opel_astra.png" 
            alt="Marouazi Rent Cars - Luxury and trust car hire Safi" 
            loading="lazy" 
          />
        </div>
        
        <div className="container hero-content">
          <div className="hero-eyebrow">Votre Partenaire de Confiance</div>
          <h1 className="hero-title">Location de Voitures <em>Sûres</em> à Safi & Aéroports.</h1>
          <p className="hero-subtitle">
            Profitez de nos véhicules récents et rigoureusement entretenus. Livraison personnalisée à Safi et aux aéroports de Marrakech, Essaouira et Casablanca.
          </p>
          <div className="hero-ctas">
            <Link to="/booking" className="btn btn-gold btn-lg">Réserver maintenant</Link>
            <a 
              href="https://wa.me/212621109846?text=Bonjour%20Marouazi%20Rent%20Cars%2C%20je%20souhaite%20r%C3%A9server%20un%20v%C3%A9hicule." 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-whatsapp btn-lg"
            >
              Contact WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div>
            <div className="hero-stat-num">4.8 ⭐</div>
            <div className="hero-stat-label">Note Google Maps (46 avis)</div>
          </div>
          <div>
            <div className="hero-stat-num">100%</div>
            <div className="hero-stat-label">Clients Satisfaits</div>
          </div>
        </div>

        <div className="scroll-hint">
          <span>Découvrir</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* QUICK BOOKING */}
      <div className="container relative z-10">
        <div className="booking-widget reveal-up">
          <div className="widget-field">
            <label>Lieu de départ</label>
            <select 
              value={booking.pickupLocation} 
              onChange={e => updateBooking({ pickupLocation: e.target.value, dropoffLocation: e.target.value })}
            >
              <option value="Safi (Agence Centre / Gare)">Safi (Agence Centre / Gare)</option>
              <option value="Aéroport Marrakech Ménara (RAK)">Aéroport Marrakech (RAK)</option>
              <option value="Aéroport Essaouira Mogador (ESU)">Aéroport Essaouira (ESU)</option>
              <option value="Aéroport Mohammed V - Casablanca (CMN)">Aéroport Casablanca (CMN)</option>
            </select>
          </div>
          <div className="widget-field">
            <label>Date de départ</label>
            <input 
              type="date" 
              value={booking.pickupDate} 
              onChange={e => updateBooking({ pickupDate: e.target.value })} 
            />
          </div>
          <div className="widget-field">
            <label>Date de retour</label>
            <input 
              type="date" 
              value={booking.returnDate} 
              onChange={e => updateBooking({ returnDate: e.target.value })} 
            />
          </div>
          <Link to="/booking" className="btn btn-gold" style={{ height: '48px', display: 'flex', alignItems: 'center' }}>
            Rechercher
          </Link>
        </div>
      </div>

      {/* FEATURED FLEET */}
      <section className="section" ref={featuredRef}>
        <div className="container">
          <div className="flex-between reveal-up" style={{ marginBottom: 'var(--space-12)' }}>
            <div>
              <div className="section-label">Notre Flotte</div>
              <h2 className="section-title">Véhicules de <em>Confiance</em></h2>
            </div>
            <Link to="/fleet" className="btn btn-outline hide-mobile">Voir toute la flotte</Link>
          </div>

          <div className="grid-3">
            {featuredVehicles.map((car, i) => (
              <motion.div 
                className="vehicle-card" 
                key={car.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
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
                      <div className="spec-item">👥 {car.specs.seats} Places</div>
                    </div>
                    <div className="vehicle-footer">
                      <div className="vehicle-price">
                        <span className="price-amount">{car.price} MAD</span>
                        <span className="price-period">/ jour</span>
                      </div>
                      <button 
                        onClick={() => {
                          updateBooking({ vehicle: car, step: 2 });
                          navigate('/booking');
                        }}
                        className="btn btn-gold btn-sm"
                      >
                        Réserver
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="hide-desktop" style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
            <Link to="/fleet" className="btn btn-outline">Voir toute la flotte</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: 'var(--white-10)' }}>
        <div className="container">
          <div className="section-header center reveal-up">
            <div className="section-label">Pourquoi Marouazi</div>
            <h2 className="section-title">L'Expérience de <em>Confiance</em></h2>
            <p className="section-desc">Bien plus qu'une simple location, nous offrons un service client d'exception plébiscité par nos clients à Safi.</p>
          </div>

          <div className="grid-3">
            <div className="feature-card reveal-up">
              <div className="feature-icon"><Shield size={28} /></div>
              <h3 className="feature-title">Assurance & Clarté</h3>
              <p className="feature-desc">Tarifs transparents sans frais cachés. Options d'assurances complémentaires adaptées pour rouler sereinement.</p>
            </div>
            <div className="feature-card reveal-up" style={{ transitionDelay: '0.1s' }}>
              <div className="feature-icon"><Clock size={28} /></div>
              <h3 className="feature-title">Livraison VIP Aéroports</h3>
              <p className="feature-desc">Véhicule livré à la gare de Safi ou directement aux aéroports de Marrakech (RAK), Essaouira (ESU) et Casablanca (CMN).</p>
            </div>
            <div className="feature-card reveal-up" style={{ transitionDelay: '0.2s' }}>
              <div className="feature-icon"><CheckCircle size={28} /></div>
              <h3 className="feature-title">Service Client 4.8 ⭐</h3>
              <p className="feature-desc">Reconnu pour notre honnêteté, la propreté de nos véhicules et notre assistance clientèle disponible 24h/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal-up">
              <div className="section-label">Avis Clients</div>
              <h2 className="section-title">Ce qu'ils disent de <em>nous</em></h2>
              <p className="section-desc" style={{ marginBottom: 'var(--space-8)' }}>
                Notre engagement envers nos clients est notre plus belle fierté. Découvrez les retours d'expérience vérifiés sur Google Maps.
              </p>
              <div className="flex gap-4">
                <Link to="/testimonials" className="btn btn-outline">Voir tous les avis</Link>
              </div>
            </div>

            <div className="testimonial-card reveal-up">
              <div className="testimonial-quote">"</div>
              <div className="star-rating" style={{ color: 'var(--gold)' }}>
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>
              <p className="testimonial-text">
                Service absolument parfait. J'ai réservé le Tucson pour mon séjour à Safi avec prise en charge à l'aéroport de Marrakech. Le véhicule était dans un état clinique et les agents d'une ponctualité exemplaire. Je recommande vivement Marouazi Rent Cars.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">O</div>
                <div>
                  <div className="author-name">Omar Bennani</div>
                  <div className="author-role">Client Professionnel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-lg relative" style={{ overflow: 'hidden' }}>
        <div className="absolute inset-0 z-0">
          <img 
            src="./images/carbnb_hyundai_tucson.png" 
            alt="Marouazi Rent Cars - Luxury vehicle fleet Safi" 
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} 
          />
        </div>
        <div className="container relative z-10 text-center reveal-up">
          <h2 className="section-title" style={{ fontSize: 'var(--text-5xl)' }}>Prêt pour le <em>départ</em> ?</h2>
          <p className="section-desc" style={{ margin: '0 auto var(--space-8) auto' }}>
            Planifiez votre voyage en toute sérénité. Réservez votre véhicule premium en ligne dès aujourd'hui.
          </p>
          <div className="flex-center gap-4 flex-wrap">
            <Link to="/booking" className="btn btn-gold btn-lg">Demander un devis / Réserver</Link>
            <a 
              href="https://wa.me/212621109846?text=Bonjour%20Marouazi%20Rent%20Cars%2C%20je%20souhaite%20obtenir%20des%20tarifs%20de%20location." 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-whatsapp btn-lg"
            >
              Contact WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section style={{ width: '100%', height: '400px', backgroundColor: '#e5e5e5' }}>
        <iframe 
          title="Agence Marouazi Rent Cars - Safi"
          src="https://maps.google.com/maps?q=Marouazi+Rent+Cars+Safi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}
