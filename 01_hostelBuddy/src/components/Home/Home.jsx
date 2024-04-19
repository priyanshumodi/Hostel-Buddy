import React from "react";

function Home() {
    return (
        <>
       {/* <!-- main start here --> */}
        <div>
          <img className="w-full h-screen brightness-50" src={"https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" />
    
        </div>
        {/* <!-- main ends here --> */}
    
    
        {/* <!-- about section starts here --> */}
        <div className="mt-8 px-28 flex  justify-between flex-wrap">
          <div className="w-[34rem] mt-24 flex flex-wrap">
            <div className="flex flex-wrap">
              <div className="uppercase text-yellow-500 font-bold mx-1 text-lg mr-2">About us</div>
              <div className=" w-16 h-1 border-2 border-yellow-400 
              rounded-2xl mt-[11px] mb-2"></div>
            </div>
            <p className="text-4xl font-bold mt-2 mb-4">Welcome to <span className="text-yellow-500 uppercase">hostel buddy</span> </p>
            <p className="my-4 text-gray-700 text-base">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                 Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                  magna dolore erat amet.
            </p>
            <div className="my-8 flex flex-wrap md:flex-nowrap">
                <div className="w-36 py-8 px-20 m-2 mb-4 flex flex-col content-center justify-center items-center border-4 border-sky-900">
                    <div><i className="fa-solid fa-hotel text-yellow-500 font-extrabold text-4xl"></i></div>
                    <div className="text-4xl font-bold">1234</div>
                    <div className="text-slate-600">Rooms</div>
                </div>
                <div className="w-36 py-8 px-20 m-2 mb-4 flex flex-col content-center justify-center items-center border-4 border-sky-900">
                    <div><i className="fa-solid fa-users-cog text-yellow-500 font-extrabold text-4xl"></i></div>
                    <div className="text-4xl font-bold">1234</div>
                    <div className="text-slate-600">Staffs</div>
                </div>
                <div className="w-36 py-8 px-20 m-2 mb-4 flex flex-col content-center justify-center items-center border-4 border-sky-900">
                    <div><i className="fa-solid fa-users text-yellow-500 font-extrabold text-4xl"></i></div>
                    <div className="text-4xl font-bold">1234</div>
                    <div className="text-slate-600">Clents</div>
                </div>
                
            </div>
            <button className="bg-yellow-500 w-48 rounded h-14 text-white uppercase font-medium text-base">Explore More</button>
          </div>
          <div className="mt-24">
            <div className="grid grid-cols-2 gap-4 ">
                <div className="w-[250px] pt-24"><img src={"https://images.unsplash.com/photo-1619810230359-b2c2f61c49cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zdGVsfGVufDB8fDB8fHww"} alt="" /></div>
                <div className="w-[250px]"><img src={"https://images.unsplash.com/photo-1586214601498-4dbcfd0bf2c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsfGVufDB8fDB8fHww"} alt="" /></div>
                <div className="w-[250px]"><img src={"https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FudGVlbnxlbnwwfHwwfHx8MA%3D%3D"} alt="" /></div>
                <div className="w-[250px]"><img src={"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"} alt="" /></div>
            </div>
          </div>
        </div>
        {/* <!-- about section ends here --> */}
    
    
        {/* <!-- cards section starts here --> */}
         <div className="w-full h-screen px-28 mt-24 text-center">
            <div className="flex justify-center">
                <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                <div className="mx-2 uppercase font-bold text-yellow-500">Our Rooms</div>
                <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
            </div>
            <div className="text-4xl font-bold mt-2 mb-12">
                Explore Our <span className="text-yellow-500">ROOMS</span>
            </div>
            <div className="flex justify-between">
                <div className="w-[22rem] border rounded shadow-xl">
                    <div>
                        <img className="border rounded" src={"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"} alt="" />
                    </div>
                    <div>
                        <div className="my-3 ml-2 text-2xl font-bold">Junior Suite</div>
                        <div className="mb-4 mx-2 text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</div>
                        <div className="flex justify-around mb-6">
                            <button className="uppercase bg-yellow-500 text-white w-32 h-9">view details</button>
                            <button className="uppercase bg-gray-800 w-32 text-white h-9">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="w-[22rem] border rounded shadow-xl">
                    <div>
                        <img className="border rounded" src={"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"} alt="" />
                    </div>
                    <div>
                        <div className="my-3 ml-2 text-2xl font-bold">Junior Suite</div>
                        <div className="mb-4 mx-2 text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</div>
                        <div className="flex justify-around mb-6">
                            <button className="uppercase bg-yellow-500 text-white w-32 h-9">view details</button>
                            <button className="uppercase bg-gray-800 w-32 text-white h-9">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="w-[22rem] border rounded shadow-xl">
                    <div>
                        <img className="border rounded" src={"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"} alt="" />
                    </div>
                    <div>
                        <div className="my-3 ml-2 text-2xl font-bold">Junior Suite</div>
                        <div className="mb-4 mx-2 text-gray-600">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</div>
                        <div className="flex justify-around mb-6">
                            <button className="uppercase bg-yellow-500 text-white w-32 h-9">view details</button>
                            <button className="uppercase bg-gray-800 w-32 text-white h-9">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        {/* <!-- cards section ends here --> */}
        </>
    )
}

export default Home