import { closeLogInModal, openRegisterModal } from '@/features/modal/modalSlice'
import { useAppDispatch } from '@/redux/hooks'
import { useLoginUserMutation } from '@/services/auth/authApi'
import { setToken } from '@/services/auth/authSlice'
import { Facebook, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast'

const Login = () => {
    const dispatch = useAppDispatch()
    // const [loginUser, { isLoading }] = useLoginUserMutation()
    const [loginUser, ] = useLoginUserMutation()
    
    const handleRegisterModal = () => {
        dispatch(closeLogInModal())
        dispatch(openRegisterModal())
    }

    const handleFormData = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget);
            const email = formData.get('email') as string;
            const password = formData.get('password') as string;
            console.log(email,password)
            
            try {
               if (email && password) {
                loginUser({email, password })
                    .unwrap()
                    .then((res) => {
                        console.log(res)
                        if (res.success) {
                            localStorage.setItem('authToken', res?.data?.token)     
                            toast.success(res?.message)
                            dispatch(setToken(res?.data?.token));
                            dispatch(closeLogInModal())
                        }
                        else {
                            toast.error(res.message)
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }  
            } catch (error) {
                toast.error("Something went wrong")
                console.log(error)
            }
           
        }

    return (
        <>
            {/* Overlay to freeze background */}
            <div className="fixed inset-0  bg-opacity-50"></div>

            {/* Login Modal */}
              <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                <div className="bg-white p-2 md:p-6 rounded-lg shadow-lg md:w-96 z-20  space-y-2 lg:space-y-5">
                {/* Close section of modal */}
                    <div onClick={()=>dispatch(closeLogInModal())} className=' font-semibold flex justify-end'><X /></div>
                    

                    {/* ---------------------------------- */}
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleFormData} className="space-y-1 md:space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter your email"
                                required

                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative mt-1">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                    
                                >
                                    <svg
                                        className="h-5 w-5 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 3a7 7 0 100 14 7 7 0 000-14zm0 12a5 5 0 110-10 5 5 0 010 10zm-1-5a1 1 0 112 0v2a1 1 0 11-2 0v-2zm0-4a1 1 0 112 0 1 1 0 01-2 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="mr-2 leading-tight"
                                />
                                <label htmlFor="remember" className="text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>
                            <div>
                               <p className='text-sm font-semibold underline cursor-pointer hover:text-gray-600'>Forgot Password</p>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#FF6A1A] text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="flex items-center">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <div className="text-center px-4">
                            <p className="text-lg font-bold md:text-sm">Or Sign-In With</p>
                        </div>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                         <button className="w-full flex items-center gap-3  text-black border border-gray-400 px-2 py-2 rounded text-sm font-semibold transition-transform transform hover:scale-105 duration-500  shadow-lg hover:shadow-xl hover:bg-blue-600 hover:text-white">
                            <Image
                                src={"/images/auth/google.png"}
                                alt="Google"
                                width={20}
                                height={20}
                                className="w-6 h-6 text-white"
                            />  <span>Google</span>
                        </button>
                         <button className="w-full flex items-center gap-3 text-black border border-gray-400 px-2 py-2 rounded text-sm font-semibold transition-transform transform hover:scale-105 duration-500 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl">
                           <Facebook className='w-6 h-6 text-white border bg-blue-700  rounded-full'/>   <span>Facebook</span>
                        </button>
                    </div>
                    <div >
                        <p className="text-center text-sm font-semibold ">
                            Do not have an account?{" "}
                            <span onClick={handleRegisterModal}  className="font-semibold cursor-pointer text-[#FF6A1A] hover:text-blue-500">
                                Sign Up
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login