import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from "./features/couterSlice"; // default export so any name would be fine

export const store = configureStore({
    // reducers
    reducer:{
        // creating lices // features\
        // add slice to stre to tell what features does our store manage
        counter: counterReducer

    }
})

// provide thrstore everywhere