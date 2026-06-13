import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: '01',
      title: 'Location Courte Durée',
      desc: "Idéal pour vos escapades d'un week-end, vos déplacements professionnels ponctuels ou simplement pour le plaisir de conduire un véhicule récent. Profitez de tarifs flexibles et d'une réservation simplifiée.",
      img: './images/carbnb_renault_clio.png'
    },
    {
      id: '02',
      title: 'Location Longue Durée (LLD)',
      desc: "La solution optimale pour les professionnels et les particuliers souhaitant maîtriser leur budget automobile. Bénéficiez d'un véhicule bien entretenu avec des tarifs dégressifs avantageux sur la durée.",
      img: './images/carbnb_opel_astra.png'
    },
    {
      id: '03',
      title: 'Transferts Aéroport',
      desc: "Commencez et terminez votre voyage en toute sérénité. Nous assurons vos transferts depuis et vers les aéroports de Marrakech (RAK), Essaouira (ESU) et Casablanca (CMN) avec ponctualité et confort.",
      img: './images/carbnb_hyundai_tucson.png'
    },
    {
      id: '04',
      title: 'Livraison à Domicile / Hôtel',
      desc: "Ne vous déplacez pas, c'est nous qui venons à vous ! Livraison du véhicule directement à votre adresse, hôtel ou lieu de séjour à Safi et dans les environs. Un service personnalisé et sans contrainte.",
      img: './images/carbnb_peugeot_208.png'
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
            <div className="section-label">Nos Prestations</div>
            <h1 className="page-title">Services <em>Sur-Mesure</em></h1>
            <p className="page-desc">
              Nous concevons des solutions de mobilité adaptées à vos exigences, alliant flexibilité, confort et fiabilité à Safi et dans toute la région.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="section">
        <div className="container">
          {services.map((srv, i) => (
            <motion.div
              key={srv.id}
              className={`service-card ${i % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="service-img">
                <img src={srv.img} alt={srv.title} loading="lazy" />
              </div>
              <div>
                <div className="service-num">{srv.id}</div>
                <h2 className="service-title">{srv.title}</h2>
                <p className="service-desc">{srv.desc}</p>
                <Link to="/booking" className="btn btn-gold">Réserver ce service</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
