import React, { useEffect, useState } from "react";
import Menu from "../sidebar/Menu";
import { useRouter } from "next/router";
import "./sidebar.css";
import Mobilenav from "../navbar/Mobilenav";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import Join from "../../component/Joinmodal";
import { Tooltip } from "@mui/material";

function Sidebar(props) {
  const { toggleSearch, toggleFilter, moreLessFilter, page, onChange, searchValue, handleClearFilter } = props;
  const [token, setToken] = useState(false);
  const userData = useSelector((state) => state?.Auth?.userProfile);

  const handleLogout = () => {
    localStorage?.removeItem("authToken")
    localStorage?.removeItem("refreshToken")
    router.push("/")
  }

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClose = () => setOpen(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.authToken) {
        setToken(localStorage.authToken);
      }
    }
  }, []);

  return (
    <>
      <div className="hidden lg:flex w-full">
        <div className="bg-white fixed h-screen  z-10 animate__animated animate__fadeInLeft  top-0 text-white shadow  lg:w-[20%]  px-4 ">
          <div className="space-y-3 relative h-full">
            <div className="flex-1 ">
              <ul className="pt-2 pb-4 lg:pl-10 xl:pl-20 space-y-1 text-sm">
                <li className="rounded-sm  flex justify-center py-8">
                  <img
                    src={"/images1/Frame1.png"}
                    alt="logo"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/dashboard")}
                  />
                </li>
                {Menu &&
                  Menu.map((e, index) => {
                    const isActive = router?.pathname === e.path || activeIndex === index;
                    let temp = false;
                    return (
                      <>
                        <li
                          onMouseOver={() => {
                            setActiveIndex(index);
                          }}
                          onMouseOut={() => {
                            setActiveIndex(false);
                          }}
                          key={index}
                          className={`rounded-sm cursor-pointer py-6 ml-2 flex justify-start group ${isActive
                            ? "text-primary font-semibold"
                            : "text-secondary1 font-medium"
                            }`}
                          onClick={() => {
                            if (!token) {
                              setOpen(true)
                            }
                            else {
                              router.push(e.path);
                            }
                          }
                          }
                        >
                          <div
                            className={`flex items-center space-x-3  hover:border-l-2  border-primary px-3  ${isActive ? "border-l-2  border-primary" : ""
                              }`}
                          >
                            <div className=" group-hover:text-red-500">
                              {e.icon(isActive, temp)}
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
            {
              true && (
                <>
                  <div onClick={handleLogout} className="text-black pt-2 lg:pl-10 xl:pl-20 space-y-1 text-sm self-end absolute bottom-0 group">
                    <div className={`rounded-sm cursor-pointer py-6 ml-2 flex justify-start  group text-secondary1 font-medium hover:font-semibold`}>
                      <div
                        className={`flex items-center space-x-3 px-3 group-hover:border-l-2  border-primary group-hover:text-primary`}
                      >
                        <div className=" group-hover:text-red-500">
                          <IoLogOutOutline className="w-7 h-9" />
                        </div>
                        <span className="text-[14px]  group-hover:text-red-500  group-hover:font-semibold">
                          Logout
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </div>
        </div>
        <div className="w-[80%] ml-auto text-black">
          <div className="flex justify-end">
            <div className="flex justify-end py-10 bg-transparent w-full px-20">
              <img
                src={userData?.profileImage || "/images1/defaultPerson.jpg"}
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
        <Mobilenav toggleSearch={toggleSearch} toggleFilter={toggleFilter} moreLessFilter={moreLessFilter} page={page} onChange={onChange} searchValue={searchValue} handleClearFilter={handleClearFilter} />
        <div
          className="overflow-y-scroll"
          style={{ height: "calc(100vh - 150px)" }}
        >
          {props.children}
        </div>
        <div class="fixed bottom-0 left-1/2 transform -translate-x-1/2 inline-flex items-center mx-auto justify-between bg-white  w-full h-[60px] z-30">
          <div
            aria-current="page"
            class="inline-flex flex-col items-center text-xs font-medium py-3 px-4 text-white flex-grow"
            onClick={() => {
              if (!token) {
                setOpen(true)
              }
              else {
                router.push("/dashboard")
              }
            }
            }
          >
            <Tooltip title="Travellers">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 7C5 5.89543 5.89543 5 7 5C8.10457 5 9 5.89543 9 7C9 8.10457 8.10457 9 7 9C5.89543 9 5 8.10457 5 7ZM5 17C5 15.8954 5.89543 15 7 15C8.10457 15 9 15.8954 9 17C9 18.1046 8.10457 19 7 19C5.89543 19 5 18.1046 5 17Z"
                  fill={router?.pathname === "/dashboard" ? "#F4425A" : "#8c8c8c"}
                />
                <path
                  d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM17.3628 15.2332C20.4482 16.0217 22.7679 18.7235 22.9836 22H20C20 19.3902 19.0002 17.0139 17.3628 15.2332ZM15.3401 12.9569C16.9728 11.4922 18 9.36607 18 7C18 5.58266 17.6314 4.25141 16.9849 3.09687C19.2753 3.55397 21 5.57465 21 8C21 10.7625 18.7625 13 16 13C15.7763 13 15.556 12.9853 15.3401 12.9569Z"
                  fill={router?.pathname === "/dashboard" ? "#F4425A" : "#8c8c8c"}
                />
              </svg>
            </Tooltip>
            <span class="sr-only">Home</span>
          </div>
          <div
            class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
            onClick={() => {
              if (!token) {
                setOpen(true)
              }
              else {
                router.push("/favorite");
              }
            }
            }
          >
            <Tooltip title="Favorites">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                {router?.pathname === "/favorite" ? (
                  <path
                    d="M18.2423 1.71125C20.5049 3.91912 20.5826 7.43663 18.4783 9.73081L9.99971 18L1.52135 9.73081C-0.582941 7.43663 -0.504282 3.91356 1.75733 1.71125C3.51538 -0.000717384 6.09303 -0.42817 8.26034 0.428887L4.34307 4.24408L5.75725 5.62118L9.99981 1.48986L9.98701 1.47639C9.99161 1.48039 9.99621 1.48441 10.0008 1.48843C12.3498 -0.564779 15.9797 -0.496615 18.2423 1.71125Z"
                    fill="#F4425A"
                  />
                ) : (
                  <path
                    d="M18.2426 1.75736C20.5053 4.02472 20.583 7.637 18.4786 9.993L9.9999 18.485L1.52138 9.993C-0.582952 7.637 -0.504292 4.01901 1.75736 1.75736C4.02157 -0.506849 7.64519 -0.583129 10.001 1.52853C12.35 -0.579999 15.98 -0.509999 18.2426 1.75736ZM3.17157 3.17157C1.68183 4.66131 1.60704 7.0473 2.97993 8.6232L9.9999 15.6543L17.0201 8.6232C18.3935 7.0467 18.319 4.66525 16.827 3.1701C15.3397 1.67979 12.9458 1.60806 11.3743 2.98376L7.17157 7.1869L5.75736 5.77264L8.582 2.946L8.5002 2.87701C6.92545 1.61197 4.62322 1.71993 3.17157 3.17157Z"
                    fill="#8c8c8c"
                  />
                )}
              </svg>
            </Tooltip>
          </div>
          <span class="sr-only">Upload</span>
          <button class="relative inline-flex flex-col items-center text-xs font-medium text-white bg-transparent py-3 px-6 flex-grow">
            <div class="absolute bottom-0 p-3 rounded-full border-[20px] border-white bg-primary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 21"
                fill="none"
                className="cursor-pointer"
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
          <div
            class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
            onClick={() => {
              if (!token) {
                setOpen(true)
              }
              else {
                router.push("/visitors");
              }
            }
            }
          >
            <Tooltip title="Visitors">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                {router?.pathname === "/visitors" ? (
                  <path
                    d="M13 0L18 5V19.0082C18 19.556 17.5551 20 17.0066 20H0.9934C0.44476 20 0 19.5447 0 19.0082V0.9918C0 0.44405 0.44495 0 0.9934 0H13ZM9 9.5C10.3807 9.5 11.5 8.3807 11.5 7C11.5 5.61929 10.3807 4.5 9 4.5C7.6193 4.5 6.5 5.61929 6.5 7C6.5 8.3807 7.6193 9.5 9 9.5ZM4.52746 15H13.4725C13.2238 12.75 11.3163 11 9 11C6.68372 11 4.77619 12.75 4.52746 15Z"
                    fill="#F4425A"
                  />
                ) : (
                  <path
                    d="M12 2H2V18H16V6H12V2ZM0 0.9918C0 0.44405 0.44749 0 0.9985 0H13L17.9997 5L18 18.9925C18 19.5489 17.5551 20 17.0066 20H0.9934C0.44476 20 0 19.5447 0 19.0082V0.9918ZM9 9.5C7.6193 9.5 6.5 8.3807 6.5 7C6.5 5.61929 7.6193 4.5 9 4.5C10.3807 4.5 11.5 5.61929 11.5 7C11.5 8.3807 10.3807 9.5 9 9.5ZM4.52746 15C4.77619 12.75 6.68372 11 9 11C11.3163 11 13.2238 12.75 13.4725 15H4.52746Z"
                    fill={router?.pathname === "/visitors" ? "#F4425A" : "#8c8c8c"}
                  />
                )}
              </svg>
            </Tooltip>
            <span class="sr-only">Search</span>
          </div>
          <div
            class="inline-flex flex-col items-center text-xs font-medium text-blue-400 py-3 px-4 flex-grow"
            onClick={() => {
              if (!token) {
                setOpen(true)
              }
              else {
                router.push("/myprofile");
              }
            }
            }
          >
            <Tooltip title="My Profile">
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill={router?.pathname === "/myprofile" ? "#F4425A" : "#1B1C31"}
                className="#F4425A cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H14C14 17.6863 11.3137 15 8 15C4.68629 15 2 17.6863 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z"
                  fill={router?.pathname === "/myprofile" ? "#F4425A" : "#8c8c8c"}
                />
              </svg>
            </Tooltip>
            <span class="sr-only">Profile</span>
          </div>
        </div>
      </div>
      <Join isOpen={open} onClose={handleClose} />
    </>
  );
}
export default Sidebar;
