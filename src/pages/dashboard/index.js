import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Searchbar from "@/component/Dashboard/searchbar/Searchbar";
import Loader from "@/component/Loader/Loader";
import Recent1 from "@/component/recent/Recent1";
import Sidebar from "@/component/sidebar/Sidebar";
import { HEADERS } from "@/constant/authorization";
import { get } from "@/redux/services/apiServices";
import { debounce } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Dashboard({ isPageLoading }) {
  const dispatch = useDispatch()
  const listInnerRef = useRef(null);
  const totalPages = useSelector((state) => state?.Auth?.recentUserDetails?.count)
  const recentUser = useSelector((state) => state?.Auth?.recentUserDetails)
  const languageData = useSelector((state) => state?.Auth?.languageList);
  const countries = useSelector((state) => state?.Auth?.countryList);
  const loading = useSelector((state) => state?.Auth?.loading)

  const [gender, setGender] = useState("");
  const [moreLessFilter, setMoreLessFilter] = useState(false)
  const [token, setToken] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [page, setPage] = useState(1);

  const toggleFilter = () => {
    setMoreLessFilter(!moreLessFilter)
  }

  const [values, setValues] = useState({
    ageFrom: "",
    ageTo: "",
    bodyType: "",
    country: "",
    city: "",
    language: "",
  })

  const handleChangeSearch = (e) => { setSearchValue(e.target.value) }


  const handleSearch = (searchValue, values, gender) => {
    get(`/user/getRecentUser?name=${searchValue || ""}&gender=${gender || ""}&ageFrom=${values?.ageFrom || ""}&ageTo=${values?.ageTo || ""}&bodyType=${values?.bodyType || ""}&country=${values?.country || ""}&city=${values?.city || ""}&language=${values?.language || ""}&page=${page}&limit=8&sort=-1`, "GET_RECENT_USER", dispatch, {
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: 'application/json'
      }
    }).then((response) => {
      setPage((prevPage) => prevPage + 1);
    })
  }


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

  const searchDebounced = debounce((value) => {
    handleSearch(value, values);
  }, 2000);

  const handleClearFilter = () => {
    setSearchValue("")
    setValues({
      ageFrom: "",
      ageTo: "",
      bodyType: "",
      country: "",
      city: "",
      language: "",
    })
    setGender("");
    handleSearch(searchValue, values, "")
  }
  
  useEffect(() => {
    if (token) {
      get("/country/getCountry", "GET_COUNTRY", dispatch, HEADERS);
      get(`/language/getLanguage`, "GET_LANGUAGE", dispatch, HEADERS);
    }
  }, [token])

  useEffect(() => {
    if (token) {
      searchDebounced(searchValue)
      return () => {
        searchDebounced.cancel();
      };
    }
  }, [searchValue, token])




  function handleClick(event) {
    if (event.target.value === gender) {
      setGender("");
      handleSearch(searchValue, values, event.target.value)
    } else {
      setGender(event.target.value);
      handleSearch(searchValue, values, event.target.value)
    }
  }



  return (
    <>
      <Sidebar toggleFilter={toggleFilter}
        moreLessFilter={moreLessFilter}
        page="dashboard"
        onChange={handleChangeSearch}
        searchValue={searchValue}
        handleClearFilter={handleClearFilter}>
        {
          isPageLoading ?
            <Loader />
            :
            <>

              <div className="px-5 lg:px-10 xl:px-14 md:pb-0 hidden md:block"   >
                <div>

                  <Banner />

                  <Searchbar
                    toggleFilter={toggleFilter}
                    moreLessFilter={moreLessFilter}
                    page="dashboard"
                    onChange={handleChangeSearch}
                    searchValue={searchValue}
                    handleClearFilter={handleClearFilter}
                  />
                  {moreLessFilter && <Filter handleClick={handleClick} gender={gender} languageData={languageData} countries={countries} values={values} handleChange={handleChange} />}
                  <Recent1 handleSearch={handleSearch} recentUser={recentUser} isPageLoading={isPageLoading} />
                </div>
              </div>
              <div className="md:px-14 pb-20 md:pb-0 block md:hidden">
                <div>

                  {/* {viewSearch && <Searchbar SetMoreLessFilter={SetMoreLessFilter} moreLessFilter={moreLessFilter} />} */}
                  {moreLessFilter && <Filter handleClick={handleClick} gender={gender} languageData={languageData} countries={countries} values={values} handleChange={handleChange} />}

                  <Recent1 handleSearch={handleSearch} recentUser={recentUser} />
                </div>
              </div>
            </>
        }
      </Sidebar>
    </>
  );
}

export default Dashboard;
