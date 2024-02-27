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
      <div className="container px-8 lg:px-24 mx-auto">
        <div className="py-20">
          <div className="uppercase  text-primary font-medium">New Member</div>
          <p className="text-[48px] font-semibold text-black">
            Our Recent Member
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-10 gap-y-10 m-auto">
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
        </div>
      </div>
    </>
  );
}

export default Offer;
