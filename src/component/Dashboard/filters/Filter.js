import Input from "@/component/inputs/Input";
import Select from "@/component/inputs/Select";
import SelectTwo from "@/component/inputs/SelectTwo";
import { gender } from "@/constant/gender";
import React from "react";

function Filter() {
  return (
    <>
      <div className="px-5">
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
          <SelectTwo data={gender} />
          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />

          <SelectTwo data={gender} />
        </div>
      </div>
    </>
  );
}

export default Filter;
