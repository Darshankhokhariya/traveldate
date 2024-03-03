import Secondarybutton from '@/component/Buttons/Secondarybutton'
import Input from '@/component/inputs/Input'
import Select from '@/component/inputs/Select'
import Textarea from '@/component/inputs/Textarea'
import { gender } from '@/constant/gender'
import React from 'react'

const index = () => {
    return (
        <div class="md:pt-5 mx-auto m-auto mb-9">
            <div className='md:border md:border-white  md:rounded-3xl md:w-8/12 m-auto h-100'>
                <div className='flex items-center flex-col justify-center p-10'>
                    <img className='h-[58px]' src='/images1/Frame1.png' />
                    <div className='md:flex w-full items-start gap-10 mt-14 md:mt-'>
                        <div className=' w-full md:w-[50%] mx-auto'>
                            <div>
                                <Input
                                    label="Name"
                                    placeholder="Enter Email"
                                    name="name"
                                />
                            </div>
                            <div className='pt-5'>
                                <Input
                                    label="Name"
                                    placeholder="Enter Email"
                                    name="email"
                                />
                            </div>
                            <div className='pt-5'>
                                <Input
                                    label="Email"
                                    placeholder="Enter Email"
                                    name="email"
                                />
                            </div>
                            <div className='pt-5'>
                                <Select data={gender} label="Gender" />
                            </div>
                            <div className='pt-5'>
                                <Select data={gender} label="Spoken Languages" />
                                <div class="flex flex-wrap items-center gap-2 w-full mt-4">
                                    <div
                                        class="inline-flex items-center justify-between space-x-1  bg-primary text-white px-2 py-0.5 rounded-md text-sm">
                                        <svg onclick="this.parentElement.remove()" class="cursor-pointer h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <div class="select-none">
                                            English
                                        </div>
                                    </div>
                                    <div
                                        class="inline-flex items-center justify-between space-x-1  bg-primary text-white px-2 py-0.5 rounded-md text-sm">
                                        <svg onclick="this.parentElement.remove()" class="cursor-pointer h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <div class="select-none">
                                            Hindi
                                        </div>
                                    </div>
                                    <div
                                        class="inline-flex items-center justify-between space-x-1  bg-primary text-white px-2 py-0.5 rounded-md text-sm">
                                        <svg onclick="this.parentElement.remove()" class="cursor-pointer h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <div class="select-none">
                                            Gujarati
                                        </div>
                                    </div>
                                    <div
                                        class="inline-flex items-center justify-between space-x-1  bg-primary text-white px-2 py-0.5 rounded-md text-sm">
                                        <svg onclick="this.parentElement.remove()" class="cursor-pointer h-4 w-4 text-white"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <div class="select-none">
                                            Gujarati
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-5'>
                                <Textarea label="About Me" />
                            </div>
                        </div>
                        <div className='w-full md:w-[50%] mt-10 md:mt-0 mx-auto'>
                            <span className='text-[#191825] text-[20px] font-bold'>More details</span>
                            <div className='pt-5'>
                                <Select data={gender} label="Body type" />
                            </div>
                            <div className='pt-5'>
                                <Select data={gender} label="Country" />
                            </div>
                            <div className='pt-5'>
                                <Select data={gender} label="Wants to Visit" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-10 pb-10'>
                    <p className='text-lg font-semibold' >
                        Photo Gallery
                    </p>

                    <div class="flex  gap-3 mt-4">
                        <div class="h-24 w-24 overflow-hidden rounded-lg flex ">
                            <img src="/images1/inputImage.png" />
                        </div>
                        <div class="h-24 w-24 overflow-hidden rounded-lg flex items-center justify-center bg-[#FFEBED]">
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 2L16.5 31" stroke="#F4425A" stroke-width="3" stroke-linecap="round" />
                                <path d="M31 16.6631L2 16.6631" stroke="#F4425A" stroke-width="3" stroke-linecap="round" />
                            </svg>

                        </div>
                    </div>
                    <div className='w-full flex justify-center md:justify-end mt-16 md:mt-3'>
                        <Secondarybutton text="Continue" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index