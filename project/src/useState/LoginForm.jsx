import { useState } from "react"

const LoginForm = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const loginData = {
            userName,
            password
        }
        console.log(loginData);
        
        
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-linear-to-br from-red-100 to-red-300'>
            <form className='bg-white shadow-2xl rounded-xl px-8 py-10 w-full max-w-sm' onSubmit={handleSubmit}>
                <h1 className='text-3xl font-bold mb-6 text-center'>Login Form</h1>
                <div className='flex flex-col gap-6'>
                    <div>
                        <label className='block mb-1 font-medium'>Username</label>
                        <input type='text' name='username' required autoComplete='off'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}

                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />
                    </div>
                    <div>
                        <label className='block mb-1 font-medium'>Password</label>
                        <input type='password' name='password' required autoComplete='off'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-200" />
                    </div>
                </div>
                <button className='bg-sky-500 px-2 py-3 text-xl rounded text-white w-full mt-8 hover:bg-sky-600 transition'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default LoginForm
