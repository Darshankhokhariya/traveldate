import React from "react";
import Maintext from "../maintext/Maintext";
import { useRouter } from "next/router";
import Nav from "../navbar/Nav";
import Secondarybutton from "../Buttons/Secondarybutton";
import Primarybutton from "../Buttons/Primarybutton";
import Iconbutton from "../Buttons/Iconbutton";
import heart from "../../assets/Heart.png";

function Slider() {
  const router = useRouter();

  return (
    <>
      <div className="lg:p-2 overflow-x-hidden ">
        <div className="slider py-5">
          <Nav />
          <div className="flex flex-col lg:flex-row  justify-between  w-full h-full container mx-auto py-20 lg:px-10 xl:px-20">
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
                      class="object-cover  h-[150px] lg:h-[280px] w-full rounded-3xl"
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
                      class="object-cover  h-[150px] lg:h-[280px] w-full rounded-3xl"
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

                {/* icons */}

                {/* <div className="absolute -right-[30px] top-0 lg:right-24 lg:top-16 z-30">
                  <img
                    src="/images1/emoji1.png"
                    className="h-[80px] w-[80px] lg:h-auto lg:w-auto"
                  />
                </div> */}
                {/* icons */}

                {/* card2 */}
                {/* <div className="w-[45%] lg:w-[50%] h-max   lg:h-[400px] relative">
                  <div className="rounded-3xl overflow-clip ">
                    <div class="w-full h-full  overflow-hidden   bg-white p-2">
                      <div className="">
                        <img
                          class="object-cover w-[150px] h-[150px] lg:h-[280px] lg:w-full rounded-3xl"
                          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                          alt="avatar"
                        />
                      </div>

                      <div class="flex items-start py-2 px-2">
                        <div>
                          <p class="text-sm md:text-lg font-bold truncate block capitalize">
                            Aasta Smith
                          </p>
                          <div className="flex items-center gap-1 text-secondary">
                            <img src="/icons/location.svg" alt="" />
                            <p class="text-sm  cursor-auto py-1 lg:my-3">
                              Rome, Italy
                            </p>
                          </div>
                        </div>

                        <div class="ml-auto lg:pt-2 text-base lg:text-xl text-primary font-bold">
                          24
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* <div className=" relative  w-full h-full flex justify-center items-center">
                <div class="absolute -left-7  -top-32    z-1   rounded-xl  p-2">
                  <div>
                    <img src="/images1/lines.png" />
                  </div>
                </div>
                <div class="absolute  -top-0  left-40  z-20  bg-white rounded-3xl  p-2">
                  <div className=" h-max relative">
                    <div className="absolute -right-12 -top-14">
                      <img src="/images1/emoji1.png" className="" />
                    </div>
                  </div>
                  <div class="bg-white rounded-3xl shadow-lg overflow-hidden w-[200px] h-[260px] lg:w-[300px] lg:h-[400px]">
                    <img
                      src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
                      alt="Mountain"
                      class="w-auto h-[280px]  object-cover"
                    />
                    <div class="p-3">
                      <h2 class="text-2xl font-bold text-gray-800 mb-2">
                        Beautiful Mountain View
                      </h2>

                      <div class="flex justify-between items-center">
                        <div class="flex items-center">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Avatar"
                            class="w-8 h-8 rounded-full mr-2 object-cover"
                          />
                          <span class="text-gray-800 font-semibold">
                            John Doe
                          </span>
                        </div>
                        <span class="text-gray-600">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute -rotate-12 -top-10  left-0  z-10  bg-white rounded-xl p-2 ">
                  <div className=" h-max relative">
                    <div className="absolute top-[360px] -left-[70px]">
                      <img src="/images1/earth.png" className="" />
                    </div>
                  </div>
                  <div class="bg-white rounded-lg shadow-lg overflow-hidden w-[200px] h-[260px] lg:w-[300px] lg:h-[400px]">
                    <img
                      src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
                      alt="Mountain"
                      class="w-full h-72 object-cover"
                    />
                    <div class="p-6">
                      <h2 class="text-2xl font-bold text-gray-800 mb-2">
                        Beautiful Mountain View
                      </h2>

                      <div class="flex justify-between items-center">
                        <div class="flex items-center">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Avatar"
                            className="w-8 h-8 rounded-full mr-2 object-cover"
                          />
                          <span class="text-gray-800 font-semibold">
                            John Doe
                          </span>
                        </div>
                        <span class="text-gray-600">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="mt-10 gap-4 flex justify-center py-10 lg:hidden items-center">
              <Secondarybutton text="Get Started" />
              <Primarybutton text="Watch Demo" />
            </div> */}
          </div>

          {/* <marquee width="100%" direction="left">
            <div className="w-full  grid grid-cols-3 gap-40  md:hidden justify-items-center px-10  py-10 ">
              <div className="">
                <img
                  src="/images1/icons/icon3.png"
                  className="h-[80px] w-[80px] object-cover"
                  alt=""
                />
                <h1 className="text-white font-bold">100k+ Members</h1>
                <p className="text-xs text-white">
                  Over thousand of interested travellers <br /> are waiting for
                  you
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
                  Browse members, pick any & start <br /> chatting with them
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
                  10k+ Daily active girls to <br /> connect with you
                </p>
              </div>
            </div>
          </marquee> */}

          <div className="mt-4 gap-4 flex lg:hidden items-center justify-center">
            <Iconbutton text="Join Traveldate" icon={heart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
