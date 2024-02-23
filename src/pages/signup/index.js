import React from 'react'

function index() {
    return (
        <div><section class="bg-transparent">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="flex items-center  px-4 py-10 bg-transparent sm:px-6 lg:px-8 sm:py-16 lg:py-12">
                    <div class=" w-full lg:w-[80%]   ">
                        <div className='lg:ml-14 mx-auto'>
                            <img src="/images1/frame1.png" className='h-8 '></img>
                            <h2 class="text-3xl font-bold leading-tight mt-10 text-black sm:text-4xl">Welcome!</h2>

                            <div className='block md:hidden mt-4 overflow-hidden w-full object-cover rounded-2xl'>
                                <img src='/images1/signup2.jpg' className='w-full' />
                            </div>


                            <form action="#" method="POST" class="mt-8 md:mt-5">
                                <div class="space-y-5">
                                    <div>
                                        <label for="" class="  text-gray-400">Name </label>
                                        <div class="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Enter name"
                                                class="block w-full py-2 pl-4 pr-4 text-black placeholder-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-md bg-white focus:outline-none focus:border-gray-400 focus:bg-white "
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="" class="  text-gray-400">Email </label>
                                        <div class="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Enter Email address"
                                                class="block w-full py-2 pl-4 pr-4 text-black placeholder-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-md bg-white focus:outline-none focus:border-gray-400 focus:bg-white "
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="" class="  text-gray-400">Password </label>
                                        <div className='relative'>

                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Enter Password"
                                                class="block w-full py-2 pl-4 pr-4 text-black placeholder-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-md bg-white focus:outline-none focus:border-gray-400 focus:bg-white "
                                            />
                                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 z-30">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z" fill="#8C8C92" />
                                                </svg>




                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="" class="  text-gray-400">Age </label>
                                        <div class="mt-1 relative text-gray-400 focus-within:text-gray-600">
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                placeholder="Choose Age"
                                                class="block w-full py-2 pl-4 pr-4 text-black placeholder-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-md bg-white focus:outline-none focus:border-gray-400 focus:bg-white "
                                            />
                                        </div>
                                    </div>


                                    <div class="flex w-full items-center gap-2 py-4 text-sm text-slate-600">
                                        <div class="h-px w-full bg-slate-300"></div>
                                        or
                                        <div class="h-px w-full bg-slate-300"></div>
                                    </div>

                                </div>
                            </form>

                            <button class="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg bg-white  ">
                                <div class=" py-2">
                                    <svg class="w-6 h-6" viewBox="0 0 40 40">
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                    </svg>
                                </div>

                                <span class=" px-4 py-3 font-bold text-center">Sign in with Google</span>
                            </button>
                            <button class="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg bg-[#1091F3]">
                                <div class=" py-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_287_7267)">
                                            <path d="M10.02 23.88C4.32 22.86 0 17.94 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 17.94 19.68 22.86 13.98 23.88L13.32 23.34H10.68L10.02 23.88Z" fill="white" />
                                            <path d="M16.6801 15.3599L17.2201 11.9999H14.0401V9.65993C14.0401 8.69993 14.4001 7.97993 15.8401 7.97993H17.4001V4.91993C16.5601 4.79993 15.6001 4.67993 14.7601 4.67993C12.0001 4.67993 10.0801 6.35993 10.0801 9.35993V11.9999H7.08008V15.3599H10.0801V23.8199C10.7401 23.9399 11.4001 23.9999 12.0601 23.9999C12.7201 23.9999 13.3801 23.9399 14.0401 23.8199V15.3599H16.6801Z" fill="url(#paint0_linear_287_7267)" />
                                        </g>
                                        <defs>
                                            <linearGradient id="paint0_linear_287_7267" x1="12.2403" y1="23.4217" x2="12.2403" y2="4.67636" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#0062E0" />
                                                <stop offset="1" stop-color="#19AFFF" />
                                            </linearGradient>
                                            <clipPath id="clip0_287_7267">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>

                                <span class=" px-4 py-3 font-bold text-center text-white">Sign in with Facebook</span>
                            </button>

                            <p class="mt-5 text-sm text-center font-medium text-gray-600">
                                Already have an account? <a href="#" title="" class="text-red-600 transition-all duration-200 hover:underline ">Sign in</a>
                            </p>
                        </div>
                    </div>
                </div >

                <div class="relative hidden md:flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center  sm:px-6 lg:px-8">
                    <div class="absolute inset-0 ">
                        <img class="object-cover w-full h-full" src="/images1/signup.jpg" alt="" />
                    </div>


                </div>
            </div >
        </section >
        </div >
    )
}

export default index