
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import burger3 from '../../public/burger3.webp'
import coke from '../../public/coke.webp'
import fries from '../../public/fries.png'

const products = [
  {
    name: 'Get A 10% Discount on Payday Week!',
    desc: 'Order now and enjoy 10% off your favorite burgers during our payday promo!',
    img: burger3,
    bg: 'bg-neutral-900',
  },
  {
    name: 'Buy 1 Coke, Get 1 Free!',
    desc: 'Limited time offer. Refresh your meal with a free coke — no extra charge!',
    img: fries,
    bg: 'bg-neutral-900',
  },
]

const TopProduct = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 px-4 py-8 md:px-16">
      {products.map((product, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center md:items-stretch rounded-2xl ${product.bg} overflow-hidden shadow-lg transition hover:scale-[1.01] w-full md:w-1/2`}
        >
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <Image
              src={product.img}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-2">
            <span className="text-yellow-400 uppercase text-sm font-semibold tracking-wider">
              Promo Offer
            </span>
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              {product.name}
            </h3>
            <p className="text-gray-300 text-base">{product.desc}</p>
            <Link
              href="/order"
              className="mt-4 text-yellow-300 text-sm underline hover:text-yellow-400 transition"
            >
              Buy Online →
            </Link>
          </div>
        </div>
      ))}
    </section>
  )
}

export default TopProduct
