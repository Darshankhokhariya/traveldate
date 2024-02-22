import React from "react";
import Secondarybutton from "../Buttons/Secondarybutton";
import Primarybutton from "../Buttons/Primarybutton";

function Maintext() {
  return (
    <>
      {/* <div className="text-[28px]">Never Travel Alone With</div> */}
      <h1 className="text-[36px] lg:text-6xl font-[600] text-white text-center lg:text-start">
        Find your Perfect <br /> Travel Match with <br /> Traveldate
      </h1>
      <p className="text-white mt-6 text-[24px] text-center lg:text-start ">
        Join over 100K travel partners seeking companionship on TravelDate and
        embark on memorable journeys together!
      </p>
      <div className="mt-10 gap-4 hidden lg:flex items-center">
        <Secondarybutton text="Get Started" />
        <Primarybutton text="Watch Demo" />
      </div>
    </>
  );
}

export default Maintext;
