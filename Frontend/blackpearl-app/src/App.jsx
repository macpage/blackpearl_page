import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='app'>
        <header>
          <img id='logo_background' src="src/assets/leafs.jpg" alt="" />
          <nav>
            <button>Home</button>
            <button>Bubble Teas</button>
            <button>Location</button>
          </nav>
        </header>

        <main>brooo</main>
        <footer></footer>
      </div>
     
    </>
  )
}

export default App
