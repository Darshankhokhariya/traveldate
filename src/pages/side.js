import React from "react";
import logo1 from "../assets/icon1.png";
import logo2 from "../assets/icon2.png";
import airline from "../assets/airline.png";

function New() {
  return (
    <div>
      <div className="w-full rounded-lg bg-red-600 min-h-screen max-h-max flex flex-col lg:flex-row items-center justify-center">
        <div className="text-2xl lg:w-[50%] w-full m-auto text-center">
          Find Your Perfect Travel Match With TravelDate
        </div>
        <div className="lg:w-[50%]  min-h-[600px]  w-full lg:block">
          <div className=" relative  w-full flex justify-center">
            <div class="absolute  -top-32 left-48 w- lg:min-w-96 z-1   rounded-xl  p-2">
              <div>
                <img src={airline} />
              </div>
            </div>
            <div class="absolute  -top-0  left-40 lg:min-w-96 z-20  bg-gray-100 rounded-xl  p-2">
              <div className=" h-max relative">
                <div className="absolute -right-32 -top-32">
                  <img src={logo1} className="w-60" />
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-lg overflow-hidden ">
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
                        class="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <span class="text-gray-800 font-semibold">John Doe</span>
                    </div>
                    <span class="text-gray-600">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute -rotate-12 -top-10  left-0 lg:min-w-96 z-10  bg-gray-100 rounded-xl p-2 ">
              <div className=" h-max relative">
                <div className="absolute top-72 -left-28">
                  <img src={logo2} className="w-60" />
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-lg overflow-hidden ">
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
                      <span class="text-gray-800 font-semibold">John Doe</span>
                    </div>
                    <span class="text-gray-600">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="text-center p-10">
          <h1 class="font-bold text-4xl mb-4">Responsive Product card grid</h1>
          <h1 class="text-3xl">Tailwind CSS</h1>
        </div>
        {/* user section start */}
        <section
          id="Projects"
          class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 md:mx-24 mt-10 mb-5"
        >
          <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                class="h-80 w-72 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <div class="flex items-start">
                  <div className="flex items-center">
                    <img src="/icons/location.svg" alt=""/>
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                      parish
                    </p>
                  </div>

                  <div class="ml-auto pt-2 text-[20px] text-primary>
                    24
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                class="h-80 w-72 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <div class="flex items-start">
                  <div>
                    <p class="text-lg font-bold text-black truncate block capitalize">
                      Product Name
                    </p>
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                      parish
                    </p>
                  </div>

                  <div class="ml-auto pt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                class="h-80 w-72 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <div class="flex items-start">
                  <div>
                    <p class="text-lg font-bold text-black truncate block capitalize">
                      Product Name
                    </p>
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                      parish
                    </p>
                  </div>

                  <div class="ml-auto pt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                class="h-80 w-72 object-cover rounded-t-xl"
              />
              <div class="px-4 py-3 w-72">
                <div class="flex items-start">
                  <div>
                    <p class="text-lg font-bold text-black truncate block capitalize">
                      Product Name
                    </p>
                    <p class="text-lg font-semibold text-black cursor-auto my-3">
                      parish
                    </p>
                  </div>

                  <div class="ml-auto pt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-bag-plus"
                      viewBox="0 0 16 1...