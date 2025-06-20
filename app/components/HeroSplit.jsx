'use client'
import Image from 'next/image'
import Link from 'next/link'
import burger from '../../public/burger5.webp'
import { motion } from 'framer-motion'

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
}

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
}

const HeroSplit = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-black px-4 md:px-16 py-12 gap-8">
      {/* LEFT IMAGE */}
      <motion.div
        className="w-full md:w-1/2 rounded-xl overflow-hidden"
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={burger}
          alt="Burger Promo"
          className="w-full h-full object-cover rounded-xl"
          width={600}
          height={400}
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        className="w-full md:w-1/2 text-white"
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Find Your Best Tasted Food & Drink Just In One Place
        </h1>

        <div className="w-24 h-1 bg-yellow-400 mb-4"></div>

        <p className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-200 mb-6">
          {[
            'Best Price',
            'Best Service',
            'Fresh Ingredient',
            'Health Protocol'
          ].map((text, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemFade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="text-yellow-400">✔</span> {text}
            </motion.div>
          ))}
        </div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Link
            href="/about"
            className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            About Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSplit
