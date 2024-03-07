import React from "react";

function Offer() {
  const cards = [
    {
      icon: "/images1/destination1.png",
      text: "Discover Your Perfect Travel Companion",
      text1:
        "Browse through profiles, connect with fellow globetrotters, and plan your next unforgettable trip together",
    },
    {
      icon: "/images1/booking 1.png",
      text: "Discover Your Perfect Travel Companion",
      text1:
        "Browse through profiles, connect with fellow globetrotters, and plan your next unforgettable trip together",
    },
    {
      icon: "/images1/cloudy1.png",
      text: "Discover Your Perfect Travel Companion",
      text1:
        "Browse through profiles, connect with fellow globetrotters, and plan your next unforgettable trip together",
    },
    {
      icon: "/images1/destination1.png",
      text: "Discover Your Perfect Travel Companion",
      text1:
        "Browse through profiles, connect with fellow globetrotters, and plan your next unforgettable trip together",
    },
    {
      icon: "/images1/cloudy1.png",
      text: "Discover Your Perfect Travel Companion",
      text1:
        "Browse through profiles, connect with fellow globetrotters, and plan your next unforgettable trip together",
    },
  ];
  return (
    <>
      <div className="container mx-auto px-3 md:px-16">
        <div className="pt-10  lg:py-10 text-center md:text-start">
          <div className="uppercase  text-primary font-medium">New Member</div>
          <p className="text-[27px]  lg:text-[48px] font-semibold text-black">
            What We Offer You.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-10 gap-y-10 m-auto">
          {cards.map((e) => {
            return (
              <>
                <div className=" bg-white rounded-3xl p-5 flex flex-col items-center justify-center border border-secondary1">
                  <div className="py-4 lg:py-10">
                    <img src={e?.icon} className="" alt="" />
                  </div>
                  <div className="text-[28px] font-semibold text-center py-5">
                    Discover Your Perfect Travel Companion
                  </div>
                  <p className="text-center py-4 text-secondary1">
                    Browse through profiles, connect with fellow globetrotters,
                    and plan your next unforgettable trip together
                  </p>
                </div>
              </>
            );
          })}
        </div> */}

        <div className="flex flex-col items-center">
          {/* First row with three cards */}
          <div className="flex flex-col lg:flex-row justify-center ">
            {cards.slice(0, 3).map((e, index) => (
              <div
                key={index}
                className="m-2 w-full  lg:w-[33%] hover:bg-gradient-to-bl from-[#8D56E6] to-[#F4425A] duration-300 ease-out p-0.5 rounded-3xl"
              >
                {/** Your card content here */}
                <div className="bg-white rounded-3xl p-5 flex flex-col items-center justify-center border border-opacity-10 border-secondary1">
                  <div className="py-4 lg:py-10">
                    <img src={e?.icon} className="" alt="" />
                  </div>
                  <div className="text-[28px] font-semibold text-center py-5">
                    Discover Your Perfect Travel Companion
                  </div>
                  <p className="text-center py-4 text-secondary1">
                    Browse through profiles, connect with fellow globetrotters,
                    and plan your next unforgettable trip together
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row with two cards */}
          <div className="flex flex-col lg:flex-row justify-center">
            {cards.slice(3).map((e, index) => (
              <div
                key={index}
                className="m-2 w-full  lg:w-[33%] hover:bg-gradient-to-bl from-[#8D56E6] to-[#F4425A] duration-300 ease-out p-0.5 rounded-3xl"
              >
                {/** Your card content here */}
                <div className="bg-white rounded-3xl p-5 flex flex-col items-center justify-center border border-opacity-10 border-secondary1">
                  <div className="py-4 lg:py-10">
                    <img src={e?.icon} className="" alt="" />
                  </div>
                  <div className="text-[28px] font-semibold text-center py-5">
                    Discover Your Perfect Travel Companion
                  </div>
                  <p className="text-center py-4 text-secondary1">
                    Browse through profiles, connect with fellow globetrotters,
                    and plan your next unforgettable trip together
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
