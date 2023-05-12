import './Square.css'
import { useState } from 'react'
function Square({ num }: { num: number }) {
    const [point, setPoint] = useState(num)
    function click() {
        setPoint('X')
    }
    return (
        <button className="square" onClick={click}>
            {point}
        </button>
    )
}

export default Square
