import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [passLength, setPassLength] = useState(8)
  const [addNumber, setAddNumber] = useState(false)
  const [addCar, setAddCar] = useState(false)
  const [password, setPassword] = useState('')
  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (addNumber) str += "0123456789"
    if (addCar) str += "!@#$%^&*()_-+=[]{}|;':,.<>/?"

    for (let i = 1; i <= passLength; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [passLength, addNumber, addCar, setPassword])

  const handleCopy = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passLength, addNumber, addCar, passwordGenerator])

  return (
    <>
      <div className='flex justify-center items-center flex-col mx-auto h-screen w-full '>
        <div className='max-w-xl bg-gray-800 text-white p-10 rounded-xl'>
          <h1 className='text-3xl font-semibold mb-3'>Password Generator</h1>
          <div className='flex text-gray-800'>
            <input type="text" value={password} placeholder='Password' ref={passRef} className='outline-none w-full py-1 px-3 rounded-tl-md rounded-bl-md' readOnly />
            <button onClick={handleCopy} className='outline-none bg-blue-600 text-white px-3 py-1 shrink-0 rounded-tr-md rounded-br-md'>Copy</button>
          </div>
          <div className='flex gap-x-5 mt-3'>
            <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} value={passLength} className='cursor-pointer' onChange={(e) => setPassLength(e.target.value)} />
              <label>Length: {passLength}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={addNumber} id='numberInput' onChange={() => setAddNumber(prev => !prev)} />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={addCar} id='charInput' onChange={() => setAddCar(prev => !prev)} />
              <label htmlFor="charInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
