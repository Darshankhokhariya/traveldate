import Secondarybutton from "@/component/Buttons/Secondarybutton";
import ErrorMessage from "@/component/ErrorMessage/ErrorMessage";
import Input from "@/component/inputs/Input";
import Select from "@/component/inputs/Select";
import Textarea from "@/component/inputs/Textarea";
import { bodyType } from "@/constant/bodyType";
import { gender } from "@/constant/gender";
import { Autocomplete, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Index = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      gender: "",
      about: "",
      bodyType: "",
      country: "",
      city: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number()
        .required("Age is required")
        .typeError("Age must be a number"),
      email: Yup.string().email().required("Email is required"),
      gender: Yup.string().required("Gender is required"),
      about: Yup.string().required("About is required"),
      bodyType: Yup.string().required("Body type is required"),
      country: Yup.string().required("Country is required"),
      city: Yup.string().required("City is required"),
    }),
    onSubmit: (values, { setErrors }) => {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          //   handleSubmit(values, setErrors);
        }
      });
    },
  });

  return (
    <div class="md:pt-5 mx-auto m-auto mb-9">
      <div className="md:border md:border-white  md:rounded-3xl md:w-8/12 m-auto h-100">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex items-center flex-col justify-center p-10">
            <img className="h-[58px]" src="/images1/Frame1.png" />
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
                  {formik.touched.name && formik.errors.name && (
                    <ErrorMessage error={formik.errors.name} />
                  )}
                </div>
                <div className="pt-5">
                  <Input
                    label="Age"
                    placeholder="Enter Age"
                    name="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.age && formik.errors.age && (
                    <ErrorMessage error={formik.errors.age} />
                  )}
                </div>
                <div className="pt-5">
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
                <div className="pt-5">
                  <Select
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    name="gender"
                    data={gender}
                    label="Gender"
                  />
                  {formik.touched.gender && formik.errors.gender && (
                    <ErrorMessage error={formik.errors.gender} />
                  )}
                </div>
                <div className="pt-5">
                  <Select data={gender} label="Spoken Languages" />
                  <div class="flex flex-wrap items-center gap-2 w-full mt-4">
                    <div class="inline-flex items-center justify-between space-x-1  bg-primary text-white px-2 py-0.5 rounded-md text-sm">
                      <svg
                        onclick="this.parentElement.remove()"
                        class="cursor-pointer h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <div class="select-none">English</div>
                    </div>
                    <div class="inline-flex items-center justify-between space-x-1  bg-primary text-white px-2 py-0.5 rounded-md text-sm">
                      <svg
                        onclick="this.parentElement.remove()"
                        class="cursor-pointer h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <div class="select-none">Hindi</div>
                    </div>
                    <div class="inline-flex items-center justify-between space-x-1  bg-primary text-white px-2 py-0.5 rounded-md text-sm">
                      <svg
                        onclick="this.parentElement.remove()"
                        class="cursor-pointer h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <div class="select-none">Gujarati</div>
                    </div>
                    <div class="inline-flex items-center justify-between space-x-1  bg-primary text-white px-2 py-0.5 rounded-md text-sm">
                      <svg
                        onclick="this.parentElement.remove()"
                        class="cursor-pointer h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <div class="select-none">Gujarati</div>
                    </div>
                  </div>
                </div>
                <div className="pt-5">
                  <Textarea
                    name="about"
                    value={formik.values.about}
                    onChange={formik.handleChange}
                    label="About Me"
                  />
                  {formik.touched.about && formik.errors.about && (
                    <ErrorMessage error={formik.errors.about} />
                  )}
                </div>
              </div>
              <div className="w-full md:w-[50%] mt-10 md:mt-0 mx-auto">
                <span className="text-[#191825] text-[20px] font-bold">
                  More details
                </span>
                <div className="pt-5">
                  <Select
                    onChange={formik.handleChange}
                    value={formik.values.bodyType}
                    name="bodyType"
                    data={bodyType}
                    label="Body type"
                  />
                  {formik.touched.bodyType && formik.errors.bodyType && (
                    <ErrorMessage error={formik.errors.bodyType} />
                  )}
                </div>
                <div className="pt-5">
                  <div className="text-gray-400">Country</div>
                  <Autocomplete
                    size="small"
                    name="country"
                    onChange={(event, value) =>
                      formik.setFieldValue(
                        "country",
                        value ? value.value : null
                      )
                    }
                    value={formik.values.country}
                    disablePortal
                    className="block w-full bg-[#F3F1F8]  border border-[#e6e6e6] rounded-xl"
                    options={gender}
                    // onChange={
                    //     handleCountry
                    // }
                    // value={fields.country}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "0",
                        // height: "40px",
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderRadius: "10px",
                          border: "1px solid #e6e6e6",
                        },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Country" />
                    )}
                  />

                  {formik.touched.country && formik.errors.country && (
                    <ErrorMessage error={formik.errors.country} />
                  )}
                  {/* <Select data={gender} label="Country" /> */}
                </div>
                <div className="pt-5">
                  <div className="text-gray-400">Wants to Visit</div>
                  {/* <Select data={gender} label="Wants to Visit" /> */}
                  <Autocomplete
                    size="small"
                    disablePortal
                    onChange={(event, value) =>
                      formik.setFieldValue("city", value ? value.value : null)
                    }
                    value={formik.values.city}
                    className="block w-full bg-[#F3F1F8]  border border-[#e6e6e6] rounded-xl"
                    options={gender}
                    name="city"
                    // onChange={
                    //     handleCountry
                    // }
                    // value={fields.country}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "0",
                        // height: "40px",
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderRadius: "10px",
                          border: "1px solid #e6e6e6",
                        },
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Visit" />
                    )}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <ErrorMessage error={formik.errors.city} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 pb-10">
            <p className="text-lg font-semibold">Photo Gallery</p>

            <div class="flex  gap-3 mt-4">
              <div class="h-24 w-24 overflow-hidden rounded-lg flex ">
                <img src="/images1/inputImage.png" />
              </div>
              <div class="h-24 w-24 overflow-hidden rounded-lg flex items-center justify-center bg-[#FFEBED]">
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 2L16.5 31"
                    stroke="#F4425A"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                  <path
                    d="M31 16.6631L2 16.6631"
                    stroke="#F4425A"
                    stroke-width="3"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full flex justify-center md:justify-end mt-16 md:mt-3">
              <Secondarybutton text="Continue" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
