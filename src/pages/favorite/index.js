import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Searchbar from "@/component/Dashboard/searchbar/Searchbar";
import Loader from "@/component/Loader/Loader";
import Sidebar from "@/component/sidebar/Sidebar";
import { HEADERS } from "@/constant/authorization";
import { get } from "@/redux/services/apiServices";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Index({ isPageLoading }) {
  const router = useRouter();

  const dispatch = useDispatch();
  const favourite = useSelector((state) => state?.Auth)

  const [moreLessFilter, SetMoreLessFilter] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const handleSearch = () => {
    get(`/user/getFavourite?name=${searchValue}&page=1&limit=3&sort=`, "GET_FAVOURITE_PAGE_USER", dispatch, HEADERS);
  }

  useEffect(() => {
    get(`/user/getFavourite?name=${searchValue}&page=1&limit=3&sort=`, "GET_FAVOURITE_PAGE_USER", dispatch, HEADERS);
  }, [])

  return (
    <>
      <Sidebar>
        {
          isPageLoading ?
            <Loader />
            :
            <>
              <div className="px-3 md:md-5 lg:px-10 ">
                <div className="hidden md:block">
                  <Banner />
                </div>
                <Searchbar
                  SetMoreLessFilter={SetMoreLessFilter}
                  moreLessFilter={moreLessFilter}
                  page="favourite"
                  setSearchValue={setSearchValue}
                  searchValue={searchValue}
                  handleSearch={handleSearch}
                />
                {/* {moreLessFilter && <Filter />} */}
                <div className="container mx-auto ">
                  {
                    favourite && favourite?.favouriteUser?.length > 0 ? (
                      favourite && favourite?.favouriteUser?.map((e) => {
                        return (
                          <>
                            <section
                              id="Projects"
                              class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center justify-center gap-y-10  gap-4  mt-5 md:mt-10 mb-5"
                            >
                              <div class="shadow-md rounded-xl duration-500 bg-whites relative hover:scale-105 hover:shadow-xl">
                                <div className="cursor-pointer" onClick={() => router.push(`/userprofile?id=${e._id}`)}>
                                  <img
                                    src={e?.image.length > 0 && e?.image?.[0].filename || "/images1/models/model2.png"}
                                    alt="Product"
                                    class="md:h-[250px] w-auto  object-cover rounded-t-2xl"
                                  />
                                  <div class="px-1 sm:px-4 md:px-4 py-3 w-auto">
                                    <div class="flex items-start w-full">
                                      <div className="w-full">
                                        <div className="flex items-center justify-between w-full ">
                                          <p class="text-base md:text-lg font-bold truncate flex items-center gap-1 capitalize">
                                            {e?.name || "Aasta Smith"}
                                            <svg
                                              width="7"
                                              height="7"
                                              viewBox="0 0 7 7"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <circle
                                                cx="3.93652"
                                                cy="3.13477"
                                                r="3"
                                                fill="#78F293"
                                              />
                                            </svg>
                                          </p>
                                          <div class="ml-auto  text-lg md:text-xl text-primary font-bold">
                                            {e?.age || "24"}
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-secondary">
                                          <img src="/icons/location.svg" alt="" />
                                          <p class="text-sm  cursor-auto my-3">
                                            {e?.country || "Rome, Italy 🇮🇹"}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute top-3 right-3">
                                  <svg
                                    width="27"
                                    height="27"
                                    viewBox="0 0 27 27"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g filter="url(#filter0_b_475_1034)">
                                      <circle
                                        cx="13.5"
                                        cy="13.5"
                                        r="13.5"
                                        fill="white"
                                        fill-opacity="0.16"
                                      />
                                    </g>
                                    <path
                                      d="M19.4957 9.17158C21.0042 10.6831 21.056 13.0913 19.653 14.662L14.0006 20.3233L8.34824 14.662C6.94535 13.0913 6.99779 10.6793 8.50556 9.17158C9.67762 7.99951 11.3961 7.70686 12.841 8.29363L10.2294 10.9056L11.1722 11.8484L14.0006 9.02L13.9921 9.01078C13.9952 9.01352 13.9983 9.01627 14.0013 9.01902C15.5673 7.61334 17.9873 7.66 19.4957 9.17158Z"
                                      fill="#F4425A"
                                    />
                                    <defs>
                                      <filter
                                        id="filter0_b_475_1034"
                                        x="-5"
                                        y="-5"
                                        width="37"
                                        height="37"
                                        filterUnits="userSpaceOnUse"
                                        color-interpolation-filters="sRGB"
                                      >
                                        <feFlood
                                          flood-opacity="0"
                                          result="BackgroundImageFix"
                                        />
                                        <feGaussianBlur
                                          in="BackgroundImageFix"
                                          stdDeviation="2.5"
                                        />
                                        <feComposite
                                          in2="SourceAlpha"
                                          operator="in"
                                          result="effect1_backgroundBlur_475_1034"
                                        />
                                        <feBlend
                                          mode="normal"
                                          in="SourceGraphic"
                                          in2="effect1_backgroundBlur_475_1034"
                                          result="shape"
                                        />
                                      </filter>
                                    </defs>
                                  </svg>
                                </div>
                              </div>
                            </section >
                          </>
                        );
                      })
                    ) : (
                      <div className="flex h-[400px] justify-center">
                        <img className="" src="/images1/noData.png" />
                      </div>
                    )
                  }
                </div>
              </div>
            </>
        }
      </Sidebar>
    </>
  );
}

export default Index;
