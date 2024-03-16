import React, { useState } from "react";
import left from "../../assets/left.png";
import search from "../../assets/search.png";
import { useRouter } from "next/router";
import Searchbar from "../Dashboard/searchbar/Searchbar";


function Mobilenav(props) {
  const router = useRouter();
  const [viewSearch, setViewSearch] = useState(false)


  const toggleSearchBar = () => {
    setViewSearch(!viewSearch)
  }

  return (
    <>

      {
        router?.pathname === "/dashboard" ?
          <div className="flex lg:hidden items-center justify-between gap-58 px-2 w-full py-4">
            <div className="w-10"></div>
            <h1 className="text-[20px] font-semibold">User Profile</h1>
            <img src={search.src} alt="" onClick={() => toggleSearchBar()} className="cursor-pointer" />
          </div>
          :
          <div className="flex lg:hidden items-center justify-between px-2 w-full py-4">
            <img src={left.src} onClick={() => router.back()} alt=""  className="cursor-pointer" />
            <h1 className="text-[20px] font-semibold">
              {router?.pathname === "/myprofile" && "User Profile"}
              {router?.pathname === "/visitors" && "New Member"}
              {router?.pathname === "/favorite" && "Favorites"}
            </h1>
            <img src={search.src} alt="" onClick={() => toggleSearchBar()} className="cursor-pointer" />
          </div>
      }
      <Searchbar/>

    </>
  );
}

export default Mobilenav;
