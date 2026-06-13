import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Nouveau message de ${formData.name}%0ATéléphone: ${formData.phone}%0AEmail: ${formData.email}%0ASujet: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/212621109846?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="page-transition-wrapper">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container page-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label">Assistance 24/7</div>
            <h1 className="page-title">Contactez-<em>Nous</em></h1>
            <p className="page-desc">
              Une question sur une réservation ? Besoin d'un conseil pour choisir votre véhicule ? Notre équipe est à votre disposition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '60px', alignItems: 'start' }}>

            {/* LEFT: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label">Nos Coordonnées</div>
              <h2 className="section-title">Restons en <em>Contact</em></h2>
              <p className="about-lead" style={{ marginBottom: '30px' }}>
                Nous sommes disponibles 7j/7 pour répondre à vos demandes de location, de tarification ou d'assistance.
              </p>

              <div className="contact-channels">
                <a href="tel:+212621109846" className="contact-channel">
                  <div className="channel-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="channel-label">Téléphone / WhatsApp</div>
                    <div className="channel-value">+212 621-109846</div>
                  </div>
                </a>
                <a href="mailto:marouazirentcars@gmail.com" className="contact-channel">
                  <div className="channel-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="channel-label">Email Professionnel</div>
                    <div className="channel-value">marouazirentcars@gmail.com</div>
                  </div>
                </a>
                <div className="contact-channel" style={{ cursor: 'default' }}>
                  <div className="channel-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="channel-label">Siège Social</div>
                    <div className="channel-value">Hamam Istambul, 32 R Smara QU, Safi 46000</div>
                  </div>
                </div>
              </div>

              {/* HOURS */}
              <div style={{ background: '#f0f3f7', borderRadius: '4px', padding: '20px', marginTop: '10px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>Horaires d'ouverture</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#4B5563' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Lundi — Vendredi</span>
                    <strong>08:00 — 19:00</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Samedi</span>
                    <strong>09:00 — 17:00</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Dimanche</span>
                    <strong style={{ color: '#cc6119' }}>Sur rendez-vous</strong>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {submitted ? (
                <div className="text-center" style={{ padding: '60px 20px' }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(35,57,61,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: 'var(--teal-primary)' }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '700', color: 'var(--teal-primary)', marginBottom: '10px' }}>Message Transmis</h3>
                  <p style={{ color: 'var(--white-70)', marginBottom: '25px' }}>Votre message a été envoyé sur WhatsApp. Nous vous répondrons dans les plus brefs délais.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-outline">Envoyer un autre message</button>
                </div>
              ) : (
                <>
                  <div className="section-label" style={{ marginBottom: '8px' }}>Formulaire de Contact</div>
                  <h2 className="section-title" style={{ fontSize: '22px', marginBottom: '25px' }}>Envoyez-nous un <em>message</em></h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      <div className="form-group">
                        <label className="form-label">Nom Complet *</label>
                        <input required type="text" className="form-input" placeholder="Mohammed Alaoui" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Téléphone *</label>
                        <input required type="tel" className="form-input" placeholder="+212 6XX XX XX XX" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-input" placeholder="email@exemple.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Sujet *</label>
                      <select required className="form-select" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})}>
                        <option value="">Sélectionnez un sujet</option>
                        <option value="Demande de réservation">Demande de réservation</option>
                        <option value="Informations générales">Informations générales</option>
                        <option value="Tarifs et devis">Tarifs et devis</option>
                        <option value="Transfert aéroport">Transfert aéroport</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea required className="form-textarea" rows="4" placeholder="Comment pouvons-nous vous aider ?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                    </div>
                    <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                      Envoyer via WhatsApp
                    </button>
                  </form>
                </>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
