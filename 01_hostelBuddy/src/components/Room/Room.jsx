import React from "react";
//import background from "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

function Room() {
    const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return (
    <>
     {background && (
        <div class="h-64 bg-no-repeat bg-cover text-7xl text-center pt-24 font-bold text-white" 
        style={{ backgroundImage: `url(${background})` }}>
        ROOMS
        </div> 
     )}

      
    
    <div className="w-full h-auto px-28 mt-24 text-center pb-8">
        <div className="flex justify-center">
            <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
            <div class="mx-2 uppercase font-bold text-yellow-500">Our Rooms</div>
            <div class=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
        </div>
        <div class="text-5xl font-bold mt-2 mb-12">
            Explore Our <span class="text-yellow-500">ROOMS</span>
        </div>

        <div class="grid gap-x-8 gap-y-4 grid-cols-3">
            <div class="w-[22rem] border rounded shadow-xl">
                <div>
                    <img class="border rounded" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww" alt=""/>
                </div>
                <div>
                    <div class="my-3 ml-2 text-2xl font-bold">Junior Suite</div>
                    <div class="mb-4 mx-2 text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</div>
                    <div class="flex justify-around mb-6">
                        <button class="uppercase bg-yellow-500 text-white w-32 h-9">view details</button>
                        <button class="uppercase bg-gray-800 w-32 text-white h-9">Book Now</button>
                    </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl">
                <div>
                    <img class="border rounded" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww" alt=""/>
                </div>
                <div>
                    <div class="my-3 ml-2 text-2xl font-bold">Junior Suite</div>
                    <div class="mb-4 mx-2 text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</div>
                    <div class="flex justify-around mb-6">
                        <button class="uppercase bg-yellow-500 text-white w-32 h-9">view details</button>
                        <button class="uppercase bg-gray-800 w-32 text-white h-9">Book Now</button>
                    </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl">
                <div>
                    <img class="border rounded" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww" alt=""/>
                </div>
                <div>
                    <div class="my-3 ml-2 text-2xl font-bold">Junior Suite</div>
                    <div class="mb-4 mx-2 text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</div>
                    <div class="flex justify-around mb-6">
                        <button class="uppercase bg-yellow-500 text-white w-32 h-9">view details</button>
                        <button class="uppercase bg-gray-800 w-32 text-white h-9">Book Now</button>
                    </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl">
                <div>
                    <img class="border rounded" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww" alt=""/>
                </div>
                <div>
                    <div class="my-3 ml-2 text-2xl font-bold">Junior Suite</div>
                    <div class="mb-4 mx-2 text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</div>
                    <div class="flex justify-around mb-6">
                        <button class="uppercase bg-yellow-500 text-white w-32 h-9">view details</button>
                        <button class="uppercase bg-gray-800 w-32 text-white h-9">Book Now</button>
                    </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl">
                <div>
                    <img class="border rounded" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww" alt=""/>
                </div>
                <div>
                    <div class="my-3 ml-2 text-2xl font-bold">Junior Suite</div>
                    <div class="mb-4 mx-2 text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</div>
                    <div class="flex justify-around mb-6">
                        <button class="uppercase bg-yellow-500 text-white w-32 h-9">view details</button>
                        <button class="uppercase bg-gray-800 w-32 text-white h-9">Book Now</button>
                    </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl">
                <div>
                    <img class="border rounded" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww" alt=""/>
                </div>
                <div>
                    <div class="my-3 ml-2 text-2xl font-bold">Junior Suite</div>
                    <div class="mb-4 mx-2 text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</div>
                    <div class="flex justify-around mb-6">
                        <button class="uppercase bg-yellow-500 text-white w-32 h-9">view details</button>
                        <button class="uppercase bg-gray-800 w-32 text-white h-9">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
     </div>
    {/* <!-- cards section ends here --> */}
      

    {/* <!-- room section ends here --> */}
    </>
    )
}

export default Room