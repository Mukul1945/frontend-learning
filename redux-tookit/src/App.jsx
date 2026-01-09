import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
  const [amount,setAmount]=useState(0);
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span> {count} </span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br></br>
      <button onClick={() => dispatch(reset())}>reset</button>
      <br/>
      <input
      type='Number'
      value={amount}
      placeholder='Enter Amount'
      onChange={(e)=>setAmount(e.target.value)}
      />
      <button onClick={handleIncAmountClick}>inc by num</button>
    </div>
  )
}

export default App
