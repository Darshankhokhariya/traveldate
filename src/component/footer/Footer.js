import React from "react";

function Footer() {
  return (
    <>
      <div className="p-2">
        <footer className="p-4 overflow-hidden footer ">
          <div className="container px-5 md:px-10 lg:px-20 py-12 mx-auto  w-full">
            <div className="relative">
              <div class="container md:px-6 py-12 mx-auto">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                  <div class="col-span-2">
                    <img src="/images1/logo.png" alt="" />

                    <p className="py-5 text-white">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random <br />
                      text. It has roots in a piece of classical Latin
                      literature <br />
                      from 45 BC.
                    </p>

                    <div className="py-5 flex gap-2">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 0C7.1808 0 0 7.1808 0 16C0 24.8192 7.1808 32 16 32C24.8192 32 32 24.8256 32 16C32 7.1744 24.8256 0 16 0ZM20.4352 9.4912C20.4352 9.6256 20.3264 9.7344 20.192 9.7344H18.2656C17.792 9.7344 17.408 10.1184 17.408 10.592V12.608H20.1472C20.1536 12.608 20.16 12.608 20.1664 12.608C20.3008 12.6208 20.3968 12.736 20.384 12.8704L20.1408 15.712C20.128 15.84 20.0256 15.936 19.8976 15.936H17.4016V25.3632C17.4016 25.4976 17.2928 25.6064 17.1584 25.6064H13.7152C13.5808 25.6064 13.472 25.4976 13.472 25.3632V16.0768V15.9232H11.7504C11.616 15.9232 11.5072 15.8144 11.5072 15.68V12.8384C11.5072 12.704 11.616 12.5952 11.7504 12.5952H13.472V9.856C13.472 7.9488 15.0208 6.4 16.928 6.4H20.1792C20.3136 6.4 20.4224 6.5088 20.4224 6.6432V9.4912H20.4352Z"
                          fill="#F4425A"
                        />
                      </svg>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                          fill="#F4425A"
                        />
                        <path
                          d="M25.8006 11.4986C25.1149 11.8027 24.3774 12.0083 23.6038 12.1002C24.3936 11.627 24.9997 10.8783 25.2858 9.98471C24.5468 10.4231 23.7279 10.7411 22.8572 10.9125C22.1595 10.1695 21.1655 9.7052 20.0649 9.7052C17.9532 9.7052 16.2404 11.4179 16.2404 13.5297C16.2404 13.8294 16.2744 14.1212 16.34 14.4013C13.1616 14.2418 10.3433 12.7194 8.45693 10.4048C8.12779 10.9696 7.93898 11.627 7.93898 12.3278C7.93898 13.6543 8.61465 14.8254 9.64029 15.511C9.01367 15.4914 8.42356 15.3194 7.90817 15.0322C7.90789 15.0484 7.90789 15.0647 7.90789 15.0807C7.90789 16.9337 9.22672 18.4793 10.9759 18.8304C10.6554 18.9182 10.3168 18.9647 9.96857 18.9647C9.72157 18.9647 9.48228 18.941 9.24897 18.8965C9.73555 20.4156 11.1476 21.5214 12.8216 21.5525C11.5124 22.5784 9.86361 23.1896 8.07132 23.1896C7.76328 23.1896 7.45811 23.1716 7.15948 23.136C8.8511 24.2215 10.8619 24.8544 13.0215 24.8544C20.0561 24.8544 23.903 19.0269 23.903 13.9726C23.903 13.8069 23.8993 13.6417 23.8919 13.478C24.6397 12.939 25.288 12.2656 25.8006 11.4986Z"
                          fill="#F1F2F2"
                        />
                      </svg>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                          fill="#F4425A"
                        />
                        <path
                          d="M20.8 8.19995H11.2C9.53331 8.19995 8.19998 9.53328 8.19998 11.2V20.8C8.19998 22.4666 9.53331 23.8 11.2 23.8H20.8C22.4667 23.8 23.8 22.4666 23.8 20.8V11.1999C23.8 9.53328 22.4667 8.19995 20.8 8.19995ZM21.6667 9.99995H22V12.6666H19.3333V9.99995H21.6667ZM13.8 14.4C14.2667 13.7333 15.1333 13.2666 16 13.2666C16.8667 13.2666 17.7333 13.7333 18.2 14.4C18.5333 14.8666 18.7333 15.4 18.7333 16C18.7333 17.5333 17.4667 18.7333 16 18.7333C14.5333 18.7333 13.2667 17.5333 13.2667 16C13.2667 15.4 13.4667 14.8666 13.8 14.4ZM22.2667 20.8C22.2667 21.6 21.6 22.2666 20.8 22.2666H11.2C10.4 22.2666 9.73332 21.6 9.73332 20.8V14.4H12.0666C11.8666 14.8666 11.7333 15.4666 11.7333 16C11.7333 18.3333 13.6667 20.2666 16 20.2666C18.3333 20.2666 20.2667 18.3333 20.2667 16C20.2667 15.4666 20.1333 14.8666 19.9333 14.4H22.2666L22.2667 20.8Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className=" md:px-20">
                    <p class="font-semibold text-gray-800 dark:text-white">
                      Company
                    </p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                      <p class="text-white    hover:cursor-pointer ">About</p>
                      <p class="text-white    hover:cursor-pointer ">Career</p>
                      <p class="text-white    hover:cursor-pointer ">Mobile</p>
                    </div>
                  </div>

                  <div>
                    <p class="font-semibold text-white">Contact</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                      <p class=" transition-colors hover:underline hover:cursor-pointer text-white">
                        Why Travlog?
                      </p>
                      <p class=" transition-colors hover:underline hover:cursor-pointer text-white">
                        Partner with us
                      </p>
                      <p class=" transition-colors hover:underline hover:cursor-pointer text-white">
                        FAQ’s
                      </p>
                      <p class=" transition-colors hover:underline hover:cursor-pointer text-white">
                        Blog
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
