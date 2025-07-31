import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"

    if (charAllowed) str += "!@#$%^&*()_-+=[]{}`~"

    for (let i = 0; i < length; i++) {
      
      let charIndex = Math.floor(Math.random() * str.length)
      
      pass += str[charIndex]
    }
    setPassword(pass)
    console.log(pass);

  }, [length, numberAllowed, charAllowed,])

  const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,15)
    window.navigator.clipboard.writeText(password.substring(0,15))
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <h1 className='text-4xl text-centet text-purple-500 m-3' >Password Generator</h1>
    <div className="flex items- gap-3">
      <input
        type="text"
        placeholder="Enter something"
        value={password}
        ref={passwordRef}
        readOnly
        className="w-full border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={copyPasswordToClipboard}
        className=" bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition"
      >
      Copy Text
    </button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range" 
        min={6}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}} />
       <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked = {numberAllowed}
        id='inputNumber'
        onChange={()=>{setNumberAllowed((prev)=> !prev)}} />
        <label>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked = {charAllowed}
        id='inputChar'
        onChange={()=>{setCharAllowed((prev)=> !prev)}} />
        <label>Characters</label>
      </div>
    </div>

    </>
  )
}

export default App
