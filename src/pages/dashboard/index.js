import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Searchbar from "@/component/Dashboard/searchbar/Searchbar";
import Loader from "@/component/Loader/Loader";
import Recent1 from "@/component/recent/Recent1";
import Sidebar from "@/component/sidebar/Sidebar";
import { HEADERS } from "@/constant/authorization";
import { get } from "@/redux/services/apiServices";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Dashboard({ isPageLoading }) {
  const dispatch = useDispatch()
  const recentUser = useSelector((state) => state?.Auth?.recentUserDetails);
  const languageData = useSelector((state) => state?.Auth?.languageList);
  const countries = useSelector((state) => state?.Auth?.countryList);
  const userData = useSelector((state) => state?.Auth?.userProfile);

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

  let language = [{ code: 'Select language', name: 'Select language' }, ...languageData]
  let country = [{ name: 'Select country', is02: 'Select country' }, ...countries]


  const handleSearch = (gender, ageFrom, ageTo, bodyType, country, city, language) => {
    get(`/user/getRecentUser?name=${searchValue}&gender=${gender}&ageFrom=${ageFrom}&ageTo=${ageTo}&bodyType=${bodyType}&country${country}&city=${city}&page=1&limit=3&sort=`, "GET_RECENT_USER", dispatch, HEADERS);
  }

  useEffect(() => {
    get(`/user/userProfile`, "GET_SINGLE_PROFILE", dispatch, HEADERS);
    get("/country/getCountry", "GET_COUNTRY", dispatch, HEADERS);
    get(`/language/getLanguage`, "GET_LANGUAGE", dispatch, HEADERS);
    handleSearch(values.gender, values.ageFrom, values.ageTo, values.bodyType, values.country, values.city, values.language)
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue(value)
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
    handleSearch(values.gender, values.ageFrom, values.ageTo, values.bodyType, values.country, values.city, values.language)
  };

  return (
    <>
      <Sidebar userData={userData}>
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
                  handleChange={handleChange}
                  searchValue={searchValue}
                />
                {moreLessFilter && <Filter languageData={language} country={country} values={values} handleChange={handleChange} />}
                <Recent1 recentUser={recentUser} isPageLoading={isPageLoading} />
              </div>
              <div className="md:px-14 pb-20 md:pb-0 block md:hidden">
                <div className="flex justify-center py-5">
                  <img className="h-[30px] md:h-[58px]" src="/images1/Frame1.png" />
                </div>
                <Searchbar SetMoreLessFilter={SetMoreLessFilter} moreLessFilter={moreLessFilter} />
                {moreLessFilter && <Filter languageData={languageData} country={country} values={values} handleChange={handleChange} />}
                <Recent1 recentUser={recentUser} />
              </div>
            </>
        }
      </Sidebar>
    </>
  );

}


export default Dashboard;
