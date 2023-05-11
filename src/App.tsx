
import MyButton from './components/MyButton'
import Vite from './components/Vite'
import React from './components/React'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Vite />
        <React />
        <h1>Vite + React</h1>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <MyButton />
    </>
  )
}

export default App
