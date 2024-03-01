import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  // Close modal when clicking outside the modal content
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modalContainer = document.querySelector(".modal-container");
      if (isOpen && !modalContainer.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          className="main-modal fixed  w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
          style={{ background: "rgba(0,0,0,.7)" }}
        >
          <div className="modal-container mx-3 md:mx-auto bg-white  w-full sm:max-w-xl  md:rounded-3xl rounded-2xl shadow-lg z-50 overflow-y-auto">
            <div className="modal-content  text-left p-10">
              {/* <div className="flex justify-end   items-center pb-3">
                <div
                  className="modal-close cursor-pointer z-50"
                  onClick={onClose}
                >
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div> */}
              <div className="w-full">
                <div className="w-full sm:w-[60%] flex flex-col items-center mx-auto">
                  <p className="text-3xl font-semibold text-[#F4425A]">
                    Join Us
                  </p>
                  <p className="text-lg font-semibold ">
                    Find a travel date today!
                  </p>

                  <button class="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-3xl bg-white  ">
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
                  </button>
                  {/* <button class="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-3xl bg-[#1091F3]">
                                        <div class=" py-2">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_287_7267)">
                                                    <path d="M10.02 23.88C4.32 22.86 0 17.94 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 17.94 19.68 22.86 13.98 23.88L13.32 23.34H10.68L10.02 23.88Z" fill="white" />
                                                    <path d="M16.6801 15.3599L17.2201 11.9999H14.0401V9.65993C14.0401 8.69993 14.4001 7.97993 15.8401 7.97993H17.4001V4.91993C16.5601 4.79993 15.6001 4.67993 14.7601 4.67993C12.0001 4.67993 10.0801 6.35993 10.0801 9.35993V11.9999H7.08008V15.3599H10.0801V23.8199C10.7401 23.9399 11.4001 23.9999 12.0601 23.9999C12.7201 23.9999 13.3801 23.9399 14.0401 23.8199V15.3599H16.6801Z" fill="url(#paint0_linear_287_7267)" />
                                                </g>
                                                <defs>
                                                    <linearGradient id="paint0_linear_287_7267" x1="12.2403" y1="23.4217" x2="12.2403" y2="4.67636" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#0062E0" />
                                                        <stop offset="1" stop-color="#19AFFF" />
                                                    </linearGradient>
                                                    <clipPath id="clip0_287_7267">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                        </div>

                                        <span class=" px-4 py-3 text-xs sm:text-sm font-bold text-center text-white">Sign in with Facebook</span>
                                    </button> */}
                  <div class="flex w-full font-semibold items-center justify-center gap-2 py-4 text-sm text-slate-600">
                    or
                  </div>
                  <div class="flex w-full items-center justify-center  md:gap-8 gap-6  py-4 text-sm text-slate-600">
                    <div className="flex justify-center">
                      <button className="bg-[#f5435a] py-3 px-7 md:px-9 text-xs md:text-sm font-semibold text-white rounded-3xl ">
                        Register
                      </button>
                    </div>
                    <div className=" flex justify-center">
                      <button className="bg-gray-200 py-3 text-black px-7 md:px-9 font-semibold text-xs md:text-sm  rounded-3xl">
                        Login
                      </button>
                    </div>
                  </div>
                  <div class="flex text-xs  w-full items-center justify-center  gap-8 py-4 text-center md:text-sm text-gray-400">
                    Adjust your preferences to see and be seen by those who fit
                    them.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
