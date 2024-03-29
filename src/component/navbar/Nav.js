import Link from "next/link";
import React, { useState } from "react";
import Primarybutton from "../Buttons/Primarybutton";
import Secondarybutton from "../Buttons/Secondarybutton";
import logo from "../../assets/logo.png";
import darklogo from "../../assets/logo2.png";
import { FaHeart } from "react-icons/fa";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // code for navbar
  return (
    <>
      <div className="w-full bg-transparent ">
        <div className="container  flex items-center justify-between mx-auto py-3 lg:pt-3 px-5 lg:px-20 ">
          <div className="inline-flex items-center space-x-2">
            <img className="h-[50px] w-auto" src={logo.src} />
          </div>
          <div className="hidden lg:block   gap-3">
            <ul className="inline-flex space-x-10 items-center">
              <li className="group h-4">
                <Link
                  href="/"
                  className="text-sm font-semibold text-white group-hover:text-primary flex flex-col items-center duration-300"
                >
                  <span>Home</span>
                  <FaHeart className="group-hover:block hidden duration-100" />
                </Link>
              </li>
              <li className="group h-4">
                <Link
                  href="/"
                  className="text-sm font-semibold text-white group-hover:text-primary flex flex-col items-center duration-300"
                >
                  <span>Contact</span>
                  <FaHeart className="group-hover:block hidden duration-100" />
                </Link>
              </li>
              <div className="hidden lg:flex items-center gap-3">
                <div>
                  <Primarybutton text="Log In" path="/login" />
                </div>
                <div>
                  <Secondarybutton text="Sign Up" path="/signup" />
                </div>
              </div>
            </ul>
          </div>

          <div onClick={toggleMenu} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-6 w-6 cursor-pointer"
            >
              <line stroke="white" x1="4" y1="12" x2="20" y2="12"></line>
              <line stroke="white" x1="4" y1="6" x2="20" y2="6"></line>
              <line stroke="white" x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
          {isMenuOpen && (
            <div className="fixed inset-x-0 top-0 z-50 origin-top-right transform  transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 h-screen">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="w-full flex items-center justify-between space-x-2">
                      <span>
                        <img className="h-[50px]" src={darklogo.src} alt="" />
                      </span>
                      <div className="-mr-2">
                        <button
                          type="button"
                          onClick={toggleMenu}
                          className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.3535 1.35352L1 15"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                            <path
                              d="M1.70703 1.29297L15.707 15.293"
                              stroke="black"
                              stroke-width="2"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className=" ">
                      <ul className="grid gap-y-4">
                        <li>
                          <Link
                            href="/"
                            className="text-sm font-semibold text-black"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="text-sm font-semibold text-black"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/login"
                            className="text-sm font-semibold text-black"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/signup"
                            className="text-sm font-semibold text-black"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Signup
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* <button
                    type="button"
                    className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Button text
                  </button> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
