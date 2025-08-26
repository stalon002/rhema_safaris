import React, { useState, useEffect } from 'react';

const Header = ({ 
  showBookingModal, 
  setShowBookingModal, 
  selectedSafariForBooking, 
  openBookingModal, 
  closeBookingModal 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after clicking
    setMobileMenuOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    // Scroll to footer
    const footer = document.querySelector('footer') || document.querySelector('#contact') || document.querySelector('#footer');
    if (footer) {
      footer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  const handleBookingSubmit = () => {
    const safariName = selectedSafariForBooking ? selectedSafariForBooking.title : 'Safari';
    alert(`Thank you for your interest in ${safariName}! We will contact you shortly to confirm your booking.`);
    closeBookingModal();
  };

  const modalStyles = {
    animation: 'scaleIn 0.3s ease-out'
  };

  // Add keyframes to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      
      @keyframes slideDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .mobile-menu-enter { animation: slideDown 0.3s ease-out; }
      
      /* Hamburger animation */
      .hamburger-line {
        transition: all 0.3s ease;
        transform-origin: center;
      }
      
      .hamburger-active .line-1 {
        transform: rotate(45deg) translate(6px, 6px);
      }
      
      .hamburger-active .line-2 {
        opacity: 0;
      }
      
      .hamburger-active .line-3 {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${scrolled ? 'bg-white/98' : 'bg-white/95'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
                <img 
                  src="/logo192.png" 
                  alt="Rhema Safaris Logo" 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-gray-900">Rhema Safaris</h1>
                <p className="text-xs md:text-sm text-green-600 hidden sm:block">Discover Kenya's Wild Heart</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Home</a>
              <a href="#safaris" onClick={(e) => handleSmoothScroll(e, '#safaris')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Safaris</a>
              <a href="#destinations" onClick={(e) => handleSmoothScroll(e, '#destinations')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Destinations</a>
              <a href="#experiences" onClick={(e) => handleSmoothScroll(e, '#experiences')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Experiences</a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
              <a href="#contact" onClick={handleContactClick} className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="hidden lg:block px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Get Quote
              </button>
              <button 
                onClick={() => openBookingModal()}
                className="px-4 lg:px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm lg:text-base"
              >
                Book Safari
              </button>
            </div>

            {/* Mobile Menu Button & Book Safari */}
            <div className="flex items-center space-x-3 md:hidden">
              <button 
                onClick={() => openBookingModal()}
                className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-sm"
              >
                Book
              </button>
              
              <button
                className={`mobile-menu-container hamburger-line p-2 ${mobileMenuOpen ? 'hamburger-active' : ''}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="hamburger-line line-1 w-full h-0.5 bg-gray-700 rounded-full"></span>
                  <span className="hamburger-line line-2 w-full h-0.5 bg-gray-700 rounded-full"></span>
                  <span className="hamburger-line line-3 w-full h-0.5 bg-gray-700 rounded-full"></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mobile-menu-container mobile-menu-enter border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <nav className="py-4 space-y-2">
                <a 
                  href="#home" 
                  onClick={(e) => handleSmoothScroll(e, '#home')} 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium rounded-lg mx-2"
                >
                  🏠 Home
                </a>
                <a 
                  href="#safaris" 
                  onClick={(e) => handleSmoothScroll(e, '#safaris')} 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium rounded-lg mx-2"
                >
                  🦁 Safaris
                </a>
                <a 
                  href="#destinations" 
                  onClick={(e) => handleSmoothScroll(e, '#destinations')} 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium rounded-lg mx-2"
                >
                  📍 Destinations
                </a>
                <a 
                  href="#experiences" 
                  onClick={(e) => handleSmoothScroll(e, '#experiences')} 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium rounded-lg mx-2"
                >
                  ✨ Experiences
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, '#about')} 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium rounded-lg mx-2"
                >
                  ℹ️ About
                </a>
                <a 
                  href="#contact" 
                  onClick={handleContactClick} 
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all font-medium rounded-lg mx-2"
                >
                  📞 Contact
                </a>
                
                {/* Mobile CTA */}
                <div className="px-2 pt-4 border-t border-gray-200 mt-4">
                  <button className="w-full mb-3 px-4 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                    💬 Get Quote
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Booking Widget Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full transform" style={modalStyles}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {selectedSafariForBooking ? `Book ${selectedSafariForBooking.title}` : 'Quick Booking'}
              </h3>
              <button 
                onClick={closeBookingModal} 
                className="text-gray-500 hover:text-gray-700 text-2xl p-1 transition-colors hover:bg-gray-100 rounded-full"
              >
                ✕
              </button>
            </div>
            
            {/* Show safari info if selected */}
            {selectedSafariForBooking && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <img 
                    src={selectedSafariForBooking.image} 
                    alt={selectedSafariForBooking.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{selectedSafariForBooking.title}</h4>
                    <p className="text-sm text-gray-600">{selectedSafariForBooking.price}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {selectedSafariForBooking ? 'Confirm Destination' : 'Destination'}
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  {selectedSafariForBooking ? (
                    <option selected>{selectedSafariForBooking.title}</option>
                  ) : (
                    <option>Select destination</option>
                  )}
                  <option>Masai Mara National Reserve</option>
                  <option>Amboseli National Park</option>
                  <option>Tsavo National Parks</option>
                  <option>Samburu National Reserve</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {selectedSafariForBooking ? (
                      <option selected>{selectedSafariForBooking.duration}</option>
                    ) : (
                      <option>3 Days</option>
                    )}
                    <option>3 Days</option>
                    <option>5 Days</option>
                    <option>7 Days</option>
                    <option>14 Days</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5 Guests</option>
                  <option>6 Guests</option>
                </select>
              </div>
              
              <button 
                onClick={handleBookingSubmit}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-lg transition-colors transform hover:scale-105"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;