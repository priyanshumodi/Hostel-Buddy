import {combineReducers} from "redux"
import messageSlice from '../features/message/messageSlice'
import roomSlice from "../features/room/roomSlice"

const rootReducers = combineReducers({
    roomReducer:roomSlice,
    messageReducer:messageSlice
})

export default rootReducers