import React, { useState } from 'react';

// Sample media data (replace with your actual media URLs)
const media = [
  {
    type: 'image',
    src: 'path/to/image1.jpg',
    alt: 'Memory 1',
  },
  {
    type: 'video',
    src: 'path/to/video1.mp4',
    alt: 'Memory 1',
    title: 'Our First Trip',
  },
  {
    type: 'image',
    src: 'path/to/image2.jpg',
    alt: 'Memory 2',
  },
  {
    type: 'video',
    src: 'path/to/video2.mp4',
    alt: 'Memory 2',
    title: 'A Day to Remember',
  },
];

function Memories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('../media/us.jpg')" }}>
      <div className="flex flex-col items-center justify-center h-screen">
        {media[currentIndex].type === 'image' ? (
          <img
            src={media[currentIndex].src}
            alt={media[currentIndex].alt}
            className="max-w-full max-h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <video
              src={media[currentIndex].src}
              alt={media[currentIndex].alt}
              className="max-w-full max-h-full object-cover"
              controls
            />
            <h2 className="mt-4 text-2xl font-semibold text-white">
              {media[currentIndex].title}
            </h2>
          </div>
        )}
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between">
        <button
          onClick={handlePrev}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Memories;
