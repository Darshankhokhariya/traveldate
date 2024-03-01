import Sidebar from "@/component/sidebar/Sidebar";
import React from "react";

function dashboard() {
  return (
    <>
      <Sidebar>
        <div className=" py-4 flex justify-center ">
          <div className="relative h-full">
            <img src="/images1/dashboardimg1.png" alt="" />
            <div className="absolute right-0 top-[50%] -translate-y-1/2 w-[40%]">
              <h1 className="text-4xl font-medium text-white py-4">
                Why travel with us?
              </h1>
              <p className="text-white">
                Are you looking for someone to share your next trip with? With
                over 2 million members and countless matches, Traveldate might
                be just the right place to start.
              </p>
              <p className="text-white">
                Traveldate might be just the right place to start.
              </p>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default dashboard;
