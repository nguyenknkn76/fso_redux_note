import { createSlice } from "@reduxjs/toolkit"

const initialState = 'ALL'

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        creatorFilterChange(state, action){
            const filter = action.payload
            return filter
        }
    }
})
export const {creatorFilterChange} = filterSlice.actions
export default filterSlice.reducer
// const filterReducer = (state = 'ALL', action) => {
//     console.log("ACTION", action)
//     switch(action.type){
//         case "SET_FILTER": return action.payload
//         default: return state
//     }
// }

// export const creatorFilterChange = (filter) =>{
//     return{
//         type: "SET_FILTER",
//         payload: filter
//     }
// }
// export default filterReducer