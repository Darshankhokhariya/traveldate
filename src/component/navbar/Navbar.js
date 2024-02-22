"use client"
import Link from "next/link";
import React from "react";

function Navbar() {
  const menuItems = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Contact",
      href: "",
    },
    {
      name: "Login",
      href: "/login",
    },
    {
      name: "Join",
      href: "/join",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="relative w-full bg-transparent pt-10">
        <div className="mx-auto flex gap-2 w-full sm:max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" />
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-black-800  hover:bg-gradient-to-r from-[#6561FD] to-[#E370BC] hover:text-transparent hover:bg-clip-text hover:inline-block duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div onClick={toggleMenu} className="lg:hidden">
            <img src="/images/menu1.png" alt="Logo" />
          </div>
          {isMenuOpen && (
            <div className="fixed inset-x-0 top-0 z-50 origin-top-right transform transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 h-screen bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 py-6 ">
                  <div className="inline-flex items-center space-x-2 w-full">
                    <div>
                      <img src="/images/logo.png" alt="Logo" />
                    </div>
                    <div className="-mr-2 w-full flex justify-end py-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <img
                          className="w-[20px] h-[20px]"
                          src="/images/close.png"
                          alt="Logo"
                        />
                      </button>
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-between">
                  
                  </div> */}
                  <div className="mt-10">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-semibold text-gray-900  hover:bg-gradient-to-r from-[#6561FD] to-[#E370BC] hover:text-transparent hover:bg-clip-text hover:inline-block duration-200">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
