import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Searchbar from "@/component/Dashboard/searchbar/Searchbar";
import Loader from "@/component/Loader/Loader";
import Sidebar from "@/component/sidebar/Sidebar";
import { HEADERS } from "@/constant/authorization";
import { get } from "@/redux/services/apiServices";
import { debounce } from "lodash";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Index({ isPageLoading }) {
  const dispatch = useDispatch();
  const visitor = useSelector((state) => state?.Auth?.visitorDetails)
  const userData = useSelector((state) => state?.Auth?.userProfile);

  const [viewSearch, setViewSearch] = useState(false)
  const [moreLessFilter, SetMoreLessFilter] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  const toggleSearch = () => { setViewSearch(!viewSearch) }

  const handleSearch = () => {
    get(`/user/getVisitors?name=${searchValue}&page=1&limit=3&sort=`, "GET_VISITOR_PAGE_USER", dispatch, HEADERS);
  }

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const searchDebounced = debounce((value) => {
    handleSearch(value);
  }, 2000);

  useEffect(() => {
    searchDebounced(searchValue)
    return () => {
      searchDebounced.cancel();
    };
  }, [searchValue])


  useEffect(() => {
    get(`/user/userProfile`, "GET_SINGLE_PROFILE", dispatch, HEADERS);
    // get(`/user/getVisitors?name=${searchValue}&page=1&limit=3&sort=`, "GET_VISITOR_PAGE_USER", dispatch, HEADERS);
    handleSearch();
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
                <div className="hidden md:block">
                  <Searchbar
                    SetMoreLessFilter={SetMoreLessFilter}
                    moreLessFilter={moreLessFilter}
                    page="visitor"
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                    onChange={handleChangeSearch}
                  />
                </div>
                <div className="container mx-auto md:px-3">
                  {visitor && visitor.length > 0
                    ? (
                      visitor.map((e) => {
                        return (
                          <>
                            <section
                              id="Projects"
                              class="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center justify-center gap-x-5 md:gap-y-10  gap-4  mt-5 md:mt-10 mb-5"
                            >
                              <div class="shadow-md rounded-xl duration-500 bg-whites relative hover:scale-105 hover:shadow-xl">
                                <div href="#">
                                  <img
                                    src={e?.image.length > 0 && e?.image?.[0].filename || "/images1/models/model2.png"}
                                    alt="Product"
                                    class="md:h-[250px] w-auto  object-cover rounded-t-2xl"
                                  />
                                  <div class="px-1 sm:px-4 md:px-4 py-3 w-auto ">
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
                                <div className="absolute top-3 left-3">
                                  <div className="bg-[#78F293] bg-opacity-[73%] py-0.5 text-[12px] px-2 text-white rounded-md">
                                    New
                                  </div>
                                </div>
                              </div>
                            </section>
                          </>
                        );
                      })
                    )
                    :
                    (
                      <div className="flex h-[400px] justify-center">
                        <img className="" src="/images1/noData.png" />
                      </div>
                    )
                  }
                </div>
              </div>
            </>
        }
      </Sidebar >
    </>
  );
}

export default Index;
