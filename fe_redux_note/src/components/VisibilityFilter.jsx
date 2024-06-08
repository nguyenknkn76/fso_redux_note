import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import filterReducer, { creatorFilterChange } from "../reducers/filterReducer"

const VisibilityFilter = () => {
    const dispatch = useDispatch()

    const filterSelected = (filter) => {
        dispatch(creatorFilterChange(filter))    
    }
    return(
        <div>
            <input name='filter' type='radio' onChange={()=> filterSelected('ALL')}/> all
            <input name='filter' type='radio' onChange={()=> filterSelected('IMPORTANT')}/> important
            <input name='filter' type='radio' onChange={()=> filterSelected('NONIMPORTANT')}/> nonimportant
        </div>
    )
}

export default VisibilityFilter
