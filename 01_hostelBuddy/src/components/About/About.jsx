import React from "react";

function About() {
  const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return (
        // <!-- about section starts here -->
        <>
        {background && (
          <div class="h-64 bg-no-repeat bg-cover text-7xl text-center pt-24 font-bold text-white" 
          style={{ backgroundImage: `url(${background})` }}>
          ABOUT
          </div> 
       )}
          
       
       <div class="mt-8 px-28 flex  justify-between flex-wrap">
        <div class="w-[34rem] mt-24 flex flex-wrap">
          <div class="flex flex-wrap">
            <div class="uppercase text-yellow-500 font-bold mx-1 text-lg mr-2">About us</div>
            <div class=" w-16 h-1 border-2 border-yellow-400 
            rounded-2xl mt-[11px] mb-2"></div>
          </div>
          <p class="text-4xl font-bold mt-2 mb-4">Welcome to <span class="text-yellow-500 uppercase">hostel buddy</span> </p>
          <p class="my-4 text-gray-700 text-base">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
               Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                magna dolore erat amet.
          </p>
          <div class="my-8 flex flex-wrap md:flex-nowrap">
              <div class="w-36 py-8 px-20 m-2 mb-4 flex flex-col content-center justify-center items-center border-4 border-sky-900">
                  <div><i class="fa-solid fa-hotel text-yellow-500 font-extrabold text-4xl"></i></div>
                  <div class="text-4xl font-bold">1234</div>
                  <div class="text-slate-600">Rooms</div>
              </div>
              <div class="w-36 py-8 px-20 m-2 mb-4 flex flex-col content-center justify-center items-center border-4 border-sky-900">
                  <div><i class="fa-solid fa-users-cog text-yellow-500 font-extrabold text-4xl"></i></div>
                  <div class="text-4xl font-bold">1234</div>
                  <div class="text-slate-600">Staffs</div>
              </div>
              <div class="w-36 py-8 px-20 m-2 mb-4 flex flex-col content-center justify-center items-center border-4 border-sky-900">
                  <div><i class="fa-solid fa-users text-yellow-500 font-extrabold text-4xl"></i></div>
                  <div class="text-4xl font-bold">1234</div>
                  <div class="text-slate-600">Clents</div>
              </div>
              
          </div>
          <button class="bg-yellow-500 w-48 rounded h-14 text-white uppercase font-medium text-base">Explore More</button>
        </div>
        <div class="mt-24">
          <div class="grid grid-cols-2 gap-4 ">
              <div class="w-[250px] pt-24"><img src="https://images.unsplash.com/photo-1619810230359-b2c2f61c49cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9zdGVsfGVufDB8fDB8fHww" alt=""/></div>
              <div class="w-[250px]"><img src="https://images.unsplash.com/photo-1586214601498-4dbcfd0bf2c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zdGVsfGVufDB8fDB8fHww" alt=""/></div>
              <div class="w-[250px]"><img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FudGVlbnxlbnwwfHwwfHx8MA%3D%3D" alt=""/></div>
              <div class="w-[250px]"><img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" alt=""/></div>
          </div>
        </div>
      </div>
      </>
    //    <!-- about section ends here --> 
    )
}

export default About