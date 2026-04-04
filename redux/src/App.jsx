import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/couterSlice'

const App = () => {

  const dispatch = useDispatch() // dispatch action , work from button click

  // const count = useSelector() // ui shpowing , changes to show after button click 

  const count = useSelector((state)=>state.counter.value) // couter is name on store , it shows initial values

  return (
    <div>
      {/* <h1>0</h1> */}
      <h1>{count}</h1>

      <button onClick={()=>{
        dispatch(increment()) // call the function to use
      }}>Increment</button>

      <button onClick={()=>{
      dispatch(decrement())        
      }}>drcrement</button>
    </div>
  )
}

export default App



