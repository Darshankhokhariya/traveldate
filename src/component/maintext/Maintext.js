import React from "react";
import Secondarybutton from "../Buttons/Secondarybutton";
import Primarybutton from "../Buttons/Primarybutton";
import heart from "../../assets/Heart.png";
import Iconbutton from "../Buttons/Iconbutton";

function Maintext() {
  return (
    <>
      {/* <div className="text-[28px]">Never Travel Alone With</div> */}

      <div className="text-center lg:text-start">
        <div className="mb-4">
          <div className="text-[31px] text-white font-semibold">
            Never Travel Alone With
          </div>
          <div className="text-6xl font-extrabold text-white">Traveldate</div>
        </div>
        <p className="text-white font-normal mt-6 text-lg text-center lg:text-start ">
          100K+ Travel Partners are looking for company on traveldate.
        </p>
        <div className="mt-4 gap-4 hidden lg:flex items-center">
          <Iconbutton text="Join Traveldate" icon={heart} />
          {/* <Primarybutton text="Watch Demo" /> */}
        </div>
      </div>
    </>
  );
}

export default Maintext;
