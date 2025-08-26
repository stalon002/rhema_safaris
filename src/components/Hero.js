import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [timeZones, setTimeZones] = useState({
    nairobi: '',
    london: '',
    newYork: ''
  });

  useEffect(() => {
    const updateTimeZones = () => {
      const now = new Date();
      
      // Nairobi (EAT - East Africa Time)
      const nairobiFormatted = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Africa/Nairobi'
      });
      
      // London (GMT/BST)
      const londonFormatted = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/London'
      });
      
      // New York (EST/EDT)
      const newYorkFormatted = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/New_York'
      });

      setTimeZones({
        nairobi: nairobiFormatted,
        london: londonFormatted,
        newYork: newYorkFormatted
      });
    };

    // Update time zones every second
    const interval = setInterval(updateTimeZones, 1000);
    updateTimeZones(); // Initial call

    return () => clearInterval(interval);
  }, []);

  // Add keyframes and styles to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
      }

      @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
      }

      .animate-fade-in { animation: fadeIn 1s ease-out; }
      .animate-fade-in-delay { animation: fadeIn 1s ease-out 0.3s both; }
      .animate-fade-in-delay-2 { animation: fadeIn 1s ease-out 0.6s both; }
      .animate-fade-in-delay-3 { animation: fadeIn 1s ease-out 0.9s both; }
      .animate-scale-in { animation: scaleIn 0.3s ease-out; }

      html { scroll-behavior: smooth; }

      /* Mobile responsive adjustments */
      @media (max-width: 768px) {
          .animate-fade-in, .animate-fade-in-delay, .animate-fade-in-delay-2, .animate-fade-in-delay-3 {
              animation-duration: 0.6s;
          }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const handleBookingSubmit = () => {
    alert('Thank you for your interest! We will contact you shortly to confirm your booking.');
    setShowBookingModal(false);
  };

  const modalStyles = {
    animation: 'scaleIn 0.3s ease-out'
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Video (Local MP4 - MUTED) */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              transform: 'translate(-50%, -50%) scale(1.1)',
              pointerEvents: 'none'
            }}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controls={false}
          >
            <source src="/227950.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Time Zone Widget */}
        <div className="absolute top-24 right-4 z-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-white">
            <h3 className="text-sm font-semibold mb-3 text-center">Live Time Zones</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl">🇰🇪</div>
                <div className="font-mono text-sm font-bold">{timeZones.nairobi}</div>
                <div className="text-xs opacity-80">Nairobi</div>
                <div className="text-xs opacity-60">UTC+3</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl">🇬🇧</div>
                <div className="font-mono text-sm font-bold">{timeZones.london}</div>
                <div className="text-xs opacity-80">London</div>
                <div className="text-xs opacity-60">UTC+0</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl">🇺🇸</div>
                <div className="font-mono text-sm font-bold">{timeZones.newYork}</div>
                <div className="text-xs opacity-80">New York</div>
                <div className="text-xs opacity-60">UTC-5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-5xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Discover Kenya's
              <span className="block text-green-400 animate-pulse">Wild Heart</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Authentic safari experiences that protect wildlife and empower communities. 
              Join us on a journey where every adventure makes a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-2">
              <button 
                onClick={() => setShowBookingModal(true)} 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                📅 Start Your Safari
              </button>
              <button 
                onClick={() => window.open('https://youtube.com/channel/UCJ0BmJOn_bRKiApjc45QZ1w?sub_confirmation=1', '_blank')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                ▶️ Watch Our Story
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-delay-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white">👥</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Small Groups</h3>
                <p className="text-sm opacity-90">Maximum 6 guests per vehicle for intimate wildlife encounters</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white">🗺️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Guides</h3>
                <p className="text-sm opacity-90">Local Kenyan guides with deep wildlife knowledge</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">🌱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Conservation Impact</h3>
                <p className="text-sm opacity-90">Every safari directly funds wildlife protection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Booking Widget Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform" style={modalStyles}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Quick Booking</h3>
              <button 
                onClick={() => setShowBookingModal(false)} 
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select destination</option>
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
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-lg"
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

export default Hero;