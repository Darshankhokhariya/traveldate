import Link from "next/link";
import React from "react";
import Primarybutton from "../Buttons/Primarybutton";
import Secondarybutton from "../Buttons/Secondarybutton";
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // code for navbar
  return (
    <>
      <div className="w-full bg-transparent ">
        <div className="container  flex items-center justify-between mx-auto py-3 lg:pt-3 px-5 lg:px-20 ">
          <div className="inline-flex items-center space-x-2">
            <img src="/images1/logo.png" />
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-20">
              <li>
                <Link href="/" className="text-sm font-semibold text-white">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-white">
                  Discover
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-white">
                  Special Deals
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-semibold text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <Primarybutton text="login" />
            <Secondarybutton text="sign up" path="/signup" />
          </div>

          <div className="lg:hidden">
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
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
