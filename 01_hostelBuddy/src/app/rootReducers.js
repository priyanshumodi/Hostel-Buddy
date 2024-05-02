import {combineReducers} from "redux"
import messageSlice from '../features/message/messageSlice'
import roomSlice from "../features/room/roomSlice"
import userSlice from "../features/user/userSlice"

const rootReducers = combineReducers({
    roomReducer:roomSlice,
    messageReducer:messageSlice,
    userReducer:userSlice
})

export default rootReducers