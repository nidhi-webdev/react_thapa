import React from 'react'

const EventPropogation = () => {

  const handleGrandParentClick = () => {
    console.log("GrandParent Clicked");
  }

  const handleParentClick = (e) => {
    e.stopPropagation()
    console.log("Parent Clicked");
  }

  const handleChildClick = (e) => {
    console.log(e);
    e.stopPropagation()
    console.log("Child clicked")
  }

  return (
    <section className='flex items-center justify-center min-h-screen'>
      <div className='bg-sky-400 border-4 border-black flex items-center justify-center h-125 w-225' onClickCapture={handleGrandParentClick}>
        <div className='bg-emerald-400 border-4 border-black flex items-center justify-center h-75 w-125' onClickCapture={handleParentClick}>
          <button className='bg-amber-400 px-4 py-2 rounded  border-4 border-black flex items-center justify-center h-20 w-75 ' onClickCapture={handleChildClick}> Child Div </button>
        </div>
      </div>
    </section>
  )
}

export default EventPropogation

