import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import burger3 from '../../public/burger3.webp'
import coke from '../../public/coke.webp'
import fries from '../../public/fries.png'
import smothie from '../../public/smothie.png'

const products = [
  {
    name: 'Get A 10% Discount on Payday week',
    desc: 'Lorem ipsum dolor sit.',
    img: burger3,
    bg: 'bg-neutral-900',
  },
  {
    name: 'Buy 1 Coke Get More Free 1 Coke',
    desc: 'Lorem ipsum dolor sit.',
    img: fries,
    bg: 'bg-neutral-900',
  },
  // {
  //   name: 'Smoothie',
  //   desc: 'Lorem ipsum dolor sit.',
  //   img: smothie,
  //   bg: 'bg-red-500',
  // },
]

const TopProduct = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 justify-center ">
      {products.map((product, index) => (
        <div
        key={index}
        className={`flex items-center w-full md:w-1/3 rounded-xl ${product.bg} p-4 gap-4`}
        >
          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ">
            <Image
              src={product.img}
              alt={product.name}
              width={200}
              height={200}
              className="object-cover w-full h-full"
              />
          </div>
          <div className="">
              <p className='text-yellow-300'>Payday Promo</p>
            <h3 className="font-bold text-lg text-white">{product.name}</h3>
            <p className="text-sm text-neutral-600">{product.desc}</p>
            <Link
              href="/order"
              className="text-yellow-300 text-sm hover:underline"
            >
              Buy Online
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default TopProduct
