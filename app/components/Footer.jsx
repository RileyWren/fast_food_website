import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Section 1: Logo and Description */}
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">BURGRY</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
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
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 text-center">
        <p className="mb-2 sm:mb-0">Created by Riley</p>
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;