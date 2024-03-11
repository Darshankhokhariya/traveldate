import React, { useEffect } from 'react'
import Secondarybutton from '../Buttons/Secondarybutton'
import { Autocomplete, TextField } from '@mui/material'
import Select from '../inputs/Select'
import Textarea from '../inputs/Textarea'
import Input from '../inputs/Input'
import { get } from '@/redux/services/apiServices'
import { useDispatch, useSelector } from 'react-redux'
import { HEADERS } from '@/constant/authorization'
import { useFormik } from 'formik'
import * as Yup from "yup";

function UserProfile({ userData }) {
    const genderData = ["male", "female"]
    const bodyTypes = ["slim", "average", "heavy"]
    const dispatch = useDispatch()
    const countries = useSelector((state) => state?.Auth?.countryList);
    const cityList = useSelector((state) => state?.Auth?.cityList)
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
                if (Object.keys(errors).length === 0 && croppedImage !== null) {
                    // handleSubmit(values, setErrors);
                }
            });
        },
    });

    useEffect(() => {
        if (userData) {
            formik.setValues({
                name: userData?.name,
                age: userData?.age,
                gender: userData?.gender,
                about: userData?.aboutUser,
                bodyType: userData?.bodyType,
                country: userData?.country,
            });
        }
    }, [userData]);



    useEffect(() => {
        if (formik.values.city) {
            get(`/country/getCity?city=${formik.values.city || ""}`, "GET_CITY", dispatch, HEADERS);
        }
    }, [formik.values.city]);

    useEffect(() => {
        get("/country/getCountry", "GET_COUNTRY", dispatch, HEADERS);
    }, [])


    return (
        <div><div className='mt-5 flex gap-8 items-center justify-center sm:justify-start'>
            <div className='relative'>
                <div className="h-[171px] w-[171px] overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100">
                    <img src="/images1/myProfile.jpg" alt="" />
                </div>
                <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 '>
                    <button className='rounded-full bg-primary p-1 border-2 border-white'>
                        <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.75 12.1674H2.81066L9.79593 5.18209L8.73528 4.12143L1.75 11.1067V12.1674ZM13.75 13.6674H0.25V10.4854L10.3263 0.409121C10.6192 0.116231 11.094 0.116231 11.3869 0.409121L13.5083 2.53044C13.8012 2.82333 13.8012 3.29821 13.5083 3.5911L4.93198 12.1674H13.75V13.6674ZM9.79593 3.06078L10.8566 4.12143L11.9172 3.06078L10.8566 2.00011L9.79593 3.06078Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='hidden sm:block'>
                <p className='text-3xl font-semibold'>
                    {userData?.name}
                </p>
                <div className='flex items-center gap-2 mt-2 text-primary'>
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.255859 19.375H22.7559V21.625H0.255859V19.375ZM0.255859 3.625L5.88086 7.5625L11.5059 0.25L17.1309 7.5625L22.7559 3.625V17.125H0.255859V3.625ZM2.50586 7.94647V14.875H20.5059V7.94647L16.6589 10.6393L11.5059 3.94027L6.35276 10.6393L2.50586 7.94647Z" fill="#F4425A" />
                    </svg>
                    <span className='font-semibold'>Membership</span>
                </div>
            </div>
        </div>
            <div className='pb-10'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="md:flex w-full items-start gap-10 mt-14 md:mt-">
                        <div className=" w-full md:w-[50%] mx-auto">
                            <div>
                                <Input
                                    label="Name"
                                    placeholder="Enter Name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="pt-5">
                                <Input
                                    label="Age"
                                    placeholder="Enter Age"
                                    name="age"
                                    value={formik.values.age}
                                    onChange={formik.handleChange}
                                />

                            </div>
                            <div className="pt-5">
                                <Select
                                    name="gender"
                                    value={formik.values?.gender}
                                    data={genderData}
                                    onChange={formik.handleChange}
                                    label="Gender"
                                />
                            </div>
                            <div className="pt-5">
                                {/* <Select data={[]} label="Spoken Languages" /> */}
                            </div>
                            <div className="pt-5">
                                <Textarea
                                    name="about"
                                    label="About Me"
                                    value={formik.values.about}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-[50%] mt-10 md:mt-0 mx-auto">
                            <span className="text-[#191825] text-[20px] font-bold">
                                More details
                            </span>
                            <div className="pt-5">
                                {/* <Select
                                name="bodyType"
                                data={[]}
                                label="Body type"
                            /> */}
                                <div className="text-gray-400">Body type</div>
                                <Autocomplete
                                    size="small"
                                    name="bodyType"
                                    disablePortal
                                    className="block w-full bg-[#ffffff] hover:border-[#e6e6e6] border border-[#e6e6e6] rounded-lg"
                                    options={bodyTypes}
                                    onChange={formik.handleChange}
                                    value={formik.values.bodyType}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "0",
                                        },
                                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderRadius: "7px",
                                            border: "1px solid #e6e6e6",
                                        },
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} placeholder="Body type" />
                                    )}
                                />
                            </div>
                            <div className="pt-5">
                                <div className="text-gray-400">Country</div>
                                <Autocomplete
                                    size="small"
                                    name="country"
                                    disablePortal
                                    className="block w-full bg-[#ffffff] hover:border-[#e6e6e6] border border-[#e6e6e6] rounded-lg"
                                    options={countries}
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "0",
                                        },
                                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderRadius: "7px",
                                            border: "1px solid #e6e6e6",
                                        },
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} placeholder="Country" />
                                    )}
                                />

                                {/* <Select data={gender} label="Country" /> */}
                            </div>
                            <div className="pt-5">
                                <div className="text-gray-400">Wants to Visit</div>
                                {/* <Select data={gender} label="Wants to Visit" /> */}
                                <Autocomplete
                                    options={cityList}
                                    value={formik.values.city}
                                    size="small"
                                    disablePortal
                                    onChange={(event, value) => formik.setFieldValue('city', value)}
                                    onInputChange={(event, value) => formik.setFieldValue('city', value)}
                                    className="block w-full bg-[#ffffff] hover:border-[#e6e6e6] border border-[#e6e6e6] rounded-lg"
                                    name="city"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            borderRadius: "0",
                                        },
                                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                                        {
                                            borderRadius: "10px",
                                            border: "1px solid #e6e6e6",
                                        },
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} placeholder="Wants to Visit" />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex items-center gap-4 justify-center sm:justify-end pb-28'>
                <div className='text-primary underline text-nowrap font-semibold'>
                    Change Password?
                </div>
                <div className='text-primary underline'>
                    <Secondarybutton text="Save Changes" />
                </div>
            </div>
        </div>
    )
}

export default UserProfile