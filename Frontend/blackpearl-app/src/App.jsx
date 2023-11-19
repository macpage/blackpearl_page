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
          <div id='header_logo'>
          <img id='logo_background' src="src/assets/leafs.jpg" alt="" />
          
                    <nav>
            <button>Home</button>
            <button>Bubble Teas</button>
            <img id='logo' src="src/assets/logo.jpg" alt="" />
            <button>Location</button>
            <button>About Us</button>
          </nav>
          </div>


        </header>

        <main><p>Welcome by Black Pearl</p></main>
        <footer></footer>
      </div>
     
    </>
  )
}

export default App
