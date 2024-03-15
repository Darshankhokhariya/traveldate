import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Searchbar from "@/component/Dashboard/searchbar/Searchbar";
import Loader from "@/component/Loader/Loader";
import Recent1 from "@/component/recent/Recent1";
import Sidebar from "@/component/sidebar/Sidebar";
import { HEADERS } from "@/constant/authorization";
import { get } from "@/redux/services/apiServices";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Dashboard({ isPageLoading }) {
  const dispatch = useDispatch()
  const recentUser = useSelector((state) => state?.Auth?.recentUserDetails)
  const languageData = useSelector((state) => state?.Auth?.languageList);
  const countries = useSelector((state) => state?.Auth?.countryList);

  let language = [{ code: 'Select language', name: 'Select language' }, ...languageData]
  let country = [{ name: 'Select country', is02: 'Select country' }, ...countries]

  const [moreLessFilter, SetMoreLessFilter] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    get("/country/getCountry", "GET_COUNTRY", dispatch, HEADERS);
    get(`/language/getLanguage`, "GET_LANGUAGE", dispatch, HEADERS);
    get(`/user/getRecentUser?name=${searchValue}&page=1&limit=3&sort=`, "GET_RECENT_USER", dispatch, HEADERS);
  }, [])

  return (
    <>
      <Sidebar>
        {
          isPageLoading ?
            <Loader />
            :
            <>
              <div className="px-5 lg:px-10 xl:px-14 pb-20 md:pb-0 hidden md:block">
                <Banner />

                <Searchbar
                  SetMoreLessFilter={SetMoreLessFilter}
                  moreLessFilter={moreLessFilter}
                  page="dashboard"
                  setSearchValue={setSearchValue}
                  searchValue={searchValue}
                />

                {moreLessFilter && <Filter languageData={language} country={country} />}
                <Recent1 recentUser={recentUser} isPageLoading={isPageLoading} />
              </div>
              <div className="md:px-14  pb-20 md:pb-0 block md:hidden">
                <div className="flex justify-center py-5">
                  <img className=" h-[30px] md:h-[58px]" src="/images1/Frame1.png" />
                </div>
                <Searchbar SetMoreLessFilter={SetMoreLessFilter} moreLessFilter={moreLessFilter} />
                {moreLessFilter && <Filter languageData={languageData} country={country} />}

                <Recent1 recentUser={recentUser} />
              </div>
            </>
        }
      </Sidebar>
    </>
  );
}

export default Dashboard;
