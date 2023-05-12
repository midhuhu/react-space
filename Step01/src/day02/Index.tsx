import { useState } from 'react'
import Square from './Square'

function Index2() {
    const [square, setSquare] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    function handleClick(i) {
        const nextSquare = square.slice()
        nextSquare[i] = 'X'
        setSquare(nextSquare)
    }
    return (
        <>
            <div className="board-row">
                <Square num={square[0]} click={() => handleClick(0)} />
                <Square num={square[1]} click={() => handleClick(1)} />
                <Square num={square[2]} click={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square num={square[3]} click={() => handleClick(3)} />
                <Square num={square[4]} click={() => handleClick(4)} />
                <Square num={square[5]} click={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square num={square[6]} click={() => handleClick(6)} />
                <Square num={square[7]} click={() => handleClick(7)} />
                <Square num={square[8]} click={() => handleClick(8)} />
            </div>
        </>
    )
}

export default Index2
