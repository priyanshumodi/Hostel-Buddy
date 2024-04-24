import React, { useState, useEffect } from 'react';
import { useId } from 'react';

const images = [
  // Replace these with your image paths
  'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex === images.length ? 0 : newIndex;
    });
    setTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });
    setTransitioning(true);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Adjust interval time in milliseconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container flex overflow-hidden">
      <div className="slider-wrapper flex w-full">
        {images.map((image, index) => (
          <div
            key={useId()}
            className={`slide relative flex-shrink-0 w-full h-full px-32 py-16 overflow-hidden ${
              index === currentIndex ? 'active' : ''
            } ${transitioning ? 'transition ease-in-out duration-500' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="h-96 w-full object-cover" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="prev btn focus:outline-none bg-gray-200 hover:bg-gray-300 p-2 rounded-full absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2">
        Prev
      </button>
      <button onClick={nextSlide} className="next btn focus:outline-none bg-gray-200 hover:bg-gray-300 p-2 rounded-full absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2">
        Next
      </button>
    </div>
  );
};

export default Slider;
