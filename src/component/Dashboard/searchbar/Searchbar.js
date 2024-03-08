import SelectTwo from "@/component/inputs/SelectTwo";
import { gender } from "@/constant/gender";
import React from "react";

function Searchbar() {
  return (
    <>
      {" "}
      <div className=" py-4 rounded-2xl">
        <div class="relative mt-1 w-full  md:bg-secondary1 md:bg-opacity-[7%] flex items-center justify-between px-4 py-2 rounded-xl">
          <div className="flex items-center w-full md:w-auto gap-3">
            <div className="flex w-full justify-center ">
              <div class="relative flex items-center w-full md:w-max  rounded-lg  bg-transparent  overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-300 bg-secondary1  bg-opacity-[7%]  py-2">
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
            <div className="hidden md:block">
              <button className="flex items-center py-2 rounded-xl px-4 gap-2 text-secondary bg-secondary1 bg-opacity-[7%]">
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.91667 2.08366C1.91667 1.60041 2.30842 1.20866 2.79167 1.20866C3.27492 1.20866 3.66667 1.60041 3.66667 2.08366C3.66667 2.56691 3.27492 2.95866 2.79167 2.95866C2.30842 2.95866 1.91667 2.56691 1.91667 2.08366ZM2.79167 0.0419922C1.66408 0.0419922 0.75 0.956076 0.75 2.08366C0.75 3.21124 1.66408 4.12533 2.79167 4.12533C3.91925 4.12533 4.83333 3.21124 4.83333 2.08366C4.83333 0.956076 3.91925 0.0419922 2.79167 0.0419922ZM6 2.66699H10.6667V1.50033H6V2.66699ZM8.33333 7.91699C8.33333 7.43376 8.7251 7.04199 9.20833 7.04199C9.69157 7.04199 10.0833 7.43376 10.0833 7.91699C10.0833 8.40023 9.69157 8.79199 9.20833 8.79199C8.7251 8.79199 8.33333 8.40023 8.33333 7.91699ZM9.20833 5.87533C8.08075 5.87533 7.16667 6.78941 7.16667 7.91699C7.16667 9.04458 8.08075 9.95866 9.20833 9.95866C10.3359 9.95866 11.25 9.04458 11.25 7.91699C11.25 6.78941 10.3359 5.87533 9.20833 5.87533ZM1.33333 7.33366V8.50033H6V7.33366H1.33333Z"
                    fill="#191825"
                  />
                </svg>
                More
              </button>
            </div>
          </div>
          <div>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-[12px]">Sort by</span>
              <SelectTwo data={gender} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
