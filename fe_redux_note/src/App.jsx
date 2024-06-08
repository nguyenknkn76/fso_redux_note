import { useEffect } from 'react'
import { createNote, toggleImportanceOf } from './reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'
import NewNoteComp from './components/NewNoteComp'
import ListNoteComp from './components/ListNoteComp'
import VisibilityFilter from './components/VisibilityFilter'

const App = () => {
  // const notes = useSelector(state => state)

  // useEffect(() => {
  //   console.log(notes)
  // },[notes])
  const filterSelected = (value) => {
    console.log(value)
  }
  return (
    <div> 
      <VisibilityFilter/>
      <NewNoteComp/>
      <ListNoteComp/>
    </div>
  )
}

export default App