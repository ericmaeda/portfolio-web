import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './pages/main/Main'

function App() {
  const [background, setBackground] = useState('')
  
  useEffect(() => {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 7) {
      setBackground('/bg-images/bg-morning-1.png')
    }
    else if (hour >= 7 && hour < 10) {
      setBackground('/bg-images/bg-evening-morning.png')
    }
    else if (hour >= 10 && hour < 15) {
      setBackground('/bg-images/bg-afternoon-2.jpeg')
    }
    else if (hour >= 15 && hour < 17) {
      setBackground('/bg-images/bg-evening-morning.png')
    }
    else if (hour >= 17 && hour < 19) {
      setBackground('/bg-images/bg-evening-1.jpg')
    }
    else {
      setBackground('/bg-images/bg-night.jpg')
    }
  }, [])

  return (
    <>
      <div id="background-image" className="bg-cover bg-center bg-fixed min-h-screen z-50" style={{ backgroundImage:`url(${ background })` }}>
        <Main/>
      </div>
    </>
  )
}

export default App
