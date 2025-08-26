import React, { useEffect } from 'react';

const Conservation = () => {
  useEffect(() => {
    // Add styles to document head
    const style = document.createElement('style');
    style.textContent = `
      /* Conservation impact cards */
      .impact-card {
          transition: all 0.5s ease;
      }
      .impact-card:hover {
          transform: translateY(-8px);
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

    // Observe impact cards for animation
    document.querySelectorAll('.impact-card').forEach(el => {
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
      {/* Conservation Impact */}
      <section id="conservation" className="py-20 bg-gradient-to-br from-gray-900 to-green-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.1%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%272%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="text-green-400">Conservation Impact</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Every safari with Rhema contributes directly to wildlife conservation and community development. 
              See how your adventure makes a lasting difference in Kenya.
            </p>
          </div>
          
          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-sm opacity-80">Animals Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1,200+</div>
              <div className="text-sm opacity-80">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-sm opacity-80">Schools Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">75%</div>
              <div className="text-sm opacity-80">Carbon Offset</div>
            </div>
          </div>
          
          {/* Impact Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Wildlife Protection */}
            <div className="impact-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Wildlife Protection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-xl">🛡️</span>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2">
                  <span className="text-sm font-bold text-gray-800">500+ Animals Protected</span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Wildlife Protection
                  </h3>
                  <p className="text-sm opacity-90">
                    Supporting anti-poaching efforts and habitat conservation across Kenya's national parks
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 text-4xl">🛡️</div>
                  <h3 className="text-2xl font-bold mb-4">Wildlife Protection</h3>
                  <ul className="space-y-2 mb-6 text-left">
                    <li className="text-sm opacity-90">• Anti-poaching ranger support</li>
                    <li className="text-sm opacity-90">• Wildlife monitoring programs</li>
                    <li className="text-sm opacity-90">• Habitat restoration projects</li>
                    <li className="text-sm opacity-90">• Human-wildlife conflict resolution</li>
                  </ul>
                  <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Community Empowerment */}
            <div className="impact-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Community Empowerment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-xl">❤️</span>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2">
                  <span className="text-sm font-bold text-gray-800">1,200+ Lives Impacted</span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Community Empowerment
                  </h3>
                  <p className="text-sm opacity-90">
                    Creating sustainable livelihoods for local Maasai and other communities
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 text-4xl">❤️</div>
                  <h3 className="text-2xl font-bold mb-4">Community Empowerment</h3>
                  <ul className="space-y-2 mb-6 text-left">
                    <li className="text-sm opacity-90">• Local employment opportunities</li>
                    <li className="text-sm opacity-90">• Community-based tourism</li>
                    <li className="text-sm opacity-90">• Women's empowerment programs</li>
                    <li className="text-sm opacity-90">• Traditional craft support</li>
                  </ul>
                  <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Education Programs */}
            <div className="impact-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Education Programs" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-xl">🎓</span>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2">
                  <span className="text-sm font-bold text-gray-800">50+ Schools Reached</span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Education Programs
                  </h3>
                  <p className="text-sm opacity-90">
                    Teaching conservation to the next generation of Kenyan children
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 text-4xl">🎓</div>
                  <h3 className="text-2xl font-bold mb-4">Education Programs</h3>
                  <ul className="space-y-2 mb-6 text-left">
                    <li className="text-sm opacity-90">• Environmental education programs</li>
                    <li className="text-sm opacity-90">• School conservation clubs</li>
                    <li className="text-sm opacity-90">• Teacher training workshops</li>
                    <li className="text-sm opacity-90">• Educational resource development</li>
                  </ul>
                  <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>

            {/* Sustainable Tourism */}
            <div className="impact-card group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                     alt="Sustainable Tourism" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-xl">🌱</span>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2">
                  <span className="text-sm font-bold text-gray-800">75% Carbon Offset</span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                    Sustainable Tourism
                  </h3>
                  <p className="text-sm opacity-90">
                    Minimizing environmental impact while maximizing conservation benefits
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center">
                <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 text-4xl">🌱</div>
                  <h3 className="text-2xl font-bold mb-4">Sustainable Tourism</h3>
                  <ul className="space-y-2 mb-6 text-left">
                    <li className="text-sm opacity-90">• Carbon offset programs</li>
                    <li className="text-sm opacity-90">• Eco-friendly accommodations</li>
                    <li className="text-sm opacity-90">• Waste reduction initiatives</li>
                    <li className="text-sm opacity-90">• Renewable energy support</li>
                  </ul>
                  <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Make a Difference?
              </h3>
              <p className="text-lg opacity-90 mb-8">
                Join us on a safari that not only creates unforgettable memories but also 
                contributes to the protection of Kenya's incredible wildlife and communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-colors">
                  Book Conservation Safari
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl transition-colors">
                  View Impact Report
                </button>
              </div>
            </div>
          </div>
          
          {/* Partnership Logos */}
          <div className="mt-16 text-center">
            <h4 className="text-lg font-semibold mb-8 opacity-80">
              Proud Partners in Conservation
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white/10 rounded-lg px-6 py-3 text-sm font-medium">
                Kenya Wildlife Service
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3 text-sm font-medium">
                Maasai Mara Conservancies
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3 text-sm font-medium">
                David Sheldrick Wildlife Trust
              </div>
              <div className="bg-white/10 rounded-lg px-6 py-3 text-sm font-medium">
                Born Free Foundation
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conservation;