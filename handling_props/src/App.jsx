import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './component/ChildA'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <ChildA name="mukul"/>
 </>
  )
}

export default App
