import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const dispatch = useDispatch() // dispatch action , work from button click
  const count = useSelector() // ui shpowing , changes to show after button click 

  return (
    <div>
      <h1>0</h1>

      <button onClick={()=>{

      }}>Increment</button>
      <button onClick={()=>{
        
      }}>drcrement</button>
    </div>
  )
}

export default App



