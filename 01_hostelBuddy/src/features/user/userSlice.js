import { createSlice,nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const initialState = {
    users:[
        // {id:nanoid(),roomName:"",name:"",email:"",payment:""},
        
    ],
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addUser: (state,action) => {
            const rooms = useSelector(state => state.roomReducer.room)
            const found = rooms.find(room => room.id===action.payload.id)

            const tempUser = {
                id:nanoid(),
                roomName:found.title,
                name:action.payload.name,
                email:action.payload.email,
                payment:action.payload.payment
            }

            state.users.push(tempUser)
        },
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer