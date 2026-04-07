// using collection slice for storage instead of using storage locally

import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    items:JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name:'collection',
    initialState, //uses the function
    reducers:{
        addTCOllection:(state, action)=>{
            state.items.push(action.payload)
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        removeCollection:(state,action)=>{

        },
        clearCollection:(state,action)=>{

        },
    }
})