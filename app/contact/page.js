

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar.jsx';
import { Mail, MapPin, Phone, Clock } from 'lucide-react'
import Footer from '../components/Footer.jsx';
export default function page() {
  return (
    <div className="bg-black text-white">
      {/* Top Section with Background Image */}
      <Navbar />
      <div className="relative w-full h-[500px] bottom-20 flex items-center justify-center text-center">
        <Image
          src="/contact_img.png" // <- Add this image to /public folder
          alt="Background"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl font-extrabold mb-4">
            CONTACT US
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4" />
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
      </div>
{/* contact from */}

 <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Info Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold uppercase">Get Closer</h2>
          <div className="w-16 h-1 bg-yellow-500 mt-2 mb-6" />

          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="text-yellow-500 mt-1" />
              <div>
                <p className="font-bold uppercase">Location</p>
                <p>Jl. Pantai Kuta No.34, Badung, Bali</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-yellow-500 mt-1" />
              <div>
                <p className="font-bold uppercase">Email</p>
                <p>contact@burgry.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-yellow-500 mt-1" />
              <div>
                <p className="font-bold uppercase">Phone</p>
                <p>+62831–2864–3491</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-yellow-500 mt-1" />
              <div>
                <p className="font-bold uppercase">Open Hour</p>
                <p>10.00 am – 09.00 pm</p>
              </div>
            </div>
          </div>

          <hr className="my-10 border-gray-700" />

          <p className="font-bold uppercase mb-2">Our Social Media</p>
          <div className="flex gap-4 text-yellow-500 text-xl">
            <i className="fab fa-facebook-f cursor-pointer" />
            <i className="fab fa-instagram cursor-pointer" />
            <i className="fab fa-twitter cursor-pointer" />
            <i className="fab fa-youtube cursor-pointer" />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-extrabold uppercase mb-6">Your Details</h3>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-900 p-3 w-full text-white placeholder-gray-400 border border-gray-700"
                required
              />
              <input
                type="email"
                placeholder="email@yourmail.com"
                className="bg-gray-900 p-3 w-full text-white placeholder-gray-400 border border-gray-700"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="bg-gray-900 p-3 w-full text-white placeholder-gray-400 border border-gray-700"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="bg-gray-900 p-3 w-full text-white placeholder-gray-400 border border-gray-700"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-black font-bold py-3 px-6 hover:bg-yellow-600 transition"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
     <Footer />
    </div>
  );
}
