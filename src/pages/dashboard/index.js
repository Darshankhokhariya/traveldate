import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Searchbar from "@/component/Dashboard/searchbar/Searchbar";
import Recent1 from "@/component/recent/Recent1";
import Recent from "@/component/recent/Recent1";
import Sidebar from "@/component/sidebar/Sidebar";
import React from "react";

function dashboard() {
  return (
    <>
      <Sidebar>
        <div className="px-5 lg:px-10 xl:px-14 pb-20 md:pb-0 hidden md:block">
          <Banner />
          <Searchbar />
          <Filter />
          <Recent1 />
        </div>
        <div className=" md:px-14  pb-20 md:pb-0 block md:hidden">
          <div className="flex justify-center py-5">
            <img className=" h-[30px] md:h-[58px]" src="/images1/Frame1.png" />
          </div>
          <Searchbar />
          <Filter />
          <Recent1 />
        </div>
      </Sidebar>
    </>
  );
}

export default dashboard;
