// components/HeroVideoSection.js
import React from 'react';
// import video from "../../public/burger_video.mp4"

export default function HeroVideoSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/burger_video_fixed.mp4" // <-- put your file in public folder as 'video.mp4'
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
        {/* Yellow Play Button */}
        <button className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.939a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
          </svg>
        </button>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold">WE SERVE YOU THE BEST</h1>

        {/* Yellow underline */}
        <div className="w-16 h-1 bg-yellow-400 mt-2 mb-4"></div>

        {/* Subtext */}
        <p className="max-w-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
    </div>
  );
}
