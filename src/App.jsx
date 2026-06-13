import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import FloatingWhatsApp from './components/FloatingWhatsApp';
import { BookingProvider } from './context/BookingContext';
import Home from './pages/Home';
import Fleet from './pages/Fleet';
import SingleVehicle from './pages/SingleVehicle';
import About from './pages/About';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Booking from './pages/Booking';
import Corporate from './pages/Corporate';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/fleet/:id" element={<SingleVehicle />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/corporate" element={<Corporate />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <HashRouter>
      <BookingProvider>

        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </BookingProvider>
    </HashRouter>
  );
}

export default App;
