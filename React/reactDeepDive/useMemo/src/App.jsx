import { useState } from 'react'
import './App.css'
import Assignment1 from './Assignment1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Assignment1></Assignment1>
    </>
  )
}

export default App
