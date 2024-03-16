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
      text: "Create Lasting Memories",
      text1:
        "Traveldate isn't just about finding a travel buddy; it's about creating memories that last a lifetime.",
    },
    {
      icon: "/images1/cloudy1.png",
      text: "Safety First",
      text1:
        "Your safety is our priority. We employ advanced security measures to ensure a secure and enjoyable experience for all our users.",
    },
    {
      icon: "/images1/destination1.png",
      text: "User-Friendly Interface",
      text1:
        "Our user-friendly interface allows you to effortlessly browse profiles, customize your search preferences, and plan your next adventure with ease.",
    },
    {
      icon: "/images1/cloudy1.png",
      text: "Global Reach",
      text1:
        "Traveldate opens doors to a global community of adventurous souls.",
    },
  ];
  return (
    <>
      <div className="container min-w-full mx-auto px-3 sm:px-16">
        <div className="pt-10  lg:py-10 text-center md:text-start">
          <div className="uppercase  text-primary font-medium">New Member</div>
          <p className="text-[27px]  lg:text-[42px] font-semibold text-black">
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

        <div className="flex flex-col mt-6 lg:mt-0 items-center gap-y-4 md:gap-y-10">
          {/* First row with three cards */}
          <div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-10">
            {cards.slice(0, 3).map((e, index) => (
              <div
                key={index}
                className=" w-full  lg:w-[33%] hover:bg-gradient-to-bl from-[#8D56E6] to-[#F4425A] duration-300 ease-out p-0.5 rounded-3xl"
              >
                {/** Your card content here */}
                <div className="bg-white h-full rounded-3xl p-5 flex flex-col items-center justify-center border border-opacity-10 border-secondary1">
                  <div className="py-4 lg:py-10">
                    <img src={e?.icon} className="" alt="" />
                  </div>
                  <div className="font-semibold text-center text-offertitle py-5">
                    {e?.text}
                  </div>
                  <p className="text-center py-4 text-secondary1">
                    {e?.text1}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second row with two cards */}
          <div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-10">
            {cards.slice(3).map((e, index) => (
              <div
                key={index}
                className=" w-full  lg:w-[33%] hover:bg-gradient-to-bl from-[#8D56E6] to-[#F4425A] duration-300 ease-out p-0.5 rounded-3xl"
              >
                {/** Your card content here */}
                <div className="bg-white h-full rounded-3xl p-5 flex flex-col items-center justify-center border border-opacity-10 border-secondary1">
                  <div className="py-4 lg:py-10">
                    <img src={e?.icon} className="" alt="" />
                  </div>
                  <div className="font-semibold text-center  text-offertitle py-5">
                    {e?.text}
                  </div>
                  <p className="text-center py-4 text-secondary1">
                    {e?.text1}
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
