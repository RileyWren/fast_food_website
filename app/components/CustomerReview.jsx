// // components/CustomerReview.jsx
// "use client";
// import React from 'react';

// const reviews = [
//   {
//     name: 'John Doe',
//     comment: 'Absolutely delicious! The best burger I’ve ever had.',
//     rating: 5,
//   },
//   {
//     name: 'Sarah Lee',
//     comment: 'Loved the crispy fries and quick service!',
//     rating: 4,
//   },
//   {
//     name: 'Michael Smith',
//     comment: 'Great taste, affordable price, friendly staff!',
//     rating: 5,
//   },
// ];

// const CustomerReview = () => {
//   return (
//     <div className="bg-black text-white py-16 px-4">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
//         <div className="w-16 h-1 bg-yellow-400 mx-auto mb-10"></div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {reviews.map((review, idx) => (
//             <div key={idx} className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
//               <div className="text-yellow-400 mb-2">
//                 {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
//               </div>
//               <p className="text-gray-300 italic">"{review.comment}"</p>
//               <p className="mt-4 font-semibold text-white">- {review.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerReview;

"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  { name: 'John Doe', comment: 'Absolutely delicious! The best burger I’ve ever had.', rating: 5 },
  { name: 'Sarah Lee', comment: 'Loved the crispy fries and quick service!', rating: 4 },
  { name: 'Michael Smith', comment: 'Great taste, affordable price, friendly staff!', rating: 5 },
  { name: 'Emily White', comment: 'My go-to place for a quick and tasty meal.', rating: 5 },
  { name: 'David Kim', comment: 'Their chicken pops are insane!', rating: 4 },
  { name: 'Anna Patel', comment: 'Best smoothies ever! Highly recommend.', rating: 5 },
  { name: 'Tom Hardy', comment: 'Decent food but could be hotter.', rating: 3 },
];

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const CustomerReview = () => {
  const groups = chunkArray([...reviews, ...reviews], 3); // double for looping feel
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % groups.length);
    }, 4000); // 4s pause between each group
    return () => clearInterval(interval);
  }, [groups.length]);

  return (
    <div className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">What Our Customers Say</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3"></div>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="w-[1024px] h-[260px] overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute flex gap-6 w-full"
            >
              {groups[index].map((review, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg"
                >
                  <div className="text-yellow-400 text-lg mb-2">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                  <p className="text-gray-300 italic">"{review.comment}"</p>
                  <p className="mt-4 font-semibold text-white">- {review.name}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
