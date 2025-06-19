

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar.jsx';

export default function Page() {
  return (
    <div className="bg-black text-white">
      {/* Top Section with Background Image */}
      <Navbar />
      <div className="relative w-full h-[500px] bottom-20 flex items-center justify-center text-center">
        <Image
          src="/background_burger.png" 
          alt="Background"
          fill
          className="object-cover opacity-70"
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
