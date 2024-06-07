import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Controllers from './components/Controllers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div class="px-4 py-5 my-5 text-center">
          <div class="card" style={{ width: "70%" }}>
            <div class="card-body">
              <Header />
              <div class="col-lg-6 mx-auto">
                <DisplayCounter />
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Controllers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
