import { configureStore } from "react-redux";
import searchReducer from "./features/searchSlice";

export const store =  configureStore({
    reducer:{
        search:searchReducer,
    }
})
