

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar.jsx';
import TopProduct from '../components/TopProduct.jsx';
import Footer from '../components/Footer.jsx';
 const products = [
  {
    name: 'REGULAR BEEF BURGER',
    desc: 'Lorem ipsum dolor sit amet.',
    price: '$42.00',
    img: 'https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/6528f9600b3fc-Hamburger%20hd%20png.png',
    category: 'Food',
  },
  {
    name: 'BIG MEETY',
    desc: 'Lorem ipsum dolor sit amet.',
    price: '$15.00',
    img: 'https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/6528f9600b3fc-Hamburger%20hd%20png.png',
    category: 'Food',
  },
    {
    name: 'BIG MEETY',
    desc: 'Lorem ipsum dolor sit amet.',
    price: '$15.00',
    img: 'https://www.nicepng.com/png/full/44-447877_burger-king-black-bunned-halloween-whopper-black-burger.png',
    category: 'Food',
  },
    {
    name: 'BIG MEETY',
    desc: 'Lorem ipsum dolor sit amet.',
    price: '$15.00',
    img: 'https://png.pngtree.com/png-vector/20241211/ourmid/pngtree-authentic-italian-pizza-with-cheese-and-fresh-vegetable-toppings-png-image_14714611.png',
    category: 'Food',
  },
      {
    name: 'BIG MEETY',
    desc: 'Lorem ipsum dolor sit amet.',
    price: '$15.00',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/230/163/small/tasty-tandoori-fried-chicken-isolated-on-transparent-background-png.png',
    category: 'Food',
  },
      {
    name: 'BIG MEETY',
    desc: 'Lorem ipsum dolor sit amet.',
    price: '$15.00',
    img: 'https://png.pngtree.com/png-clipart/20250205/original/pngtree-fried-chicken-isolated-hd-quality-transparent-png-image_20322166.png',
    category: 'Food',
  },
  {
    name: 'CHIPS & NUGGETS',
    desc: 'Crunchy sides with dip.',
    price: '$10.00',
    img: 'https://static.vecteezy.com/system/resources/thumbnails/022/787/250/small/illustration-of-french-fries-transparent-background-generative-ai-png.png',
    category: 'Snack',
  },
  {
    name: 'CHICKEN POPS',
    desc: 'Mini chicken balls.',
    price: '$12.00',
    img: 'https://img.pikbest.com/png-images/20241112/fried-french-fry-png-transparent-background---fast-food-icon-symbol-for-restaurant-design_11080693.png!w700wp',
    category: 'Snack',
  },
    {
    name: 'CHICKEN POPS',
    desc: 'Mini chicken balls.',
    price: '$12.00',
    img: 'https://static.vecteezy.com/system/resources/previews/044/274/331/non_2x/potato-chips-in-a-bowl-on-isolated-transparent-background-free-png.png',
    category: 'Snack',
  },
    {
    name: 'CHICKEN POPS',
    desc: 'Mini chicken balls.',
    price: '$12.00',
    img: 'https://png.pngtree.com/png-clipart/20210530/original/pngtree-donut-multi-color-baking-photography-png-image_6357645.jpg',
    category: 'Snack',
  },
  {
    name: 'COKE',
    desc: 'Chilled classic coke.',
    price: '$5.00',
    img: 'https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-colorful-fruit-juice-drinks-healthy-beverage-illustration-png-image_15839208.png',
    category: 'Beverage',
  },
  {
    name: 'STRAWBERRY SHAKE',
    desc: 'Fresh strawberry blend.',
    price: '$7.00',
    img: 'https://www.pngall.com/wp-content/uploads/5/Beverage-PNG-Pic.png',
    category: 'Beverage',
  },
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('Food');

  const filteredProducts = products.filter(
    item => item.category === selectedCategory
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black text-white">
      {/* Top Section with Background Image */}
      <Navbar />
      <div className="relative w-full h-[400px] bottom-20 flex items-center justify-center text-center">
        <Image
          src="/background_burger.png"
          alt="Background"
          fill
          className="object-cover opacity-70"
        />
        <motion.div
          className="relative z-10 max-w-3xl px-4"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          variants={fadeUp}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold mb-4">Menu</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4" />
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </motion.div>
      </div>

      {/* Menu section */}
      <div className="bg-black text-white py-12 px-6">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 mb-6" />
          <div className="flex justify-center gap-4 my-8">
            {['Food', 'Snack', 'Beverage'].map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded font-semibold ${
                  selectedCategory === cat
                    ? 'bg-yellow-400 text-black'
                    : 'bg-neutral-900 hover:bg-gray-700 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {filteredProducts.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-neutral-900 p-4 rounded-xl text-center"
              variants={fadeUp}
            >
              <Image
                src={item.img}
                alt={item.name}
                className="mx-auto"
                width={150}
                height={150}
              />
              <h3 className="text-lg font-bold mt-4">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
              <p className="text-yellow-400 font-bold text-lg mt-2">{item.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <TopProduct />
      <Footer />
    </div>
  );
}