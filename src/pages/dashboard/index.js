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
    const totalPages = useSelector((state) => state?.Auth?.recentUserDetails?.count)
    console.log('recentUser', recentUser, totalPages)
    const languageData = useSelector((state) => state?.Auth?.languageList);
    const countries = useSelector((state) => state?.Auth?.countryList);
    const loading = useSelector((state) => state?.Auth?.loading)
    const [isLoading, setIsLoading] = useState(false);

    const [moreLessFilter, SetMoreLessFilter] = useState(false)
    const [token, setToken] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [page, setPage] = useState(1);
    console.log('page', page)
    const pageRef = useRef(1); //
    const listInnerRef = useRef(null);
    const [userList, setUserList] = useState([]);

    console.log('userList', userList, recentUser)
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


    const handleSearch = async (searchValue, values) => {
      setIsLoading(true);
      try {
        const response = await get(`/user/getRecentUser?name=${searchValue || ""}&gender=${values?.gender || ""}&ageFrom=${values?.ageFrom || ""}&ageTo=${values?.ageTo || ""}&bodyType=${values?.bodyType || ""}&country=${values?.country || ""}&city=${values?.city || ""}&language=${values?.language || ""}&page=${page}&limit=6&sort=-1`, "GET_RECENT_USER", dispatch, {
          headers: {
            Authorization: `Bearer ${token}`,
            ContentType: 'application/json'
          }
        })
        setUserList((prevList) => [...prevList, ...response.data]);
        setPage((prevPage) => prevPage + 1);

      } catch (err) {
        console.log('err', err)
      }
      finally {
        setIsLoading(false);
      }
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

    console.log('window.innerHeight',listInnerRef.current)
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
        return;
      }
      handleSearch();
    };


    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    


    return (
      <>
        <Sidebar>
          {
            isPageLoading ?
              <Loader />
              :
              <>

                <div className="px-5 lg:px-10 xl:px-14 md:pb-0 hidden md:block" style={{height: 600}} ref={listInnerRef} onScroll={handleScroll} >
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

                  <Recent1 handleSearch={handleSearch} recentUser={userList} isPageLoading={isPageLoading} totalPages={totalPages} />

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
                      <Recent1 handleSearch={handleSearch} recentUser={userList} totalPages={totalPages} />
                  }
                </div>
              </>
          }
        </Sidebar>
      </>
    );
  }

  export default Dashboard;
