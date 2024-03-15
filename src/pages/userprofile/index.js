import React, { useEffect, useState } from "react";
import Iconstartbutton from "@/component/Buttons/Iconstartbutton";
import Sidebar from "@/component/sidebar/Sidebar";
import { get } from "@/redux/services/apiServices";
import { useDispatch, useSelector } from "react-redux";
import { HEADERS } from "@/constant/authorization";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const images = [
  { src: "/images1/models/model1.png", alt: "Image 1" },
  { src: "/images1/models/model2.png", alt: "Image 2" },
  { src: "/images1/models/model3.png", alt: "Image 3" },
];

function Index() {
  const dispatch = useDispatch();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnChange = (index) => {
    setCurrentSlide(index);
  };
  const userData = useSelector((state) => state?.Auth?.userProfile);

  useEffect(() => {
    console.log('userData', userData)
  }, [userData])
  

  useEffect(() => {
    get(`/user/userProfile`, "GET_SINGLE_PROFILE", dispatch, HEADERS);
  }, []);


  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    get(`/user/userProfile`, "GET_SINGLE_PROFILE", dispatch, HEADERS);
  }, []);

  return (
    <>
      <Sidebar>
        <div className="px-4 lg:px-4 xl:px-14 ">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col gap-y-8 items-center justify-center w-full  lg:w-[30%] xl:w-[40%] ">
              {/* <div className="w-full h-full">
                <img
                  src={userData?.image?.[0]?.filename}
                  className="w-full h-full   md:h-[300px]  rounded-3xl"
                  alt=""
                />
              </div> */}

              <div className="relative">
                <Carousel
                  className=" "
                  selectedItem={currentIndex}
                  onChange={handleOnChange}
                  showThumbs={true}
                  showArrows={false}
                  dynamicHeight={false}
                  showStatus={false}
                >
                  {userData?.image?.map((image, index) => (
                    <div key={index}>
                      <img
                        className="rounded-xl object-cover"
                        src={image?.filename}
                        alt={image?.alt}
                        showStatus={false}
                      />
                    </div>
                  ))}
                </Carousel>
                <BsChevronLeft
                  direction="left"
                  className={`absolute  transform -translate-y-1/2 left-0 md:left-3 bottom-10 md:bottom-14  cursor-pointer text-secondary1`}
                  onClick={handlePrevClick}
                />
                <BsChevronRight
                  direction="left"
                  className={`absolute transform -translate-y-1/2 right-0  md:right-5 bottom-10 md:bottom-14  cursor-pointer text-secondary1`}
                  onClick={handleNextClick}
                />
              </div>
              {/* <div className="w-full ">
                <div className="relative  overflow-hidden ">
                  <div
                    className="flex transition-transform duration-500 ease-in-out "
                    style={{ transform: `translateX(-${activeSlide1 * 100}%)` }}
                  >
                    {userData?.image?.map((e, index) => {
                      return (
                        <div key={index} className="flex-shrink-0">
                          <div className=" w-full flex flex-col justify-center items-center px-2">
                            <div className="">
                              <img
                                src={e?.filename}
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
                    disabled={activeSlide1 === 0}
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
                    disabled={activeSlide1 === testimonials.length - 1}
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
              </div> */}
            </div>
            <div className="text-dark m-auto  py-4 md:mt-14  w-full  lg:w-[30%] xl:w-[40%]">
              <h1 className="text-2xl md:text-4xl font-semibold capitalize">
                {userData?.name}
              </h1>
              <p className="font-medium text-xl py-2 hidden  md:block capitalize">
                {userData?.age} Year | {userData?.gender}
              </p>
              <div className="flex items-center py-2 md:py-4 gap-4 text-secondary1 text-[12px]">
                <div className="flex items-center text-primary gap-2  ">
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
                  {userData?.country}
                </div>
                Active about 3 hours ago
              </div>

              <div className="hidden md:flex items-center gap-3">
                <Iconstartbutton text="Chat With Rebecca" />
                <button
                  // onClick={() => handleOpen()}
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

          <div className=" md:py-10  flex  flex-col md:flex-row  md:gap-20  ">
            <div>
              <h1 className="py-3 text-base font-semibold">About Me</h1>
              <div className=" md:space-y-4 text-secondary1">
                <p className="text-sm">{userData?.aboutUser}</p>
                <p className="text-sm">{userData?.aboutUser}</p>
              </div>
            </div>
            <div className="pt-7">
              <h1 className="text-base font-semibold">Other Details</h1>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Nationality</div>
                <div className="font-medium">{userData?.country}</div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Languages</div>
                <div className="font-medium">
                  {userData?.language?.join(", ")}
                </div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Height</div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Body type</div>
                <div className="font-medium">{userData?.bodyType}</div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Eyes</div>
                <div className="font-medium">Hazel</div>
              </div>
              <div className="flex gap-8 py-2">
                <div className="text-secondary1 w-20">Hair</div>
                <div className="font-medium">Brown</div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden justify-center items-center gap-1 w-full mt-8">
            <button className="px-3 md:px-[32px]  text-[12px] py-[16px] bg-primary text-white rounded-full flex justify-center items-center gap-2 w-full text-nowrap">
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
            <button className=" px-3 md:px-[32px] text-[12px]  py-[16px] bg-primary  bg-opacity-[13%] text-primary rounded-full flex items-center justify-center gap-2 w-full  font-semibold">
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

            {/* <Upgrademodal isOpen={open} onClose={handleClose} /> */}
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Index;
