

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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


export default function MenuGrid() {
  const [selectedCategory, setSelectedCategory] = useState('Food');

  const filteredProducts = products.filter(
    item => item.category === selectedCategory
  );

  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold">OUR BEST MENU</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 mb-6"></div>
        <p className="max-w-xl mx-auto text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
        </p>

        <div className="flex justify-center gap-4 my-8">
          {['Food', 'Snack', 'Beverage'].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 px-4 rounded font-semibold ${
                selectedCategory === cat
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {filteredProducts.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gray-900 p-4 rounded-xl text-center"
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
      </div>
    </div>
  );
}
