import React from 'react'
import Image from 'next/image'
import burger3 from '../../public/burger3.webp'
import coke from '../../public/coke.webp'
import fries from '../../public/fries.png'

const TopProduct = () => {
  return (
    <div className=' flex justify-between'>
      <div className='bg-yellow-600 m-20 text-white flex justify-between items-center rounded-4xl'>
      <Image
      src={burger3}
      width={150}
      height={150}
      alt="Picture of the author"
    />
    <div>    <h3>Burger</h3>
    <p>Lorem ipsum dolor sit.</p>
    <p>Buy Online</p>
    </div>

      </div>
        <div className='bg-stone-900 m-10 flex justify-between items-center'>
      <Image
      src={coke}
      width={150}
      height={150}
      alt="Picture of the author"
    />
     <div>    <h3>Coke</h3>
    <p>Lorem ipsum dolor sit.</p>
    <p>Buy Online</p>
    </div>
      </div>
        <div className='bg-red-900 m-10 flex justify-between items-center'>
      <Image
      src={fries}
      width={150}
      height={150}
      alt="Picture of the author"
    />
      <div>    <h3>French Fries</h3>
    <p>Lorem ipsum dolor sit.</p>
    <p>Buy Online</p>
    </div>
      </div>
    </div>
  )
}

export default TopProduct