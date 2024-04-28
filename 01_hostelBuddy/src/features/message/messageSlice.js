import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    messages:[
        {id:nanoid(),name:"Roberta Casas",email:"roberta77@gmail.com",subject:"Solid foundation for any project",message:"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project."},
        {id:nanoid(),name:"Roberta Casas",email:"roberta77@gmail.com",subject:"Solid foundation for any project",message:"FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project."},
    ],
}

export const messageSlice = createSlice({
    name:"messages",
    initialState,
    reducers: {
        addMessage: (state,action) => {
            console.log(action.payload.name)
            const message = {
                id : nanoid(),
                name: action.payload.name,
                email: action.payload.email,
                subject: action.payload.subject,
                message: action.payload.message,
            }
            console.log(message)
            state.messages.push(message)
            state.messages.map((message) => console.log(message))
        }
    }
})

export const {addMessage} = messageSlice.actions

export default messageSlice.reducer