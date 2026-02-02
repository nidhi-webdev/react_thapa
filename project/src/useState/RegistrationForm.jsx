import { useState } from "react"


const RegistrationForm = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target

        setUser((prev) => ({...prev, [name]: value}))
     
    }



    return (
        <>
            <section className="w-full bg-red-50 pt-5  text-center">
                <p> Hello My name is {user.firstName} {user.lastName}.
                    My email Address is {user.email} and
                    My Phone Number is {user.phoneNumber}  </p>
            </section>

            <div className='flex justify-center items-center min-h-screen bg-red-50'>
                <form className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-2 text-center">Sign Up</h1>
                    <p className="mb-6 text-center text-gray-600">Please Fill This Form To Create An Account</p>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <label className="block mb-1 font-medium">First Name</label>
                            <input type='text'
                                name='firstName'
                                placeholder='Enter First Name'
                                required
                                value={user.firstName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Last Name</label>
                            <input
                                type='text'
                                name='lastName'
                                placeholder='Enter Last Name' required
                                value={user.lastName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Email</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter Email' required
                                value={user.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Password</label>
                            <input
                                type='password'
                                name='password'
                                placeholder='Enter Password' required
                                value={user.password}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Phone Number</label>
                            <input
                                type='text'
                                name='phoneNumber'
                                placeholder='Enter Number' required
                                value={user.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />
                        </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-6 mb-4 text-center">
                        By creating an account you agree to our Terms & Conditions
                    </p>

                    <div className="flex justify-center">
                        <button type='submit' className="bg-red-500 text-white px-6 py-2 rounded font-semibold hover:bg-red-600 transition">
                            Sign Up
                        </button>
                    </div>
                </form>


            </div>
        </>



    )
}

export default RegistrationForm
