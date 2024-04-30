import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import { addMessage } from "../../features/message/messageSlice";
import AdminMessage from "../Admin/AdminMessage";

function Contact() {
  const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  const dispatch = useDispatch()

  

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMessage({name,email,subject,message}))
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }
    return (
    //    contact start here
    <>
    {background && (
      <div className="h-64 bg-no-repeat bg-cover text-7xl text-center pt-24 font-bold text-white" 
      style={{ backgroundImage: `url(${background})` }}>
      CONTACT
      </div> 
   )}
          
     {/* cards section starts here  */}
        <div className="w-full h-auto px-28 mt-24 text-center">
            <div className="flex justify-center">
                <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                <div className="mx-2 uppercase font-bold text-yellow-500">CONTACT US</div>
                <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
            </div>
            <div className="text-5xl font-bold mt-2 mb-12">
                <span className="text-yellow-500">CONTACT</span> For Any Query
            </div>
    
            {/* //<!-- query starts --> */}
            <div className="flex justify-between">
                <div>
                    <div className="flex">
                        <div className="mx-2 uppercase font-bold text-yellow-500">BOOKING</div>
                        <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                    </div>
                    <div className="text-slate-600 pl-2">PriyanshuGaour@gmail.com</div>
                </div>
                <div>
                    <div className="flex">
                        <div className="mx-2 uppercase font-bold text-yellow-500">GENERAL</div>
                        <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                    </div>
                    <div className="text-slate-600 pl-2">Prajjwal@gmail.com</div>
                </div>
                <div>
                    <div className="flex">
                        <div className="mx-2 uppercase font-bold text-yellow-500">TECHNICAL</div>
                        <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
                    </div>
                    <div className="text-slate-600 pl-2">PriyanshuModi@gmail.com</div>
                </div>
                
                
            </div>
           {/* query ends */}
    
            {/* form starts  */}
            <div className="container mx-auto px-4 py-8">
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col">
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name" 
                    className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <input type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your Email" 
                    className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    placeholder="Subject" 
                    className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500" 
                    />
                  </div>
                  <div className="flex flex-col">
                    <textarea id="message" value={message} name="message" onChange={e => setMessage(e.target.value)} rows="5" placeholder="Message" className="border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-yellow-500"></textarea>
                  </div>
                  <button type="submit" className="text-center p-4 bg-amber-500 text-white rounded hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                    Send Inquiry
                  </button>
                </form>
              </div>
              
           
         </div>
        
        <AdminMessage/>
         {/* cards section ends here  */}
          
    
       {/* contact section ends here  */}
       </>
    )
}

export default Contact