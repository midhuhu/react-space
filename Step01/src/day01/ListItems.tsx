function ListItems() {
    const products = [
        { title: 'Cabbage', color: 'red', id: 1 },
        { title: 'Garlic', color: 'yellow', id: 2 },
        { title: 'Apple', color: 'blue', id: 3 },
    ]
    const listItems = products.map((product, index) => (
        <div className="one">
            第{index + 1}项
            <li key={product.id} style={{ color: product.color }}>
                {product.title}
            </li>
        </div>
    ))
    return <div>{listItems}</div>
}

export default ListItems
