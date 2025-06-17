import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import burger3 from '../../public/burger3.webp'
import coke from '../../public/coke.webp'
import fries from '../../public/fries.png'
import smothie from '../../public/smothie.png'

const TopProduct = () => {

  const products = [
  {
    name: 'FOOD',
    desc: 'Lorem ipsum dolor sit.',
    img: burger3,
    bg: 'bg-yellow-500',
  },
  {
    name: 'SNACK',
    desc: 'Lorem ipsum dolor sit.',
    img: fries,
    bg: 'bg-green-700',
  },
  {
    name: 'Smoothie',
    desc: 'Lorem ipsum dolor sit.',
    img: smothie,
    bg: 'bg-red-500',
  },
]

  return (
    <section className=' flex justify-between'>
      {/* <div className='bg-yellow-600 m-20 text-white flex justify-between items-center rounded-4xl'>
      <Image
      src={burger3}
      width={150}
      height={150}
      alt="Picture of the author"
    />
    <div>    <h3>Burger</h3>
    <p>Lorem ipsum dolor sit.</p>
    <Link href="/order">Buy Online</Link>
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
    <Link href="/order">Buy Online</Link>
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
    <Link href="/order">Buy Online</Link>
    </div>
      </div> */}

        {products.map((products, index) => {
          <div
            key={index}
            className={`${products}`}
          >
            <Image 
                    src={products.img}
      width={150}
      height={150}
      alt="Picture of the author"
            />
        <h3>{products.desc}</h3>
          </div>
        })}


    </section>
  )
}

export default TopProduct



// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import burger3 from '../../public/burger3.webp'
// import coke from '../../public/coke.webp'
// import fries from '../../public/fries.png'
// import smothie from '../../public/smothie.png'

// const products = [
//   {
//     name: 'FOOD',
//     desc: 'Lorem ipsum dolor sit.',
//     img: burger3,
//     bg: 'bg-yellow-500',
//   },
//   {
//     name: 'SNACK',
//     desc: 'Lorem ipsum dolor sit.',
//     img: fries,
//     bg: 'bg-green-700',
//   },
//   {
//     name: 'Smoothie',
//     desc: 'Lorem ipsum dolor sit.',
//     img: smothie,
//     bg: 'bg-red-500',
//   },
// ]

// const TopProduct = () => {
//   return (
//     <section className="flex flex-col md:flex-row gap-4 justify-center px-4 py-6">
//       {products.map((product, index) => (
//         <div
//           key={index}
//           className={`flex items-center w-full md:w-1/3 rounded-xl ${product.bg} p-4 gap-4`}
//         >
//           <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ">
//             <Image
//               src={product.img}
//               alt={product.name}
//               width={90}
//               height={90}
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <div className="text-white">
//             <h3 className="font-bold text-lg">{product.name}</h3>
//             <p className="text-sm">{product.desc}</p>
//             <Link
//               href="/order"
//               className="text-yellow-300 text-sm hover:underline"
//             >
//               Buy Online
//             </Link>
//           </div>
//         </div>
//       ))}
//     </section>
//   )
// }

// export default TopProduct
