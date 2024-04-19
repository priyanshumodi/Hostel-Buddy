import React from "react";
import { Link,NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="w-full h-20 bg-gray-800 flex justify-around items-center">
        <div>
          <h1 className="text-amber-500 text-3xl uppercase font-bold">hostel buddy</h1>
        </div>

        <div className="hidden md:flex w-[60%] justify-around items-center flex-wrap uppercase font-medium">
          <div className="text-amber-500 cursor-pointer">
            <NavLink
            to={'/'}
            className={({isActive}) => `${isActive?"text-amber-500":"text-white"} hover:text-amber-500`}
            >
              Home
            </NavLink>
          </div>

          <div className="text-white cursor-pointer">
            <NavLink
            to={'/services'}
            className={({isActive}) => `${isActive?"text-amber-500":"text-white"} hover:text-amber-500`}
            >
              Services
            </NavLink>
          </div>

          <div className="text-white hover:text-amber-500 cursor-pointer"> 
            <NavLink
            to={'/room'}
            className={({isActive}) => `${isActive?"text-amber-500":"text-white"} hover:text-amber-500`}
            >
              room
            </NavLink>
          </div>

          <div className="text-white hover:text-amber-500 cursor-pointer">
            <NavLink
            to={'/about'}
            className={({isActive}) => `${isActive?"text-amber-500":"text-white"} hover:text-amber-500`}
            >
              about
            </NavLink>
          </div>

          <div className="text-white hover:text-amber-500 cursor-pointer">
            <NavLink
            to={'/contact'}
            className={({isActive}) => `${isActive?"text-amber-500":"text-white"} hover:text-amber-500`}
            >
              contact
            </NavLink>
          </div>
        </div>
       
        <div>
        <button  className="hidden text-xl md:block bg-amber-500 font-semibold m-4 px-8 py-2"> 
              <NavLink
              to={'/login'}
              className={({isActive}) => `${isActive?"text-black":"text-white"} hover:text-black`}
              >
                Login
              </NavLink>
        </button>
        </div>

        </nav>
    )
}

export default Header