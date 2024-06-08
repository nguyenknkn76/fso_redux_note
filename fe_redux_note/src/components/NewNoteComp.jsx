import { useDispatch, useSelector } from "react-redux"
import { createNote } from "../reducers/noteReducer"
import NoteService from "../services/NoteService"

const NewNoteComp = () => {
    const dispatch = useDispatch()
    const notes = useSelector(state => state)

    const addNote = async (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        // const newNote = await NoteService.createNew(content)
        dispatch(createNote(content))
    }
    return(
        <div>
            <form onSubmit={addNote}>
                <input name="note"/>
                <button type="submit">add</button> ♡⸜(˶˃ ᵕ ˂˶)⸝♡
            </form>
        </div>
    )
}

export default NewNoteComp