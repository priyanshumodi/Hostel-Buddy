import React from "react";
import Card from "./Card";
import { Link,NavLink } from "react-router-dom";
//import background from "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

function Room() {
    const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return (
    <>
     {background && (
        <div className="h-64 bg-no-repeat bg-cover text-7xl text-center pt-24 font-bold text-white" 
        style={{ backgroundImage: `url(${background})` }}>
        ROOMS
        </div> 
     )}

      
    
    <div className="w-full h-auto px-28 mt-24 text-center pb-8">
        <div className="flex justify-center">
            <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
            <div className="mx-2 uppercase font-bold text-yellow-500">Our Rooms</div>
            <div className=" w-16 h-1 border-2 border-yellow-400 rounded-2xl mt-[11px] mb-2"></div>
        </div>
        <div className="text-5xl font-bold mt-2 mb-12">
            Explore Our <span class="text-yellow-500">ROOMS</span>
        </div>

        <div className="grid gap-x-8 gap-y-4 grid-cols-3">
            <NavLink
            to={'roomBook'}

            >
                <Card admin="true"/>
            </NavLink>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
     </div>
    {/* <!-- cards section ends here --> */}
      

    {/* <!-- room section ends here --> */}
    </>
    )
}

export default Room

// import { Link } from 'react-router-dom';

// function Home() {
//   const items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' },
//   ];

//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <Link to={`/details/${item.id}`}>{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
