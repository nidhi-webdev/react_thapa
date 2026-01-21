import React from 'react'

const EventPropogation = () => {

 const handleGrandParentClick = () => {
    console.log("GrandParent Clicked"); 
 }

 const handleParentClick = () => {
    console.log("Parent Clicked"); 
 }

 const handleChildClick = (e) => {
    console.log(e); 
    console.log("Child clicked")
 }

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
