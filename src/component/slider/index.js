import React from "react";
import Maintext from "../maintext/Maintext";
import { useRouter } from "next/router";
import Nav from "../navbar/Nav";
import Secondarybutton from "../Buttons/Secondarybutton";
import Primarybutton from "../Buttons/Primarybutton";

function Slider() {
  const router = useRouter();

  return (
    <>
      <div className="lg:p-2 overflow-x-hidden">
        {/* <div>
          <img
            className="w-full overflow-x-hidden relative min-h-screen h-[1200px]"
            src="/images1/main.png"
          />
        </div> */}
        <div className="slider py-10">
          <Nav />
          <div className="flex flex-col lg:flex-row  justify-between  w-full h-full">
            <div className="w-full h-full  m-auto lg:w-[50%]  ">
              <div className="flex flex-col justify-center px-5 lg:px-20">
                <Maintext />
              </div>
            </div>
            <div className="lg:w-[50%] m-auto  w-full lg:block  mt-6 px-5 md:px-36 lg:px-5">
              <div className=" relative w-full m-auto flex items-center">
                {/* <div class="absolute left-0  -top-10    z-1   rounded-xl  p-2">
                  <div>
                    <img src="/images1/lines.png" />
                  </div>
                </div> */}

                {/* card1 */}
                <div className="w-[45%] lg:w-[50%] -rotate-12 h-max   z-10 ml-2 lg:ml-10 relative">
                  <div class="w-full h-full ml-14 -mb-8  bg-white rounded-3xl  unded-lg shadow-lg p-2">
                    <img
                      class="object-cover  h-[150px] lg:h-[280px] w-full rounded-2xl"
                      src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                    />

                    <div class="py-2">
                      <a
                        href="#"
                        class="block sm:text-xl lg:text-4xl px-4 font-bold text-gray-800"
                        tabindex="0"
                        role="link"
                      >
                        John Doe
                      </a>
                      <span class="text-md px-4 text-gray-700">
                        Rome, italy
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-[90px]  lg:bottom-12 -left-2  lg:-left-[40px] z-50">
                    <img
                      src="/images1/earth.png"
                      className="h-[100px] w-[100px] lg:h-auto lg:w-auto"
                    />
                  </div>
                </div>
                <div className="w-[45%] lg:w-[50%]   rounded-3xl h-max overflow-clip  bg-white z-10 mt-32 ml-2 lg:-ml-20 ">
                  <div class="w-full h-full  bg-white   unded-lg shadow-lg p-2">
                    <img
                      class="object-cover  h-[150px] lg:h-[280px] w-full rounded-2xl"
                      src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      alt="avatar"
                    />

                    <div class="py-2">
                      <a
                        href="#"
                        class="block sm:text-xl lg:text-4xl px-4 font-bold text-gray-800"
                        tabindex="0"
                        role="link"
                      >
                        John Doe
                      </a>
                      <span class="text-md px-4 text-gray-700">
                        Rome, italy
                      </span>
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
            <div className="mt-10 gap-4 flex justify-center py-10 lg:hidden items-center">
              <Secondarybutton text="Get Started" />
              <Primarybutton text="Watch Demo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
