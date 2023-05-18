function RowsTitle({ category }: { category: string }) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}

export default RowsTitle
