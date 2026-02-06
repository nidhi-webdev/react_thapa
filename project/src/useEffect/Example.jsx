import React, { useState, useEffect } from 'react'

const Example = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Count Value:", count);

    }, [count])



    return (
        <div className='p-10'>
            <h1 className='font-bold mb-5'> UseEffect Hook </h1>

            <p className='mb-4'> Count: {count} </p>
            <button onClick={() => setCount(count + 1)}
            className='bg-sky-700 px-2 py-3 rounded text-white '> Increment </button>


        </div>
    )
}

export default Example
