import React from 'react'

const ShortCircuit = () => {
    return (
        <div className=' mt-10 '>
            <div className='font-bold text-4xl mb-10 flex items-center justify-center'>
                <h1> Welcome to the ShortCircuit Evaluation !</h1>
            </div>

            <div className='ml-24'>
                <p className='mb-5 text-xl'> You are logged in!</p>
                <button className='bg-black px-36 py-2 text-white mr-3'> Toggle Login State </button>
                <button className='bg-black px-36 py-2 text-white mr-3'> Set User </button>
                <button className='bg-black px-36 py-2 text-white mr-3'> Clear User </button>

            </div>
        </div>
    )
}

export default ShortCircuit
