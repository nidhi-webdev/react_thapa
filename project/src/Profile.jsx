import React from 'react'
import ProfileCards from './ProfileCards'

const Profile = () => {
  return (
    <div>
      <h1> Profile Card Channenge </h1>
      <ProfileCards 
      name= "Nidhi" 
      age={25}
      greeting= {<div>
        <strong> Hi Alice, have a wonderful day! </strong>
      </div>}
      >
        <p> Hobbies: Reading, Hiking </p>
        <button> Contact </button>
      </ProfileCards>

       <ProfileCards 
      name= "Bob" 
      age={45}
      greeting= {<div>
        <strong> Hi Nidhi, have a wonderful day! </strong>
      </div>}
      >
        <p> Hobbies: Travelling, Musik </p>
        <button> Contact </button>
      </ProfileCards>
    </div>
  )
}

export default Profile
