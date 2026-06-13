import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div className="section-label">L'Entreprise</div>
            <h1 className="page-title">Notre <em>Histoire</em></h1>
            <p className="page-desc">
              Découvrez la vision qui anime Marouazi Rent Cars : redéfinir les standards de la location de voitures à Safi, avec excellence et confiance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label">À Propos de Nous</div>
              <h2 className="section-title">L'Excellence <em>&</em> la Proximité</h2>
              <p className="about-lead">
                Basée à Safi, Marouazi Rent Cars est née d'une ambition simple : offrir une expérience de location de véhicules qui allie la sécurité, la propreté irréprochable et un service de confiance à l'écoute de chaque client.
              </p>
              <p className="about-lead">
                Que vous soyez de retour au Maroc pour des vacances en famille, en déplacement professionnel ou à la recherche d'un véhicule d'usage au quotidien, nous nous engageons à vous fournir des voitures impeccables et un service d'assistance chaleureux.
              </p>
              <ul className="checklist">
                {[
                  'Service client de confiance & de proximité',
                  'Véhicules méticuleusement révisés',
                  'Transparence totale des tarifs',
                  'Livraison personnalisée à Safi & aéroports'
                ].map((item, i) => (
                  <li key={i} className="checklist-item">
                    <CheckCircle size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-img-wrap"
            >
              <img
                src="./images/carbnb_hyundai_tucson.png"
                alt="Marouazi Rent Cars - Flotte de véhicules à Safi"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* STATS */}
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">4.8<span className="stat-suffix">/5</span></div>
              <div className="stat-label">Note Globale Google</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">46<span className="stat-suffix">+</span></div>
              <div className="stat-label">Avis Clientèle Vérifiés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100<span className="stat-suffix">%</span></div>
              <div className="stat-label">Honnêteté & Transparence</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Assistance Sinistres</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
