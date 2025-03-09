import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import poopLogo from '../assets/poop.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let poop = (
		<a href="https://duckduckgo.com" target="_blank">
			<img src={poopLogo} className="logo poop" alt="Poop logo" />
		</a>
  );
  
  function countUp() {
	setCount((count) => count + 1)
  }
  
  return (
    <>
      <div>
		{(count > 1) && !(count % 10) && poop}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        { (count > 1) && !(count % 5) && poop}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={countUp}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
