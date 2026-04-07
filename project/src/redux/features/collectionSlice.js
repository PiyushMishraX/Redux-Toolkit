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
            
        },
        removeCollection:(state,action)=>{

        },
        clearCollection:(state,action)=>{

        },,
    }
})