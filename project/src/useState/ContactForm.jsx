import { useState } from "react"


const ContactForm = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSumbit = (e) => {
        e.preventDefault()
        const contactData = {
            userName,
            password,
            message
        }

        console.log(contactData);

    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form className='bg-gray-200 shadow-2xl rounded-xl px-8 py-10 w-full max-w-sm' onSubmit={handleSumbit}>
                <h1 className='text-3xl font-bold mb-6 text-center'> Contact Form </h1>

                <div className='flex flex-col gap-6'>
                    <div>
                        <label className="block mb-1 font-medium"> Username </label>
                        <input type='text' name='userName' required autoComplete='off'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />


                    </div>
                    <div>
                        <label className="block mb-1 font-medium"> password </label>
                        <input type='password' name='password' required autoComplete='off'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />

                    </div>
                    <div>
                        <label className="block mb-1 font-medium"> Message </label>
                        <input type='text' name='message' required autoComplete='off'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-3 py-10 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />

                    </div>
                </div>

                <button className="bg-sky-500 px-2 py-3 text-xl text-white rounded-xl mt-3 w-full cursor-pointer"> Send Message </button>
            </form>
        </div>
    )
}

export default ContactForm
