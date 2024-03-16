import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Searchbar from "@/component/Dashboard/searchbar/Searchbar";
import Loader from "@/component/Loader/Loader";
import Recent1 from "@/component/recent/Recent1";
import Sidebar from "@/component/sidebar/Sidebar";
import { HEADERS } from "@/constant/authorization";
import { get } from "@/redux/services/apiServices";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import search from "../../assets/search.png";

function Dashboard({ isPageLoading }) {
  const dispatch = useDispatch()
  const recentUser = useSelector((state) => state?.Auth?.recentUserDetails);
  const languageData = useSelector((state) => state?.Auth?.languageList);
  const countries = useSelector((state) => state?.Auth?.countryList);
  const userData = useSelector((state) => state?.Auth?.userProfile);
  const loading = useSelector((state) => state?.Auth?.loading)

  const [moreLessFilter, SetMoreLessFilter] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  // const cities = useSelector((state) => state?.Auth?.cityList);
  const [values, setValues] = useState({
    gender: "",
    ageFrom: "",
    ageTo: "",
    bodyType: "",
    country: "",
    city: "",
    language: "",
  })



  const handleSearch = (searchValue, values) => {
    get(`/user/getRecentUser?name=${searchValue}&gender=${values?.gender}&ageFrom=${values?.ageFrom}&ageTo=${values?.ageTo}&bodyType=${values?.bodyType}&country=${values?.country}&city=${values?.city}&language=${values?.language}&page=1&limit=3&sort=`, "GET_RECENT_USER", dispatch, HEADERS);
  }

  useEffect(() => {
    get("/country/getCountry", "GET_COUNTRY", dispatch, HEADERS);
    get(`/language/getLanguage`, "GET_LANGUAGE", dispatch, HEADERS);
  }, [])



  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
    handleSearch(searchValue, {
      ...values,
      [name]: value
    });
  };

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const searchDebounced = debounce((value) => {
    handleSearch(value, values);
  }, 2000);


  useEffect(() => {
    searchDebounced(searchValue)
    return () => {
      searchDebounced.cancel();
    };
  }, [searchValue])




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
                  onChange={handleChangeSearch}
                  searchValue={searchValue}
                />
                {moreLessFilter && <Filter languageData={languageData} countries={countries} values={values} handleChange={handleChange} />}
                {
                  loading ?
                    <div className="-mt-52 ml-[40%]">
                      <div
                        className="flex justify-center text-center mt-72 items-center w-12 h-12 rounded-full animate-spin
border-4 border-solid border-red-500 border-t-transparent"
                      ></div>
                    </div>
                    :
                    <Recent1 recentUser={recentUser} isPageLoading={isPageLoading} />
                }
              </div>
              <div className="md:px-14 pb-20 md:pb-0 block md:hidden">
                {/* {viewSearch && <Searchbar SetMoreLessFilter={SetMoreLessFilter} moreLessFilter={moreLessFilter} />} */}
                {moreLessFilter && <Filter languageData={languageData} countries={countries} values={values} handleChange={handleChange} />}
                {
                  loading ?
                    <div className="-mt-52 ml-[40%]">
                      <div
                        className="flex justify-center text-center mt-72 items-center w-12 h-12 rounded-full animate-spin
border-4 border-solid border-red-500 border-t-transparent"
                      ></div>
                    </div>
                    :
                    <Recent1 recentUser={recentUser} />
                }
              </div>
            </>
        }
      </Sidebar>
    </>
  );

}


export default Dashboard;
