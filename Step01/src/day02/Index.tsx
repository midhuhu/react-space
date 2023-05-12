import { useState } from 'react'
import Square from './Square'

function Index2() {
    const [xIsNext, setXIsNext] = useState(true)
    const [square, setSquare] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    const winner = calculateWinner(square)
    let status
    if (winner) {
        status = 'Winner is: ' + winner
    } else {
        status = 'Next player is: ' + (xIsNext ? 'X' : 'O')
    }
    function handleClick(i) {
        if (['X', 'O'].includes(square[i]) || calculateWinner(square)) {
            return
        }
        const nextSquare = square.slice()
        if (xIsNext) {
            nextSquare[i] = 'X'
        } else {
            nextSquare[i] = 'O'
        }
        setSquare(nextSquare)
        setXIsNext(!xIsNext)
    }
    return (
        <>
            <div>{status}</div>
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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (
            ['X', 'O'].includes(squares[a]) &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a]
        }
    }
    return null
}
  
export default Index2
