import React  from 'react'
import { useContext } from 'react'
import { ThemContext } from '../App'
const ChildC = () => {

const {theme ,setTheme} = useContext(ThemContext)

function handleClick(){
    if(theme==='light'){
        setTheme('dark')
    }
    else{
        setTheme('light')
    }
}
  return (
    <>
     <button onClick={handleClick}
     >Change Theme</button>
    </>
  )
}

export default ChildC