import React from 'react'

const EventPropogation = () => {
  return (
    <section>
        <div onClick={handleGrandParentClick}>
            <div onClick={handleParentClick}>
                <button onClick={handleChildClick}> Child Div </button>
            </div>
        </div>
    </section>
  )
}

export default EventPropogation
