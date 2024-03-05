import Sidebar from "@/component/sidebar/Sidebar";
import React from "react";
import premium from "../../assets/premium.svg";

function Index() {
  const Advanced = [
    {
      text: "Contact any girl",
    },
    {
      text: "TOP status",
    },
    {
      text: "Highlighted in inbox",
    },
    {
      text: "Verification photos",
    },
    {
      text: "Browse anonymous",
    },
    {
      text: "Priority",
    },
  ];

  return (
    <>
      <Sidebar>
        <div className="px-16">
          <div className="flex justify-center w-full">
            <div className="relative w-full">
              <img
                className="w-full h-[300px] rounded-3xl"
                src="/images1/plans.png"
                alt=""
              />
              <div className="absolute top-1/2 -translate-y-1/2 text-white px-10">
                <h1 className="text-[32px]">Save More</h1>
                <h1 className="text-[32px] font-bold">With Goodplans.</h1>
                <p className="text-lg py-4">
                  Choose a plan and get onboard in <br /> minutes.{" "}
                </p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2867 11.2967L11.3467 2.35667L13.7033 0L26.6667 12.9633L13.7033 25.9267L11.3467 23.57L20.2867 14.63H0V11.2967H20.2867Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="absolute top-[54%]  right-0 -translate-y-1/2 text-white px-10">
                <img src="/images1/models/plan-model.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex  md:flex-row justify-items-center h-full">
            <div className="w-max py-2 h-full flex-1">
              <div className="flex items-center gap-5">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="#000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.334 16.9997C30.334 13.4635 28.9292 10.0721 26.4287 7.57158C23.9283 5.0711 20.5369 3.66634 17.0007 3.66634C13.4644 3.66634 10.073 5.0711 7.57256 7.57158C5.07208 10.0721 3.66732 13.4635 3.66732 16.9997V23.6663H8.66732C9.10935 23.6663 9.53327 23.8419 9.84583 24.1545C10.1584 24.4671 10.334 24.891 10.334 25.333V30.333H23.6673V25.333C23.6673 24.891 23.8429 24.4671 24.1555 24.1545C24.468 23.8419 24.892 23.6663 25.334 23.6663H30.334V16.9997ZM27.0007 26.9997V31.9997C27.0007 32.4417 26.8251 32.8656 26.5125 33.1782C26.1999 33.4907 25.776 33.6663 25.334 33.6663H8.66732C8.22529 33.6663 7.80137 33.4907 7.48881 33.1782C7.17625 32.8656 7.00065 32.4417 7.00065 31.9997V26.9997H2.00065C1.55862 26.9997 1.1347 26.8241 0.82214 26.5115C0.509579 26.199 0.333984 25.775 0.333984 25.333V16.9997C0.333984 7.79468 7.79565 0.333008 17.0007 0.333008C26.2057 0.333008 33.6673 7.79468 33.6673 16.9997V25.333C33.6673 25.775 33.4917 26.199 33.1792 26.5115C32.8666 26.8241 32.4427 26.9997 32.0007 26.9997H27.0007ZM9.50065 20.333C9.17235 20.333 8.84726 20.2683 8.54394 20.1427C8.24063 20.0171 7.96503 19.8329 7.73288 19.6008C7.50074 19.3686 7.31659 19.093 7.19095 18.7897C7.06532 18.4864 7.00065 18.1613 7.00065 17.833C7.00065 17.5047 7.06532 17.1796 7.19095 16.8763C7.31659 16.573 7.50074 16.2974 7.73288 16.0652C7.96503 15.8331 8.24063 15.6489 8.54394 15.5233C8.84726 15.3977 9.17235 15.333 9.50065 15.333C10.1637 15.333 10.7996 15.5964 11.2684 16.0652C11.7373 16.5341 12.0007 17.17 12.0007 17.833C12.0007 18.496 11.7373 19.1319 11.2684 19.6008C10.7996 20.0696 10.1637 20.333 9.50065 20.333ZM24.5007 20.333C24.1723 20.333 23.8473 20.2683 23.5439 20.1427C23.2406 20.0171 22.965 19.8329 22.7329 19.6008C22.5007 19.3686 22.3166 19.093 22.191 18.7897C22.0653 18.4864 22.0007 18.1613 22.0007 17.833C22.0007 17.5047 22.0653 17.1796 22.191 16.8763C22.3166 16.573 22.5007 16.2974 22.7329 16.0652C22.965 15.8331 23.2406 15.6489 23.5439 15.5233C23.8473 15.3977 24.1723 15.333 24.5007 15.333C25.1637 15.333 25.7996 15.5964 26.2684 16.0652C26.7373 16.5341 27.0007 17.17 27.0007 17.833C27.0007 18.496 26.7373 19.1319 26.2684 19.6008C25.7996 20.0696 25.1637 20.333 24.5007 20.333Z"
                    fill="#191825"
                  />
                </svg>
                <h1 className="text-[32px] font-bold">VIP Traveller</h1>
              </div>
              <p className="text-xl text-secondary1  py-5">What You’ll Get</p>
              <div className="">
                <ul className="">
                  <li className="py-2 flex items-center">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.288 12.708L7.7 11.292L9.999 13.587L15.293 8.293L16.707 9.707L10.001 16.413Z"
                          fill="#35353F"
                        />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-900">
                      8 hours usage of our coworking space
                    </span>
                  </li>
                  <li className="py-2 flex items-center">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.288 12.708L7.7 11.292L9.999 13.587L15.293 8.293L16.707 9.707L10.001 16.413Z"
                          fill="#35353F"
                        />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-900">
                      8 hours usage of our coworking space
                    </span>
                  </li>
                </ul>

                <div className="py-6">
                  <hr className="border-dashed border-secondary1 h-[1px] " />
                </div>
                <div>
                  <span class="flex items-end">
                    <span class="text-4xl font-extrabold leading-none">
                      $69
                    </span>
                    <span class="text-sm">/for month</span>
                  </span>
                </div>

                <button
                  type="button"
                  className="rounded-xl border  px-3 py-3 w-full  text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary text-white"
                >
                  Choose
                </button>
              </div>
            </div>
            <div className="w-full h-full flex-1">
              <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-primary text-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
                <div className="flex items-center gap-5">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="#000"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.334 16.9997C30.334 13.4635 28.9292 10.0721 26.4287 7.57158C23.9283 5.0711 20.5369 3.66634 17.0007 3.66634C13.4644 3.66634 10.073 5.0711 7.57256 7.57158C5.07208 10.0721 3.66732 13.4635 3.66732 16.9997V23.6663H8.66732C9.10935 23.6663 9.53327 23.8419 9.84583 24.1545C10.1584 24.4671 10.334 24.891 10.334 25.333V30.333H23.6673V25.333C23.6673 24.891 23.8429 24.4671 24.1555 24.1545C24.468 23.8419 24.892 23.6663 25.334 23.6663H30.334V16.9997ZM27.0007 26.9997V31.9997C27.0007 32.4417 26.8251 32.8656 26.5125 33.1782C26.1999 33.4907 25.776 33.6663 25.334 33.6663H8.66732C8.22529 33.6663 7.80137 33.4907 7.48881 33.1782C7.17625 32.8656 7.00065 32.4417 7.00065 31.9997V26.9997H2.00065C1.55862 26.9997 1.1347 26.8241 0.82214 26.5115C0.509579 26.199 0.333984 25.775 0.333984 25.333V16.9997C0.333984 7.79468 7.79565 0.333008 17.0007 0.333008C26.2057 0.333008 33.6673 7.79468 33.6673 16.9997V25.333C33.6673 25.775 33.4917 26.199 33.1792 26.5115C32.8666 26.8241 32.4427 26.9997 32.0007 26.9997H27.0007ZM9.50065 20.333C9.17235 20.333 8.84726 20.2683 8.54394 20.1427C8.24063 20.0171 7.96503 19.8329 7.73288 19.6008C7.50074 19.3686 7.31659 19.093 7.19095 18.7897C7.06532 18.4864 7.00065 18.1613 7.00065 17.833C7.00065 17.5047 7.06532 17.1796 7.19095 16.8763C7.31659 16.573 7.50074 16.2974 7.73288 16.0652C7.96503 15.8331 8.24063 15.6489 8.54394 15.5233C8.84726 15.3977 9.17235 15.333 9.50065 15.333C10.1637 15.333 10.7996 15.5964 11.2684 16.0652C11.7373 16.5341 12.0007 17.17 12.0007 17.833C12.0007 18.496 11.7373 19.1319 11.2684 19.6008C10.7996 20.0696 10.1637 20.333 9.50065 20.333ZM24.5007 20.333C24.1723 20.333 23.8473 20.2683 23.5439 20.1427C23.2406 20.0171 22.965 19.8329 22.7329 19.6008C22.5007 19.3686 22.3166 19.093 22.191 18.7897C22.0653 18.4864 22.0007 18.1613 22.0007 17.833C22.0007 17.5047 22.0653 17.1796 22.191 16.8763C22.3166 16.573 22.5007 16.2974 22.7329 16.0652C22.965 15.8331 23.2406 15.6489 23.5439 15.5233C23.8473 15.3977 24.1723 15.333 24.5007 15.333C25.1637 15.333 25.7996 15.5964 26.2684 16.0652C26.7373 16.5341 27.0007 17.17 27.0007 17.833C27.0007 18.496 26.7373 19.1319 26.2684 19.6008C25.7996 20.0696 25.1637 20.333 24.5007 20.333Z"
                      fill="#191825"
                    />
                  </svg>
                  <h1 className="text-[32px] font-bold">VIP Traveller</h1>
                </div>
                <p className="text-xl text-white  py-5">What You’ll Get</p>
                <div className="">
                  <ul className="">
                    {Advanced.map((e) => {
                      return (
                        <>
                          <li className="py-2 flex items-center">
                            <div>
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.288 12.708L7.7 11.292L9.999 13.587L15.293 8.293L16.707 9.707L10.001 16.413Z"
                                  fill="#35353F"
                                />
                              </svg>
                            </div>
                            <span className="ml-2 text-sm text-gray-900">
                              {e.text}
                            </span>
                          </li>
                        </>
                      );
                    })}
                  </ul>

                  <div className="py-6">
                    <hr className="border-dashed border-secondary1 h-[1px] " />
                  </div>
                  <div>
                    <span class="flex items-end">
                      <span class="text-4xl font-extrabold leading-none">
                        $69
                      </span>
                      <span class="text-sm">/for month</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    className="rounded-xl border  px-3 py-3 w-full  text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-primary"
                  >
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Index;
