import Input from "@/component/inputs/Input";
import Select from "@/component/inputs/Select";
import { gender } from "@/constant/gender";
import React from "react";

function Filter() {
  return (
    <>
      <div className="px-5">
        <div className="bg-white bg-opacity-[37%]">
          <div class="relative mt-1  ">
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
              <div class="relative flex items-center w-max h-12 rounded-lg focus-within:shadow-lg bg-transparent  overflow-hidden border-2 ">
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
                  class="peer h-full w-full outline-none text-sm  text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <div>
            <h1 className="text-2xl font-medium">What are you looking for?</h1>

            <div className="flex items-center  gap-5 py-10">
              <div class="flex items-center ">
                <input
                  id="country-option-1"
                  type="radio"
                  name="countries"
                  value="USA"
                  class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  aria-labelledby="country-option-1"
                  aria-describedby="country-option-1"
                  checked=""
                />
                <label
                  for="country-option-1"
                  class="text-sm font-medium text-gray-900 ml-2 block"
                >
                  Girl
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="country-option-2"
                  type="radio"
                  name="countries"
                  value="Germany"
                  class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  aria-labelledby="country-option-2"
                  aria-describedby="country-option-2"
                />
                <label
                  for="country-option-2"
                  class="text-sm font-medium text-gray-900 ml-2 block"
                >
                  Male
                </label>
              </div>
            </div>

            <div className="hidden md:block">
              <Input placeholder="Name" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-4  gap-4 lg:gap-y-6 md:gap-x-20">
          <Select data={gender} />
          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />

          <Select data={gender} />
        </div>
      </div>
    </>
  );
}

export default Filter;
