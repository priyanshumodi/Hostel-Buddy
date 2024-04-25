import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

const images = [
  background,
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
  background,
];

function RoomBook() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // New state variable

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleBookNowClick = () => {
    setIsPopupOpen(true); // Open popup on click
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center my-4">Room Booking</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 relative">
            <img
              src={images[currentImageIndex]}
              alt="Room Image"
              className="mx-auto"
            />
            <button
              id="prevBtn"
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-zinc-800 text-white p-2 rounded-full"
              onClick={handlePrevClick}
            >
              &#8249;
            </button>
            <button
              id="nextBtn"
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-zinc-800 text-white p-2 rounded-full"
              onClick={handleNextClick}
            >
              &#8250;
            </button>
          </div>
          <div className="p-4">
            <h1 className="text-xl font-bold">Room Number: 21</h1>
            <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, sint, inventore quas facilis aperiam ipsa, exercitationem error recusandae molestiae quisquam ab magni eligendi repudiandae delectus debitis culpa rem nostrum necessitatibus?</p>
            <p className="text-xl font-bold mt-2">$99.99 / month</p>
            <div className="mt-4">
              <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
              <span className="text-sm text-gray-600">(based on 234 ratings)</span>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg mt-4 w-full"
              onClick={handleBookNowClick}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      {isPopupOpen && <Book onClose={() => setIsPopupOpen(false)} />}  {/* Render PopupForm conditionally */}
      {isPopupOpen &&(
          <div>
            <button
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg mt-4 mb-4 text-center"
                onClick={() => setIsPopupOpen(false)}
              >
                cancel
              </button>
          </div>
        )}
    </div>
  );
}

export default RoomBook;
