import './Square.css'
import { useState } from 'react'
function Square({ num, click }: { num: number; click: () => void }) {
    return (
        <button className="square" onClick={click}>
            {num}
        </button>
    )
}

export default Square
