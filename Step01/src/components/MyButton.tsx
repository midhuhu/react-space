import { useState } from 'react'

function MyButton() {
    const [count, setCount] = useState(0)
    function btnClick() {
        setCount((count) => count + 1)
    }
    return (
        <div className="card">
            <button onClick={btnClick}>count is {count}</button>
        </div>
    )
}

export default MyButton
