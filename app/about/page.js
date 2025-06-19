


// // app/about/page.jsx
// 'use client'; // <-- Add this line at the very top

// import React from 'react';
// import Navbar from '../components/Navbar';

// const AboutPage = () => {
//   return (
//     <div className="bg-black text-white min-h-screen">
//       <Navbar />
//       {/* Hero Section: ABOUT US */}
//       <section className="relative bg-cover bg-center py-24 md:py-32" style={{ backgroundImage: "url('/background_burger.jpg')" }}>
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-black opacity-70"></div>
//         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-4">ABOUT US</h1>
//           <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
//           <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
//             Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
//           </p>
//         </div>
//       </section>

//       {/* Main Content Section: Good Food for Your All Day Good Mood */}
//       <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
//           {/* Left Column: Image */}
//           <div className="order-2 md:order-1 flex justify-center">
//             {/* Using your provided image path, now corrected for public directory */}
//             <img
//               src="/second_burger_background.jpg"
//               alt="Delicious Burgers"
//               className="rounded-lg shadow-xl w-full max-w-md md:max-w-none h-auto object-cover"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://placehold.co/600x400/333333/FFFFFF?text=Burger+Placeholder"; // Fallback to a generic placeholder
//               }}
//             />
//           </div>

//           {/* Right Column: Text Content */}
//           <div className="order-1 md:order-2">
//             <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-yellow-500">
//               GOOD FOOD FOR YOUR ALL DAY <br /> GOOD MOOD
//             </h2>
//             <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
//             <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
//             </p>
//             <img
//                 src="/signature.webp" // Your signature image path, corrected
//                 alt="George Shaw Signature"
//                 className="mb-2"
//                 onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = "https://placehold.co/150x50/333333/FFFFFF?text=Signature+Placeholder"; // Fallback to a generic signature placeholder
//                 }}
//             />
//             <p className="text-gray-400 text-sm md:text-base font-semibold">
//               George Shaw, CEO
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage; // Changed 'page' to 'AboutPage' for better naming convention
























'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="bg-black text-white">

      {/* Top Section with Background Image */}
      <div className="relative w-full h-[400px] bg-black/80 flex items-center justify-center text-center">
        <Image
          src="/background_burger.jpg" // <- Add this image to /public folder
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl font-extrabold mb-4">
            ABOUT US
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4" />
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
      </div>

      {/* Bottom Section: Image and Text */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/second_burger_background.jpg" // <- Add burger image here
            alt="Burger"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-extrabold leading-snug">
            GOOD FOOD FOR YOUR ALL DAY<br /> GOOD MOOD
          </h3>
          <span className="block w-16 h-1 bg-yellow-400 mt-4 mb-6" />
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <p className="italic text-white text-lg mb-1">George Shaw</p>
          <p className="font-semibold text-sm text-gray-400">George Shaw, CEO</p>
        </motion.div>
      </div>
    </div>
  );
}
