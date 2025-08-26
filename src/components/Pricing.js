import React, { useEffect } from 'react';

const Pricing = () => {
  useEffect(() => {
    // Add styles to document head
    const style = document.createElement('style');
    style.textContent = `
      /* Pricing card hover effects */
      .pricing-card {
          transition: all 0.5s ease;
      }
      .pricing-card:hover {
          transform: translateY(-16px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
      }

      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
      }

      .animate-fade-in { animation: fadeIn 1s ease-out; }
    `;
    document.head.appendChild(style);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe pricing cards for animation
    document.querySelectorAll('.pricing-card').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      {/* Pricing Tiers */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-green-600">Safari Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From budget-friendly adventures to luxury experiences, we have the perfect 
              safari package for every traveler and budget.
            </p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Budget Safari */}
            <div className="pricing-card bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-white text-center">
                <div className="mb-4 flex justify-center">
                  <span className="text-4xl">🏕️</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Budget Safari</h3>
                <p className="text-sm opacity-90 mb-6">Perfect for adventurous travelers seeking authentic experiences</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold">$280</span>
                  <span className="text-sm opacity-80 ml-2">per person/day</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-semibold">6-8 guests</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-semibold">3 Parks</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-semibold">3-14 Days</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Camping or budget lodge accommodation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Shared safari vehicle (6-8 guests)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Professional local guide</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">All park entrance fees</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Three meals per day</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Game drives twice daily</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Airport transfers included</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                    Book Budget Safari
                  </button>
                  
                  <button className="w-full border border-blue-500 text-gray-700 hover:bg-gray-50 py-3 rounded-xl">
                    View Sample Itinerary
                  </button>
                </div>
              </div>
            </div>

            {/* Classic Safari - Most Popular */}
            <div className="pricing-card bg-white rounded-3xl shadow-xl overflow-hidden ring-4 ring-green-500 ring-opacity-50 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white text-center">
                <div className="mb-4 flex justify-center">
                  <span className="text-4xl">⭐</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Classic Safari</h3>
                <p className="text-sm opacity-90 mb-6">The perfect balance of comfort and adventure</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold">$450</span>
                  <span className="text-sm opacity-80 ml-2">per person/day</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-semibold">Max 6 guests</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-semibold">4 Parks</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-semibold">3-14 Days</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Mid-range lodge accommodation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Private safari vehicle (max 6 guests)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Expert wildlife guide</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">All meals and beverages</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Extended game drives</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Cultural village visit</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Photography tips and guidance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                    Book Classic Safari
                  </button>
                  
                  <button className="w-full border border-green-500 text-gray-700 hover:bg-gray-50 py-3 rounded-xl">
                    View Sample Itinerary
                  </button>
                </div>
              </div>
            </div>

            {/* Luxury Safari */}
            <div className="pricing-card bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-white text-center">
                <div className="mb-4 flex justify-center">
                  <span className="text-4xl">👑</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Luxury Safari</h3>
                <p className="text-sm opacity-90 mb-6">Ultimate safari experience with premium service</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold">$800</span>
                  <span className="text-sm opacity-80 ml-2">per person/day</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-semibold">Max 4 guests</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-semibold">5 Parks</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2">
                    <div className="font-semibold">3-14 Days</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Luxury tented camp or 5-star lodge</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Private safari vehicle (max 4 guests)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Senior wildlife specialist guide</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Gourmet meals and premium drinks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Hot air balloon safari option</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Professional photography service</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">Champagne sundowners</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:opacity-90 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                    Book Luxury Safari
                  </button>
                  
                  <button className="w-full border border-amber-500 text-gray-700 hover:bg-gray-50 py-3 rounded-xl">
                    View Sample Itinerary
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Group & Solo Options</h3>
                <p className="text-sm text-gray-600">Perfect for solo travelers, couples, families, and groups</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Dates</h3>
                <p className="text-sm text-gray-600">Customize your safari dates to match your schedule</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Multiple Destinations</h3>
                <p className="text-sm text-gray-600">Combine multiple parks and reserves in one trip</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Guides</h3>
                <p className="text-sm text-gray-600">Local Kenyan guides with deep wildlife knowledge</p>
              </div>
            </div>
          </div>
          
          {/* Custom Safari CTA */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">Need Something Different?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let us create a completely custom safari experience tailored to your preferences, 
                budget, and travel dates.
              </p>
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-colors">
                Design My Custom Safari
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;