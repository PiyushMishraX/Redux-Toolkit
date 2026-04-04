import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/couterSlice'

const App = () => {

  const dispatch = useDispatch() // dispatch action , work from button click

  // const count = useSelector() // ui shpowing , changes to show after button click 

  const count = useSelector((state)=>state.counter.value) // couter is name on store , it shows initial values

  // teo way binding the input field
  const [num, setNum] = useState(5)

  return (
    <div>
      {/* <h1>0</h1> */}
      <h1>{count}</h1>

      <button onClick={()=>{
        dispatch(increment()) // call the function to use
      }}>
        Increment
        </button>

      <button onClick={()=>{
      dispatch(decrement())        
      }}>
        drcrement
        </button>

      <input type="number"  
      value={num}
      onChange={(e)=>{
        // console.log(e.target);
        // console.log(e.target.value);
        setNum(e.target.value)
        
      }}/>
      <button onClick={()=>{
      // dispatch(incrementByAmount(5))        
      // dispatch(incrementByAmount(num))   
      // type cast so value willbe in form of number not string      
      dispatch(incrementByAmount(Number(num)))        
      }}>
        Increase by Amount
        </button>
    </div>
  )
}

export default App



