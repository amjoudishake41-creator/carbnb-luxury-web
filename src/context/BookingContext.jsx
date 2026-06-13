import { createContext, useContext, useState } from 'react';
import { CARS } from '../data/cars';

const BookingContext = createContext();

export const VEHICLES = CARS;

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState({
    vehicle: null,
    pickupDate: '',
    returnDate: '',
    pickupLocation: 'Safi',
    dropoffLocation: 'Safi',
    step: 1,
    extras: { insurance: false, gps: false, childSeat: false, driver: false },
    customer: { name: '', phone: '', email: '', notes: '' },
  });

  const updateBooking = (updates) => setBooking(prev => ({ ...prev, ...updates }));

  const totalDays = () => {
    if (!booking.pickupDate || !booking.returnDate) return 1;
    const diff = new Date(booking.returnDate) - new Date(booking.pickupDate);
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const totalPrice = () => {
    if (!booking.vehicle) return 0;
    const days = totalDays();
    let price = booking.vehicle.price * days;
    if (booking.extras.insurance) price += 80 * days;
    if (booking.extras.gps) price += 50 * days;
    if (booking.extras.childSeat) price += 40 * days;
    if (booking.extras.driver) price += 300 * days;
    return price;
  };

  return (
    <BookingContext.Provider value={{ booking, updateBooking, totalDays, totalPrice }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
