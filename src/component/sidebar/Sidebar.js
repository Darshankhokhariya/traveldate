import React from "react";
import Menu from "../sidebar/Menu";
import { useRouter } from "next/router";
import "./sidebar.css";
import Link from "next/link";
import Mobilenav from "../navbar/Mobilenav";

function Sidebar(props) {
  const router = useRouter();

  return (
    <>
      <div className="hidden lg:flex  w-full h-screen ">
        <div className="bg-white fixed h-screen  z-10 animate__animated animate__fadeInLeft  top-0 text-white shadow  lg:w-[20%]  px-4">
          <div className="space-y-3">
            <div className="flex-1">
              <ul className="pt-2 pb-4 lg:pl-10 xl:pl-20 space-y-1 text-sm">
                <li className="rounded-sm  flex justify-center py-8">
                  <img
                    src="/images1/Frame1.png"
                    alt="logo"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/")}
                  />
                </li>
                {Menu.map((e, index) => {
                  const isActive = router.pathname === e.path;
                  return (
                    <>
                      <li
                        key={index}
                        className={`rounded-sm cursor-pointer py-6 ml-2 flex justify-start group ${
                          isActive
                            ? "text-primary font-semibold"
                            : "text-secondary1 font-medium"
                        }`}
                        onClick={() => {
                          router.push(e.path);
                        }}
                      >
                        <div
                          className={`flex items-center space-x-3  hover:border-l-2  border-primary px-3  ${
                            isActive ? "border-l-2  border-primary" : ""
                          }`}
                        >
                          <div className=" group-hover:text-red-500">
                            {e.icon(isActive)}
                          </div>
                          <span className="text-[14px]  group-hover:text-red-500  group-hover:font-semibold">
                            {e.name}
                          </span>
                        </div>
                      </li>
                    </>
                  );
                })}

                {/* <li
                  className="rounded-sm cursor-pointer  mt-auto flex justify-start group "
                  onClick={() => {
                    router.push(e.path);
                  }}
                >
                  <div className="flex items-center space-x-3 rounded-md">
                    <div className="text-black group-hover:text-red-500">
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 22C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H18C18.5523 2 19 2.44772 19 3V6H17V4H5V20H17V18H19V21C19 21.5523 18.5523 22 18 22H4ZM17 16V13H10V11H17V8L22 12L17 16Z"
                          fill="#8C8C92"
                        />
                      </svg>
                    </div>
                    <span className="text-[12px] text-black group-hover:text-red-500">
                      Logout
                    </span>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-[80%] ml-auto text-black ">
          <div className="flex justify-end">
            <div className="flex justify-end py-10 bg-transparent w-full px-20">
              <img
                src="/images1/models/model1.png"
                className="w-[54px] h-[54px] rounded-xl object-cover"
                alt=""
              />
            </div>
          </div>
          {props.children}
        </div>
      </div>

      {/* mobile */}
      <div className="block lg:hidden  h-screen">
        <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 inline-flex items-center mx-auto justify-between bg-white  w-full h-[60px] z-30">
          <Link
            aria-current="page"
            class="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
            href="/dashboard"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.941406 20.013C0.941406 15.9622 4.22519 12.6784 8.27596 12.6784C12.3267 12.6784 15.6105 15.9622 15.6105 20.013H0.941406ZM8.27596 11.7616C5.2367 11.7616 2.77504 9.29993 2.77504 6.26068C2.77504 3.22142 5.2367 0.759766 8.27596 0.759766C11.3152 0.759766 13.7769 3.22142 13.7769 6.26068C13.7769 9.29993 11.3152 11.7616 8.27596 11.7616ZM15.0263 13.809C17.8551 14.5319 19.9818 17.009 20.1796 20.013H17.4441C17.4441 17.6202 16.5275 15.4416 15.0263 13.809ZM13.1719 11.7221C14.6688 10.3792 15.6105 8.42994 15.6105 6.26068C15.6105 4.96123 15.2726 3.74072 14.6798 2.68222C16.7797 3.10129 18.361 4.95389 18.361 7.1775C18.361 9.71021 16.3096 11.7616 13.7769 11.7616C13.5718 11.7616 13.3698 11.7481 13.1719 11.7221Z"
                fill="#FF0047"
              />
            </svg>

            <span class="sr-only">Home</span>
          </Link>
          <Link
            class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
            href="/favorite"
          >
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0252 2.76448C23.6183 5.35098 23.7073 9.4717 21.2957 12.1593L11.579 21.8466L1.86264 12.1593C-0.548923 9.4717 -0.458779 5.34447 2.13308 2.76448C4.72787 0.181575 8.88054 0.0945588 11.5803 2.50344C14.2723 0.0981293 18.4323 0.177982 21.0252 2.76448ZM3.75376 4.37775C2.04652 6.07717 1.96081 8.799 3.53414 10.5967L11.579 18.6175L19.6242 10.5967C21.1981 8.79832 21.1127 6.08167 19.4029 4.37607C17.6985 2.67599 14.9551 2.59417 13.1541 4.1635L8.33777 8.95825L6.71709 7.34493L9.95413 4.12043L9.86038 4.04173C8.05572 2.59863 5.41736 2.72178 3.75376 4.37775Z"
                fill="#8C8C92"
              />
            </svg>
          </Link>
          <span class="sr-only">Upload</span>
          <button class="relative inline-flex flex-col items-center text-xs font-medium text-white bg-transparent py-3 px-6 flex-grow">
            <div class="absolute bottom-0 p-3 rounded-full border-[20px] border-white bg-primary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.423828 7.22541C0.423828 3.43179 3.49121 0.356445 7.30073 0.356445H16.4674C20.2654 0.356445 23.3443 3.44473 23.3443 7.22541V20.9849H7.30073C3.50272 20.9849 0.423828 17.8966 0.423828 14.1159V7.22541ZM21.0523 18.6928V7.22541C21.0523 4.70605 18.995 2.64849 16.4674 2.64849H7.30073C4.76105 2.64849 2.71588 4.69366 2.71588 7.22541V14.1159C2.71588 16.6352 4.77312 18.6928 7.30073 18.6928H21.0523ZM14.1761 9.52463H16.4682V11.8167H14.1761V9.52463ZM7.29997 9.52463H9.59202V11.8167H7.29997V9.52463Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="sr-only">Chat</span>
          </button>
          <Link
            class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
            href="/visitors"
          >
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2316 2.39252H3.00735V21.4623H20.1213V7.15998H15.2316V2.39252ZM0.5625 1.19088C0.5625 0.538037 1.10952 0.00878906 1.78309 0.00878906H16.454L22.5658 5.96811L22.5662 22.6453C22.5662 23.3084 22.0223 23.8461 21.3518 23.8461H1.77686C1.10619 23.8461 0.5625 23.3034 0.5625 22.664V1.19088ZM11.5643 11.3315C9.87652 11.3315 8.50826 9.99745 8.50826 8.35184C8.50826 6.70622 9.87652 5.37218 11.5643 5.37218C13.2521 5.37218 14.6204 6.70622 14.6204 8.35184C14.6204 9.99745 13.2521 11.3315 11.5643 11.3315ZM6.09698 17.8868C6.40103 15.2051 8.73285 13.1193 11.5643 13.1193C14.3958 13.1193 16.7276 15.2051 17.0316 17.8868H6.09698Z"
                fill="#8C8C92"
              />
            </svg>

            <span class="sr-only">Search</span>
          </Link>
          <Link
            class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
            href="/myprofile"
          >
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.240234 22.9294C0.240234 18.3 4.13973 14.5471 8.95001 14.5471C13.7603 14.5471 17.6598 18.3 17.6598 22.9294H15.4823C15.4823 19.4574 12.5577 16.6427 8.95001 16.6427C5.3423 16.6427 2.41768 19.4574 2.41768 22.9294H0.240234ZM8.95001 13.4993C5.3409 13.4993 2.41768 10.686 2.41768 7.21254C2.41768 3.73911 5.3409 0.925781 8.95001 0.925781C12.5591 0.925781 15.4823 3.73911 15.4823 7.21254C15.4823 10.686 12.5591 13.4993 8.95001 13.4993ZM8.95001 11.4037C11.3561 11.4037 13.3049 9.52816 13.3049 7.21254C13.3049 4.89692 11.3561 3.02137 8.95001 3.02137C6.54394 3.02137 4.59512 4.89692 4.59512 7.21254C4.59512 9.52816 6.54394 11.4037 8.95001 11.4037Z"
                fill="#8C8C92"
              />
            </svg>

            <span class="sr-only">Profile</span>
          </Link>
        </div>
        <Mobilenav />
        <div style={{ height: "calc(100% - 70px)" }} className="">
          {props.children}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
