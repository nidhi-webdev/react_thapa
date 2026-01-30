import React from 'react'

const ShortCircuit = () => {
  return (
    <div className=' mt-10 '>
      <div>
        <h1 className='font-bold text-4xl mb-10 flex items-center justify-center'> Welcome to the ShortCircuit Evaluation </h1>

        <p className='mb-5'> You are logged in!</p>
        </div>

        <div> 
          <button className='bg-black px-4 py-2 text-white mr-3'> Toggle Login State </button>
          <button className='bg-black px-4 py-2 text-white mr-3'> Set User </button>
          <button className='bg-black px-4 py-2 text-white mr-3'> Clear User </button>
        
      </div>
    </div>
  )
}

export default ShortCircuit
