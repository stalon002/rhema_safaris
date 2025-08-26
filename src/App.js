import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SafariSection from './components/SafariSection';
import Pricing from './components/Pricing';
import Conservation from './components/Conservation';
import Footer from './components/Footer';

function App() {
  // Lift booking modal state to App level for communication between Header and SafariSection
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedSafariForBooking, setSelectedSafariForBooking] = useState(null);

  useEffect(() => {
    // Check if already logged to avoid duplicates
    if (!window.rhemaWelcomeLogged) {
      console.log('%c🦁 Welcome to Rhema Safaris! 🌍', 'color: #7FB069; font-size: 20px; font-weight: bold;');
      console.log('%cDiscover Kenya\'s Wild Heart with conservation-focused safari experiences.', 'color: #2D5016; font-size: 14px;');
      window.rhemaWelcomeLogged = true;
    }
  }, []);

  // Function to open booking modal with optional safari data
  const openBookingModal = (safariData = null) => {
    setSelectedSafariForBooking(safariData);
    setShowBookingModal(true);
  };

  // Function to close booking modal
  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedSafariForBooking(null);
  };

  return (
    <div className="App font-sans">
      <Header 
        showBookingModal={showBookingModal}
        setShowBookingModal={setShowBookingModal}
        selectedSafariForBooking={selectedSafariForBooking}
        openBookingModal={openBookingModal}
        closeBookingModal={closeBookingModal}
      />
      <main>
        <Hero />
        <SafariSection 
          openBookingModal={openBookingModal}
        />
        <Pricing />
        <Conservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;