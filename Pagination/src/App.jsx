import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersPagination from './component/UsersPagination'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <UsersPagination/>
  </>
  )
}

export default App
