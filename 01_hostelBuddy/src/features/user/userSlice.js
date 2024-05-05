import { createSlice,nanoid } from "@reduxjs/toolkit";

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

            const tempUser = {
                id:nanoid(),
                roomName:action.payload.title,
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