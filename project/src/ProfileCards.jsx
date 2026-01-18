import React from 'react'

const ProfileCards = (props) => {
console.log("From Profilecards", props);


  return (
    <div>
      <h2> Name: {props.name} </h2>
      <p> Age: {props.age} </p>
      <p> {props.greeting} </p>
      <div></div>
    </div>
  )
}

export default ProfileCards
