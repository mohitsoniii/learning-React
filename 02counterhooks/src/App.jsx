import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addCount = ()=>{
    if (counter < 10){
      counter = counter + 1
      setCounter(counter)
      console.log(`Counter : ${counter}`)
    }else{
      console.log(`Maximum value reached !!`)
      alert(`Maximum value reached !!`)
    }
  }

  const removeCount = ()=>{
    if(counter >0){
      // counter = counter + 1
      setCounter(counter - 1)
      console.log(`Counter : ${counter}`)
    }else{
      console.log(`Minimum value reached !!`)
      alert(`Minimum value reached !!`)
    }
  }

  return (
    <>
      <h1>Learning React - Hooks</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={addCount}>
        Add
      </button> 
      &nbsp;
      <button onClick={removeCount}>
        Remove
      </button>
    </>
  )
}

export default App
