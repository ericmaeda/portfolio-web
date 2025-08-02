import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './pages/main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="background-image" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/bg-evening.png')" }}>
        
        <Main/>
      </div>
    </>
  )
}

export default App
