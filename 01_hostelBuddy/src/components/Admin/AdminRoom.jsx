import React, { useState } from "react";
import Card from "../Room/Card";
import {useSelector} from "react-redux"
import AddRoomForm from "./AddRoomForm";

function AdminRoom() {
    const [popup,setPopup] = useState()
    const [update,setUpdate] = useState()
    const [updateDetail,setUpdateDetail] = useState()
    const rooms = useSelector(state => state.roomReducer.room)
    const background = "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    const handleUpdateClick = (recieveDetails) => {
       setUpdateDetail(recieveDetails)
       console.log(recieveDetails)
       setPopup(true)
       setUpdate(true)
    }

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
                     Total <span class="text-yellow-500">ROOMS - </span>  {rooms.length}
                </div>
        
                <div className="grid gap-x-8 gap-y-4 grid-cols-3">
                    {rooms.map((room) => (
                        <div key={room.id}>  
                            <Card 
                            admin={true}
                            title={room.title} 
                            image={room.image} 
                            price={room.price}
                            description={room.description}
                            new={room.new}
                            id={room.id}
                            updateClick={handleUpdateClick}
                            />
                        </div>
                    ))}
            
                </div>

                <div className="mt-4">
                <button onClick={() => {setUpdate(false);setPopup(true)}} className={`uppercase bg-blue-600 hover:bg-blue-700 text-white w-32 h-9 rounded-md`}>add room</button>
                </div>

                {popup && ( update ? (
                    <AddRoomForm 
                        
                        id={updateDetail.id}
                        title={updateDetail.title}
                        image={updateDetail.image}
                        price={updateDetail.price}
                        description={updateDetail.description}
                        new = {updateDetail.new}
                        update = {true}

                    />) : ( 
                    <AddRoomForm
                        id={''}
                        title={''}
                        image={''}
                        price={''}
                        description={''}
                        new = {''}
                        update = {false}
                    />) )}

                {popup && (
                    <button onClick={() => setPopup(false)} className={`uppercase bg-red-600 hover:bg-red-700 text-white w-32 h-9 rounded-md`}>cancel</button>
                )}
            </div>
        </>
    )
}

export default AdminRoom