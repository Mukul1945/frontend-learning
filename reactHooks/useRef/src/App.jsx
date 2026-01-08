import { useState,useRef } from 'react'
import './App.css'
import InputFocus from './components/InputFocus'
import PreviousCount from './components/PreviousCount'

function App() {

  const renders = useRef(0);
  renders.current++;
  return (
    <>
   <InputFocus/>
   <PreviousCount/>

   <p>Component rendered {renders.current} times</p>
    </>
  )
}

export default App
