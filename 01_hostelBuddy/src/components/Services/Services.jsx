import React from "react";

function Services() {
    const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return (
        // Services start here 
        <>
        {background && (
            <div class="h-64 bg-no-repeat bg-cover text-7xl text-center pt-24 font-bold text-white" 
            style={{ backgroundImage: `url(${background})` }}>
            SERVICES
            </div> 
        )}
      
    {/* cards section starts here  */}
    <div class="w-full h-auto px-28 mt-24 text-center">
        <div class="flex justify-center">
            <div class=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
            <div class="mx-2 uppercase font-bold text-yellow-500">Our Services</div>
            <div class=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
        </div>
        <div class="text-5xl font-bold mt-2 mb-12">
            Explore Our <span class="text-yellow-500">Services</span>
        </div>

        <div class="grid gap-x-8 gap-y-4 grid-cols-3 tect">
            <div class="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div class=" flex flex-col content-center justify-center items-center space-y-4">
                    <div class="border border-gray-300 p-1"><i class="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div class="text-2xl font-bold">Rooms & Appartment</div>
                    <div class="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div class=" flex flex-col content-center justify-center items-center space-y-4">
                    <div class="border border-gray-300 p-1"><i class="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div class="text-2xl font-bold">Foods & Cafe</div>
                    <div class="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div class=" flex flex-col content-center justify-center items-center space-y-4">
                    <div class="border border-gray-300 p-1"><i class="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div class="text-2xl font-bold">Spa & Fitness</div>
                    <div class="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div class=" flex flex-col content-center justify-center items-center space-y-4">
                    <div class="border border-gray-300 p-1"><i class="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div class="text-2xl font-bold">Sports & Gaming</div>
                    <div class="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl transition duration-300   hover:bg-yellow-500 hover:text-white text-center py-14">
                <div class=" flex flex-col content-center justify-center items-center space-y-4">
                    <div class="border border-gray-300 p-1"><i class="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div class="text-2xl font-bold">Events & Party</div>
                    <div class="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div class="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div class=" flex flex-col content-center justify-center items-center space-y-4">
                    <div class="border border-gray-300 p-1"><i class="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div class="text-2xl font-bold">GYM & Yoga</div>
                    <div class="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            
        </div>
     </div>
    {/* cards section ends here  */}
      

    {/* Services section ends here  */}
    </>
    )
}

export default Services