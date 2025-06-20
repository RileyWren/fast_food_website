'use client';

import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    name: "JOHN DOE",
    designation: "Designation",
    initials: "JD",
    color: "bg-yellow-500",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    name: "JOHN DOE",
    designation: "Designation",
    initials: "JD",
    color: "bg-orange-500",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    name: "JOHN DOE",
    designation: "Designation",
    initials: "JD",
    color: "bg-teal-500",
  },
];

const CustomerReview = () => {
  return (
    <section className="bg-zinc-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading + underline + subtext */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold uppercase mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Customer Review
        </motion.h2>

        <motion.div
          className="w-24 h-1 bg-yellow-500 mx-auto mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'left' }}
        />

        <motion.p
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        </motion.p>

        {/* Review cards with staggered on-scroll animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-zinc-800 rounded-lg p-6 flex flex-col justify-between shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-gray-200 mb-6">{review.text}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.color}`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.designation}</p>
                  </div>
                </div>
                <FaQuoteRight className="text-yellow-400 text-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
