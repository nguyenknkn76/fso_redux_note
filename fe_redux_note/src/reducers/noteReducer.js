import { createSlice } from "@reduxjs/toolkit"
import NoteService from "../services/NoteService"

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    toggleImportanceOf(state, action){
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {...noteToChange, important: !noteToChange.important}
      return state.map(note => note.id !== id ? note : changedNote)
    },
    appendNote(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action){
      return action.payload
    },
    creatorDeleteNote(state, action){
      state.pop(action.payload)
    }
  }
})

export const { toggleImportanceOf, appendNote, setNotes, creatorDeleteNote} = noteSlice.actions

export const initialNotes = () =>{
  return async (dispatch) =>{
    const notes = await NoteService.getAll()
    dispatch(setNotes(notes))
  }
}
export const createNote = (content) => {
  return async dispatch => {
    const newNote = await NoteService.createNew(content)
    dispatch(appendNote(newNote))
  }
}

export const delNote = (id) =>{
  return async dispatch =>{
    const deletedNote = await NoteService.remove(id)
    await dispatch(creatorDeleteNote(deletedNote))
  }
}
// createNote(state, action){
//   const newNote = action.payload
//   return [...state, newNote]    
// },
export default noteSlice.reducer