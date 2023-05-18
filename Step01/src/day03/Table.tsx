import RowsItem from './RowsItem'
import RowsTitle from './RowsTitle'
function Table({
    searchText,
    inStockOnly,
    data,
}: {
    searchText: string
    inStockOnly: boolean
    data: []
}) {
    const rows = []
    let category = null
    data.forEach((item, index) => {
        if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
            return
        }
        if (!item.stocked && inStockOnly) {
            return
        }
        if (category !== item.category) {
            rows.push(
                <RowsTitle category={item.category} key={item.category} />
            )
        }
        rows.push(<RowsItem product={item} key={item.name} />)
        category = item.category
    })
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>价格</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}

export default Table
