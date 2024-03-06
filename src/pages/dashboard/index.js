import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Recent from "@/component/recent/Recent";
import Sidebar from "@/component/sidebar/Sidebar";
import React from "react";

function dashboard() {
  return (
    <>
      <Sidebar>
        <div className="px-5 md:px-14 pb-20 md:pb-0 hidden md:block">
          <Banner />
          <Filter />
          <Recent />
        </div>
        <div className=" md:px-14  pb-20 md:pb-0 block md:hidden">
          <div className="flex justify-center py-5">
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
