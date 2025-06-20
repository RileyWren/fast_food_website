'use client'
import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import burger from '../public/burger_home.png'
import burger2 from '../public/burger_home2.png'
import Button from './components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faDroplet, faLeaf } from '@fortawesome/free-solid-svg-icons'
import TopProduct from './components/TopProduct'
import HeroSplit from './components/HeroSplit'
import MenuGrid from './components/MenuGrid'
import HeroVideoSection from './components/HeroVideoSection'
import CustomerReview from './components/CustomerReview'
import SpecialOfferSection from './components/SpecialOfferSection'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col sm:flex-row items-center sm:gap-20 justify-between px-4 sm:px-16 py-10 gap-6">
        {/* Image Section */}
        <div className="sm:w-1/2 flex justify-center">
          <motion.div
            animate={{ y: [0, -60, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:block w-3/4 sm:w-full max-w-xs sm:max-w-md object-contain"
          >
            <Image
              src={burger}
              width={400}
              height={400}
              alt="BURGER IMAGE"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <motion.div
          className="sm:w-1/2 text-center sm:text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-white text-4xl sm:text-5xl font-bold font-serif mb-6"
            variants={textVariant}
          >
            Enjoy Burgry <br className="hidden sm:block" /> Make Your Tummy Happy
          </motion.h1>

          <div className="sm:w-1/2 flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="sm:hidden w-3/4 sm:w-full max-w-xs sm:max-w-md object-contain"
            >
              <Image
                src={burger2}
                width={400}
                height={400}
                alt="BURGER IMAGE"
              />
            </motion.div>
          </div>

          <motion.p
            className="text-white text-sm sm:text-lg leading-relaxed mb-7"
            variants={textVariant}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes.
          </motion.p>

          <motion.div
            className="hidden sm:flex justify-start gap-25 mb-10"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={textVariant}>
              <FontAwesomeIcon icon={faUtensils} className='text-sm text-amber-400 h-6 m-4' />
              <p className='text-white'>Delicious</p>
            </motion.div>
            <motion.div variants={textVariant}>
              <FontAwesomeIcon icon={faDroplet} className='text-sm text-amber-400 h-6 m-4' />
              <p className='text-white'>Fresh</p>
            </motion.div>
            <motion.div variants={textVariant}>
              <FontAwesomeIcon icon={faLeaf} className='text-sm text-amber-400 h-6 m-4' />
              <p className='text-white'>Organic</p>
            </motion.div>
          </motion.div>

          <motion.div variants={textVariant}>
            <Button content='Learn more' />
          </motion.div>
        </motion.div>
      </div>

      <TopProduct />
      <HeroSplit />
      <MenuGrid />
      {/* <HeroVideoSection /> */}
      <CustomerReview />
      <SpecialOfferSection />
      <Footer />
    </div>
  )
}

export default Page
