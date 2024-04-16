import React from "react";

function Header() {
    return (
        <nav className="w-full h-20 bg-gray-800 flex justify-around items-center">
        <div>
          <h1 className="text-yellow-600 text-3xl uppercase font-bold">hostel buddy</h1>
        </div>
        <div className="hidden md:flex w-[60%] justify-between items-center flex-wrap uppercase font-medium">
          <div className="text-yellow-600 cursor-pointer">Home</div>
          <div className="text-white hover:text-yellow-600 cursor-pointer">Services</div>
          <div className="text-white hover:text-yellow-600 cursor-pointer">room</div>
          <div className="text-white hover:text-yellow-600 cursor-pointer">page</div>
          <div className="text-white hover:text-yellow-600 cursor-pointer">about</div>
          <div className="text-white hover:text-yellow-600 cursor-pointer">contact</div>
        </div>
        <div>
            
            <button  className="hidden md:block bg-yellow-600 p-2 font-semibold m-4"> <a href="signup.html">Login/Signup</a></button>
        </div>
        </nav>
    )
}

export default Header