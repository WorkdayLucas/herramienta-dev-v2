import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Preguntas from './views/cosas/Preguntas'
import Voces from './views/voces/Voces'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Preguntas />
      {/* <Voces /> */}
    </>
  )
}

export default App
