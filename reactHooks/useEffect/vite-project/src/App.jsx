import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Users from './component/Users'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
      <h1>useEffect + Axios Demo</h1>
      <Users />
    </div>
  )
}

export default App
