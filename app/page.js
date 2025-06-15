import React from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import burger from '../public/burger_home.png'

const page = () => {
  return (
    <div className=' h-screen bg-black'>
        <Navbar />
        <div className='flex justify-between items-center gap-40 p-10'>
        <Image
            src={burger}
            width={500}
            height={500}
            alt="BURGER IMAGE"
            className='p-10'
        />
        <div className=''>
        <h1 className='text-wrap text-white text-7xl font-bold font-serif'>Enjoy Burgry Make Your Tummy Happy</h1> <br /> <br />
        <p className='text-lg text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
        </div>
    </div>
  )
}

export default page