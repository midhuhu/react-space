
import MyButton from './components/MyButton'
import Vite from './components/Vite'
import React from './components/React'
import ListItems from './components/ListItems'
import MyButton2 from './components/MyButton2'
import './App.css'
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div>
            <Vite />
            <React />
            <h1>Vite + React</h1>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <ListItems />
            <div className="box">
                <p>独立：</p>
                <MyButton />
                <MyButton />
            </div>
            {/* 状态提升 组件共享 */}
            <div className="box">
                <p>统一：</p>
                <MyButton2 count={count} onClick={handleClick} />
                <MyButton2 count={count} onClick={handleClick} />
            </div>
        </div>
    )
}

export default App
