import NewNoteComp from './components/NewNoteComp'
import ListNoteComp from './components/ListNoteComp'
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import NoteService from './services/NoteService'
import { setNotes } from './reducers/noteReducer'

const App = () => {
  const dispatch = useDispatch()

  return (
    <div> 
      <VisibilityFilter/>
      <NewNoteComp/>
      <ListNoteComp/>
    </div>
  )
}

export default App