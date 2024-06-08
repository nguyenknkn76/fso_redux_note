import noteReducer from "./reducers/noteReducer";
import filterReducer from "./reducers/filterReducer";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: {
        notes: noteReducer,
        filter: filterReducer
    }
})

console.log(store.getState())

store.subscribe(() =>{
    console.log(store.getState())
})

export default store