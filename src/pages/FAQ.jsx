import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Quels sont les documents requis pour louer un véhicule ?",
      a: "Pour louer un véhicule chez Marouazi Rent Cars, vous devez présenter : une pièce d'identité valide (CIN ou Passeport), un permis de conduire valide depuis au moins 1 an, et une carte bancaire ou un acompte pour la caution."
    },
    {
      q: "Quel est l'âge minimum pour louer une voiture ?",
      a: "L'âge minimum requis est de 21 ans pour les véhicules de catégorie Citadine et Berline. Pour les SUV et véhicules Premium, l'âge minimum est de 23 ans."
    },
    {
      q: "La caution est-elle obligatoire ?",
      a: "Oui, une caution est bloquée (non débitée) sur votre carte bancaire lors de la remise du véhicule. Le montant varie entre 2000 MAD et 5000 MAD selon la catégorie du véhicule loué. Elle est automatiquement débloquée à la restitution du véhicule s'il est rendu dans son état initial."
    },
    {
      q: "Que couvre l'assurance incluse ?",
      a: "L'assurance incluse couvre la responsabilité civile, l'incendie, le vol et les dommages avec une franchise. Nous proposons également un rachat partiel ou total de franchise en option pour rouler en toute tranquillité."
    },
    {
      q: "Puis-je me faire livrer le véhicule à l'aéroport ?",
      a: "Absolument. Nous proposons un service de livraison à l'aéroport de Marrakech-Ménara (RAK), Essaouira-Mogador (ESU) et Casablanca Mohammed V (CMN), ainsi qu'à la gare de Safi, sur simple demande lors de votre réservation."
    },
    {
      q: "Y a-t-il une limite de kilométrage ?",
      a: "Nos tarifs incluent généralement un kilométrage généreux adapté à vos besoins. Pour les locations longue durée, un forfait kilométrique est défini à l'avance. Contactez-nous pour plus de détails selon votre projet de déplacement."
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
            <div className="section-label">Aide & Support</div>
            <h1 className="page-title">Questions <em>Fréquentes</em></h1>
            <p className="page-desc">Retrouvez les réponses aux questions les plus fréquemment posées concernant nos services de location de voitures.</p>
          </motion.div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="accordion-item">
                <button 
                  className="accordion-trigger" 
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{faq.q}</span>
                  <div className="accordion-icon">
                    <Plus size={16} />
                  </div>
                </button>
                <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                  <div className="accordion-body">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <p style={{ color: 'var(--white-70)', marginBottom: '15px' }}>Vous n'avez pas trouvé de réponse à votre question ?</p>
            <a href="https://wa.me/212621109846" target="_blank" rel="noreferrer" className="btn btn-whatsapp">Contactez-nous sur WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
}
