import React from 'react';

const Book = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Hostel Booking Form</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" for="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" for="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" for="check-in">
            Check-in Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="check-in"
            type="date"
          />
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" for="name">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-zinc-700 text-sm font-bold mb-2" for="payment">
            Payment Method
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            id="payment"
          >
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank">Bank Transfer</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book;
