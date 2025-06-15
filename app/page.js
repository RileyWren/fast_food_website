import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import burger from '../public/burger_home.png'
import burger2 from '../public/burger_home2.png'
import Button from './components/Button'

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col sm:flex-row items-center sm:gap-20 justify-between px-4 sm:px-16 py-10 gap-6">
        {/* Image Section */}
        <div className="sm:w-1/2 flex justify-center">
          <Image
            src={burger}
            width={400}
            height={400}
            alt="BURGER IMAGE"
            className="hidden sm:block w-3/4 sm:w-full max-w-xs sm:max-w-md object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl font-bold font-serif mb-6">
            Enjoy Burgry <br className="hidden sm:block" /> Make Your Tummy Happy
          </h1>
          <div className="sm:w-1/2 flex justify-center">
            <Image
              src={burger2}
              width={400}
              height={400}
              alt="BURGER IMAGE"
              className="sm:hidden w-3/4 sm:w-full max-w-xs sm:max-w-md object-contain"
            />
          </div>
          <p className="text-white text-sm sm:text-lg leading-relaxed mb-7">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
            Cum sociis natoque penatibus et magnis dis parturient montes.
          </p>
          <Button content='Learn more' />
        </div>
      </div>
    </div>
  )
}

export default Page
