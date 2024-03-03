import Input from "@/component/inputs/Input";
import Select from "@/component/inputs/Select";
import { gender } from "@/constant/gender";
import React from "react";

function Filter() {
  return (
    <>
      <div className="px-5">
        <div className="md:bg-white md:bg-opacity-[37%] py-4 rounded-2xl">
          <div class="relative mt-1 w-full  bg-secondary1 bg-opacity-[7%]">
            <div className="flex w-full justify-center ">
              <div class="relative flex items-center w-full md:w-max h-12 rounded-lg focus-within:shadow-lg bg-transparent  overflow-hidden border-2 ">
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
                  class="peer h-full w-full outline-none text-sm  text-gray-700 pr-2 bg-secondary1 bg-opacity-[7%]"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col md:flex-row items-center-start md:justify-between md:items-center">
          <h1 className="text-2xl font-medium">What are you looking for?</h1>

          <div className="flex items-center  gap-5 py-8 md:py-10">
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
                class="text-sm font-medium text-secondary1 ml-2 block"
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
                class="text-sm font-medium text-secondary1 ml-2 block"
              >
                Male
              </label>
            </div>
          </div>

          <div className="hidden md:block">
            <Input placeholder="Name" />
          </div>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-4  gap-4 lg:gap-y-6 md:gap-x-14">
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
