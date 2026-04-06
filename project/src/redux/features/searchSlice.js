// query use writes
// tab use is in 
// resukt of sesrch

// missing topics - 
// async thunk, actions, async 
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        query:'',
        actionTab:'photos',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
        },
        setActiveTabs(state,action){
            
        },
        setResults(state,action){
            
        },
        setLoading(state,action){
            
        },
        setError(state,action){

        },
    }
})

export const {setQuery, setActiveTabs, setResults , setError, setLoading} = searchSlice.actions

export default searchSlice.reducer;