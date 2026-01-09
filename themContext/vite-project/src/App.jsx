import { useState } from 'react'

import './App.css'

import { createContext } from 'react'
import ChildA from './component/ChildA'


const ThemContext = createContext();
function App() {
const [theme, setTheme]=useState('light');

  return (
  <>
  <ThemContext.Provider value={{theme,setTheme}}>
    <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
      <ChildA/>
    </div>
  </ThemContext.Provider>

  </>
  )
}

export default App
export {ThemContext}
