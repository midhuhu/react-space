function Search({
    searchText,
    inStockOnly,
    onSearchTextChange,
    onInStockOnlyChange,
}: {
    searchText: string
    inStockOnly: boolean
    onSearchTextChange: () => void
    onInStockOnlyChange: () => void
}) {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="search..."
                value={searchText}
                onChange={(e) => onSearchTextChange(e.target.value)}
            ></input>
            <div className="checkbox">
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                仅显示库存产品
            </div>
        </div>
    )
}

export default Search
