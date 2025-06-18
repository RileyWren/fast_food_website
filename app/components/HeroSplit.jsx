import Image from 'next/image'
import Link from 'next/link'
import burger from '../../public/burger5.webp' // replace with your image

const HeroSplit = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-black px-4 md:px-16 py-12 gap-8">
      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
        <Image
          src={burger}
          alt="Burger Promo"
          className="w-full h-full object-cover rounded-xl"
          width={600}
          height={400}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 text-white">
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
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✔</span> Best Price
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✔</span> Best Service
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✔</span> Fresh Ingredient
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✔</span> Health Protocol
          </div>
        </div>

        {/* BUTTON */}
        <Link
          href="/about"
          className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
        >
          About Us
        </Link>
      </div>
    </section>
  )
}

export default HeroSplit
