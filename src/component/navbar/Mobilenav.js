import React, { useState } from "react";
import left from "../../assets/left.png";
import search from "../../assets/search.png";
import { useRouter } from "next/router";
import Searchbar from "../Dashboard/searchbar/Searchbar";


function Mobilenav(props) {
  const { toggleSearch, toggleFilter, moreLessFilter, page, onChange, searchValue, handleClearFilter } = props
  const router = useRouter();
  const [viewSearch, setViewSearch] = useState(false)


  const toggleSearchBar = () => {
    setViewSearch(!viewSearch)
  }

  return (
    <>

      {
        router?.pathname === "/dashboard" ?
          <div className="flex lg:hidden items-center md:justify-center justify-between gap-58 px-2 w-full py-4">
            <div className="w-10"></div>
            <img src="/images1/Frame1.png" className="h-[40px] w-[171px]" />
            <img src={search.src} alt="" onClick={() => toggleSearchBar()} className="cursor-pointer block md:hidden" />
          </div>
          :
          router?.pathname === "/favorite"|| router?.pathname === "/visitors"  ?
            <div className="flex lg:hidden items-center justify-between px-2 w-full py-4">
              <img src={left.src} onClick={() => router.back()} alt="" className="cursor-pointer" />
              <h1 className="text-[20px] font-semibold">
              {router?.pathname === "/favorite" && "Favorites"}
              {router?.pathname === "/visitors" && "New Member"}
              </h1>
              <div className="w-10 sm:block hidden"></div>
              <img src={search.src} alt="" onClick={() => toggleSearchBar()} className="cursor-pointer block md:hidden" />
              {/* Add your additional div or content here for the /favorite pathname */}
            </div>
            :
            <div className="flex lg:hidden items-center justify-between px-2 w-full py-4">
              <img src={left.src} onClick={() => router.back()} alt="" className="cursor-pointer" />
              <h1 className="text-[20px] font-semibold">
                {router?.pathname === "/myprofile" && "User Profile"}
                {router?.pathname === "/visitors" && "New Member"}
                {router?.pathname === "/favorite" && "Favorites"}
                {router?.pathname === "/userprofile" && "User Profile"}
              </h1>
              {
                router?.pathname === "/userprofile" || router?.pathname === "/myprofile" ?
                  <div className="w-10"></div>
                  :
                  <img src={search.src} alt="" onClick={() => toggleSearchBar()} className="cursor-pointer block md:hidden" />
              }
            </div>
      }
      {
        viewSearch && router?.pathname !== "/myprofile" &&
        <Searchbar props={props} toggleFilter={toggleFilter} moreLessFilter={moreLessFilter} page={page} onChange={onChange} searchValue={searchValue} handleClearFilter={handleClearFilter} />
      }
    </>
  );
}

export default Mobilenav;
