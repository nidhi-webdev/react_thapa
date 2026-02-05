import React from 'react'

const ContactForm = () => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-linear-to-br'>
            <h1> Contact Form </h1>
            <form className=' '>
                <div className='flex flex-col gap-6'>
                    <div>
                        <label> Username </label>
                        <input type='text' name='userName' required autoComplete='off' />
                    </div>
                    <div>
                        <label> password </label>
                        <input type='text' name='password' required autoComplete='off' />
                    </div>
                    <div>
                        <label> Message </label>
                        <input type='text' name='message' required autoComplete='off' />
                    </div>
                </div>


            </form>
        </div>
    )
}

export default ContactForm
