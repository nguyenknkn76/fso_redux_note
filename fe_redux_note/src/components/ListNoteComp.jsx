import { useDispatch, useSelector } from "react-redux"
import { delNote, toggleImportanceOf } from "../reducers/noteReducer"
import { useEffect } from "react"
import NoteService from "../services/NoteService"
import { setNotes, initialNotes } from "../reducers/noteReducer"
const ListNoteComp = () => {
    const dispatch = useDispatch()

    const fetchNote = async () => {
        dispatch(initialNotes())
        // await NoteService
        //     .getAll()
        //     .then(notes => dispatch(setNotes(notes)))
    }

    useEffect( () => {
        fetchNote()
    }, [])

    const notes = useSelector(state => {
        if(state.filter === "ALL"){
            return state.notes
        }
        return state.filter === "IMPORTANT" 
            ? state.notes.filter(note => note.important)
            : state.notes.filter(note => !note.important)
    })
    
    function toggleImportance(id) {
        dispatch(toggleImportanceOf(id))
    }

    const deleteNote = (id) =>{
        dispatch(delNote(id))
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
                        {note.content} 
                        <strong>{note.important === true ? "important" : ""}</strong>
                        <button onClick={() => deleteNote(note.id)}>delete</button>
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