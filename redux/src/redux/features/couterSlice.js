import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter', // good practice to write name to tell react what a slice is for // not hardcoded rule to write it
    initialState:{ // to assign initial value
        value:0
    },
    reducers:{ // functions
        increment:(state)=>{ // recieve state and change its value
            state.value +=1

        }, // a reducer named increment increasing value by 1
        decrement:(state)=>{
            state.value -= 1
        },  // a reducer named decrement decreaing value by 1
        incrementByAmount:(state,actions)=>{
            state.value += actions.payload // the value sent by the function
        },
    },
})

export const {increment, decrement, incrementByAmount} = counterSlice.actions 
// actions exported from couterSliece
// they can be used directly
export default counterSlice.reducer



// this whole is a slice 