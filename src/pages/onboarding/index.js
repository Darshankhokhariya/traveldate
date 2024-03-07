import Secondarybutton from '@/component/Buttons/Secondarybutton'
import ErrorMessage from '@/component/ErrorMessage/ErrorMessage'
import ImageCropping from '@/component/ImageCropping'
import Input from '@/component/inputs/Input'
import Select from '@/component/inputs/Select'
import Textarea from '@/component/inputs/Textarea'
import { FORM_HEADERS, HEADERS } from '@/constant/authorization'
import { bodyType } from '@/constant/bodyType'
import { gender } from '@/constant/gender'
import { showToast } from '@/constant/toast/toastUtils'
import { get, put } from '@/redux/services/apiServices'
import { Autocomplete, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from "yup";


const index = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state?.Auth?.countryList)
    const cities = useSelector((state) => state?.Auth?.cityList)
    const [city, setCity] = useState("")
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { id } = router.query;
    const [openLanguage, setOpenLanguage] = useState(false)
    const [languageField, setLanguageField] = useState("")
    const [files, setFiles] = useState([]);
    const [imageCropModel, setOpenImageCropModel] = useState(false);
    const [imgSrc, setImgSrc] = useState("");
    const [imgFileName, setImgFileName] = useState('');



    const openImageCropModel = () => setOpenImageCropModel(true);
    const closeImageCropModel = () => setOpenImageCropModel(false);

    const languageData = useSelector((state) => state?.Auth?.languageList)
    const languageList = languageData?.map((e) => e?.name)
    const countryList = countries?.map((e) => e?.name)


    const handleOpen = () => {
        if (city.length > 0) {
            setOpen(true);
        }
    };

    const handleInputChange = (event, newInputValue) => {
        console.log('newInputValue', newInputValue)
        setCity(newInputValue)
        if (newInputValue.length > 0) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };


    useEffect(() => {
        if (city) {
            // setFields((prevState) => ({
            //     ...prevState,
            //     city: ""
            // }))
            get(`/country/getCity?city=${city}`, "GET_CITY", dispatch, HEADERS)
        }
    }, [city])



    const optionsArray = Array.from({ length: 58 }, (_, index) => 18 + index);

    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            email: "",
            gender: "",
            about: "",
            bodyType: "",
            country: "",
            city: [],
            language: []
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            age: Yup.number().required("Age is required").typeError("Age must be a number"),
            email: Yup.string().email().required("Email is required"),
            gender: Yup.string().required("Gender is required"),
            about: Yup.string().required("About is required"),
            bodyType: Yup.string().required("Body type is required"),
            country: Yup.string().required("Country is required"),
            city: Yup.array().min(1, "City is required").max(5, "You can select up to 5 cities"),
            language: Yup.array().min(1, "Language is required")
                .max(5, "You can select up to 5 languages")
        }),
        onSubmit: (values, { setErrors }) => {
            formik.validateForm().then((errors) => {
                if (Object.keys(errors).length === 0) {
                    handleSubmit(values, setErrors);
                }
            });
        },
    });

    const handleGetCountry = async () => {
        await get("/country/getCountry", "GET_COUNTRY", dispatch, HEADERS)
    }

    useEffect(() => {
        handleGetCountry()
        get(`/language/getLanguage`, "GET_LANGUAGE", dispatch, HEADERS)
    }, [])

    const handleInputChangeLanguage = (event, newInputValue) => {
        setLanguageField(newInputValue)
        if (newInputValue.length > 0) {
            setOpenLanguage(true);
        } else {
            setOpenLanguage(false);
        }
    };

    const handleOpenLanguage = () => {
        if (languageField.length > 0) {
            setOpenLanguage(true);
        }
    };

    const handleFile = (e) => {
        console.log('e', e)
        setImgFileName(e.target.files[0].name);
        var reader = new FileReader();
        console.log('reader', reader)
        reader.addEventListener("load", () => {
            setImgSrc(reader.result?.toString() || ""),
                setOpenImageCropModel(true)
        })
        reader.readAsDataURL(e.target.files[0]);
    }


    const handleImageCropResponse = (url, filename) => {
        if (url && filename) {
            let arr = url.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[arr.length - 1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            let file = new File([u8arr], filename, { type: mime });
            setOpenImageCropModel(false);
            console.log('file', file)
            setFiles([file]);
        }
    };


    const handleSubmit = (values) => {
        const formData = new FormData();
        formData.append("name", values?.name)
        formData.append("id", id)
        formData.append("gender", values?.gender)
        formData.append("age", values?.age)
        formData.append("bodyType", values?.bodyType)
        formData.append("language", values?.language)
        formData.append("country", values?.country)
        formData.append("aboutUser", values?.about)
        formData.append("city", values?.city)
        // files?.map((img) => {
        //     formData.append("image", img)
        // })

        put("/user/userDetails", formData, "USER_UPDATE", dispatch, FORM_HEADERS).then((res) => {
            if (res?.status === 200) {
                showToast(res.message, { type: "success" })
                router.push("/")
            }
        }).catch((error) => {
            showToast(error.message, { type: "error" })
        })
    }


    return (
        <div className="md:pt-5 mx-auto m-auto mb-9">
            <div className='md:border md:border-white  md:rounded-3xl md:w-8/12 m-auto h-100'>
                <form onSubmit={formik.handleSubmit} >
                    <div className='flex items-center flex-col justify-center p-10'>
                        <img className='h-[58px]' src='/images1/Frame1.png' />
                        <div className='md:flex w-full items-start gap-10 mt-14 md:mt-'>
                            <div className=' w-full md:w-[50%] mx-auto'>
                                <div>
                                    <Input
                                        label="Name"
                                        placeholder="Enter Name"
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <ErrorMessage error={formik.errors.name} />
                                    )}
                                </div>
                                <div className='pt-5'>
                                    <Select onChange={formik.handleChange} value={formik.values.age} name="age" data={optionsArray} label="Age" />
                                    {formik.touched.age && formik.errors.age && (
                                        <ErrorMessage error={formik.errors.age} />
                                    )}
                                </div>
                                <div className='pt-5'>
                                    <Input
                                        label="Email"
                                        placeholder="Enter Email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <ErrorMessage error={formik.errors.email} />
                                    )}
                                </div>
                                <div className='pt-5'>
                                    <Select onChange={formik.handleChange} value={formik.values.gender} name="gender" data={gender} label="Gender" />
                                    {formik.touched.gender && formik.errors.gender && (
                                        <ErrorMessage error={formik.errors.gender} />
                                    )}
                                </div>
                                <div className='pt-5'>
                                    <div className="text-gray-400">Select Language</div>
                                    <Autocomplete
                                        size='small'
                                        name="language"
                                        multiple
                                        open={openLanguage}
                                        onOpen={handleOpenLanguage}
                                        onChange={(event, value) => formik.setFieldValue("language", value ? value : null)}
                                        value={formik.values.language}
                                        disablePortal
                                        onInputChange={handleInputChangeLanguage}
                                        className="block w-full bg-[#F3F1F8]  border border-[#e6e6e6] rounded-xl"
                                        options={languageList}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "0",
                                            },
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                border: "1px solid #e6e6e6"
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Select Language" />}
                                    />
                                    {formik.touched.language && formik.errors.language && (
                                        <ErrorMessage error={formik.errors.language} />
                                    )}
                                </div>
                                <div className='pt-5'>
                                    <Textarea name="about" value={formik.values.about}
                                        onChange={formik.handleChange} label="About Me" />
                                    {formik.touched.about && formik.errors.about && (
                                        <ErrorMessage error={formik.errors.about} />
                                    )}
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] mt-10 md:mt-0 mx-auto'>
                                <span className='text-[#191825] text-[20px] font-bold'>More details</span>
                                <div className='pt-5'>
                                    <Select onChange={formik.handleChange} value={formik.values.bodyType} name="bodyType" data={bodyType} label="Body type" />
                                    {formik.touched.bodyType && formik.errors.bodyType && (
                                        <ErrorMessage error={formik.errors.bodyType} />
                                    )}
                                </div>
                                <div className='pt-5'>
                                    <div className="text-gray-400">Country</div>
                                    <Autocomplete
                                        size='small'
                                        name="country"
                                        onChange={(event, value) => formik.setFieldValue("country", value ? value : null)}
                                        value={formik.values.country}
                                        disablePortal
                                        className="block w-full bg-[#F3F1F8]  border border-[#e6e6e6] rounded-xl"
                                        options={countryList}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "0",
                                                // height: "40px",

                                            },
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                border: "1px solid #e6e6e6"
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Select Country" />}
                                    />
                                    {formik.touched.country && formik.errors.country && (
                                        <ErrorMessage error={formik.errors.country} />
                                    )
                                    }
                                </div>
                                <div className='pt-5'>
                                    <div className="text-gray-400">Wants to Visit</div>
                                    <Autocomplete
                                        size='small'
                                        disablePortal
                                        multiple
                                        open={open}
                                        onOpen={handleOpen}
                                        onChange={(event, value) => formik.setFieldValue("city", value ? value : null)}
                                        value={formik.values.city}
                                        className="block w-full bg-[#F3F1F8]  border border-[#e6e6e6] rounded-xl"
                                        options={cities}
                                        name="city"
                                        onInputChange={handleInputChange}
                                        onClose={() => setOpen(false)}
                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                borderRadius: "0",
                                            },
                                            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                borderRadius: "10px",
                                                border: "1px solid #e6e6e6"
                                            }
                                        }}
                                        renderInput={(params) => <TextField {...params} label="Select Visit" />}
                                    />
                                    {formik.touched.city && formik.errors.city && (
                                        <ErrorMessage error={formik.errors.city} />
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-10 pb-10'>
                        <p className='text-lg font-semibold' >
                            Photo Gallery
                        </p>
                        <div className="flex  gap-3 mt-4">
                            {files[0] &&
                                <>
                                    <div className="h-24 w-24 overflow-hidden rounded-lg flex">
                                        <img src={URL.createObjectURL(files[0])} />
                                    </div>
                                    <MdClose
                                        onClick={() => setFiles([])}
                                        className='text-black text-1xl cursor-pointer absolute right-1 top-1 bg-white rounded-full'
                                    />
                                </>
                            }
                            {/* <div className="h-24 w-24 overflow-hidden rounded-lg flex items-center justify-center bg-[#FFEBED]">
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5 2L16.5 31" stroke="#F4425A" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M31 16.6631L2 16.6631" stroke="#F4425A" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div> */}
                            <label htmlFor="fileInput">
                                <div className="h-24 w-24 overflow-hidden rounded-lg flex items-center justify-center bg-[#FFEBED]" id="fileInputWrapper">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.5 2L16.5 31" stroke="#F4425A" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M31 16.6631L2 16.6631" stroke="#F4425A" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFile} accept="image/*,capture=camera" />
                            </label>
                            {/* {files && files?.map((file, index) => (
                                <div key={index} className="h-[149px] mt-5 rounded-xl w-[149px] bg-[#E6E6E6] relative">
                                    <img key={index} src={URL.createObjectURL(file)} style={{ objectFit: "fill", height: "149px", width: "100%" }} className="rounded-xl" />
                                    <MdClose
                                        onClick={() => handleDeleteImages(index)}
                                        className='text-black text-1xl cursor-pointer absolute right-1 top-1 bg-white rounded-full'
                                    // onClick={handleClose}
                                    />
                                </div>
                            ))
                            } */}
                        </div>
                        <div className='w-full flex justify-center md:justify-end mt-16 md:mt-3'>
                            <Secondarybutton text="Continue" />
                        </div>
                    </div>
                </form>
            </div>
            <ImageCropping
                open={imageCropModel}
                imgSrc={imgSrc}
                handleOpen={openImageCropModel}
                handleClose={closeImageCropModel}
                callBack={handleImageCropResponse}
            />

        </div>
    )
}

export default index