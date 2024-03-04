import React, { useState } from "react";
import Iconstartbutton from "@/component/Buttons/Iconstartbutton";
import Sidebar from "@/component/sidebar/Sidebar";

function index() {
  const testimonials = [
    {
      name: "Mark Smith",
      description: "Travel Enthusiast",
      image: "/images1/models/model1.png",
    },
    {
      name: "Mark Smith",
      description: "Travel Enthusiast",
      image: "/images1/models/model2.png",
    },
    {
      name: "Mark Smith",
      description: "Travel Enthusiast",
      image: "/images1/models/model3.png",
    },
    {
      name: "Mark Smith",
      description: "Travel Enthusiast",
      image: "/images1/models/model4.png",
    },
  ];
  const [ActiveSlide1, setActiveSlide1] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide1(
      (prevActiveSlide1) => (prevActiveSlide1 + 1) % testimonials.length
    );
  };

  const handlePrevSlide = () => {
    setActiveSlide1(
      (prevActiveSlide1) =>
        (prevActiveSlide1 + testimonials.length - 1) % testimonials.length
    );
  };

  return (
    <>
      <Sidebar>
        <div className="px-3 md:px-16 pb-32  md:pb-2">
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="flex flex-col gap-y-8 items-center justify-center ">
              <div>
                <img
                  src="/images1/model1.png"
                  className="h-[300px] w-[300px] rounded-3xl"
                  alt=""
                />
              </div>
              <div className="w-[80%]">
                <div className="relative  overflow-hidden ">
                  <div
                    className="flex transition-transform duration-500 ease-in-out "
                    style={{ transform: `translateX(-${ActiveSlide1 * 100}%)` }}
                  >
                    {testimonials.map((e, index) => {
                      return (
                        <div key={index} className="flex-shrink-0">
                          <div className=" w-full flex flex-col justify-center items-center px-2">
                            <div className="">
                              <img
                                src={e?.image}
                                className="w-[75px] h-[75px] rounded-md"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    disabled={ActiveSlide1 === 0}
                    onClick={handlePrevSlide}
                    aria-label="Prev Button"
                    className="absolute top-1/2 left-0 md:left-0 transform -translate-y-1/2 "
                  >
                    <svg
                      width="6"
                      height="11"
                      viewBox="0 0 6 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.12793 5.28277L5.84333 8.9981L4.78181 10.0596L0.00488281 5.28277L4.78181 0.505859L5.84333 1.56739L2.12793 5.28277Z"
                        fill="#8C8C92"
                      />
                    </svg>
                  </button>
                  <button
                    disabled={ActiveSlide1 === testimonials.length - 1}
                    onClick={handleNextSlide}
                    aria-label="Next Button"
                    className="absolute top-1/2 right-4 md:right-0 transform -translate-y-1/2  "
                  >
                    <svg
                      width="6"
                      height="11"
                      viewBox="0 0 6 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.87207 5.2807L0.156667 1.56537L1.21819 0.503851L5.99512 5.2807L1.21819 10.0576L0.156666 8.99609L3.87207 5.2807Z"
                        fill="#8C8C92"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="text-dark md:px-8 py-4 md:mt-14">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Rebecca Johansson | <span>24</span>
              </h1>
              <p className="font-medium text-xl py-2">24 Year | Female</p>
              <div className="flex items-center md:py-4 gap-4 text-secondary1">
                <div className="flex items-center text-primary gap-2  text-12px">
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 13.4337L9.2998 10.1338C11.1223 8.31139 11.1223 5.3566 9.2998 3.53415C7.4774 1.7117 4.52261 1.7117 2.70017 3.53415C0.87772 5.3566 0.87772 8.31139 2.70017 10.1338L6 13.4337ZM6 15.3193L1.75736 11.0767C-0.585787 8.73345 -0.585787 4.93449 1.75736 2.59134C4.10051 0.248198 7.89947 0.248198 10.2427 2.59134C12.5858 4.93449 12.5858 8.73345 10.2427 11.0767L6 15.3193ZM6 8.16732C6.7364 8.16732 7.33333 7.57038 7.33333 6.83399C7.33333 6.0976 6.7364 5.50065 6 5.50065C5.2636 5.50065 4.66667 6.0976 4.66667 6.83399C4.66667 7.57038 5.2636 8.16732 6 8.16732ZM6 9.50065C4.52724 9.50065 3.33333 8.30672 3.33333 6.83399C3.33333 5.36122 4.52724 4.16732 6 4.16732C7.47273 4.16732 8.66667 5.36122 8.66667 6.83399C8.66667 8.30672 7.47273 9.50065 6 9.50065Z"
                      fill="#F4425A"
                    />
                  </svg>
                  Munich, Germany
                </div>
                Active about 3 hours ago
              </div>

              <div className="hidden md:flex items-center gap-3">
                <Iconstartbutton text="Chat With Rebecca" />
                <button
                  onClick={() => handleOpen()}
                  className="px-[32px] py-[16px] bg-primary  bg-opacity-[13%] text-primary rounded-full flex items-center gap-2 font-semibold"
                >
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0665 1.90139C22.5554 4.35458 22.6409 8.26292 20.3261 10.812L10.9997 20L1.67348 10.812C-0.641235 8.26292 -0.554711 4.3484 1.93306 1.90139C3.86692 -0.000797093 6.70234 -0.475744 9.08638 0.476541L4.77737 4.71564L6.33298 6.24576L10.9998 1.6554L10.9857 1.64044C10.9908 1.64488 10.9958 1.64934 11.0009 1.65381C13.5847 -0.627532 17.5777 -0.551795 20.0665 1.90139Z"
                      fill="#F4425A"
                    />
                  </svg>
                  Add Favorites
                </button>
              </div>
            </div>
          </div>

          <div className=" md:py-20  flex  flex-col md:flex-row md:gap-20  ">
            <div>
              <h1 className="py-3 text-base font-semibold">About Me</h1>
              <div className=" md:space-y-4 text-secondary1">
                <p>My goal is to travel to every country in the world 28/197</p>
                <p>I&apos;m literally up for anything</p>
                <p>Insta: tizi_entry</p>
              </div>
            </div>
            <div>
              <h1 className="py-3 text-base font-semibold">Other Details</h1>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Nationality</div>
                <div>German</div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Languages</div>
                <div>English,German</div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Height</div>
                <div>191cm(6&apos;3&apos;&apos;)</div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Body type</div>
                <div>slim</div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Eyes</div>
                <div>Hazel</div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Hair</div>
                <div>Brown</div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden justify-center items-center gap-3">
            <button className="px-3 md:px-[32px]  text-[12px] py-[16px] bg-primary text-white rounded-full flex items-center gap-2">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 5.99374C0 2.68349 2.67654 0 6.00066 0H13.9993C17.3134 0 20 2.69478 20 5.99374V18H6.00066C2.68659 18 0 15.3052 0 12.0063V5.99374ZM18 16V5.99374C18 3.79539 16.2049 2 13.9993 2H6.00066C3.78458 2 2 3.78458 2 5.99374V12.0063C2 14.2046 3.79512 16 6.00066 16H18ZM12 8H14V10H12V8ZM6 8H8V10H6V8Z"
                  fill="white"
                />
              </svg>
              Contact Rebecca
            </button>
            <button className=" px-4 md:px-[32px] text-[12px]  py-[16px] bg-primary  bg-opacity-[13%] text-primary rounded-full flex items-center gap-2 font-semibold">
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0665 1.90139C22.5554 4.35458 22.6409 8.26292 20.3261 10.812L10.9997 20L1.67348 10.812C-0.641235 8.26292 -0.554711 4.3484 1.93306 1.90139C3.86692 -0.000797093 6.70234 -0.475744 9.08638 0.476541L4.77737 4.71564L6.33298 6.24576L10.9998 1.6554L10.9857 1.64044C10.9908 1.64488 10.9958 1.64934 11.0009 1.65381C13.5847 -0.627532 17.5777 -0.551795 20.0665 1.90139Z"
                  fill="#F4425A"
                />
              </svg>
              Favorites
            </button>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default index;
