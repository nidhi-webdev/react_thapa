import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <h1> Login Form</h1>
      <form>
        <label> Username </label>
        <input type='text' name='username' required autoComplete='off'/>

        <label> Password </label>
        <input type='text' name='passwors' required autoComplete='off'/>

        <button className='bg-sky-500 px-2 py-4 rounded text-xl text-white'> Submit </button>
      </form>
    </div>
  )
}

export default LoginForm
