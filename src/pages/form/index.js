import Input from '@/component/inputs/Input'
import Select from '@/component/inputs/Select'
import Textarea from '@/component/inputs/Textarea'
import { gender } from '@/constant/gender'
import React from 'react'

const index = () => {
    return (
        <div class="pt-5 mx-auto m-auto">
            <div className='border border-red-500 rounded-[69px] h-100'>
                <div className='flex items-center flex-col justify-center pt-10'>
                    <img className='h-[58px]' src='/images1/Frame1.png' />
                    <div className='flex items-start gap-4'>
                        <div>
                            <div>
                                <Input
                                    label="Name"
                                    placeholder="Enter Email"
                                    name="email"
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
                                    label="Name"
                                    placeholder="Enter Email"
                                    name="email"
                                />
                            </div>
                            <div className='pt-5'>
                                <Select data={gender} label="Gender" />
                            </div>
                            <div className='pt-5'>
                                <Select data={gender} label="Spoken Languages" />
                            </div>
                            <div className='pt-5'>
                                <Textarea label="About Me" />
                            </div>
                        </div>
                        <div>
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
            </div>
        </div>
    )
}

export default index