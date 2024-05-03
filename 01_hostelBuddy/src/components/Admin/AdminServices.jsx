import React from "react";

function AdminService() {
    const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
    return (
        <div>
            
        <>
        {background && (
            <div className="h-64 bg-no-repeat bg-cover text-7xl text-center pt-24 font-bold text-white" 
            style={{ backgroundImage: `url(${background})` }}>
            SERVICES
            </div> 
        )}
      
    {/* cards section starts here  */}
    <div className="w-full h-auto px-28 mt-24 pb-8 text-center">
        <div className="flex justify-center">
            <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
            <div className="mx-2 uppercase font-bold text-yellow-500">Our Services</div>
            <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
        </div>
        <div className="text-5xl font-bold mt-2 mb-12">
            Total <span className="text-yellow-500">Services - 6</span>
        </div>

        <div className="grid gap-x-8 gap-y-4 grid-cols-3 tect">
            <div className="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div className=" flex flex-col content-center justify-center items-center space-y-4">
                    <div className="border border-gray-300 p-1"><i className="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div className="text-2xl font-bold">Rooms & Appartment</div>
                    <div className="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div className="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div className=" flex flex-col content-center justify-center items-center space-y-4">
                    <div className="border border-gray-300 p-1"><i className="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div className="text-2xl font-bold">Foods & Cafe</div>
                    <div className="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div className="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div className=" flex flex-col content-center justify-center items-center space-y-4">
                    <div className="border border-gray-300 p-1"><i className="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div className="text-2xl font-bold">Spa & Fitness</div>
                    <div className="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div className="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div className=" flex flex-col content-center justify-center items-center space-y-4">
                    <div className="border border-gray-300 p-1"><i className="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div className="text-2xl font-bold">Sports & Gaming</div>
                    <div className="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div className="w-[22rem] border rounded shadow-xl transition duration-300   hover:bg-yellow-500 hover:text-white text-center py-14">
                <div className=" flex flex-col content-center justify-center items-center space-y-4">
                    <div className="border border-gray-300 p-1"><i className="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div className="text-2xl font-bold">Events & Party</div>
                    <div className="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            <div className="w-[22rem] border rounded shadow-xl transition duration-300  hover:bg-yellow-500 hover:text-white text-center py-14">
                <div className=" flex flex-col content-center justify-center items-center space-y-4">
                    <div className="border border-gray-300 p-1"><i className="fa-solid fa-hotel text-primary text-yellow-500 font-extrabold text-4xl border p-2 border-gray-300"></i></div>
                    <div className="text-2xl font-bold">GYM & Yoga</div>
                    <div className="text-slate-600 text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti laudantium minus, </div>
                </div>
            </div>
            
        </div>
     </div>
    {/* cards section ends here  */}
      

    {/* Services section ends here  */}
    </>
    
        </div>
    )
}

export default AdminService