import React from "react";

function Admin() {

    const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    return(
        <>
        {background && (
            <div className="uppercase h-64 bg-no-repeat bg-cover text-7xl text-center pt-24 font-bold text-white" 
            style={{ backgroundImage: `url(${background})` }}>
            members
            </div> 
         )}

        <div className="w-full h-auto px-28 mt-24 text-center pb-8">
                <div className="flex justify-center">
                    <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                    <div className="mx-2 uppercase font-bold text-yellow-500">Our Members</div>
                    <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                </div>
                <div className="text-5xl font-bold mt-2 mb-12">
                     Total <span class="text-yellow-500">MEMBERS - </span> 
                </div>


        </div>
        </>
    )
}

export default Admin

{/* 
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const UserProfile = ({ user }) => {
  return (
    <div className="p-5 border rounded text-center text-gray-500 max-w-sm">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src={user.avatar || 'https://loremflickr.com/320/320/girl'}
        alt="User avatar"
      />
      <div className="text-sm mt-5">
        <Link to={`/profile/${user.id}`} className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
          {user.name}
        </Link>
        <p>{user.bio}</p>
      </div>

      <p className="mt-2 text-sm text-gray-900">{user.description}</p>

    </div>
*/}