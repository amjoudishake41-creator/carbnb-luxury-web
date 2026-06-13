import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, Shield, MapPin, Briefcase, Zap } from 'lucide-react';
import { VEHICLES, useBooking } from '../context/BookingContext';

export default function SingleVehicle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateBooking } = useBooking();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = VEHICLES.find(v => v.id === id);
    if (found) {
      setVehicle(found);
    } else {
      navigate('/fleet');
    }
  }, [id, navigate]);

  const handleBookNow = () => {
    updateBooking({ vehicle: vehicle });
    navigate('/booking');
  };

  if (!vehicle) return <div className="min-h-screen flex items-center justify-center"><div className="spinner"></div></div>;

  return (
    <div className="page-transition-wrapper">
      <div className="container" style={{ paddingTop: 'calc(var(--navbar-h) + var(--space-8))' }}>
        <Link to="/fleet" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-8 font-accent text-sm tracking-wider uppercase">
          <ArrowLeft size={16} /> Retour à la flotte
        </Link>
      </div>

      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left: Images */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden bg-black-4 border border-white/10 relative mb-6">
                {vehicle.badge && <span className="absolute top-6 left-6 badge badge-gold z-10">{vehicle.badge}</span>}
                <img src={vehicle.image} alt={vehicle.name} loading="lazy" className="w-full object-cover aspect-[4/3]" />
              </div>
            </motion.div>

            {/* Right: Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label">{vehicle.category}</div>
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">{vehicle.name}</h1>
              
              <div className="flex items-end gap-2 mb-8">
                <span className="font-display text-4xl text-gold font-bold">{vehicle.price} MAD</span>
                <span className="text-white-50 mb-1">/ jour</span>
              </div>

              <p className="text-lg text-white-70 leading-relaxed mb-10">
                {vehicle.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10 pb-10 border-b border-white/10">
                <div className="flex items-center gap-3 text-white-70">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold"><MapPin size={18} /></div>
                  <div>
                    <div className="text-xs text-white-50 uppercase tracking-widest">Places</div>
                    <div className="font-medium">{vehicle.specs.seats} Sièges</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white-70">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold"><Clock size={18} /></div>
                  <div>
                    <div className="text-xs text-white-50 uppercase tracking-widest">Boîte</div>
                    <div className="font-medium">{vehicle.specs.transmission}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white-70">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold"><Zap size={18} /></div>
                  <div>
                    <div className="text-xs text-white-50 uppercase tracking-widest">Carburant</div>
                    <div className="font-medium">{vehicle.specs.fuel}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-white-70">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold"><Briefcase size={18} /></div>
                  <div>
                    <div className="text-xs text-white-50 uppercase tracking-widest">Portes</div>
                    <div className="font-medium">{vehicle.specs.doors}</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <h3 className="font-accent text-lg font-bold mb-4">Équipements Inclus</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {vehicle.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-white-70">
                    <Check size={16} className="text-gold flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Conditions */}
              <div className="bg-black-3 rounded-xl p-6 mb-10 border border-white/5">
                <h3 className="font-accent text-sm font-bold uppercase tracking-wider text-white-50 mb-4 flex items-center gap-2">
                  <Shield size={16} /> Conditions de location
                </h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="text-white-50">Âge minimum:</div>
                  <div className="text-right text-white">{vehicle.conditions.minAge} ans</div>
                  <div className="text-white-50">Permis requis:</div>
                  <div className="text-right text-white">{vehicle.conditions.license}</div>
                  <div className="text-white-50">Caution:</div>
                  <div className="text-right text-white">{vehicle.conditions.deposit} MAD</div>
                  <div className="text-white-50">Kilométrage:</div>
                  <div className="text-right text-white">{vehicle.conditions.mileage}</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleBookNow} className="btn btn-gold btn-lg flex-1">
                  Réserver ce véhicule
                </button>
                <a href={`https://wa.me/212621109846?text=Bonjour%20Marouazi%20Rent%20Cars%2C%20je%20souhaite%20r%C3%A9server%20le%20v%C3%A9hicule%20%3A%20${encodeURIComponent(vehicle.name)}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg justify-center">
                  WhatsApp
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
