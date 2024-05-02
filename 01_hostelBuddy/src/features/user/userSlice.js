import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    room:[
        {id:nanoid(),name:"Room Number 1",room:"",CheckIn:1000,Bio:"very nice room",new:false},
    ],
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        addUser: (state,action) => {
            
        },
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer