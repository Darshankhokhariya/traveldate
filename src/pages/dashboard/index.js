import Sidebar from "@/component/sidebar/Sidebar";
import React from "react";

function dashboard() {
  return (
    <>
      <Sidebar>
        <div className=" py-4 flex justify-center ">
          <div className="relative h-full">
            <img src="/images1/dashboardimg1.png" alt="" />
            <div className="absolute right-0 top-[50%] -translate-y-1/2 w-[40%]">
              <h1 className="text-4xl font-medium text-white py-4">
                Why travel with us?
              </h1>
              <p className="text-white">
                Are you looking for someone to share your next trip with? With
                over 2 million members and countless matches, Traveldate might
                be just the right place to start.
              </p>
              <p className="text-white">
                Traveldate might be just the right place to start.
              </p>
            </div>
          </div>
        </div>

        <div class="relative mt-1">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="#fff"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div className="flex  justify-center">
            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-transparent  overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default dashboard;
