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

  const recentUser = useSelector((state) => state?.Auth?.recentUserDetails);
  const totalCount = useSelector((state) => state?.Auth?.recentUserDetails?.count)
  const languageData = useSelector((state) => state?.Auth?.languageList);
  const countries = useSelector((state) => state?.Auth?.countryList);
  const loading = useSelector((state) => state?.Auth?.loading)
  const [isLoading, setIsLoading] = useState(false);

  const [moreLessFilter, SetMoreLessFilter] = useState(false)
  const [token, setToken] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [page, setPage] = useState(1);
  const listInnerRef = useRef(null);
  const listInnerMobileRef = useRef(null);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    console.log('userList', userList, recentUser)
  }, [userList])


  const [values, setValues] = useState({
    gender: "",
    ageFrom: "",
    ageTo: "",
    bodyType: "",
    country: "",
    city: "",
    language: "",
  })

  const handleChangeSearch = (e) => { setSearchValue(e.target.value) }


  const handleSearch = (searchValue, values) => {
    setIsLoading(true);
    get(`/user/getRecentUser?name=${searchValue || ""}&gender=${values?.gender || ""}&ageFrom=${values?.ageFrom || ""}&ageTo=${values?.ageTo || ""}&bodyType=${values?.bodyType || ""}&country=${values?.country || ""}&city=${values?.city || ""}&language=${values?.language || ""}&page=${page}&limit=8&sort=-1`, "GET_RECENT_USER", dispatch, {
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: 'application/json'
      }
    }).then((response) => {
      setUserList((prevList) => [...prevList, ...response.data]);
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
      gender: false,
      ageFrom: "",
      ageTo: "",
      bodyType: "",
      country: "",
      city: "",
      language: "",
    })
    handleSearch(searchValue, values)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.authToken) {
        setToken(localStorage.authToken);
      }
    }
  }, []);

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



  const handleScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight, } = listInnerRef.current;
      if (clientHeight + scrollTop + 1 >= scrollHeight) {
        if (userList?.length < totalCount - 1)
          handleSearch();
      }
    }
  };

  const handleMobileScroll = () => {
    if (listInnerMobileRef.current) {
      const { scrollTop, scrollHeight, clientHeight, } = listInnerMobileRef.current;
      if (clientHeight + scrollTop + 1 >= scrollHeight) {
        if (userList?.length < totalCount - 1)
          handleSearch();
      }
    }

  }






  return (
    <>
      <Sidebar>
        {
          isPageLoading ?
            <Loader />
            :
            <>

              <div className="px-5 lg:px-10 xl:px-14 md:pb-0 hidden md:block"   >
                <div style={{ height: 600, overflowY: "auto" }} ref={listInnerRef} onScroll={handleScroll}  >

                  <Banner />

                  <Searchbar
                    SetMoreLessFilter={SetMoreLessFilter}
                    moreLessFilter={moreLessFilter}
                    page="dashboard"
                    onChange={handleChangeSearch}
                    searchValue={searchValue}
                    handleClearFilter={handleClearFilter}
                  />
                  {moreLessFilter && <Filter languageData={languageData} countries={countries} values={values} handleChange={handleChange} />}

                  <Recent1 handleSearch={handleSearch} recentUser={userList} isPageLoading={isPageLoading} />
                </div>

              </div>

              <div className="md:px-14 pb-20 md:pb-0 block md:hidden">
                <div style={{ height: 600, overflowY: "auto" }} ref={listInnerMobileRef} onScroll={handleMobileScroll} >

                  {/* {viewSearch && <Searchbar SetMoreLessFilter={SetMoreLessFilter} moreLessFilter={moreLessFilter} />} */}
                  {moreLessFilter && <Filter languageData={languageData} countries={countries} values={values} handleChange={handleChange} />}

                  <Recent1 handleSearch={handleSearch} recentUser={userList} />
                </div>
              </div>
            </>
        }
      </Sidebar>
    </>
  );
}

export default Dashboard;
