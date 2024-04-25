import React from "react";

function Card(admin) {
  console.log(admin.admin)
    return (
        <>
        <div className="wrapper bg-white antialiased text-gray-900">
                <div>
    
                <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww" alt=" random imgee" class="w-full object-cover object-center rounded-lg shadow-md"/>    
    
                <div className="relative px-4 -mt-16  ">
                   <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <span className={`bg-teal-200 text-teal-800 ${admin.admin==="true"?"":"hidden"} text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide`}>
                        New
                      </span>
                </div>
         
                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
      
                <div className="mt-1">
                  $1800
                  <span className="text-gray-600 text-sm">   /wk</span>
                </div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                  <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                </div>  
                <div className="flex justify-around py-4 ">
                        <button className="uppercase bg-amber-500 hover:bg-amber-600 text-white w-32 h-9 rounded-md">view details</button>
                        <button className="uppercase bg-gray-800 hover:bg-gray-900 w-32 text-white h-9 rounded-md">Book Now</button>
                </div>
                </div>
            </div>
  
            </div>
            </div>
        </>
    )
}

export default Card;