import { HEADERS } from "@/constant/authorization";
import { get } from "@/redux/services/apiServices";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Recent() {
  const dispatch = useDispatch();
  const getRecentUser = useSelector((state) => state?.Auth?.recentLandingPageUser)

  const cards = [
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model1.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model2.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model3.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model4.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model5.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model6.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model7.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model8.png",
      location: "Rome, Italy",
    },
  ];

  useEffect(() => {
    get(`/user/getLandingPageUser`, "GET_LANDING_PAGE_USER", dispatch, HEADERS);
  }, [])

  return (
    <>
      {
        getRecentUser && getRecentUser.length > 0 && (
          <>
            <div className="container mx-auto px-3 md:px-16">
              <div className="pt-10  lg:py-10 text-center md:text-start">
                <div className="uppercase  text-primary font-medium">New Member</div>
                <p className="text-[27px]  lg:text-[48px] font-semibold text-black">
                  Our Recent Member
                </p>
              </div>
              <section
                id="Projects"
                class="  grid   xl:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center justify-center gap-y-10 lg:gap-x-4 lg:gap-y-8 gap-4  mt-5 md:mt-10 mb-5"
              >
                {getRecentUser && getRecentUser.length > 0 && getRecentUser.map((e) => {
                  return (
                    <>
                      <div class=" bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <Link href="#">
                          <img
                            src={e?.image?.[0]?.filename || "/images1/models/model1.png"}
                            alt="Product"
                            class="md:h-[250px] w-auto lg:w-72 object-cover rounded-t-xl"
                          />
                          <div class="px-4 py-3 w-auto lg:w-72">
                            <div class="flex items-start w-full">
                              <div className="w-full">
                                <div className="flex items-center justify-between w-full">
                                  <p class="text-base md:text-lg font-bold truncate block capitalize">
                                    {e?.name || "Astha"}
                                  </p>
                                  <div class="ml-auto  text-lg md:text-xl text-primary font-bold">
                                    {e?.age || 20}
                                  </div>
                                </div>
                                <div className="flex items-center gap-1 text-secondary">
                                  <img src="/icons/location.svg" alt="" />
                                  <p class="text-sm  cursor-auto my-3">{e?.country || "India"}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  );
                })}
              </section>
            </div>
          </>
        )
      }
    </>
  );
}

export default Recent;
