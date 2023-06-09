import { useState } from 'react'
import { list } from './data'
function StateData() {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    function handleNextClick() {
        setIndex(index + 1)
    }

    function handleShowMore() {
        setShowMore(!showMore)
    }

    let length = list.length
    let data = list[index]
    return (
        <>
            <button onClick={handleNextClick}>Next</button>
            <div>{data.name}</div>
            <div>
                {index + 1}/{length}
            </div>
            <div>
                <button onClick={handleShowMore}>
                    {showMore ? 'hide more' : 'show more'}
                </button>
            </div>
            {showMore && <div>{data.description}</div>}
            <img src={data.url} alt={''} />
        </>
    )
}

export default StateData
