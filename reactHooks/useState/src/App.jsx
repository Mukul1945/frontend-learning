import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './component/form'
function App() {
  const [count, setCount] = useState(0)

  const increment =()=>{
    setCount(count+1)
  }
 const decrement =()=>{
  setCount(count-1)
 }
  return (
    <>
      <h1>useState Hooks</h1>
      <h2>Counter App</h2>
      <p>Count :{count}</p>

      {/* <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br></br>
      <br></br>
      <button onClick={() => setCount(0)}>Reset</button>
      <h2>Form Example</h2>
      <Form />

    </>
  )
}

export default App
