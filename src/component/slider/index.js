import React from "react";
import Maintext from "../maintext/Maintext";
import { useRouter } from "next/router";
import Nav from "../navbar/Nav";
import Secondarybutton from "../Buttons/Secondarybutton";
import Primarybutton from "../Buttons/Primarybutton";
import Iconbutton from "../Buttons/Iconbutton";
import heart from "../../assets/Heart.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

function Slider() {
  const router = useRouter();

  return (
    <>
      <div className="lg:p-2 overflow-x-hidden ">
        <div className="slider1 py-5">
          <Nav />
          <div className="flex flex-col lg:flex-row  justify-between  w-full h-full container mx-auto py-8  md::py-20 lg:px-10 xl:px-20">
            <div className="w-full h-full  m-auto lg:w-[50%]  ">
              <div className="flex flex-col justify-center px-5 lg:px-10 xl:px-1">
                <Maintext />
              </div>

              <div className="w-full hidden lg:grid grid-cols-3 justify-items-center  gap-4 lg:px-10 xl:px-1 py-10 ">
                <div className="">
                  <img
                    src="/images1/icons/icon3.png"
                    className="h-[80px] w-[80px] object-cover"
                    alt=""
                  />
                  <h1 className="text-white font-bold">100k+ Members</h1>
                  <p className="text-xs text-white">
                    Over thousand of interested travellers are waiting for you
                  </p>
                </div>

                <div className="">
                  <img
                    src="/images1/icons/icon2.png"
                    className="h-[80px] w-[80px] object-cover"
                    alt=""
                  />
                  <h1 className="text-white font-bold">Find Travel Partner</h1>
                  <p className="text-xs text-white">
                    Browse members, pick any & start chatting with them
                  </p>
                </div>

                <div className="">
                  <img
                    className="h-[80px] w-[80px] object-cover"
                    src="/images1/icons/icon1.png"
                    alt=""
                  />
                  <h1 className="text-white font-bold">Perfect Match</h1>
                  <p className="text-xs text-white">
                    10k+ Daily active girls to connect with you
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] m-auto  w-full lg:block  mt-6 px-2 md:px-36 lg:px-5">
              <div className=" relative w-full m-auto flex items-center">
                <div class="absolute top-9 md:left-20  md:top-4    z-1   rounded-xl  p-2">
                  <div>
                    <img className="" src="/images1/lines.png" />
                  </div>
                </div>

                <div class="absolute top-20  right-0 lg:-right-10 lg:top-16    z-20   rounded-xl  p-2">
                  <img
                    className="w-[80px] h-[80px] lg:h-auto lg:w-auto"
                    src="/images1/emoji1.png"
                  />
                </div>

                {/* card1 */}
                <div className="w-[50%] lg:w-[60%] -rotate-12 h-max   z-10  xl:ml-10 relative">
                  <div class="w-full h-full ml-6 lg:ml-14 -mb-8  bg-white rounded-3xl  unded-lg shadow-lg p-1">
                    <img
                      class="object-cover  aspect-square w-full rounded-3xl"
                      src="/images1/models/model1.png"
                      alt="avatar"
                    />

                    <div class="flex items-start px-2 py-2">
                      <div>
                        <p class=" text-base  md:text-lg font-bold truncate block capitalize">
                          Aasta Smith
                        </p>
                        <div className="flex items-center gap-4 text-secondary">
                          {/* <img src="/icons/location.svg" alt="" /> */}
                          <p class="text-sm  cursor-auto ml-6">Rome, Italy</p>
                        </div>
                      </div>

                      <div class="ml-auto pt-2 text-xl text-primary font-bold">
                        24
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-[78px]  lg:-bottom-[110px] -left-2  lg:-left-[10px] z-50">
                    <img
                      src="/images1/earth.png"
                      className="h-[80px] w-[80px] lg:h-auto lg:w-auto"
                    />
                  </div>
                </div>
                <div className="w-[50%] lg:w-[60%]   rounded-3xl h-max overflow-clip  bg-white z-10 mt-32 -ml-5 lg:-ml-20 ">
                  <div class="w-full h-full  bg-white   unded-lg shadow-lg p-1">
                    <img
                      class="object-cover  aspect-square w-full rounded-3xl"
                      src="/images1/models/model2.png"
                      alt="avatar"
                    />

                    <div class="flex items-start px-2 py-2">
                      <div>
                        <p class="text-base  md:text-lg font-bold truncate block capitalize">
                          Aasta Smith
                        </p>
                        <div className="flex items-center gap-1 text-secondary">
                          <img src="/icons/location.svg" alt="" />
                          <p class="text-sm  cursor-auto my-3">Rome, Italy</p>
                        </div>
                      </div>

                      <div class="ml-auto pt-2 text-xl text-primary font-bold">
                        24
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="block lg:hidden py-6 px-2  md:px-10">
            <Swiper
              className=""
              spaceBetween={0}
              slidesPerView={5}
              modules={[FreeMode, Autoplay]}
              loop={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                320: {
                  slidesPerView: 1.8,
                  spaceBetween: 5,
                },
                480: {
                  slidesPerView: 1.8,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <div className="">
                  <img
                    src="/images1/icons/icon3.png"
                    className="h-[80px] w-[80px] object-cover"
                    alt=""
                  />
                  <h1 className="text-white font-bold">100k+ Members</h1>
                  <p className="text-xs text-white">
                    Over thousand of interested travellers <br /> are waiting
                    for you
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    src="/images1/icons/icon2.png"
                    className="h-[80px] w-[80px] object-cover"
                    alt=""
                  />
                  <h1 className="text-white font-bold">Find Travel Partner</h1>
                  <p className="text-xs text-white">
                    Browse members, pick any & start <br /> chatting with them
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img
                    className="h-[80px] w-[80px] object-cover"
                    src="/images1/icons/icon1.png"
                    alt=""
                  />
                  <h1 className="text-white font-bold">Perfect Match</h1>
                  <p className="text-xs text-white">
                    10k+ Daily active girls to <br /> connect with you
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="mt-4 gap-4 flex lg:hidden items-center justify-center">
            <Iconbutton text="Join Traveldate" icon={heart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
