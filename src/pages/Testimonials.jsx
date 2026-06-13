import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: 'Omar Bennani',
      role: 'Client Professionnel, Safi',
      initial: 'O',
      text: "Service absolument parfait. J'ai réservé le Tucson pour mon séjour avec prise en charge à l'aéroport de Marrakech. Le véhicule était dans un état clinique et les agents d'une ponctualité exemplaire. Je recommande vivement Marouazi Rent Cars."
    },
    {
      name: 'Sarah M.',
      role: 'Touriste (France)',
      initial: 'S',
      text: "Nous avons loué une voiture pour nos vacances à Safi. L'équipe a été très professionnelle, ils sont venus nous livrer directement à l'aéroport d'Essaouira. Pas de frais cachés, une transparence totale sur les tarifs."
    },
    {
      name: 'Karim Alaoui',
      role: 'Client Régulier, Marrakech',
      initial: 'K',
      text: "En tant que professionnel, j'ai souvent besoin de véhicules lors de mes passages à Safi. Marouazi Rent Cars est mon partenaire de choix. Flotte bien entretenue, service client toujours à l'écoute."
    },
    {
      name: 'Fatima Zohra B.',
      role: 'Client Famille',
      initial: 'F',
      text: "J'ai fait appel à l'agence pour un voyage en famille depuis Safi vers Marrakech. Le véhicule était spacieux, propre et en parfait état. Le contact a été très agréable et la remise des clés rapide."
    },
    {
      name: 'Mehdi R.',
      role: 'Client MRE',
      initial: 'M',
      text: "La meilleure agence que j'ai testée à Safi lors de mes retours au Maroc. Les véhicules sont exactement comme annoncés, bien entretenus. Un vrai service sérieux et honnête qu'on ne trouve pas partout."
    },
    {
      name: 'Amine B.',
      role: 'Client Affaires',
      initial: 'A',
      text: "Réactivité impressionnante. J'avais besoin d'un véhicule en urgence un dimanche matin. En moins d'une heure, le véhicule était livré à mon hôtel à Safi, propre et prêt à l'emploi. Bravo à toute l'équipe !"
    }
  ];

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
            <div className="section-label">Avis Clients</div>
            <h1 className="page-title">Ils nous font <em>confiance</em></h1>
            <p className="page-desc">
              Découvrez les retours d'expérience de nos clients. Leur satisfaction est notre plus grande réussite et notre moteur au quotidien.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS GRID */}
      <section className="section">
        <div className="container">
          {/* Rating Banner */}
          <div style={{ background: 'var(--teal-primary)', borderRadius: '4px', padding: '25px 30px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--gold-accent)', marginBottom: '5px' }}>Note Google Maps</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: '900', color: 'var(--white)', lineHeight: 1 }}>4.8 / 5</div>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="var(--gold-accent)" color="var(--gold-accent)" />)}
              <span style={{ marginLeft: '10px', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>46 avis vérifiés</span>
            </div>
          </div>

          <div className="grid-3">
            {testimonials.map((testi, i) => (
              <motion.div
                key={i}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="star-rating" style={{ color: 'var(--gold-accent)', marginBottom: '15px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="testimonial-text">"{testi.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testi.initial}</div>
                  <div>
                    <div className="author-name">{testi.name}</div>
                    <div className="author-role">{testi.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
