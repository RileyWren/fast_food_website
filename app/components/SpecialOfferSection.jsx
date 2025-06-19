'use client'; 

import React from 'react';
import { motion } from 'framer-motion';

const SpecialOfferSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-[700px] sm:mb-70 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/people-have-dinner-together-table-cafe-happy-friends-eat-burgers-have-fun_199620-8406.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <motion.div
        className="relative z-10 flex flex-col items-start justify-center h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          variants={itemVariants}
        >
          GET A SPECIAL OFFER FOR YOUR SPECIAL OCCASION
        </motion.h1>

        {/* Yellow accent line */}
        <motion.div
          className="w-24 h-1 bg-yellow-500 mb-6"
          variants={itemVariants}
        ></motion.div>

        <motion.p
          className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl"
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
        </motion.p>

        <motion.button
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 ease-in-out"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Reservation
        </motion.button>
      </motion.div>
    </section>
  );
};

export default SpecialOfferSection;