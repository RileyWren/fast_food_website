import React from 'react'
import Image from 'next/image'
import burger3 from '../../public/burger3.webp'
import coke from '../../public/coke.webp'


const TopProduct = () => {
  return (
    <div>
      <div className='bg-yellow-600 m-10'>
      <Image
      src={burger3}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <h3>Burger</h3>
    <p>Lorem ipsum dolor sit.</p>
    <p>Buy Online</p>
      </div>
        <div className='bg-yellow-600 m-10'>
      <Image
      src={coke}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <h3>Burger</h3>
    <p>Lorem ipsum dolor sit.</p>
    <p>Buy Online</p>
      </div>
    </div>
  )
}

export default TopProduct