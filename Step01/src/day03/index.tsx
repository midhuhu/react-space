import { useState } from 'react'
import Search from './Search'
import Table from './Table'
import './index.less'

function Index3() {
    const data = [
        { category: '水果', price: '￥10', stocked: true, name: '苹果' },
        { category: '水果', price: '￥10', stocked: true, name: '香蕉' },
        { category: '水果', price: '￥20', stocked: false, name: '梨' },
        { category: '蔬菜', price: '￥40', stocked: false, name: '西红柿' },
        { category: '蔬菜', price: '￥30', stocked: true, name: '黄瓜' },
        { category: '蔬菜', price: '￥15', stocked: false, name: '白瓜' },
    ]
    // 搜索筛选
    const [searchText, setSearchText] = useState('')
    // 库存筛选
    const [inStockOnly, setInStockOnly] = useState(false)
    return (
        <div className="index">
            <Search
                searchText={searchText}
                inStockOnly={inStockOnly}
                onSearchTextChange={setSearchText}
                onInStockOnlyChange={setInStockOnly}
            />
            <Table
                searchText={searchText}
                inStockOnly={inStockOnly}
                data={data}
            />
        </div>
    )
}

export default Index3
