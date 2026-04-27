import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//import './App.css'

import  Cal  from './Cal'
import  Resize  from './Resize'
import './tailwind.css'


function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <section id="center">
        <button
          type="button"
          class="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count()}
        </button>
      </section>

      <section id="center">
        <Cal/>
      </section>

      <section id="center">
        <Resize/>
      </section>

    </>
  )
}

export default App
