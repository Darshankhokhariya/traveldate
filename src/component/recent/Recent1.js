import { useRouter } from "next/router";
import React from "react";

function Recent1(props) {
  const { recentUser } = props
  const router = useRouter()
  return (
    <>
      <div className="container mx-auto px-2 py-2">
        {
          recentUser && recentUser.length > 0 ? (
            <section
              id="Projects"
              className="bg-whites grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center justify-center gap-y-10 gap-4 mt-5 md:mt-10 mb-5"
            >
              {recentUser.map((e) => (
                <div key={e._id} className="shadow-md rounded-xl duration-500 bg-white hover:shadow-xl cursor-pointer">
                  <div onClick={() => router.push(`/userprofile?id=${e._id}`)}>
                    <img
                      src="/images1/models/model2.png"
                      alt="Product"
                      className="md:h-[200px] w-full object-cover rounded-t-2xl"
                    />
                    <div className="px-1 sm:px-4 md:px-4 py-3">
                      <div className="flex items-start w-full">
                        <div className="w-full">
                          <div className="flex items-center justify-between w-full">
                            <p className="text-base md:text-lg font-bold truncate flex items-center gap-1 capitalize">
                              {e?.name || "Aasta Smith"}
                              <svg
                                width="7"
                                height="7"
                                viewBox="0 0 7 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="3.93652" cy="3.13477" r="3" fill="#78F293" />
                              </svg>
                            </p>
                            <div className="ml-auto text-lg md:text-xl text-primary font-bold">
                              {e?.age || "24"}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-secondary">
                            <img src="/icons/location.svg" alt="" />
                            <p className="text-sm cursor-auto my-3">
                              {e?.country || "Rome, Italy 🇮🇹"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <div className="flex h-[400px] justify-center">
              <img className="" src="/images1/noData.png" />
            </div>
          )
        }
      </div>
    </>
  );
}

export default Recent1;
