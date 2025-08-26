import React, { useState, useEffect } from 'react';

const SafariSection = ({ openBookingModal }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedSafari, setSelectedSafari] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('destination');
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    guests: '',
    budget: '',
    message: ''
  });
  const [customizationSelections, setCustomizationSelections] = useState({});
  const [customSafariForm, setCustomSafariForm] = useState({
    name: '',
    email: '',
    phone: '',
    duration: '',
    destinations: [],
    activities: [],
    accommodation: '',
    budget: '',
    specialRequests: ''
  });

  useEffect(() => {
    // Add styles to document head
    const style = document.createElement('style');
    style.textContent = `
      /* Safari card hover effects */
      .safari-card {
          transition: all 0.3s ease;
      }
      .safari-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
      }

      .animate-fade-in { animation: fadeIn 1s ease-out; }

      /* Modal animations */
      @keyframes modalSlideIn {
          from { 
              opacity: 0; 
              transform: scale(0.9) translateY(20px); 
          }
          to { 
              opacity: 1; 
              transform: scale(1) translateY(0); 
          }
      }

      .modal-content {
          animation: modalSlideIn 0.3s ease-out;
      }

      /* Creative Button Effects */
      @keyframes buttonPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
      }

      @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
      }

      @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
      }

      .btn-creative {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .btn-creative::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
      }

      .btn-creative:active::before {
          width: 300px;
          height: 300px;
      }

      .btn-shimmer {
          background: linear-gradient(90deg, currentColor 0%, rgba(255,255,255,0.3) 50%, currentColor 100%);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
      }

      .btn-bounce:hover {
          animation: buttonPulse 0.6s ease-in-out;
      }

      /* Filter tab special effects */
      .filter-tab {
          position: relative;
          transition: all 0.3s ease;
      }

      .filter-tab:hover {
          transform: translateY(-2px);
      }

      .filter-tab.active {
          box-shadow: 0 10px 25px rgba(34, 197, 94, 0.3);
      }

      /* Page transitions */
      .page-enter {
          opacity: 0;
          transform: translateX(20px);
      }

      .page-enter-active {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.3s ease-in-out;
      }

      /* Custom checkbox styles */
      .custom-checkbox {
        appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid #d1d5db;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .custom-checkbox:checked {
        background: linear-gradient(135deg, #10b981, #059669);
        border-color: #10b981;
        transform: scale(1.1);
      }

      .custom-checkbox:checked::after {
        content: '✓';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 14px;
        font-weight: bold;
      }

      .custom-checkbox:hover {
        border-color: #10b981;
        transform: scale(1.05);
      }

      .option-card {
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .option-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }

      .option-card.selected {
        background: linear-gradient(135deg, #ecfdf5, #d1fae5);
        border-color: #10b981;
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(16, 185, 129, 0.2);
      }

      /* Form styles */
      .form-input {
          transition: all 0.3s ease;
      }

      .form-input:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(34, 197, 94, 0.1);
      }

      /* Prevent body scroll when modal is open */
      body.modal-open {
          overflow: hidden;
      }

      /* Responsive touch targets */
      @media (max-width: 640px) {
          .btn-responsive {
              min-height: 48px;
              font-size: 16px;
          }
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
          .btn-creative {
              border: 2px solid currentColor;
          }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
          .btn-creative, .safari-card, .modal-content {
              animation: none;
              transition: none;
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

  // Safari data
  const safariData = {
    'masai-mara': {
      title: 'Masai Mara',
      subtitle: 'Witness the Great Migration',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'Big Five & Migration',
      tagColor: 'orange-500',
      rating: '4.9',
      duration: '3-7 days',
      maxGuests: 'Max 6',
      price: 'From $450/day',
      category: 'wildlife',
      experience: 'adventure',
      description: 'Experience the world-famous Great Migration in Kenya\'s most celebrated game reserve. Home to the Big Five and countless other species, the Masai Mara offers unparalleled wildlife viewing opportunities.',
      highlights: [
        'Witness the Great Migration (July-October)',
        'Big Five game viewing',
        'Hot air balloon safaris available',
        'Maasai cultural visits',
        'Professional guide and 4x4 vehicle',
        'Luxury tented camps'
      ],
      included: [
        'All park fees and conservancy fees',
        'Professional English-speaking guide',
        'Game drives in custom 4x4 vehicle',
        'All meals during safari',
        'Accommodation (luxury tented camp)',
        'Airport transfers'
      ],
      itinerary: [
        { day: 1, activity: 'Arrival and afternoon game drive' },
        { day: 2, activity: 'Full day game drives with picnic lunch' },
        { day: 3, activity: 'Morning game drive and cultural visit' },
        { day: 4, activity: 'Optional balloon safari and departure' }
      ]
    },
    'amboseli': {
      title: 'Amboseli',
      subtitle: 'Elephants with Kilimanjaro backdrop',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'Elephant Paradise',
      tagColor: 'blue-500',
      rating: '4.8',
      duration: '2-5 days',
      maxGuests: 'Max 6',
      price: 'From $380/day',
      category: 'wildlife',
      experience: 'photography',
      description: 'Famous for its large herds of elephants and stunning views of Mount Kilimanjaro, Amboseli offers incredible photography opportunities and intimate wildlife encounters.',
      highlights: [
        'Large elephant herds',
        'Mount Kilimanjaro views',
        'Excellent photography opportunities',
        'Maasai community visits',
        'Diverse birdlife (400+ species)',
        'Swamp and savannah ecosystems'
      ],
      included: [
        'Park entrance fees',
        'Professional guide',
        'Game drives in pop-up roof vehicle',
        'All meals',
        'Lodge accommodation',
        'Nairobi transfers'
      ],
      itinerary: [
        { day: 1, activity: 'Travel to Amboseli and evening game drive' },
        { day: 2, activity: 'Full day exploring with Kilimanjaro views' },
        { day: 3, activity: 'Morning game drive and return to Nairobi' }
      ]
    },
    'tsavo': {
      title: 'Tsavo',
      subtitle: 'Red elephants and vast wilderness',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tag: 'Untamed Wilderness',
      tagColor: 'green-500',
      rating: '4.7',
      duration: '2-6 days',
      maxGuests: 'Max 6',
      price: 'From $320/day',
      category: 'wilderness',
      experience: 'adventure',
      description: 'Kenya\'s largest national park, famous for its red elephants, diverse landscapes, and the legendary man-eating lions of Tsavo. A true wilderness experience.',
      highlights: [
        'Red elephants of Tsavo',
        'Largest national park in Kenya',
        'Diverse landscapes and ecosystems',
        'Historical sites and stories',
        'Excellent bird watching',
        'Less crowded than other parks'
      ],
      included: [
        'Park fees for Tsavo East & West',
        'Expert guide',
        '4x4 safari vehicle',
        'Full board accommodation',
        'All game drives',
        'Transportation from Nairobi'
      ],
      itinerary: [
        { day: 1, activity: 'Journey to Tsavo and afternoon exploration' },
        { day: 2, activity: 'Full day in Tsavo East' },
        { day: 3, activity: 'Tsavo West exploration' },
        { day: 4, activity: 'Final game drive and departure' }
      ]
    }
  };

  const navigateTo = (page, safari = null) => {
    setCurrentPage(page);
    if (safari) {
      setSelectedSafari(safari);
    }
  };

  const openModal = (safariKey) => {
    setSelectedSafari(safariData[safariKey]);
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSafari(null);
    document.body.classList.remove('modal-open');
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    alert('Quote request submitted successfully! We will contact you soon.');
    setCurrentPage('home');
  };

  const handleCustomSafariSubmit = (e) => {
    e.preventDefault();
    alert('Custom safari request submitted successfully! We will create a personalized itinerary for you.');
    setCurrentPage('home');
  };

  const filteredSafaris = () => {
    const safaris = Object.entries(safariData);
    switch (activeFilter) {
      case 'experience':
        return safaris.filter(([key, safari]) => safari.experience === 'adventure');
      case 'duration':
        return safaris.filter(([key, safari]) => parseInt(safari.duration) <= 5);
      default:
        return safaris;
    }
  };

  // Navigation Header
  const Header = () => (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      
    </header>
  );
 // Home Page
  const HomePage = () => (
    <section className="py-10 sm:py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Start Your <span className="text-green-600">Safari Adventure</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose your perfect Kenyan safari experience. From intimate wildlife encounters to cultural immersions, 
            we have something for every adventurer.
          </p>
        </div>

        {/* Filter Tabs - Now Responsive */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white rounded-xl p-1 shadow-2xl border border-gray-200 flex flex-wrap justify-center gap-1 w-full max-w-2xl">
            <button 
              onClick={() => setActiveFilter('destination')}
              className={`filter-tab px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base lg:text-lg btn-creative btn-responsive min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px] transition-all duration-300 ${
                activeFilter === 'destination' 
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 active' 
                  : 'text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400'
              }`}
            >
              By Destination
            </button>
            <button 
              onClick={() => setActiveFilter('experience')}
              className={`filter-tab px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base lg:text-lg btn-creative btn-responsive min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px] transition-all duration-300 ${
                activeFilter === 'experience' 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 active' 
                  : 'text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400'
              }`}
            >
              By Experience
            </button>
            <button 
              onClick={() => setActiveFilter('duration')}
              className={`filter-tab px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base lg:text-lg btn-creative btn-responsive min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px] transition-all duration-300 ${
                activeFilter === 'duration' 
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600 active' 
                  : 'text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-400'
              }`}
            >
              By Duration
            </button>
          </div>
        </div>

        {/* Safari Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {filteredSafaris().map(([key, safari]) => (
            <div key={key} className="safari-card bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-48 md:h-64">
                <img src={safari.image} alt={safari.title} className="w-full h-full object-cover" />
                <div className={`absolute top-4 left-4 bg-${safari.tagColor} text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold`}>
                  {safari.tag}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 md:px-3 py-1 flex items-center space-x-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-xs md:text-sm font-bold">{safari.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg md:text-2xl font-bold mb-2">{safari.title}</h3>
                  <p className="text-xs md:text-sm opacity-90">{safari.subtitle}</p>
                </div>
                <div className="absolute bottom-4 right-4 text-white text-right">
                  <div className="text-xs opacity-80">{safari.duration}</div>
                  <div className="text-xs opacity-80">{safari.maxGuests}</div>
                  <div className="font-bold text-sm md:text-base">{safari.price}</div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <button 
                  onClick={() => openModal(key)}
                  className="w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600 hover:from-green-700 hover:via-green-600 hover:to-green-700 text-white py-2 sm:py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base md:text-lg btn-creative btn-responsive btn-bounce transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>View Details</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Safari CTA - Now Fully Responsive */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6">
              Let us create a custom safari experience tailored just for you.
            </p>
            <button 
              onClick={() => navigateTo('custom-safari')}
              className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 hover:from-emerald-700 hover:via-teal-600 hover:to-cyan-600 text-white px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-2 sm:py-3 md:py-4 lg:py-5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold rounded-2xl transition-all duration-500 btn-creative btn-responsive transform hover:scale-110 shadow-2xl hover:shadow-3xl relative overflow-hidden group w-full sm:w-auto border-2 border-emerald-400"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Create Custom Safari</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // Quote Page
  const QuotePage = () => (
    <div className="py-10 sm:py-20 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Safari Quote</h2>
          <p className="text-base sm:text-lg text-gray-600">Tell us about your dream safari and we'll provide a personalized quote</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <form onSubmit={handleQuoteSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({...quoteForm, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  value={quoteForm.email}
                  onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  value={quoteForm.phone}
                  onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Dates</label>
                <input
                  type="text"
                  placeholder="e.g., July 2024"
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  value={quoteForm.dates}
                  onChange={(e) => setQuoteForm({...quoteForm, dates: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Number of Guests</label>
                <select
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  value={quoteForm.guests}
                  onChange={(e) => setQuoteForm({...quoteForm, guests: e.target.value})}
                >
                  <option value="">Select guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6+">6+ Guests</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Budget Range</label>
                <select
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  value={quoteForm.budget}
                  onChange={(e) => setQuoteForm({...quoteForm, budget: e.target.value})}
                >
                  <option value="">Select budget</option>
                  <option value="under-2000">Under $2,000</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="over-10000">Over $10,000</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Additional Information</label>
              <textarea
                rows="4"
                className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                placeholder="Tell us about your interests, dietary requirements, accessibility needs, etc."
                value={quoteForm.message}
                onChange={(e) => setQuoteForm({...quoteForm, message: e.target.value})}
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 sm:py-4 px-6 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base md:text-lg btn-creative btn-responsive transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Get My Quote
              </button>
              <button
                type="button"
                onClick={() => navigateTo('home')}
                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 sm:py-4 px-6 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base md:text-lg btn-creative btn-responsive"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // Customize Page
  const CustomizePage = () => {
    const handleCustomizationChange = (safariKey, optionKey) => {
      const currentSelections = customizationSelections[safariKey] || {};
      const newSelections = {
        ...currentSelections,
        [optionKey]: !currentSelections[optionKey]
      };
      setCustomizationSelections({
        ...customizationSelections,
        [safariKey]: newSelections
      });
    };

    const isOptionSelected = (safariKey, optionKey) => {
      return customizationSelections[safariKey]?.[optionKey] || false;
    };

    return (
      <div className="py-10 sm:py-20 bg-gradient-to-br from-white to-purple-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customize Your Safari</h2>
            <p className="text-base sm:text-lg text-gray-600">Tailor any of our existing safaris to your preferences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {Object.entries(safariData).map(([key, safari]) => (
              <div key={key} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img src={safari.image} alt={safari.title} className="w-full h-full object-cover" />
                  <div className={`absolute top-4 left-4 bg-${safari.tagColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {safari.tag}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{safari.title}</h3>
                  <p className="text-gray-600 mb-4">{safari.subtitle}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span>Duration:</span>
                      <span className="font-semibold">{safari.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Max Guests:</span>
                      <span className="font-semibold">{safari.maxGuests}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Price:</span>
                      <span className="font-semibold text-green-600">{safari.price}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900">Customization Options:</h4>
                    <div className="space-y-3 text-sm">
                      <div 
                        onClick={() => handleCustomizationChange(key, 'extend')}
                        className={`option-card p-3 border-2 rounded-lg cursor-pointer ${isOptionSelected(key, 'extend') ? 'selected border-green-500' : 'border-gray-200'}`}
                      >
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="custom-checkbox mr-3" 
                            checked={isOptionSelected(key, 'extend')}
                            onChange={() => {}}
                          />
                          <div className="flex-1">
                            <span className="font-semibold">Extend Duration</span>
                            <div className="text-green-600 font-bold">+$100/day</div>
                          </div>
                        </label>
                      </div>

                      <div 
                        onClick={() => handleCustomizationChange(key, 'private')}
                        className={`option-card p-3 border-2 rounded-lg cursor-pointer ${isOptionSelected(key, 'private') ? 'selected border-green-500' : 'border-gray-200'}`}
                      >
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="custom-checkbox mr-3" 
                            checked={isOptionSelected(key, 'private')}
                            onChange={() => {}}
                          />
                          <div className="flex-1">
                            <span className="font-semibold">Private Vehicle</span>
                            <div className="text-green-600 font-bold">+$150/day</div>
                          </div>
                        </label>
                      </div>

                      <div 
                        onClick={() => handleCustomizationChange(key, 'balloon')}
                        className={`option-card p-3 border-2 rounded-lg cursor-pointer ${isOptionSelected(key, 'balloon') ? 'selected border-green-500' : 'border-gray-200'}`}
                      >
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="custom-checkbox mr-3" 
                            checked={isOptionSelected(key, 'balloon')}
                            onChange={() => {}}
                          />
                          <div className="flex-1">
                            <span className="font-semibold">Hot Air Balloon Safari</span>
                            <div className="text-green-600 font-bold">+$450/person</div>
                          </div>
                        </label>
                      </div>

                      <div 
                        onClick={() => handleCustomizationChange(key, 'cultural')}
                        className={`option-card p-3 border-2 rounded-lg cursor-pointer ${isOptionSelected(key, 'cultural') ? 'selected border-green-500' : 'border-gray-200'}`}
                      >
                        <label className="flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="custom-checkbox mr-3" 
                            checked={isOptionSelected(key, 'cultural')}
                            onChange={() => {}}
                          />
                          <div className="flex-1">
                            <span className="font-semibold">Cultural Village Visit</span>
                            <div className="text-green-600 font-bold">+$50/person</div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Selected Options:</span>
                      <span className="text-green-600 font-bold">
                        {Object.values(customizationSelections[key] || {}).filter(Boolean).length} items
                      </span>
                    </div>
                  </div>

                  <button 
                    onClick={() => navigateTo('quote')}
                    className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 btn-creative btn-responsive transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Customize This Safari</span>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigateTo('home')}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 btn-creative btn-responsive transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Custom Safari Page
  const CustomSafariPage = () => (
    <div className="py-10 sm:py-20 bg-gradient-to-br from-white to-orange-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Create Your Custom Safari</h2>
          <p className="text-base sm:text-lg text-gray-600">Build your perfect safari experience from scratch</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
          <form onSubmit={handleCustomSafariSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  value={customSafariForm.name}
                  onChange={(e) => setCustomSafariForm({...customSafariForm, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  value={customSafariForm.email}
                  onChange={(e) => setCustomSafariForm({...customSafariForm, email: e.target.value})}
                />
              </div>
            </div>

            {/* Safari Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Duration</label>
                <select
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  value={customSafariForm.duration}
                  onChange={(e) => setCustomSafariForm({...customSafariForm, duration: e.target.value})}
                >
                  <option value="">Select duration</option>
                  <option value="2-3">2-3 days</option>
                  <option value="4-5">4-5 days</option>
                  <option value="6-7">6-7 days</option>
                  <option value="8+">8+ days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Accommodation Type</label>
                <select
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  value={customSafariForm.accommodation}
                  onChange={(e) => setCustomSafariForm({...customSafariForm, accommodation: e.target.value})}
                >
                  <option value="">Select accommodation</option>
                  <option value="luxury">Luxury Lodge</option>
                  <option value="mid-range">Mid-range Lodge</option>
                  <option value="tented">Tented Camp</option>
                  <option value="budget">Budget Camping</option>
                </select>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Preferred Destinations (Select all that apply)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Masai Mara', 'Amboseli', 'Tsavo', 'Samburu', 'Lake Nakuru', 'Aberdares'].map((destination) => (
                  <label key={destination} className="flex items-center option-card p-2 rounded-lg border border-gray-200 hover:border-orange-400">
                    <input 
                      type="checkbox" 
                      className="custom-checkbox mr-2" 
                      checked={customSafariForm.destinations.includes(destination)}
                      onChange={(e) => {
                        const destinations = customSafariForm.destinations.includes(destination)
                          ? customSafariForm.destinations.filter(d => d !== destination)
                          : [...customSafariForm.destinations, destination];
                        setCustomSafariForm({...customSafariForm, destinations});
                      }}
                    />
                    <span className="text-sm font-medium">{destination}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">Preferred Activities (Select all that apply)</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Game Drives', 'Walking Safari', 'Balloon Safari', 'Cultural Visits', 'Bird Watching', 'Photography', 'Night Drives', 'Boat Safari'].map((activity) => (
                  <label key={activity} className="flex items-center option-card p-2 rounded-lg border border-gray-200 hover:border-orange-400">
                    <input 
                      type="checkbox" 
                      className="custom-checkbox mr-2"
                      checked={customSafariForm.activities.includes(activity)}
                      onChange={(e) => {
                        const activities = customSafariForm.activities.includes(activity)
                          ? customSafariForm.activities.filter(a => a !== activity)
                          : [...customSafariForm.activities, activity];
                        setCustomSafariForm({...customSafariForm, activities});
                      }}
                    />
                    <span className="text-sm font-medium">{activity}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget and Special Requests */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Budget Range</label>
                <select
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  value={customSafariForm.budget}
                  onChange={(e) => setCustomSafariForm({...customSafariForm, budget: e.target.value})}
                >
                  <option value="">Select budget</option>
                  <option value="under-3000">Under $3,000</option>
                  <option value="3000-6000">$3,000 - $6,000</option>
                  <option value="6000-12000">$6,000 - $12,000</option>
                  <option value="over-12000">Over $12,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                  value={customSafariForm.phone}
                  onChange={(e) => setCustomSafariForm({...customSafariForm, phone: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Special Requests & Requirements</label>
              <textarea
                rows="4"
                className="form-input w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                placeholder="Dietary requirements, accessibility needs, special occasions, photography equipment, etc."
                value={customSafariForm.specialRequests}
                onChange={(e) => setCustomSafariForm({...customSafariForm, specialRequests: e.target.value})}
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white py-3 sm:py-4 px-6 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base md:text-lg btn-creative btn-responsive transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Create My Custom Safari
              </button>
              <button
                type="button"
                onClick={() => navigateTo('home')}
                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 sm:py-4 px-6 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base md:text-lg btn-creative btn-responsive"
              >
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'quote':
        return <QuotePage />;
      case 'customize':
        return <CustomizePage />;
      case 'custom-safari':
        return <CustomSafariPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {renderCurrentPage()}

      {/* Modal for safari details */}
      {isModalOpen && selectedSafari && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedSafari.image} 
                alt={selectedSafari.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <button 
                onClick={closeModal}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 transition-all duration-300 btn-creative hover:rotate-90 shadow-lg hover:shadow-xl z-10"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className={`absolute top-4 left-4 bg-${selectedSafari.tagColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                {selectedSafari.tag}
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedSafari.title}</h2>
                <p className="text-lg opacity-90">{selectedSafari.subtitle}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm md:text-base">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-semibold">{selectedSafari.rating}</span>
                </div>
                <div className="text-gray-600">{selectedSafari.duration}</div>
                <div className="text-gray-600">{selectedSafari.maxGuests}</div>
                <div className="font-bold text-green-600">{selectedSafari.price}</div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">{selectedSafari.description}</p>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Safari Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedSafari.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Included */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">What's Included</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedSafari.included.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample Itinerary */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3">Sample Itinerary</h3>
                <div className="space-y-3">
                  {selectedSafari.itinerary.map((day, index) => (
                    <div key={index} className="flex space-x-4 p-3 bg-gray-50 rounded-lg">
                      <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {day.day}
                      </div>
                      <div className="text-gray-700">{day.activity}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={() => {
                    closeModal();
                    openBookingModal(selectedSafari);
                  }}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base md:text-lg btn-creative btn-responsive transform hover:scale-105 shadow-lg hover:shadow-2xl group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Book This Safari</span>
                  </span>
                </button>
                <button 
                  onClick={() => {
                    closeModal();
                    navigateTo('quote', selectedSafari);
                  }}
                  className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base md:text-lg btn-creative btn-responsive transform hover:scale-105 shadow-md hover:shadow-lg group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Get Quote</span>
                  </span>
                </button>
                <button 
                  onClick={() => {
                    closeModal();
                    navigateTo('customize');
                  }}
                  className="flex-1 border-2 border-gray-300 text-gray-700 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base md:text-lg btn-creative btn-responsive transform hover:scale-105 shadow-md hover:shadow-lg group"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Customize</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SafariSection;