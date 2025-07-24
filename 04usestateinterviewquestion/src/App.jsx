import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCount] = useState(5)

  function addCount() {
    if (counter < 25) {
      setCount(counter = counter + 1)  // setCount(prevCounter = prevCounter + 1)
      setCount(counter = counter + 1)  // setCount(prevCounter = prevCounter + 1)
      setCount(counter = counter + 1)  // setCount(prevCounter = prevCounter + 1)
      setCount(counter = counter + 1)  // setCount(prevCounter = prevCounter + 1)
    }else{
      alert('Maximum value reached')
    }
    
  }

  return (
    <>
      <h1>useState - Interview Question</h1>
      <pre>
      setCount(counter + 1)
      setCount(counter + 1)
      setCount(counter + 1)
      setCount(counter + 1)
      <br />
      will only increment : 1
      <br />
      setCount(counter = counter + 1)
      setCount(counter = counter + 1)
      setCount(counter = counter + 1)
      setCount(counter = counter + 1)
      <br />
      will increment : 4
      </pre>
      <h2>Count : {counter}</h2>

      <button onClick={addCount}>Add Count</button>
    </>
  )
}

export default App
