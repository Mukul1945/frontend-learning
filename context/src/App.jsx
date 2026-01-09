import { useState } from 'react'
import './App.css'
import ChildA from './component/ChildA'
import { createContext } from 'react'

//step1:create context
const UserContext = createContext();
//step2: wrap all the child inside a provider
//step3:pass value
//step4:consume k andar jaake consume karlo

function App() {
 const[user, setUser]= useState({name:"Love"});
  return (
   <>
   <UserContext.Provider value={user}>
    <ChildA/>
   </UserContext.Provider>
  
   </>
  )
}

export default App
export {UserContext}