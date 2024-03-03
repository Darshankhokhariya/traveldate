import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import Recent from "@/component/recent/Recent";
import Sidebar from "@/component/sidebar/Sidebar";
import React from "react";

function dashboard() {
  return (
    <>
      <Sidebar>
        <div className="px-14">
          <Banner />
          <Filter />
          <Recent />
        </div>
      </Sidebar>
    </>
  );
}

export default dashboard;
