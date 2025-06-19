import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

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
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">Customer Review</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-zinc-800 rounded-lg p-6 flex flex-col justify-between shadow-md hover:scale-105 transition-transform duration-300">
              <p className="text-gray-200 mb-6">{review.text}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.color}`}>
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.designation}</p>
                  </div>
                </div>
                <FaQuoteRight className="text-yellow-400 text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
