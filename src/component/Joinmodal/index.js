import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useRouter } from "next/router";
import { GoogleLogin } from "@react-oauth/google";
import { showToast } from "@/constant/toast/toastUtils";
import { post } from "@/redux/services/apiServices";
import { useDispatch } from "react-redux";

function Index({ isOpen, onClose }) {
  const router = useRouter();
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)


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
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="w-full">
          <div className="w-full sm:w-[60%] flex flex-col items-center mx-auto">
            <p className="text-3xl font-semibold text-[#F4425A]">Join Us</p>
            <p className="text-lg font-semibold ">Find a travel date today!</p>

            {/* <button class="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-3xl bg-white  ">
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

              <span class=" px-4 py-3 font-bold text-center text-xs md:text-sm">
                Sign in with Google
              </span>
            </button> */}

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

            <div class="flex w-full font-semibold items-center justify-center gap-2 py-4 text-sm text-slate-600">
              or
            </div>
            <div class="flex w-full items-center justify-center  md:gap-8 gap-6  py-4 text-sm text-slate-600">
              <div className="flex justify-center">
                <button
                  onClick={() => router.push("/signup")}
                  className="bg-[#f5435a] py-3 px-7 md:px-9 text-xs md:text-sm font-semibold text-white rounded-3xl "
                >
                  Register
                </button>
              </div>
              <div className=" flex justify-center">
                <button
                  onClick={() => router.push("/login")}
                  className="bg-gray-200 py-3 text-black px-7 md:px-9 font-semibold text-xs md:text-sm  rounded-3xl"
                >
                  Login
                </button>
              </div>
            </div>
            <div class="flex text-xs  w-full items-center justify-center  gap-8 py-4 text-center md:text-sm text-gray-400">
              Adjust your preferences to see and be seen by those who fit them.
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Index;
