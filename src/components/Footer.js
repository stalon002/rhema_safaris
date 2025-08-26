import React from 'react';

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Rhema Safaris</h3>
                <p className="text-sm text-green-400">Discover Kenya's Wild Heart</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Conservation-focused safari experiences that protect wildlife and empower local communities across Kenya.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/rhemasafaris" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Rhema Safaris on Twitter"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/rhemasafaris" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Rhema Safaris on Instagram"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/rhemasafaris" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Rhema Safaris on Facebook"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleSmoothScroll(e, '#home')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#safaris" 
                  onClick={(e) => handleSmoothScroll(e, '#safaris')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Safari Packages
                </a>
              </li>
              <li>
                <a 
                  href="#destinations" 
                  onClick={(e) => handleSmoothScroll(e, '#destinations')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleSmoothScroll(e, '#about')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, '#contact')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Top Destinations</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#destinations" 
                  onClick={(e) => handleSmoothScroll(e, '#destinations')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Masai Mara
                </a>
              </li>
              <li>
                <a 
                  href="#destinations" 
                  onClick={(e) => handleSmoothScroll(e, '#destinations')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Amboseli National Park
                </a>
              </li>
              <li>
                <a 
                  href="#destinations" 
                  onClick={(e) => handleSmoothScroll(e, '#destinations')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Tsavo National Parks
                </a>
              </li>
              <li>
                <a 
                  href="#destinations" 
                  onClick={(e) => handleSmoothScroll(e, '#destinations')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Samburu National Reserve
                </a>
              </li>
              <li>
                <a 
                  href="#destinations" 
                  onClick={(e) => handleSmoothScroll(e, '#destinations')} 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Lake Nakuru
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-green-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">Nairobi, Kenya</p>
                  <p className="text-gray-400 text-sm">Karen, Nairobi 00100</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">📞</span>
                <a 
                  href="tel:+254722123456" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  +254 722 123 456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✉️</span>
                <a 
                  href="mailto:info@rhemasafaris.com" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  info@rhemasafaris.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">🕒</span>
                <p className="text-gray-300">24/7 Support Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Rhema Safaris. All rights reserved. | Conservation-focused safari experiences in Kenya.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-green-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-400 hover:text-green-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="/cookies" 
                className="text-gray-400 hover:text-green-400 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;