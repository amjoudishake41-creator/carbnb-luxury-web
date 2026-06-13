import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBooking, VEHICLES } from '../context/BookingContext';
import { ArrowLeft, Check, Calendar, MapPin, User, FileText, CheckCircle, Info } from 'lucide-react';

export default function Booking() {
  const { booking, updateBooking, totalDays, totalPrice } = useBooking();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [booking.step]);

  const handleNext = () => {
    if (booking.step < 3) updateBooking({ step: booking.step + 1 });
  };

  const handlePrev = () => {
    if (booking.step > 1) updateBooking({ step: booking.step - 1 });
  };

  const handleComplete = () => {
    if (!booking.vehicle) return;

    // Structured message according to client specifications
    const msg = `Demande de Réservation:
Nom: ${booking.customer.name}
Téléphone: ${booking.customer.phone}
Véhicule: ${booking.vehicle.name}
Lieu de départ: ${booking.pickupLocation}
Lieu de retour: ${booking.dropoffLocation || booking.pickupLocation}
Date de départ: ${booking.pickupDate}
Date de retour: ${booking.returnDate}
Notes: ${booking.customer.notes || 'Aucune'}`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/212621109846?text=${encoded}`, '_blank');
  };

  const selectVehicle = (car) => {
    updateBooking({ vehicle: car });
  };

  const isStep1Disabled = !booking.vehicle;
  const isStep2Disabled = 
    !booking.customer.name || 
    !booking.customer.phone || 
    !booking.pickupDate || 
    !booking.returnDate || 
    !booking.pickupLocation || 
    !booking.dropoffLocation;

  return (
    <div className="page-transition-wrapper">
      <div className="container" style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <button onClick={() => navigate(-1)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--teal-primary)', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', marginBottom: '30px', cursor: 'pointer', background: 'none', border: 'none' }}>
          <ArrowLeft size={16} /> Retour
        </button>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '800', color: 'var(--teal-primary)', marginBottom: '30px', textAlign: 'center' }}>
          Demande de <em>Réservation</em>
        </h1>

        {/* STEPPER PROGRESS */}
        <div className="booking-steps">
          <div className={`step-item ${booking.step === 1 ? 'active' : booking.step > 1 ? 'completed' : ''}`}>
            <div className="step-num">{booking.step > 1 ? <Check size={16}/> : '1'}</div>
            <div className="step-label">Véhicule</div>
          </div>
          <div className={`step-item ${booking.step === 2 ? 'active' : booking.step > 2 ? 'completed' : ''}`}>
            <div className="step-num">{booking.step > 2 ? <Check size={16}/> : '2'}</div>
            <div className="step-label">Détails Client</div>
          </div>
          <div className={`step-item ${booking.step === 3 ? 'active' : ''}`}>
            <div className="step-num">3</div>
            <div className="step-label">Confirmation</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="lg:grid-cols-3">
          
          {/* Main Wizard Area */}
          <div style={{ gridColumn: 'span 2' }}>
            
            {/* STEP 1: SELECT VEHICLE */}
            {booking.step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid #eeeeee', borderRadius: 'var(--radius-md)', padding: '30px' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--teal-primary)', marginBottom: '25px' }}>Étape 1 : Choisir un Véhicule</h2>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {VEHICLES.map((car) => {
                      const isSelected = booking.vehicle?.id === car.id;
                      return (
                        <div 
                          key={car.id} 
                          onClick={() => selectVehicle(car)}
                          style={{ 
                            display: 'flex', flexDirection: 'column', 
                            borderRadius: 'var(--radius-sm)', 
                            border: isSelected ? '2px solid var(--gold-accent)' : '1px solid #eeeeee',
                            backgroundColor: 'var(--card-bg)',
                            overflow: 'hidden', cursor: 'pointer',
                            boxShadow: isSelected ? '0 4px 15px rgba(240, 197, 64, 0.15)' : 'none',
                            transition: 'all var(--transition-fast)'
                          }}
                        >
                          <div style={{ position: 'relative', height: '180px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                            {car.badge && (
                              <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: 'var(--teal-primary)', color: 'white', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', padding: '4px 8px', borderRadius: '3px' }}>
                                {car.badge}
                              </span>
                            )}
                            <img 
                              src={car.image} 
                              alt={car.name} 
                              loading="lazy"
                              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                            />
                          </div>
                          <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                              <span style={{ fontSize: '11px', color: 'var(--orange-accent)', textTransform: 'uppercase', fontWeight: '700', fontFamily: 'var(--font-display)', letterSpacing: '0.5px' }}>{car.category}</span>
                              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--teal-primary)', marginTop: '5px', marginBottom: '15px' }}>{car.name}</h3>
                              
                              <div style={{ display: 'flex', gap: '15px', fontSize: '12px', color: 'var(--white-70)', borderTop: '1px solid #eeeeee', paddingTop: '15px', marginBottom: '15px' }}>
                                <span>🔧 {car.specs.transmission}</span>
                                <span>⛽ {car.specs.fuel}</span>
                                <span>👥 {car.specs.seats} Pl.</span>
                              </div>
                            </div>
                            
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eeeeee', paddingTop: '15px' }}>
                              <div>
                                <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '800', color: 'var(--teal-primary)' }}>{car.price} MAD</span>
                                <span style={{ fontSize: '11px', color: 'var(--white-50)' }}> / jour</span>
                              </div>
                              <span className={`btn btn-sm ${isSelected ? 'btn-gold' : 'btn-outline'}`} style={{ padding: '8px 15px' }}>
                                {isSelected ? 'Sélectionné' : 'Choisir'}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button 
                    onClick={handleNext} 
                    disabled={isStep1Disabled}
                    className={`btn btn-lg ${isStep1Disabled ? 'btn-outline' : 'btn-gold'}`}
                    style={isStep1Disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                  >
                    Continuer vers vos coordonnées
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: FILL CUSTOMER DETAILS */}
            {booking.step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid #eeeeee', borderRadius: 'var(--radius-md)', padding: '30px', marginBottom: '30px' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: 'var(--teal-primary)', marginBottom: '25px' }}>Étape 2 : Vos Coordonnées & Détails</h2>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {/* Customer Info */}
                    <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <User size={16} /> Nom Complet *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="form-input" 
                        placeholder="ex: Ahmed El Alami" 
                        value={booking.customer.name} 
                        onChange={e => updateBooking({ customer: { ...booking.customer, name: e.target.value } })} 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Téléphone WhatsApp *
                      </label>
                      <input 
                        type="tel" 
                        required
                        className="form-input" 
                        placeholder="ex: 0621109846" 
                        value={booking.customer.phone} 
                        onChange={e => updateBooking({ customer: { ...booking.customer, phone: e.target.value } })} 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Adresse Email
                      </label>
                      <input 
                        type="email" 
                        className="form-input" 
                        placeholder="ahmed@example.com" 
                        value={booking.customer.email} 
                        onChange={e => updateBooking({ customer: { ...booking.customer, email: e.target.value } })} 
                      />
                    </div>

                    {/* Locations */}
                    <div className="form-group">
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={16} /> Lieu de départ *
                      </label>
                      <select 
                        className="form-select" 
                        value={booking.pickupLocation} 
                        onChange={e => updateBooking({ pickupLocation: e.target.value })}
                      >
                        <option value="Safi (Agence Centre / Gare)">Safi (Agence Centre / Gare)</option>
                        <option value="Aéroport Marrakech Ménara (RAK)">Aéroport Marrakech Ménara (RAK)</option>
                        <option value="Aéroport Essaouira Mogador (ESU)">Aéroport Essaouira Mogador (ESU)</option>
                        <option value="Aéroport Mohammed V - Casablanca (CMN)">Aéroport Mohammed V - Casablanca (CMN)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <MapPin size={16} /> Lieu de retour *
                      </label>
                      <select 
                        className="form-select" 
                        value={booking.dropoffLocation || booking.pickupLocation} 
                        onChange={e => updateBooking({ dropoffLocation: e.target.value })}
                      >
                        <option value="Safi (Agence Centre / Gare)">Safi (Agence Centre / Gare)</option>
                        <option value="Aéroport Marrakech Ménara (RAK)">Aéroport Marrakech Ménara (RAK)</option>
                        <option value="Aéroport Essaouira Mogador (ESU)">Aéroport Essaouira Mogador (ESU)</option>
                        <option value="Aéroport Mohammed V - Casablanca (CMN)">Aéroport Mohammed V - Casablanca (CMN)</option>
                      </select>
                    </div>

                    {/* Dates */}
                    <div className="form-group">
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={16} /> Date de départ *
                      </label>
                      <input 
                        type="date" 
                        required
                        className="form-input" 
                        value={booking.pickupDate} 
                        onChange={e => updateBooking({ pickupDate: e.target.value })} 
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={16} /> Date de retour *
                      </label>
                      <input 
                        type="date" 
                        required
                        className="form-input" 
                        value={booking.returnDate} 
                        onChange={e => updateBooking({ returnDate: e.target.value })} 
                      />
                    </div>

                    {/* Notes */}
                    <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                      <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FileText size={16} /> Notes Supplémentaires
                      </label>
                      <textarea 
                        className="form-textarea" 
                        rows="3"
                        placeholder="Demandes spécifiques, livraison à domicile, numéro de vol..." 
                        value={booking.customer.notes || ''} 
                        onChange={e => updateBooking({ customer: { ...booking.customer, notes: e.target.value } })}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={handlePrev} className="btn btn-outline">Retour</button>
                  <button 
                    onClick={handleNext} 
                    disabled={isStep2Disabled}
                    className={`btn ${isStep2Disabled ? 'btn-outline' : 'btn-gold'}`}
                    style={isStep2Disabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                  >
                    Continuer vers le résumé
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CONFIRMATION SCREEN */}
            {booking.step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid #eeeeee', borderRadius: 'var(--radius-md)', padding: '30px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(240, 197, 64, 0.15)', color: 'var(--gold-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto' }}>
                      <CheckCircle size={30} />
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', color: 'var(--teal-primary)' }}>Récapitulatif de votre demande</h2>
                    <p style={{ color: 'var(--white-70)', fontSize: '14px', marginTop: '5px' }}>Veuillez vérifier les informations ci-dessous avant de valider.</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', borderTop: '1px solid #eeeeee', borderBottom: '1px solid #eeeeee', padding: '25px 0', marginBottom: '25px' }}>
                    {/* Left: Car Review */}
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: 'var(--radius-sm)', border: '1px solid #eeeeee' }}>
                      <div style={{ width: '100px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={booking.vehicle.image} alt={booking.vehicle.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                      </div>
                      <div>
                        <span style={{ fontSize: '11px', color: 'var(--orange-accent)', textTransform: 'uppercase', fontWeight: '700', fontFamily: 'var(--font-display)' }}>{booking.vehicle.category}</span>
                        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700', color: 'var(--teal-primary)', margin: '2px 0 5px 0' }}>{booking.vehicle.name}</h4>
                        <p style={{ fontSize: '12px', color: 'var(--white-70)' }}>{booking.vehicle.price} MAD / jour</p>
                      </div>
                    </div>

                    {/* Right: Rental Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--white-70)' }}>Client :</span>
                        <span style={{ fontWeight: '600', color: 'var(--charcoal)' }}>{booking.customer.name}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--white-70)' }}>Téléphone :</span>
                        <span style={{ fontWeight: '600', color: 'var(--charcoal)' }}>{booking.customer.phone}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--white-70)' }}>Départ :</span>
                        <span style={{ fontWeight: '600', color: 'var(--charcoal)', textAlign: 'right' }}>{booking.pickupLocation}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--white-70)' }}>Dates :</span>
                        <span style={{ fontWeight: '600', color: 'var(--charcoal)' }}>{booking.pickupDate} au {booking.returnDate}</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '15px', backgroundColor: '#f0f3f7', borderRadius: 'var(--radius-sm)', border: '1px solid #eeeeee' }}>
                    <Info style={{ color: 'var(--teal-primary)', flexShrink: 0, marginTop: '2px' }} size={18} />
                    <p style={{ fontSize: '12px', color: 'var(--white-70)', lineHeight: '1.5' }}>
                      En cliquant sur le bouton ci-dessous, un message sera généré sur WhatsApp. Envoyez-le pour que notre équipe valide la disponibilité avec vous.
                    </p>
                  </div>
                </div>

                <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
                  <button onClick={handlePrev} className="btn btn-outline">Retour</button>
                  <button 
                    onClick={handleComplete} 
                    className="btn btn-whatsapp"
                    style={{ minWidth: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                  >
                    Confirmer via WhatsApp
                  </button>
                </div>
              </motion.div>
            )}

          </div>

          {/* Right Column: Dynamic Price Summary Panel */}
          <div>
            <div style={{ backgroundColor: 'var(--card-bg)', border: '1px solid #eeeeee', borderRadius: 'var(--radius-md)', padding: '30px', position: 'sticky', top: '110px' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', marginBottom: '25px', paddingBottom: '15px', borderBottom: '1px solid #eeeeee', color: 'var(--charcoal)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Détails du Tarif
              </h3>
              
              {booking.vehicle ? (
                <>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ color: 'var(--white-70)', fontSize: '14px' }}>{booking.vehicle.name}</span>
                    <span style={{ fontWeight: '700', color: 'var(--charcoal)' }}>{booking.vehicle.price} MAD</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ color: 'var(--white-70)', fontSize: '14px' }}>Tarif journalier</span>
                    <span style={{ fontWeight: '700', color: 'var(--charcoal)' }}>{booking.vehicle.price} MAD / j</span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <span style={{ color: 'var(--white-70)', fontSize: '14px' }}>Durée estimée</span>
                    <span style={{ fontWeight: '700', color: 'var(--teal-primary)' }}>{totalDays()} jour(s)</span>
                  </div>

                  <div style={{ borderTop: '1px solid #eeeeee', paddingTop: '20px', marginTop: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <span style={{ color: 'var(--white-70)', textTransform: 'uppercase', fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px' }}>Total Estimé</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: '800', color: 'var(--teal-primary)', lineHeight: 1 }}>{totalPrice()} MAD</span>
                    </div>
                    <p style={{ textAlign: 'right', fontSize: '11px', color: 'var(--white-50)', marginTop: '8px' }}>Kilométrage illimité inclus</p>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--white-50)', fontSize: '14px' }}>
                  Sélectionnez un véhicule à l'étape 1 pour afficher l'estimation du tarif.
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
