import Input from "@/component/inputs/Input";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { post } from "@/redux/services/apiServices";
import { showToast } from "@/constant/toast/toastUtils";
import { GoogleLogin } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "@/component/Loader/Loader";

function Index() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = async (values, setErrors) => {
    try {
      setLoading(true);
      const response = await post(
        "/user/login",
        {
          email: values.email,
          password: values.password,
        },
        "USER_LOGIN",
        dispatch
      );
      if (response?.status === 200) {
        setLoading(false);
        showToast(response.message, { type: "success" });
        localStorage.setItem("authToken", response.data.authToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        formik.resetForm();
        router.push("/");
        setOpen(true);
        formik.resetForm();
        router.push("/");
        setErrors({});
      }
    } catch (error) {
      showToast(error?.response?.data?.message, { type: "error" });
      setLoading(false);
      setErrors({});
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().min(4).max(20).required("Password is required"),
    }),
    onSubmit: (values, { setErrors }) => {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0) {
          handleSubmit(values, setErrors);
        }
      });
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = async (data, setLoading, dispatch) => {
    try {
      if (data) {
        setLoading(true);
        post(
          "/user/googleAuthenticate",
          {
            accessToken: data?.credential,
          },
          "USER_GOOGLE_LOGIN",
          dispatch
        )
          .then((res) => {
            if (res?.status === 200) {
              setLoading(false);
              localStorage.setItem("authToken", res?.data?.authToken);
              localStorage.setItem("refreshToken", res?.data?.refreshToken);
              showToast(res.message, { type: "success" });
              router.push(`/onboarding?id=${res?.data?._id}`);
            }
          })
          .catch((err) => {
            showToast(err?.response?.data?.message, { type: "error" });
            setLoading(false);
          });
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <section class="bg-transparent">
        {loading && <Loader />}
        <div
          class={`grid grid-cols-1 md:grid-cols-2 h-screen ${loading ? "opacity-35 pointer-events-none" : ""
            }`}
        >
          <div class="flex items-center  px-4 py-10 bg-transparent sm:px-6 lg:px-8 sm:py-16 lg:py-12">
            <div class="w-full lg:w-[80%] relative">
              <div className="lg:ml-14 mx-auto">
                <img
                  src="/images1/Frame1.png"
                  className="h-16"
                  style={{ cursor: "pointer" }}
                  onClick={() => router.push("/")}
                ></img>
                <h2 class="text-3xl font-bold leading-tight mt-10 text-black sm:text-4xl">
                  Welcome Back!
                </h2>

                <div className="block md:hidden mt-4 overflow-hidden w-full object-cover rounded-2xl">
                  <img src="/images1/signin2.jpg" className="w-full" />
                </div>

                <form onSubmit={formik.handleSubmit} class="mt-8 md:mt-5">
                  <div class="space-y-5">
                    <div>
                      <Input
                        placeholder="Enter Email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="errorMessage">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                    <div>
                      <Input
                        placeholder="Enter Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        handleTogglePassword={handleTogglePassword}
                        showPassword={showPassword}
                        fieldType="password"
                      />
                      {formik.touched.password && formik.errors.password && (
                        <div className="errorMessage">
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                    <div className="w-full flex justify-center">
                      <button
                        type="submit"
                        className="bg-[#f5435a] py-3 px-9 text-sm text-white rounded-3xl"
                      >
                        Log In
                      </button>
                    </div>

                    <div class="flex w-full items-center gap-2 py-4 text-sm text-slate-600">
                      <div class="h-px w-full bg-slate-300"></div>
                      or
                      <div class="h-px w-full bg-slate-300"></div>
                    </div>
                  </div>
                </form>

                <div className="my-5 w-full flex justify-center">
                  <GoogleLogin
                    onSuccess={(res) =>
                      handleGoogleLogin(res, setLoading, dispatch, router)
                    }
                    className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center bg-[#F3F1F8] border-slate-200 rounded-full text-black hover:shadow transition duration-150"
                    size="large"
                    text="signin_with"
                    shape="pill"
                    width={300}
                    logo_alignment="center"
                    onError={(err) => {
                      showToast(err.message, { type: "error" });
                    }}
                  />
                </div>

                {/* <button class="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg bg-white  ">
                  <div class=" py-2">
                    <svg class="w-6 h-6" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>
                  </div>

                  <span class="">Sign in with Google</span>
                </button> */}
                {/* <button class="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg bg-[#1091F3]">
                  <div class=" py-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_287_7267)">
                        <path
                          d="M10.02 23.88C4.32 22.86 0 17.94 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 17.94 19.68 22.86 13.98 23.88L13.32 23.34H10.68L10.02 23.88Z"
                          fill="white"
                        />
                        <path
                          d="M16.6801 15.3599L17.2201 11.9999H14.0401V9.65993C14.0401 8.69993 14.4001 7.97993 15.8401 7.97993H17.4001V4.91993C16.5601 4.79993 15.6001 4.67993 14.7601 4.67993C12.0001 4.67993 10.0801 6.35993 10.0801 9.35993V11.9999H7.08008V15.3599H10.0801V23.8199C10.7401 23.9399 11.4001 23.9999 12.0601 23.9999C12.7201 23.9999 13.3801 23.9399 14.0401 23.8199V15.3599H16.6801Z"
                          fill="url(#paint0_linear_287_7267)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_287_7267"
                          x1="12.2403"
                          y1="23.4217"
                          x2="12.2403"
                          y2="4.67636"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#0062E0" />
                          <stop offset="1" stop-color="#19AFFF" />
                        </linearGradient>
                        <clipPath id="clip0_287_7267">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <span class=" px-4 py-3 font-bold text-center text-white">
                    Sign in with Facebook
                  </span>
                </button>  */}

                <p class="mt-5 text-sm text-center font-medium text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/signup"
                    title=""
                    class="text-red-600 transition-all duration-200 hover:underline "
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div class="relative hidden md:flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center  sm:px-6 lg:px-8">
            <div class="absolute inset-0 ">
              <img
                class=" w-full sm:h-screen md:h-[100vh]"
                src="/images1/signin.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
