import PhotosUpload from '@/component/PhotosUpload/PhotosUpload'
import UserProfile from '@/component/UserProfile/UserProfile'
import Sidebar from '@/component/sidebar/Sidebar'
import { HEADERS } from '@/constant/authorization'
import { get } from '@/redux/services/apiServices'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from "yup";


function Index() {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state?.Auth?.userProfile)

    const [tab, setTab] = useState("profile")

    const handleTabChange = (e) => { 
        console.log('e+++++', e)
        setTab(e) 
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            gender: "",
            about: "",
            bodyType: "",
            country: "",
            city: [],
            language: [],
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required").matches(/^[a-zA-Z]+$/, "Invalid name format. Only letters are allowed.").max(10),
            age: Yup.number()
                .required("Age is required")
                .typeError("Age must be a number"),
            gender: Yup.string().required("Gender is required"),
            about: Yup.string().required("About is required"),
            bodyType: Yup.string().required("Body type is required"),
            country: Yup.string().required("Country is required"),
            city: Yup.array()
                .min(1, "City is required")
                .max(5, "You can select up to 5 cities"),
            language: Yup.array()
                .min(1, "Language is required")
                .max(5, "You can select up to 5 languages"),
        }),
        onSubmit: (values, { setErrors }) => {
            formik.validateForm().then((errors) => {
                if (Object.keys(errors).length === 0) {
                    // handleSubmit(values, setErrors);
                }
            });
        },
    });

    useEffect(() => {
        let authToken = localStorage.getItem("authToken")
        if (authToken) {
            get(`/user/userProfile`, "GET_SINGLE_PROFILE", dispatch, HEADERS);
        }
    }, [])

    return (
        <div>
            <Sidebar>
                <div className='lg:mx-20 mx-5 mt-10 lg:mt-0'>
                    <div >
                        <div className='flex gap-4 w-full justify-center sm:justify-start '>
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
                            <UserProfile userData={userData} />
                            :
                            <PhotosUpload userData={userData} />
                    }
                </div>

            </Sidebar>
        </div>
    )
}

export default Index