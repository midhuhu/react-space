type Params = {
    count: number
    onClick: () => void
}
function MyButton({ count, onClick }: Params) {
    return (
        <div className="card">
            <button onClick={onClick}>count is {count}</button>
        </div>
    )
}

export default MyButton
