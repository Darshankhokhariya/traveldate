import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Searchbar from "@/component/Dashboard/searchbar/Searchbar";
import Recent from "@/component/recent/Recent";
import Sidebar from "@/component/sidebar/Sidebar";
import React from "react";

function dashboard() {
  return (
    <>
      <Sidebar>
        <div className=" md:px-14 hidden md:block">
          <Banner />
          <Searchbar />
          <Filter />
          <Recent />
        </div>
        <div className=" md:px-14 block md:hidden">
          <div className="flex justify-center py-10">
            <img className=" h-[30px] md:h-[58px]" src="/images1/Frame1.png" />
          </div>
          <Filter />
          <Recent />
        </div>
      </Sidebar>
    </>
  );
}

export default dashboard;
