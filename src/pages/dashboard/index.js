import Banner from "@/component/Dashboard/Banner/Banner";
import Filter from "@/component/Dashboard/filters/Filter";
import SelectTwo from "@/component/inputs/SelectTwo";
import Recent from "@/component/recent/Recent";
import Sidebar from "@/component/sidebar/Sidebar";
import { gender } from "@/constant/gender";
import React from "react";

function dashboard() {
  return (
    <>
      <Sidebar>
        <div className="px-14">
          <Banner />
          <Filter />
          <Recent />
          <SelectTwo data={gender} label="Gender" />
        </div>
      </Sidebar>
    </>
  );
}

export default dashboard;
