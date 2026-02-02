import React from 'react'

const RegistrationForm = () => {
    return (

        <form>
            <div>
                <h1> Sign Up </h1>
                <p> Please Fill This Form To Create An Account </p>

                <label> First Name </label>
                <input type='text' name='firstName' placeholder='Enter First Name' required />

                <label> Last Name </label>
                <input type='text' name='lastName' placeholder='Enter Last Name' required />

                <label> Email </label>
                <input type='text' name='email' placeholder='Enter Email' required />

                <label> Password </label>
                <input type='text' name='password' placeholder='Enter Password' required />

                <label> Phone Number </label>
                <input type='phone' name='phone' placeholder='Enter Number' required />

                <p> By Creating an Acoount you are agree to our Terms & condition</p>

                <div>
                    <button type='submit'> Sign Up </button>
                </div>



            </div>

        </form>

    )
}

export default RegistrationForm
