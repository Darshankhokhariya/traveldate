import Searchbar from "@/component/Dashboard/searchbar/Searchbar";
import Loader from "@/component/Loader/Loader";
import Sidebar from "@/component/sidebar/Sidebar";
import { HEADERS } from "@/constant/authorization";
import { get } from "@/redux/services/apiServices";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Index({ isPageLoading }) {
  const router = useRouter();

  const dispatch = useDispatch();
  const visitor = useSelector((state) => state?.Auth?.visitorDetails);

  const [moreLessFilter, SetMoreLessFilter] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    get(
      `/user/getVisitors?name=${searchValue}&page=1&limit=3&sort=`,
      "GET_VISITOR_PAGE_USER",
      dispatch,
      HEADERS
    );
  };

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearFilter = () => {
    setSearchValue("")
  }

  const searchDebounced = debounce((value) => {
    handleSearch(value);
  }, 2000);

  useEffect(() => {
    searchDebounced(searchValue);
    return () => {
      searchDebounced.cancel();
    };
  }, [searchValue]);

  useEffect(() => {
    get(`/user/userProfile`, "GET_SINGLE_PROFILE", dispatch, HEADERS);
    handleSearch();
  }, []);

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
                  <Searchbar
                    SetMoreLessFilter={SetMoreLessFilter}
                    moreLessFilter={moreLessFilter}
                    page="visitor"
                    setSearchValue={setSearchValue}
                    searchValue={searchValue}
                    onChange={handleChangeSearch}
                    handleClearFilter={handleClearFilter}
                  />
                </div>
                <div className=" mx-auto md:px-3">
                  <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
                    {visitor && visitor.length > 0 ? (
                      visitor.map((e, index) => (
                        <>
                          <section
                            key={index}
                            id="Projects"
                            className=" shadow-md rounded-xl duration-500 bg-white relative hover:scale-105 hover:shadow-xl mx-2 my-2"
                          >
                            <div href="#" className="">
                              <img
                                src={
                                  e?.image.length > 0 && e?.image?.[0].filename
                                    ? e?.image?.[0].filename
                                    : "/images1/models/model2.png"
                                }
                                alt="Product"
                                className=" aspect-square w-[250px] md:h-[250px]  object-cover rounded-t-2xl"
                              />
                              <div className="px-1 sm:px-4 md:px-4 py-3 w-auto">
                                <div className="flex items-start w-full">
                                  <div className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                      <p className="text-base md:text-lg font-bold truncate flex items-center gap-1 capitalize">
                                        {e?.name || "Aasta Smith"}
                                        <svg
                                          width="7"
                                          height="7"
                                          viewBox="0 0 7 7"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle cx="3.93652" cy="3.13477" r="3" fill="#78F293" />
                                        </svg>
                                      </p>
                                      <div className="ml-auto text-lg md:text-xl text-primary font-bold">
                                        {e?.age || "24"}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-secondary">
                                      <img src="/icons/location.svg" alt="" />
                                      <p className="text-sm cursor-auto my-3">
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
                          </section>
                          <section
                            key={index}
                            id="Projects"
                            className=" shadow-md rounded-xl duration-500 bg-white relative hover:scale-105 hover:shadow-xl mx-2 my-2"
                          >
                            <div href="#" className="">
                              <img
                                src={
                                  e?.image.length > 0 && e?.image?.[0].filename
                                    ? e?.image?.[0].filename
                                    : "/images1/models/model2.png"
                                }
                                alt="Product"
                                className=" aspect-square w-[250px] md:h-[250px]  object-cover rounded-t-2xl"
                              />
                              <div className="px-1 sm:px-4 md:px-4 py-3 w-auto">
                                <div className="flex items-start w-full">
                                  <div className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                      <p className="text-base md:text-lg font-bold truncate flex items-center gap-1 capitalize">
                                        {e?.name || "Aasta Smith"}
                                        <svg
                                          width="7"
                                          height="7"
                                          viewBox="0 0 7 7"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle cx="3.93652" cy="3.13477" r="3" fill="#78F293" />
                                        </svg>
                                      </p>
                                      <div className="ml-auto text-lg md:text-xl text-primary font-bold">
                                        {e?.age || "24"}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-secondary">
                                      <img src="/icons/location.svg" alt="" />
                                      <p className="text-sm cursor-auto my-3">
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
                          </section>
                          <section
                            key={index}
                            id="Projects"
                            className=" shadow-md rounded-xl duration-500 bg-white relative hover:scale-105 hover:shadow-xl mx-2 my-2"
                          >
                            <div href="#" className="">
                              <img
                                src={
                                  e?.image.length > 0 && e?.image?.[0].filename
                                    ? e?.image?.[0].filename
                                    : "/images1/models/model2.png"
                                }
                                alt="Product"
                                className=" aspect-square w-[250px] md:h-[250px]  object-cover rounded-t-2xl"
                              />
                              <div className="px-1 sm:px-4 md:px-4 py-3 w-auto">
                                <div className="flex items-start w-full">
                                  <div className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                      <p className="text-base md:text-lg font-bold truncate flex items-center gap-1 capitalize">
                                        {e?.name || "Aasta Smith"}
                                        <svg
                                          width="7"
                                          height="7"
                                          viewBox="0 0 7 7"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle cx="3.93652" cy="3.13477" r="3" fill="#78F293" />
                                        </svg>
                                      </p>
                                      <div className="ml-auto text-lg md:text-xl text-primary font-bold">
                                        {e?.age || "24"}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-secondary">
                                      <img src="/icons/location.svg" alt="" />
                                      <p className="text-sm cursor-auto my-3">
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
                          </section>
                          <section
                            key={index}
                            id="Projects"
                            className=" shadow-md rounded-xl duration-500 bg-white relative hover:scale-105 hover:shadow-xl mx-2 my-2"
                          >
                            <div href="#" className="">
                              <img
                                src={
                                  e?.image.length > 0 && e?.image?.[0].filename
                                    ? e?.image?.[0].filename
                                    : "/images1/models/model2.png"
                                }
                                alt="Product"
                                className=" aspect-square w-[250px] md:h-[250px]  object-cover rounded-t-2xl"
                              />
                              <div className="px-1 sm:px-4 md:px-4 py-3 w-auto">
                                <div className="flex items-start w-full">
                                  <div className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                      <p className="text-base md:text-lg font-bold truncate flex items-center gap-1 capitalize">
                                        {e?.name || "Aasta Smith"}
                                        <svg
                                          width="7"
                                          height="7"
                                          viewBox="0 0 7 7"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle cx="3.93652" cy="3.13477" r="3" fill="#78F293" />
                                        </svg>
                                      </p>
                                      <div className="ml-auto text-lg md:text-xl text-primary font-bold">
                                        {e?.age || "24"}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-secondary">
                                      <img src="/icons/location.svg" alt="" />
                                      <p className="text-sm cursor-auto my-3">
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
                          </section>
                          <section
                            key={index}
                            id="Projects"
                            className=" shadow-md rounded-xl duration-500 bg-white relative hover:scale-105 hover:shadow-xl mx-2 my-2"
                          >
                            <div href="#" className="">
                              <img
                                src={
                                  e?.image.length > 0 && e?.image?.[0].filename
                                    ? e?.image?.[0].filename
                                    : "/images1/models/model2.png"
                                }
                                alt="Product"
                                className=" aspect-square w-[250px] md:h-[250px]  object-cover rounded-t-2xl"
                              />
                              <div className="px-1 sm:px-4 md:px-4 py-3 w-auto">
                                <div className="flex items-start w-full">
                                  <div className="w-full">
                                    <div className="flex items-center justify-between w-full">
                                      <p className="text-base md:text-lg font-bold truncate flex items-center gap-1 capitalize">
                                        {e?.name || "Aasta Smith"}
                                        <svg
                                          width="7"
                                          height="7"
                                          viewBox="0 0 7 7"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <circle cx="3.93652" cy="3.13477" r="3" fill="#78F293" />
                                        </svg>
                                      </p>
                                      <div className="ml-auto text-lg md:text-xl text-primary font-bold">
                                        {e?.age || "24"}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-secondary">
                                      <img src="/icons/location.svg" alt="" />
                                      <p className="text-sm cursor-auto my-3">
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
                          </section>
                        </>
                      ))
                    ) : (
                      <div className="w-full flex h-[400px] justify-center">
                        <img className="" src="/images1/noData.png" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
        }
      </Sidebar >
    </>
  );
}

export default Index;
