import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [passLength, setPassLength] = useState(8)
  const [addNumber, setAddNumber] = useState(false)
  const [addCar, setAddCar] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (addNumber) str += "0123456789"
    if (addCar) str += "!@#$%^&*()_-+=[]{}|;':,.<>/?"

    for (let i = 1; i <= str.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setPassword(pass)

  }, [passLength, addNumber, addCar, setPassword])

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-4xl font-semibold'>Password Generator</h1>
      </div>
    </>
  )
}

export default App
