import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Section 1: Logo and Description */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">BURGRY</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Section 2: Support */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-4">SUPPORT</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">FAQ's</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Term & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Phone & Email */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-4">PHONE</h3>
          <p className="flex items-center text-gray-400 text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 1.48a1 1 0 01-.542 1.342l-1.545.772a11.006 11.006 0 006.109 6.109l.772-1.545a1 1 0 011.342-.542l1.48.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.99 18 2 12.01 2 5V3z" />
            </svg>
            +0123456789
          </p>

          <h3 className="text-xl font-bold text-yellow-500 mb-4">EMAIL</h3>
          <p className="flex items-center text-gray-400 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            contact@burgry.com
          </p>
        </div>

        {/* Section 4: Address & Follow Us */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500 mb-4">ADDRESS</h3>
          <p className="flex items-start text-gray-400 text-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0 mt-1 mr-2 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            los angle usa
          </p>

          <h3 className="text-xl font-bold text-yellow-500 mb-4">FOLLOW US</h3>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3 8h-2v4h2v6h-4v-6h-2V8h2V6a3 3 0 013-3h3v5z"/></svg>
            </a>
            {/* Twitter */}
            <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 7.707a.999.999 0 01-1.414 0l-3.293-3.293a.999.999 0 010-1.414.999.999 0 011.414 0l3.293 3.293a.999.999 0 010 1.414zM12 4a8 8 0 00-8 8c0 1.62.484 3.125 1.317 4.394l.872.872a.999.999 0 01-.137 1.34c-.812.811-1.742 1.403-2.732 1.634a.999.999 0 01-1.127-1.492.999.999 0 01.129-.115l.872-.872A9.957 9.957 0 0112 22a9.958 9.958 0 01-5.719-1.89l-.872-.872a.999.999 0 01-.137-1.34c.812-.811 1.742-1.403 2.732-1.634a.999.999 0 011.127 1.492.999.999 0 01-.129.115l-.872.872A8 8 0 0012 20a8 8 0 008-8V4z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.707 5.707a.999.999 0 010 1.414L11.414 14.414a.999.999 0 01-1.414 0l-2.293-2.293a.999.999 0 011.414-1.414L10 12.586l3.293-3.293a.999.999 0 011.414 0zM12 4a8 8 0 00-8 8 8 8 0 008 8 8 8 0 008-8 8 8 0 00-8-8zm0 12a4 4 110-8 4 4 0 000 8z"/></svg>
            </a>
            <a href="#" className="text-yellow-500 hover:text-white transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 8.72a1 1 0 01.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p className="mb-2 sm:mb-0">Created by Riley</p>
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;