import React, { useState, useEffect } from 'react'

const Example = () => {
    const [date, setDate] = useState(0)

    useEffect(() => {
        const updatedDate = new Date();
        setDate(updatedDate.toLocaleTimeString())

    }, [])



    return (
        <div className='p-10'>
            <h1 className='font-bold mb-5'> Date: {date} </h1>





        </div>
    )
}

export default Example
