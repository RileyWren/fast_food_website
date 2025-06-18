// app/about/page.jsx
import React from 'react';

const page = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section: ABOUT US */}
      <section className="relative bg-cover bg-center py-24 md:py-32" style={{ backgroundImage: "url('public/background_burger.jpg')" }}>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">ABOUT US</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
      </section>

      {/* Main Content Section: Good Food for Your All Day Good Mood */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="order-2 md:order-1 flex justify-center">
            {/* Using a placeholder image, replace with your actual burger image */}
            <img
              src="/images/burgers-on-board.jpg"
              alt="Delicious Burgers"
              className="rounded-lg shadow-xl w-full max-w-md md:max-w-none h-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "public/second_burger_background.jpg";
              }}
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-yellow-500">
              GOOD FOOD FOR YOUR ALL DAY <br /> GOOD MOOD
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
            <img
                src="public/signature.webp" // Placeholder for signature
                alt="George Shaw Signature"
                className="mb-2"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "public/signature.webp";
                }}
            />
            <p className="text-gray-400 text-sm md:text-base font-semibold">
              George Shaw, CEO
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
