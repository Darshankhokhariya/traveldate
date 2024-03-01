import React, { useState } from "react";
import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsList,
  BsYelp,
} from "react-icons/bs";
import Menu from "../sidebar/Menu";
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
  const navigate = useNavigate();

  const [isopen, setisopen] = useState(false);
  const [drop1, setDrop1] = useState(false);

  const toggle = () => {
    setisopen(!isopen);
    setDrop1(false);
  };
  const handleClick = () => {
    setDrop1(!drop1);
  };

  console.log("Menu", Menu);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full py-3 sticky top-0 z-10">
        <div className="flex px-2">
          <div className="flex  rounded-md" onClick={toggle}>
            <BsList className="w-6 h-6 text-white" />
          </div>

          <div className="flex m-auto">
            <span className=" text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </div>
        </div>
      </nav>
      <div className="flex  w-full h-screen">
        <div
          className={
            isopen
              ? "bg-slate-900 fixed h-screen  z-10 animate__animated animate__fadeInLeft  top-0 text-white shadow w-40 md:w-[15%]  lg:w-[15%]  xl:[w-15%] 2xl:w-[15%] "
              : "bg-slate-900 fixed h-screen  z-10  x top-0 text-white shadow w-0 md:w-[5%]  lg:w-[5%]  xl:[w-5%] 2xl:w-[5%]"
          }
        >
          <div className="space-y-3">
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm h-8 flex justify-center">
                  {isopen ? (
                    <div
                      className="flex items-center ml-auto p-2 space-x-3 rounded-md"
                      onClick={toggle}
                    >
                      <BsChevronLeft className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div
                      className=" items-center p-2 space-x-3 rounded-md hidden md:flex lg:flex xl:flex 2xl:flex"
                      onClick={toggle}
                    >
                      <BsList className="w-5 h-5 text-white" />
                    </div>
                  )}
                </li>
                {Menu.map((e) => {
                  return (
                    <>
                      {e.child ? (
                        <li
                          className={
                            isopen
                              ? "rounded-sm cursor-pointer py-2 ml-2 flex justify-start"
                              : "rounded-sm cursor-pointer py-2 flex "
                          }
                          onClick={() => {
                            navigate(e.path);
                          }}
                        >
                          <div
                            className={
                              isopen
                                ? "flex items-center justify-between w-full  p-2 space-x-3  rounded-md"
                                : "flex items-center justify-center    w-full  p-2 space-x-3  rounded-md"
                            }
                          >
                            <div className="flex items-center">
                              <div className="text-white">{e.icon}</div>
                              <span
                                className={
                                  isopen ? "text-[12px] ml-3" : " hidden"
                                }
                              >
                                {e.name}
                              </span>
                            </div>
                            <div className={isopen ? "block" : "hidden"}>
                              {setDrop1 ? (
                                <BsChevronRight />
                              ) : (
                                <BsChevronDown />
                              )}
                            </div>
                          </div>
                        </li>
                      ) : (
                        <li
                          className={
                            isopen
                              ? "rounded-sm cursor-pointer py-2 ml-2 flex justify-start"
                              : "rounded-sm cursor-pointer py-2 flex justify-center"
                          }
                          onClick={() => {
                            navigate(e.path);
                          }}
                        >
                          <div className="flex items-center p-2 space-x-3 rounded-md">
                            <div className="text-white">{e.icon}</div>
                            <span
                              className={isopen ? "text-[12px]" : " hidden"}
                            >
                              {e.name}
                            </span>
                          </div>
                        </li>
                      )}
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div
          className={
            isopen
              ? " absolute right-0 mt-12  w-[85%] text-black"
              : "w-full md:w-[95%] lg:w-[95%] xl:w-[95%] 2xl:w-[95%]  text-black absolute right-0 "
          }
        >
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
