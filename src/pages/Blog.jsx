import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articles = [
    {
      id: 1,
      title: 'Top 5 des routes scéniques à découvrir au Maroc',
      excerpt: 'Du col du Tizi n\'Tichka aux côtes méditerranéennes, découvrez les parcours incontournables pour un road trip inoubliable au volant de votre véhicule premium.',
      date: '12 Mai 2026',
      category: 'Voyage',
      img: './images/hero-bg.png'
    },
    {
      id: 2,
      title: 'Guide complet : Comment choisir son SUV de location ?',
      excerpt: 'Espace, confort, motorisation... Quels sont les critères à prendre en compte avant de réserver votre SUV pour vos prochaines vacances en famille ?',
      date: '28 Avril 2026',
      category: 'Conseils',
      img: './images/carbnb_hyundai_tucson.png'
    },
    {
      id: 3,
      title: 'CARBNB étend sa flotte avec de nouveaux modèles',
      excerpt: 'Nous sommes fiers de vous annoncer l\'arrivée de 10 nouveaux véhicules premium dans notre flotte pour répondre à une demande croissante.',
      date: '15 Avril 2026',
      category: 'Actualités',
      img: './images/carbnb_renault_clio.png'
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
            <div className="section-label">Le Magazine</div>
            <h1 className="page-title">Actualités & <em>Inspirations</em></h1>
            <p className="page-desc">Explorez nos conseils de voyage, les actualités de notre flotte et nos guides pour tirer le meilleur parti de votre location de voiture au Maroc.</p>
          </motion.div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="grid-3">
            {articles.map((article, i) => (
              <motion.div 
                key={article.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="blog-img">
                  <img src={article.img} alt={article.title} />
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="blog-title">{article.title}</h3>
                  <p className="blog-excerpt">{article.excerpt}</p>
                  <button className="text-gold font-accent text-sm font-bold mt-4 uppercase tracking-wider hover:text-white transition-colors">Lire la suite →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
