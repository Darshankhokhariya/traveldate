import React from "react";
import left from "../../assets/left.png";
import search from "../../assets/search.png";

function Mobilenav() {
  return (
    <>
      <div className="flex lg:hidden items-center justify-between px-2 w-full py-4">
        <img src={left.src} alt="" />
        <h1 className="text-[20px] font-semibold">User Profile</h1>
        <img src={search.src} alt="" />
      </div>
    </>
  );
}

export default Mobilenav;
