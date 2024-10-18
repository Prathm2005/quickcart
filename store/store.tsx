import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./cardSlice"
const store =configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export type Rootestate=ReturnType<typeof store.getState>;
export type Addispatch= typeof store.dispatch

export default store