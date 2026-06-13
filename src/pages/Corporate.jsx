import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, Key, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Corporate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div className="section-label flex items-center gap-2"><Briefcase size={16} /> Espace B2B</div>
            <h1 className="page-title">Offre <em>Corporate</em></h1>
            <p className="page-desc">Des solutions de mobilité flexibles et sur-mesure dédiées aux professionnels, entreprises et administrations au Maroc.</p>
          </motion.div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">Optimisez la mobilité de votre entreprise</h2>
              <p className="text-white-70 text-lg leading-relaxed mb-6">
                Parce que chaque entreprise a des besoins spécifiques en matière de déplacement, CARBNB a conçu une offre Business flexible, économique et sans contraintes.
              </p>
              <p className="text-white-70 text-lg leading-relaxed mb-8">
                Que vous ayez besoin d'un véhicule de fonction pour vos cadres, d'une flotte pour vos commerciaux ou de transferts ponctuels pour vos clients VIP, nous avons la solution.
              </p>
              <Link to="/contact" className="btn btn-gold">Demander un rendez-vous commercial</Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black-3 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="font-accent text-xl font-bold mb-6 border-b border-white/10 pb-4">Avantages Exclusifs B2B</h3>
              <div className="flex flex-col gap-6">
                <div className="corp-feature">
                  <div className="corp-icon"><Building size={24} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Tarification Préférentielle</h4>
                    <p className="text-sm text-white-70">Des grilles tarifaires remisées en fonction du volume et de la durée de location.</p>
                  </div>
                </div>
                <div className="corp-feature">
                  <div className="corp-icon"><ShieldCheck size={24} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Assurance Flotte Incluse</h4>
                    <p className="text-sm text-white-70">Couverture complète et véhicule de remplacement immédiat en cas d'immobilisation.</p>
                  </div>
                </div>
                <div className="corp-feature">
                  <div className="corp-icon"><Clock size={24} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Priorité et Flexibilité</h4>
                    <p className="text-sm text-white-70">Réservation prioritaire garantie 24/7 et annulation gratuite.</p>
                  </div>
                </div>
                <div className="corp-feature">
                  <div className="corp-icon"><Key size={24} /></div>
                  <div>
                    <h4 className="font-bold mb-1">Gestion Centralisée</h4>
                    <p className="text-sm text-white-70">Un interlocuteur unique et une facturation mensuelle détaillée par département.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="bg-black-2 border border-gold/20 rounded-2xl p-10 lg:p-16 text-center mt-12">
            <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Location Longue Durée (LLD)</h2>
            <p className="text-white-70 text-lg max-w-3xl mx-auto mb-8">
              L'externalisation de votre flotte automobile vous permet de préserver votre capacité d'investissement tout en offrant à vos collaborateurs des véhicules neufs, parfaitement entretenus. Contrats de 12 à 48 mois.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fleet" className="btn btn-outline">Voir les véhicules éligibles</Link>
              <a href="mailto:corporate@carbnb.ma" className="btn btn-gold">Contactez le service LLD</a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
