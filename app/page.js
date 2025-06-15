import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import burger from '../public/burger_home.png'

const page = () => {
  return (
    <div className=' min-h-screen w-full overflow-x-hidden bg-black'>
        <Navbar />
        <div className='sm:flex sm:justify-between sm:items-center flex flex-col items-baseline-last'>
          <h1 className='sm:hidden text-wrap text-white text-3xl font-bold font-serif p-3 text-center mt-10'>Enjoy Burgry Make Your Tummy Happy</h1> <br /> <br />
        <Image
            src={burger}
            width={100}
            height={100}
            alt="BURGER IMAGE"
            className='relative left-22'
        />
        <div className=''>
          <h1 className='text-wrap text-white text-3xl font-bold font-serif p-3 text-center mt-10'>Enjoy Burgry Make Your Tummy Happy</h1> <br /> <br />

        <p className='text-sm sm:text-lg text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
        </div>
    </div>
  )
}

export default page