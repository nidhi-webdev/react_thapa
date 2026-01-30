import React from 'react'

const ShortCircuit = () => {
  return (
    <div className='flex items-center justify-center mt-10 '>
      <div>
        <h1 className='font-bold'> Welcome to the ShortCircuit Evaluation </h1>

        <p> You are logged in!</p>

        <div> 
          <button className='bg-black px-4 py-2 text-white mr-3'> Toggle Login State </button>
          <button className='bg-black px-4 py-2 text-white mr-3'> Set User </button>
          <button className='bg-black px-4 py-2 text-white mr-3'> Clear User </button>
        </div>
      </div>
    </div>
  )
}

export default ShortCircuit
