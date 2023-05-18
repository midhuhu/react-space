import './Square.css'
function Square({ num, click }: { num: string; click: () => void }) {
    return (
        <button className="square" onClick={click}>
            {num}
        </button>
    )
}

export default Square
