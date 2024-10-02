import React, { useState } from 'react';

// Media data with actual S3 video URLs
const media = [
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/bday.mp4',
    alt: 'Memory 1',
    title: 'Your Birthday',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/best_day_of_us.mp4',
    alt: 'Memory 2',
    title: 'Day before you went home',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/blackshirt.mp4',
    alt: 'Memory 3',
    title: 'Remember how jealous you were seeing me in this shirt',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/blacksuit.mp4',
    alt: 'Memory 4',
    title: 'This was my present to you, to my cute panda',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/doraemon.mp4',
    alt: 'Memory 5',
    title: 'Ha Ha Ha, mein hu ek udta robo doraemon',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/jealous_palak.mp4',
    alt: 'Memory 6',
    title: 'My cutie getting jealous',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/jealous_palakji.mp4',
    alt: 'Memory 7',
    title: 'priya k sath nahi qt raju k sath jana tha',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/jhula.mp4',
    alt: 'Memory 8',
    title: 'Remember how mad i was over that rikshawala?',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/kheer.mp4',
    alt: 'Memory 9',
    title: 'mumma was so happy to see how u enjoyed the kheer she made',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/last_day.mp4',
    alt: 'Memory 10',
    title: "The day my heart didn't wanted to leave you even for a second",
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/lastdate.mp4',
    alt: 'Memory 11',
    title: 'My Girl',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/leo.mp4',
    alt: 'Memory 12',
    title: 'Chipi-chipi chapachapa!!',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/leoandme.mp4',
    alt: 'Memory 13',
    title: 'Our dating phase',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/my_birthdaypresent.mp4',
    alt: 'Memory 14',
    title: 'My present',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/nails.mp4',
    alt: 'Memory 15',
    title: 'Aurat sirf apne Pasandida mard k nails trim karti hai',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/palaku_b_day_gift.mp4',
    alt: 'Memory 16',
    title: 'Your birthday present',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/park_date.mp4',
    alt: 'Memory 17',
    title: 'Our park date',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/pasandida_aurat.mp4',
    alt: 'Memory 18',
    title: 'Pasandida aurat',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/ramen.mp4',
    alt: 'Memory 19',
    title: 'Ramen Date',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/ring_ceremony.mp4',
    alt: 'Memory 20',
    title: "Our Ring Ceremony",
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/shaadi+k+joda+.mp4',
    alt: 'Memory 21',
    title: 'Shaadi ka joda',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/snoring+palak.mp4',
    alt: 'Memory 22',
    title: 'My Snoring baby',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/tattoo.mp4',
    alt: 'Memory 23',
    title: 'Remember how you asked me for accompaning you ',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/thirst_trap.mp4',
    alt: 'Memory 24',
    title: 'Remember what you said to me for this snap?',
  },
  {
    type: 'video',
    src: 'https://firstlovelaksh.s3.eu-north-1.amazonaws.com/videos/us_.mp4',
    alt: 'Memory 25',
    title: 'Us',
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
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex flex-col items-center justify-center h-full px-4">
        {/* Title Container (Overlapping the video) */}
        <div className="absolute top-16 left-0 right-0 z-10">
          <h2 className="text-3xl font-semibold text-white text-center shadow-lg bg-black bg-opacity-50 py-2 px-4 rounded-lg">
            {media[currentIndex].title}
          </h2>
        </div>

        {/* Video or Image Display */}
        {media[currentIndex].type === 'image' ? (
          <img
            src={media[currentIndex].src}
            alt={media[currentIndex].alt}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        ) : (
          <div className="relative w-full max-w-4xl">
            <video
  src={media[currentIndex].src}
  alt={media[currentIndex].alt}
  className="w-full h-auto max-h-[75vh] rounded-lg shadow-lg z-0"
  controls
  autoPlay
  unmuted
  loop
  controlsList="nodownload" // Add this attribute to disable download option
/>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-8 transform -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg"
        >
          ❯
        </button>
      </div>
    </div>

  );
}

export default Memories;
