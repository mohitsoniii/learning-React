import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("olive")

  const changeColor = (bgColor) => {
    let body = document.body
    setColor(body.style.backgroundColor = bgColor)
  }

  return (
    <>
    <div className='flex text-xl text-white p-4 m-4 rounded-4xl'>
    <h1>Back Ground Color Changer</h1>
    </div>
    <div className='flex justify-center gap-2 bg-amber-50 p-4 rounded-xl'>
      <button className='text-white bg-black rounded-2xl' onClick={() => changeColor("black")}>Black</button>
      <button className='text-white bg-violet-400 rounded-2xl' onClick={() => changeColor("#7F00FF")}>Voilet</button>
      <button className='text-white bg-indigo-400 rounded-2xl' onClick={() => changeColor("indigo")}>Indigo</button>
      <button className='text-white bg-blue-400 rounded-2xl' onClick={() => changeColor("blue")}>Blue</button>
      <button className='text-white bg-green-400 rounded-2xl' onClick={() => changeColor("green")}>Green</button>
      <button className='text-white bg-yellow-400 rounded-2xl' onClick={() => changeColor("yellow")}>Yellow</button>
      <button className='text-white bg-orange-400 rounded-2xl' onClick={() => changeColor("orange")}>Orange</button>
      <button className='text-white bg-red-400 rounded-2xl' onClick={() => changeColor("red")}>Red</button>
    </div>
    </>
  )
}

export default App
