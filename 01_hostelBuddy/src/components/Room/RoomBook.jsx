import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from './Book';


function RoomBook() {
  const {userId} = useParams()
  const rooms = useSelector(state => state.roomReducer.room)

  const [title,setTitle] = useState()
  const [image,setImage] = useState()
  const [price,setPrice] = useState()
  const [description,setDescription] = useState()

  useEffect(() => {
    const found = rooms.find(room => room.id===userId)
    // console.log(found)
    setTitle(found.title)
    setImage(found.image)
    setPrice(found.price)
    setDescription(found.description)
  },[userId])
  

  const images = [
    image,
  ];
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
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-lg">{description}</p>
            <p className="text-xl font-bold mt-2">${price} / month</p>
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
      {isPopupOpen && <Book id={userId} price={price} onClose={() => setIsPopupOpen(false)} />}  {/* Render PopupForm conditionally */}
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
