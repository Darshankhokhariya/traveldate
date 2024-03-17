import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useRouter } from "next/router";
import { GoogleLogin } from "@react-oauth/google";
import { showToast } from "@/constant/toast/toastUtils";
import { post } from "@/redux/services/apiServices";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";

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
      <section class="bg-transparent">
        {loading && <Loader />}
        <Modal isOpen={isOpen} onClose={onClose}>
          <div className="w-full">
            <div className="w-full sm:w-[60%] flex flex-col items-center mx-auto">
              <p className="text-3xl font-semibold text-[#F4425A]">Join Us</p>
              <p className="text-lg font-semibold ">Find a travel date today!</p>

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

              <div class="flex w-full font-semibold items-center justify-center gap-2 py-2 md:py-4 text-sm text-slate-600">
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
      </section>
    </div>
  );
}

export default Index;
