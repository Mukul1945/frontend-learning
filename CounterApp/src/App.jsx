import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const inc =()=>{
    setCount(count+1)
  }

  const dec =()=>{
  setCount(count-1)
  }

  return (
  <>
    <h1>Counter App</h1>
    <br/>
    {count}
    <br/>
    <br/>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
    <button onClick={()=>setCount(0)}>Reset</button>

  </>
  )
}

export default App
