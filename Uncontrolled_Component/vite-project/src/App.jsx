import './App.css'
import { useRef } from 'react'

function App() {
  const inputRef=useRef(null);
  const handleSubmit =(e)=>{
    e.preventDefault();
    alert(inputRef.current.value);
  }

  return (
  <>
  <form onSubmit={handleSubmit}>
    <input type="text"  ref={inputRef}/>
    <button type="submit">Submit</button>
  </form>
  </>
  )
}

export default App
