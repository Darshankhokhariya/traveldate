import Secondarybutton from '@/component/Buttons/Secondarybutton'
import PhotosUpload from '@/component/PhotosUpload/PhotosUpload'
import UserProfile from '@/component/UserProfile/UserProfile'
import Input from '@/component/inputs/Input'
import Select from '@/component/inputs/Select'
import Textarea from '@/component/inputs/Textarea'
import Sidebar from '@/component/sidebar/Sidebar'
import { Autocomplete, TextField } from '@mui/material'
import React, { useState } from 'react'

function index() {
    const [tab, setTab] = useState("profile")
    const handleTabChange = (e) => {
        setTab(e)
    }
    return (
        <div>
            <Sidebar>
                <div className='lg:mx-20 mx-5 mt-10 lg:mt-0'>
                    <div >
                        <div className='flex gap-4'>
                            <div className='w-max'>
                                <button onClick={() => handleTabChange("profile")} className={`${tab === "profile" && "text-primary"} font-semibold`}>
                                    User Profile
                                </button>
                                {tab === "profile" &&
                                    < hr className='w-5 mx-auto bg-primary h-1 rounded-full' />
                                }
                            </div>
                            <div>
                                <button onClick={() => handleTabChange("photo")} className={`${tab === "photo" && "text-primary"} font-semibold`}>
                                    Photo
                                </button>
                                {tab === "photo" &&
                                    < hr className='w-5 mx-auto bg-primary h-1 rounded-full' />
                                }

                            </div>
                        </div>
                    </div>
                    {
                        tab === "profile" ?
                            <UserProfile />
                            :
                            <PhotosUpload />
                    }
                </div>

            </Sidebar>
        </div>
    )
}

export default index