import React from "react";
import { useDispatch } from "react-redux";
import {removeRoom} from '../../features/room/roomSlice'
import {NavLink, useNavigate} from 'react-router-dom'

function Card(details) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    return (
        <>
        <div key={details.id} className="wrapper bg-white antialiased text-gray-900">

        
                <div>
                <NavLink
                  to={`roomBook/${details.id}`}
                  key={details.id}
                >
                    <img src={details.image} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"/>    
                </NavLink>
                  <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <span className={`bg-teal-200 text-teal-800 ${(details.new)?"":"hidden"} text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide`}>
                        New
                      </span>
                    </div>
         
                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{details.title}</h4>
          
                    <div className="mt-1">
                      ${details.price}
                      <span className="text-gray-600 text-sm">   /month</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                    <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                    </div>  
               
         
                    <div className="flex justify-around py-4 ">

                      <button  onClick={() => navigate(`roomBook/${details.id}`)} className={`uppercase  ${details.admin?"hidden":""} bg-amber-500 hover:bg-amber-600 text-white w-32 h-9 rounded-md`}>view details</button>
                      <button onClick={() => navigate(`roomBook/${details.id}`)} className={`uppercase ${details.admin?"hidden":""} bg-gray-800 hover:bg-gray-900 w-32 text-white h-9 rounded-md`}>Book Now</button>
                      <button  className={`uppercase ${details.admin?"":"hidden"} bg-amber-500 hover:bg-amber-600 w-32 text-white h-9 rounded-md`}>update</button>
                      <button onClick={() => {const id = details.id;dispatch(removeRoom({id}))}} className={`uppercase ${details.admin?"":"hidden"} bg-red-600 hover:bg-red-700 w-32 text-white h-9 rounded-md`}>Remove Room</button>
                    </div>

                    </div>
                </div>
  
            </div>
            </div>
        </>
    )
}

export default Card;