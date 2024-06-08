import { useDispatch, useSelector } from "react-redux"
import { toggleImportanceOf } from "../reducers/noteReducer"
import { useEffect } from "react"

const ListNoteComp = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => {
        if(state.filter === "ALL"){
            return state.notes
        }
        return state.filter === "IMPORTANT" 
            ? state.notes.filter(note => note.important)
            : state.notes.filter(note => !note.important)
    })
    // const importantNotes = useSelector(state => state)
    const importantNotes = useSelector(state => (state.notes) ? state.notes.filter(note => note.important) : []) 
    
    const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id))
    }

    useEffect(()=> {
        console.log("change note")
    },[notes])
    return(
        <div>
            <p>list note comp</p>
            <ul>
                {notes?.map(note => 
                    <li 
                        key={note.id} 
                        onClick={()=> toggleImportance(note.id)}
                    >
                        {note.content} <strong>{note.important === true ? "important" : ""}</strong>
                    </li>
                )}
            </ul>

            {/* <p>important note</p>
            <ul>
                {importantNotes?.map(note => 
                    <li 
                        key={note.id} 
                        onClick={()=> toggleImportance(note.id)}
                    >
                        {note.content} <strong>{note.important}</strong>
                    </li>
                )}
            </ul> */}
        </div>
    )
}
export default ListNoteComp