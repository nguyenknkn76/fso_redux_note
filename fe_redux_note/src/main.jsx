import React from 'react'
import ReactDOM from 'react-dom/client'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import App from './App'
import noteReducer, { createNote } from './reducers/noteReducer'
import filterReducer, { creatorFilterChange } from './reducers/filterReducer'

// const reducer = combineReducers({
//   notes: noteReducer,
//   filter: filterReducer
// })
// const store = createStore(noteReducer)

const store = configureStore({
  reducer:{
    notes: noteReducer,
    filter: filterReducer
  }
})

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(creatorFilterChange("IMPORTANT"))
store.dispatch(createNote("this is third note"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    {/* <div/> */}
  </Provider>
)