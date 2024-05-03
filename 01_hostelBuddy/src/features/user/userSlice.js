import { createSlice,nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const initialState = {
    room:[
        {id:nanoid(),roomId:"",name:"",email:"",payment:""},
    ],
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addUser: (state,action) => {
            const rooms = useSelector(state => state.roomReducer.room)
            const found = rooms.find(room => room.id===action.payload.id)

            const
        },
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer