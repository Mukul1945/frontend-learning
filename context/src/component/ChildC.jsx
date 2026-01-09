import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App'

const ChildC = () => {
    const user = useContext(UserContext)
  return (
    <>
    data:{user.name}
    </>
  )
}

export default ChildC