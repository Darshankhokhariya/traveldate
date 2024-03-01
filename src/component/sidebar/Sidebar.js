import React, { useState } from "react";
import {
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsList,
  BsYelp,
} from "react-icons/bs";
import Menu from "../sidebar/Menu";
import { useRouter } from "next/router";

function Sidebar(props) {
  const navigate = useRouter();

  const [isopen, setisopen] = useState(true);
  const [drop1, setDrop1] = useState(false);

  const toggle = () => {
    setisopen(!isopen);
    setDrop1(false);
  };
  const handleClick = () => {
    setDrop1(!drop1);
  };

  return (
    <>
      <div className="flex  w-full h-screen">
        <div className="bg-white fixed h-screen  z-10 animate__animated animate__fadeInLeft  top-0 text-white shadow w-40 md:w-[15%]  lg:w-[15%]  xl:[w-15%] 2xl:w-[15%]  px-4">
          <div className="space-y-3">
            <div className="flex-1">
              <ul className="pt-2 pb-4 pl-14 space-y-1 text-sm">
                <li className="rounded-sm  flex justify-center py-8">
                  <img src="/images1/logo2.png" alt="" />
                </li>
                {Menu.map((e, index) => {
                  return (
                    <>
                      <li
                        key={index}
                        className="rounded-sm cursor-pointer py-6 ml-2 flex justify-start"
                        onClick={() => {
                          navigate(e.path);
                        }}
                      >
                        <div className="flex items-center space-x-3 rounded-md">
                          <div className="text-black">{e.icon}</div>
                          <span
                            className={
                              isopen ? "text-[12px] text-black" : " hidden"
                            }
                          >
                            {e.name}
                          </span>
                        </div>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute right-0  w-[85%]  text-black ">
          <div className="flex justify-end">
            <div className="flex py-10 bg-red-200 w-full"></div>
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
