import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter', // good practice to write name to tell react what a slice is for // not hardcoded rule to write it
    initialState:{ // to assign initial value
        value:0
    },
    reducers:{ // functions
        increment:()=>{

        },
        decrement:()=>{

        }
    },
})