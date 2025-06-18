import Image from 'next/image'
// import burger1 from '../public/burger1.png'
// import burger2 from '../public/burger2.png'
// import burger3 from '../public/burger3.webp'
// import burger4 from '../public/burger4.png'

const products = [
  {
    name: 'REGULAR BEEF BURGER',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$42.00',
    img: 'https://www.theatomicburger.com/_next/image?url=%2Fimages%2Fmenu-items%2Fatomic-burger.png&w=3840&q=75',
  },
  {
    name: 'BLACK BEEF BURGER',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$45.00',
    img: 'https://www.burgerandsauce.com/wp-content/uploads/2021/02/burger-and-sauce-beef-burger-3000px2-1.png',
  },
  {
    name: 'BIG MEETY',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$15.00',
    img: 'https://www.burgerandsauce.com/wp-content/uploads/2023/10/burger-and-sauce-festive-burger-1024x1024.png',
  },
  {
    name: 'CHICKEN BURGER',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: '$20.00',
    img: 'https://cdn.prod.website-files.com/60b5eaf08d95643a11ca3496/60e49230d1f3d82cc59d754a_The%20Trailblazer-2.webp',
  },
  // Add more if you want
];

export default function MenuGrid() {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold">OUR BEST MENU</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-2 mb-6"></div>
        <p className="max-w-xl mx-auto text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
        </p>
        <div className="flex justify-center gap-4 my-8">
          <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded">Food</button>
          <button className="bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded">Snack</button>
          <button className="bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded">Beverage</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map((item, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded-xl text-center">
            <Image src={item.img} alt={item.name} className="mx-auto" width={150} height={150} />
            <h3 className="text-lg font-bold mt-4">{item.name}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
            <p className="text-yellow-400 font-bold text-lg mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
