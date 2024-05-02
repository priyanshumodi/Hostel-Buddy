import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {
    room:[
        {id:nanoid(),title:"Room Number 1",image:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",price:1000,description:"very nice room",new:false},
        {id:nanoid(),title:"Room Number 2",image:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",price:2000,description:"very nice room",new:false},
        {id:nanoid(),title:"Room Number 3",image:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",price:3000,description:"very nice room",new:false},
        {id:nanoid(),title:"Room Number 4",image:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",price:4000,description:"very nice room",new:false},
        {id:nanoid(),title:"Room Number 5",image:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",price:5000,description:"very nice room",new:false},
        {id:nanoid(),title:"Room Number 6",image:"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",price:6000,description:"very nice room",new:false},
    ],
}

export const roomSlice = createSlice({
    name:"room",
    initialState,
    reducers: {
        removeRoom: (state,action) => {
            state.room = state.room.filter((prev) => (prev.id !== action.payload.id))
            console.log("state.room")
        },
        addRoom: (state,action) => {
            const tempRoom = {
                id:nanoid(),
                title:action.payload.title,
                image:action.payload.image,
                price:action.payload.price,
                description:action.payload.description,
                new:true
            }
            state.room.push(tempRoom)
        },
        updateRoom: (state,action) => {
            const tempRoom = {
                id:action.payload.id,
                title:action.payload.title,
                image:action.payload.image,
                price:action.payload.price,
                description:action.payload.description,
                new:action.payload.new
            }

            state.room = state.room.map((prev) => (prev.id === action.payload.id ? tempRoom : prev))
        }
    }
})

export const {removeRoom,addRoom,updateRoom} = roomSlice.actions
export default roomSlice.reducer