import { showToast } from "@/constants/toast/toastUtils";
import { validate } from "@/constants/validation/validation";
import { post } from "@/redux/services/apiServices";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const initialValues = { email: "", password: "" };

  // Handle form submission
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    if (isSubmit) {
      setFormErrors(validate({ ...formValues, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const errors = validate(formValues);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      post(
        "/user/login",
        {
          email: formValues?.email,
          password: formValues?.password,
        },
        "USER_LOGIN",
        dispatch
      )
        .then((res) => {
          if (res?.status === 200) {
            setLoading(false);
            localStorage.setItem("authToken", res?.data?.authToken);
            localStorage.setItem("refreshToken", res?.data?.refreshToken);
            showToast(res.message, { type: "success" });
            router.push("/");
          }
        })
        .catch((err) => {
          showToast(err?.response?.data?.message, { type: "error" });
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className=" my-10 bg-transparent py-4 px-6 rounded-xl shadow shadow-slate-300 w-full xl:w-[60%]  h-fit">
        <h1 className="text-4xl font-medium text-center">Login</h1>

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
          {/* <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center bg-[#F3F1F8] border-slate-200 rounded-full text-black hover:shadow transition duration-150">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-6 h-6"
              alt=""
            />{" "}
            <span>Sign in With Google</span>
          </button> */}
        </div>

        <div className="my-3 flex items-center px-3">
          <hr className="w-full border-[#e6e6e6]" />
          <span className="mx-3 text-slate-500 text-base">OR</span>
          <hr className="w-full border-[#e6e6e6]" />
        </div>

        <form className="my-1" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="flex items-center border bg-[#F3F1F8] border-[#e6e6e6] py-3 px-4 rounded-full">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg> */}
              <MdEmail className="text-[20px]" />
              <input
                className="pl-4 bg-transparent w-full outline-none border-none placeholder-[#838383] font-medium"
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
              />
            </div>
            <span className="text-red-500 pl-3 mb-4">{formErrors.email}</span>

            <div className="flex items-center border bg-[#F3F1F8] border-[#e6e6e6] py-3 px-4 rounded-full">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg> */}
              <FaLock className="text-[19px]" />
              <input
                className="pl-4 bg-transparent  w-full outline-none border-none placeholder-[#838383] font-medium"
                type="text"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
              />
            </div>
            <span className="text-red-500 pl-3 mb-4">
              {formErrors.password}
            </span>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-3 font-medium text-white bg-gradient-to-r from-[#6561FD] to-[#E370BC] rounded-full inline-flex  items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-3">
                Login
                {loading && (
                  <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                )}
              </div>
            </button>
            <p className="text-center my-3 tracking-wide">
              Don&apos;t Have an Account ?
              <span className="text-indigo-600 font-medium inline-flex space-x-1 items-center">
                <Link
                  href="/join"
                  className="bg-gradient-to-r from-[#6561FD] to-[#E370BC] text-transparent bg-clip-text inline-block px-1"
                >
                  Join
                </Link>
              </span>
              Now.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

export const handleGoogleLogin = async (data, setLoading, dispatch, router) => {
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
            router.push("/");
          }
        })
        .catch((err) => {
          console.log("err :>> ", err);
          showToast(err?.response?.data?.message, { type: "error" });
          setLoading(false);
        });
    }
  } catch (error) {
    return error;
  }
};
