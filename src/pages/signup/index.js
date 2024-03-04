import React, { useState } from "react";
import Input from "@/component/inputs/Input";
import Primary2button from "@/component/Buttons/Primary2button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { showToast } from "@/constant/toast/toastUtils";
import { post } from "@/redux/services/apiServices";
import { useDispatch } from "react-redux";
import Link from "next/link";

function Index() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);

  // const handleChange = (e) => {
  //   const { name, value } = e?.target;
  //   setFields((prevState) => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  const handleSubmit = async (values, setErrors) => {
    try {
      setLoading(true);
      const response = await post(
        "/user/register",
        {
          email: values.email,
          password: values.password,
        },
        "USER_REGISTER",
        dispatch
      );
      if (response?.status === 200) {
        setLoading(false);
        showToast(response.message, { type: "success" });
        setOpen(true);
        setErrors({}); // Clear form errors
      }
    } catch (error) {
      showToast(error?.response?.data?.message, { type: "error" });
      setLoading(false);
      setErrors({}); // Clear form errors
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
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

  return (
    <div>
      <section className="bg-transparent">
        {loading && (
          <div class="z-50 absolute left-[50%] right-[50%]">
            <div class="">
              <div
                className="flex justify-center text-center mt-72 items-center w-12 h-12 rounded-full animate-spin
        border-4 border-solid border-red-500 border-t-transparent"
              ></div>
            </div>
          </div>
        )}
        <div
          class={`grid grid-cols-1 md:grid-cols-2 ${
            loading ? "opacity-35" : ""
          }`}
        >
          <div className="flex items-center  px-4 py-10 bg-transparent sm:px-6 lg:px-8 sm:pt-16 lg:pt-12">
            <div className="w-full lg:w-[80%]">
              <div className="lg:ml-14 mx-auto">
                <img src="/images1/Frame1.png" className="h-8 "></img>
                <h2 className="text-3xl font-bold leading-tight mt-10 text-black sm:text-4xl">
                  Welcome!
                </h2>

                <div className="block md:hidden mt-4 overflow-hidden w-full object-cover rounded-2xl">
                  <img src="/images1/signup2.jpg" className="w-full" />
                </div>
                <form
                  onSubmit={formik.handleSubmit}
                  action="#"
                  method="POST"
                  className="mt-8 md:mt-5"
                >
                  <div className="space-y-5">
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
                      <Primary2button text="Register" />
                    </div>

                    <div className="flex w-ful justify-center items-center gap-2 py-4 text-sm text-slate-600">
                      <div className="h-px w-[100px] bg-slate-300"></div>
                      or
                      <div className="h-px w-[100px] bg-slate-300"></div>
                    </div>
                  </div>
                </form>
                <button className="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg bg-white  ">
                  <div className="py-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 22.9996C14.97 22.9996 17.46 22.0196 19.28 20.3396L15.71 17.5696C14.73 18.2296 13.48 18.6296 12 18.6296C9.13999 18.6296 6.70999 16.6996 5.83999 14.0996H2.17999V16.9396C3.98999 20.5296 7.69999 22.9996 12 22.9996Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.0903C5.62 13.4303 5.49 12.7303 5.49 12.0003C5.49 11.2703 5.62 10.5703 5.84 9.91031V7.07031H2.18C1.43 8.55031 1 10.2203 1 12.0003C1 13.7803 1.43 15.4503 2.18 16.9303L5.03 14.7103L5.84 14.0903Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.02L19.36 3.87C17.45 2.09 14.97 1 12 1C7.69999 1 3.98999 3.47 2.17999 7.07L5.83999 9.91C6.70999 7.31 9.13999 5.38 12 5.38Z"
                        fill="#EA4335"
                      />
                    </svg>
                  </div>
                  <div className="px-4 py-2">Sign in with Google</div>
                </button>

                <p class="mt-16 text-sm text-center font-medium text-gray-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    title=""
                    class="text-red-600 transition-all duration-200 hover:underline "
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex bg-cover bg-no-repeat bg-center relative">
            <img src="/images1/signup.jpg" className="w-full h-full" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
