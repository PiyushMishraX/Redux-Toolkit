// import { configureStore } from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import searchReducer from "./features/searchSlice";

export const store =  configureStore({
    reducer:{
        search:searchReducer,
    }
})
