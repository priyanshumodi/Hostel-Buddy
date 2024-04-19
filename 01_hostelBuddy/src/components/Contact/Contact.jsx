import React from "react";

function Contact() {
  const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return (
    //    contact start here
    <>
    {background && (
      <div class="h-64 bg-no-repeat bg-cover text-7xl text-center pt-24 font-bold text-white" 
      style={{ backgroundImage: `url(${background})` }}>
      CONTACT
      </div> 
   )}
          
     {/* cards section starts here  */}
        <div class="w-full h-auto px-28 mt-24 text-center">
            <div class="flex justify-center">
                <div class=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                <div class="mx-2 uppercase font-bold text-yellow-500">CONTACT US</div>
                <div class=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
            </div>
            <div class="text-5xl font-bold mt-2 mb-12">
                <span class="text-yellow-500">CONTACT</span> For Any Query
            </div>
    
            {/* //<!-- query starts --> */}
            <div class="flex justify-between">
                <div>
                    <div class="flex">
                        <div class="mx-2 uppercase font-bold text-yellow-500">BOOKING</div>
                        <div class=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                    </div>
                    <div class="text-slate-600 pl-2">PriyanshuGaour@gmail.com</div>
                </div>
                <div>
                    <div class="flex">
                        <div class="mx-2 uppercase font-bold text-yellow-500">GENERAL</div>
                        <div class=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                    </div>
                    <div class="text-slate-600 pl-2">Prajjwal@gmail.com</div>
                </div>
                <div>
                    <div class="flex">
                        <div class="mx-2 uppercase font-bold text-yellow-500">TECHNICAL</div>
                        <div class=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                    </div>
                    <div class="text-slate-600 pl-2">PriyanshuModi@gmail.com</div>
                </div>
                
                
            </div>
           {/* query ends */}
    
            {/* form starts  */}
            <div class="container mx-auto px-4 py-8">
                <form class="flex flex-col space-y-4">
                  <div class="flex flex-col">
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your Name" 
                    class="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" 
                    />
                  </div>
                  <div class="flex flex-col">
                    <input type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your Email" 
                    class="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" 
                    />
                  </div>
                  <div class="flex flex-col">
                    <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject" 
                    class="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" 
                    />
                  </div>
                  <div class="flex flex-col">
                    <textarea id="message" name="message" rows="5" placeholder="Message" class="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"></textarea>
                  </div>
                  <button type="submit" class="text-center p-4 bg-amber-500 text-white rounded hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                    Send Inquiry
                  </button>
                </form>
              </div>
              
           
         </div>
        
         {/* cards section ends here  */}
          
    
       {/* contact section ends here  */}
       </>
    )
}

export default Contact