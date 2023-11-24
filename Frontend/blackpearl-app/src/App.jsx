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

        <main><h1>Welcome by Black Pearl</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus consequuntur, rem officia quibusdam doloribus iste dolorum placeat reprehenderit est cumque modi, praesentium ex ullam aliquam? Blanditiis saepe possimus laborum!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quo, inventore, ea consequatur nam harum reiciendis debitis et maxime laborum sed temporibus laboriosam fugit beatae, quia repellat delectus molestiae! Accusantium?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aspernatur consequatur fugiat, nemo unde architecto quidem! Ea doloribus nihil magnam quidem a voluptatem vel distinctio numquam accusantium! Illo, sint facere?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quod voluptates! Modi, nobis cupiditate laudantium voluptates distinctio beatae, perspiciatis repellat ullam quo harum eligendi veritatis animi minima perferendis expedita facere.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem illum est unde debitis nam culpa recusandae dolore explicabo, beatae optio officiis corrupti maiores iusto reiciendis pariatur totam. Labore, ea error.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus id nulla mollitia aspernatur voluptatibus a accusantium temporibus molestiae facilis sit. Illum autem quod ad consequuntur blanditiis id corrupti? Qui, dignissimos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo assumenda dolores dolor ipsa tenetur fuga corporis. Modi error doloribus mollitia obcaecati consectetur est impedit aspernatur tenetur voluptates nostrum. Magni, neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur quam ex iure deserunt minus quibusdam voluptatibus quia, esse totam, nostrum, cum sit optio est fuga hic saepe animi earum!
          </p></main>
        <footer></footer>
      </div>
     
    </>
  )
}

export default App
