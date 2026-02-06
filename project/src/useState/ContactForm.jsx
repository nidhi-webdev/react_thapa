import { useState } from "react"


const ContactForm = () => {
    const [contact, setContact] = useState({
        userName: "",
        email: "",
        message: ""
    })

    const handleSumbit = (e) => {
        e.preventDefault()
        console.log(contact);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContact((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form className='bg-gray-200 shadow-2xl rounded-xl px-8 py-10 w-full max-w-sm' onSubmit={handleSumbit}>
                <h1 className='text-3xl font-bold mb-6 text-center'> Contact Form </h1>

                <div className='flex flex-col gap-6'>
                    <div>
                        <label className="block mb-1 font-medium"> Username </label>
                        <input type='text' required autoComplete='off'
                            name='userName'
                            value={contact.userName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />


                    </div>
                    <div>
                        <label className="block mb-1 font-medium"> Email </label>
                        <input type='email' required autoComplete='off'
                            name='email'
                            value={contact.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />

                    </div>
                    <div>
                        <label className="block mb-1 font-medium"> Message </label>
                        <textarea type='text' required autoComplete='off'
                            name='message'
                            value={contact.message}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded align-top focus:outline-none focus:ring-2 focus:ring-red-200" />

                    </div>
                </div>

                <button className="bg-sky-500 px-2 py-3 text-xl text-white rounded-xl mt-3 w-full cursor-pointer"> Send Message </button>
            </form>
        </div>
    )
}

export default ContactForm
