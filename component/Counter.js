import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount , reset } from '../slices/counterSlice'


function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
 
   
  return (
    <div>
      <h2>Counter</h2>
      <p>Count :{count}</p>
      <button  onClick={() => dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(6))}>incrementBy5</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default Counter