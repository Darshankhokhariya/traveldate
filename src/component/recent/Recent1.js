import cards from "@/constant/Model";
import Link from "next/link";
import React from "react";

function Recent1() {
  return (
    <>
      <div className="container mx-auto px-3 ">
        <section
          id="Projects"
          class="bg-whites  grid   xl:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center justify-center gap-y-10  gap-4  mt-5 md:mt-10 mb-5 "
        >
          {cards.map((e) => {
            return (
              <>
                <div class="shadow-md rounded-xl duration-500 bg-white">
                  <Link href="#">
                    <img
                      src={e?.image}
                      alt="Product"
                      class="md:h-[250px] w-auto  object-cover rounded-t-2xl"
                    />
                    <div class="px-1 sm:px-4 md:px-4 py-3 w-auto ">
                      <div class="flex items-start w-full">
                        <div className="w-full">
                          <div className="flex items-center justify-between w-full ">
                            <p class="text-base md:text-lg font-bold truncate flex items-center gap-1 capitalize">
                              Aasta Smith
                              <svg
                                width="7"
                                height="7"
                                viewBox="0 0 7 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  cx="3.93652"
                                  cy="3.13477"
                                  r="3"
                                  fill="#78F293"
                                />
                              </svg>
                            </p>
                            <div class="ml-auto  text-lg md:text-xl text-primary font-bold">
                              24
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-secondary">
                            <img src="/icons/location.svg" alt="" />
                            <p class="text-sm  cursor-auto my-3">
                              Rome, Italy 🇮🇹
                            </p>
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
  );
}

export default Recent1;
