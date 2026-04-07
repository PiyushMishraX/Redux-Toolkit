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

            const alreadyExists = state.items.find(
                item => item.id == action.payload.id
            )
            // add item only if exists

            if(!alreadyExists){
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        removeCollection:(state,action)=>{

        },
        clearCollection:(state,action)=>{

        },
    }
})