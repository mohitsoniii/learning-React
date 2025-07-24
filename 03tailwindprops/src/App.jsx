import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className="bg-red-400 text-black p-4 rounded-2xl hover:bg-yellow-200">
    Learning React - Tailwind and Props 
  </h1>
  <p className='text-sky-200 text-3xl'>from</p>
      <h1 className="bg-yellow-200 text-black p-2 m-1 rounded-2xl hover:bg-red-400">
    Chai Aur Code
  </h1>
  </div>

  <div class="flex justify-center gap-4">
  <Card nftName="Bored Ape-101" nftPrice = {1001}/>
  <Card nftName="Bored Ape-102" nftPrice={1002}/>
</div>
    </>
  )
}

export default App
