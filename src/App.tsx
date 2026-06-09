import { createSignal } from 'solid-js'
//import './App.css'

import Resizable from '@corvu/resizable' // 'corvu/resizable'

//import './tailwind.css'
import './index.css'


function App() {
  const [count, setCount] = createSignal(0)

  return (
  <>
  <a href="https://corvu.dev/docs/primitives/resizable/"> CORUV Resizable </a>
  <br/>
  <span>SolidJS components for building resizable panels and splitters.</span>


   <h4>H-V</h4>
   <div class="wrapper" style={{width: "500px", height: "400px"}}>
      <Resizable orientation="vertical">
        <Resizable.Panel initialSize={0.7} minSize={0.2}>
          <Resizable orientation="horizontal">
            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />

            <Resizable.Handle aria-label="Resize Handle">
              <div class="inner_handle" />
            </Resizable.Handle>

            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />
          </Resizable>

        </Resizable.Panel>

        <Resizable.Handle aria-label="Resize Handle">
          <div class="inner_handle" />
        </Resizable.Handle>

        <Resizable.Panel initialSize={0.7} minSize={0.2}>
          <Resizable orientation="horizontal">
            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />

            <Resizable.Handle aria-label="Resize Handle">
              <div class="inner_handle" />
            </Resizable.Handle>

            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />
          </Resizable>

        </Resizable.Panel>
      </Resizable>
    </div>


   <h4>V-H</h4>

   <div class="wrapper" style={{width: "500px", height: "400px"}}>
      <Resizable>
        <Resizable.Panel initialSize={0.7} minSize={0.2}>
          <Resizable orientation="vertical">
            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />

            <Resizable.Handle aria-label="Resize Handle">
              <div class="inner_handle" />
            </Resizable.Handle>

            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />
          </Resizable>

        </Resizable.Panel>

        <Resizable.Handle aria-label="Resize Handle">
          <div class="inner_handle" />
        </Resizable.Handle>

        <Resizable.Panel initialSize={0.7} minSize={0.2}>
          <Resizable orientation="vertical">
            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />

            <Resizable.Handle aria-label="Resize Handle">
              <div class="inner_handle" />
            </Resizable.Handle>

            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />
          </Resizable>

        </Resizable.Panel>
      </Resizable>
    </div>
    
   <h4>H-V2</h4>
   <div class="wrapper" style={{width: "500px", height: "400px"}}>
      <Resizable>
        <Resizable.Panel initialSize={0.3} minSize={0.2} class="panel" />
        <Resizable.Handle aria-label="Resize Handle">
          <div class="inner_handle" />
        </Resizable.Handle>
        <Resizable.Panel initialSize={0.7} minSize={0.2}>
          <Resizable orientation="vertical">
            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />
            <Resizable.Handle aria-label="Resize Handle">
              <div class="inner_handle" />
            </Resizable.Handle>
            <Resizable.Panel initialSize={0.5} minSize={0.2} class="panel" />
          </Resizable>
        </Resizable.Panel>
      </Resizable>
    </div>
    
  </>
  )
}

export default App
