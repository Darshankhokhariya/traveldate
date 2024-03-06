import Sidebar from '@/component/sidebar/Sidebar'
import React from 'react'

function index() {
    return (
        <div><Sidebar>
            <div className='mx-20  '>
                <div className='flex gap-4'>
                    <div className='w-max'>
                        <button className='text-primary font-semibold'>
                            User Profile
                        </button>
                        <hr className='w-5 mx-auto bg-primary h-1 rounded-full' />
                    </div>
                    <div>
                        <button className='font-semibold'>
                            Photo
                        </button>
                    </div>
                </div>
                <div className='mt-5 flex gap-4 items-center'>
                    <div class="h-28 w-28 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100">
                        <img src="/images1/myProfile.jpg" alt="" />
                    </div>
                    <div>
                        <p className='text-3xl font-semibold'>
                            Rebecca Johansson
                        </p>
                        <div className='flex items-center gap-2 mt-2 text-primary'>
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.255859 19.375H22.7559V21.625H0.255859V19.375ZM0.255859 3.625L5.88086 7.5625L11.5059 0.25L17.1309 7.5625L22.7559 3.625V17.125H0.255859V3.625ZM2.50586 7.94647V14.875H20.5059V7.94647L16.6589 10.6393L11.5059 3.94027L6.35276 10.6393L2.50586 7.94647Z" fill="#F4425A" />
                            </svg>
                            <span>Membership</span>
                        </div>
                    </div>
                </div>

            </div>
        </Sidebar>

        </div>
    )
}

export default index