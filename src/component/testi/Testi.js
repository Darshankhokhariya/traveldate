import React, { useState } from "react";

function Testi() {
  const testimonials = [
    {
      name: "abc",
      description: "asdfsdfdsdgasfgadfgsdfsdgsdfdfsdfsdassdf",
    },
    {
      name: "test23456",
      description: "gadfgsdfsdgsdfdfsdfsdassdf",
    },
    {
      name: "atest",
      description: "test",
    },
    {
      name: "atttest123412",
      description: "asdfsdfdasdqwd55475675654656sdfsdassdf",
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide(
      (prevActiveSlide) => (prevActiveSlide + 1) % testimonials.length
    );
  };

  const handlePrevSlide = () => {
    setActiveSlide(
      (prevActiveSlide) =>
        (prevActiveSlide + testimonials.length - 1) % testimonials.length
    );
  };

  return (
    <>
      <div className="py-20">
        <div className="uppercase  text-primary font-medium text-center">
          TESTIMONIAL
        </div>
        <p className="text-[48px] font-semibold text-black text-center">
          Trust our clients
        </p>

        <div className="relative overflow-hidden testi">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {testimonials.map((e) => {
              return (
                <div className="flex-shrink-0 w-full mt-52">
                  <div className=" w-full flex flex-col justify-center items-center px-10">
                    <div className="">
                      <img
                        src="/images1/ing1.png"
                        className="w-auto h-auto"
                        alt=""
                      />
                    </div>
                    <div className="text-base md:text-[28px] font-semibold mt-5">
                      {" "}
                      <span className="text-primary"> Mark Smith </span> /
                      Travel Enthusiast
                    </div>
                    <div className="py-2">
                      <svg
                        width="224"
                        height="32"
                        viewBox="0 0 224 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.8912 19.092C23.5459 19.4267 23.3872 19.9107 23.4659 20.3853L24.6512 26.9453C24.7512 27.5013 24.5165 28.064 24.0512 28.3853C23.5952 28.7187 22.9885 28.7587 22.4912 28.492L16.5859 25.412C16.3805 25.3027 16.1525 25.244 15.9192 25.2373H15.5579C15.4325 25.256 15.3099 25.296 15.1979 25.3573L9.29118 28.452C8.99918 28.5987 8.66852 28.6507 8.34452 28.5987C7.55518 28.4493 7.02852 27.6973 7.15785 26.904L8.34452 20.344C8.42318 19.8653 8.26452 19.3787 7.91918 19.0387L3.10452 14.372C2.70185 13.9813 2.56185 13.3947 2.74585 12.8654C2.92452 12.3374 3.38052 11.952 3.93118 11.8654L10.5578 10.904C11.0619 10.852 11.5045 10.5454 11.7312 10.092L14.6512 4.10536C14.7205 3.97203 14.8099 3.84936 14.9179 3.74536L15.0379 3.65203C15.1005 3.5827 15.1725 3.52536 15.2525 3.4787L15.3979 3.42536L15.6245 3.33203H16.1859C16.6872 3.38403 17.1285 3.68403 17.3592 4.13203L20.3179 10.092C20.5312 10.528 20.9459 10.8307 21.4245 10.904L28.0512 11.8654C28.6112 11.9454 29.0792 12.332 29.2645 12.8654C29.4392 13.4 29.2885 13.9867 28.8779 14.372L23.8912 19.092Z"
                          fill="#FACD49"
                        />
                        <path
                          d="M71.8912 19.092C71.5459 19.4267 71.3872 19.9107 71.4659 20.3853L72.6512 26.9453C72.7512 27.5013 72.5165 28.064 72.0512 28.3853C71.5952 28.7187 70.9885 28.7587 70.4912 28.492L64.5859 25.412C64.3805 25.3027 64.1525 25.244 63.9192 25.2373H63.5579C63.4325 25.256 63.3099 25.296 63.1979 25.3573L57.2912 28.452C56.9992 28.5987 56.6685 28.6507 56.3445 28.5987C55.5552 28.4493 55.0285 27.6973 55.1579 26.904L56.3445 20.344C56.4232 19.8653 56.2645 19.3787 55.9192 19.0387L51.1045 14.372C50.7018 13.9813 50.5619 13.3947 50.7459 12.8654C50.9245 12.3374 51.3805 11.952 51.9312 11.8654L58.5578 10.904C59.0619 10.852 59.5045 10.5454 59.7312 10.092L62.6512 4.10536C62.7205 3.97203 62.8099 3.84936 62.9179 3.74536L63.0379 3.65203C63.1005 3.5827 63.1725 3.52536 63.2525 3.4787L63.3979 3.42536L63.6245 3.33203H64.1859C64.6872 3.38403 65.1285 3.68403 65.3592 4.13203L68.3179 10.092C68.5312 10.528 68.9459 10.8307 69.4245 10.904L76.0512 11.8654C76.6112 11.9454 77.0792 12.332 77.2645 12.8654C77.4392 13.4 77.2885 13.9867 76.8779 14.372L71.8912 19.092Z"
                          fill="#FACD49"
                        />
                        <path
                          d="M119.891 19.092C119.546 19.4267 119.387 19.9107 119.466 20.3853L120.651 26.9453C120.751 27.5013 120.517 28.064 120.051 28.3853C119.595 28.7187 118.989 28.7587 118.491 28.492L112.586 25.412C112.381 25.3027 112.153 25.244 111.919 25.2373H111.558C111.433 25.256 111.31 25.296 111.198 25.3573L105.291 28.452C104.999 28.5987 104.669 28.6507 104.345 28.5987C103.555 28.4493 103.029 27.6973 103.158 26.904L104.345 20.344C104.423 19.8653 104.265 19.3787 103.919 19.0387L99.1045 14.372C98.7018 13.9813 98.5619 13.3947 98.7459 12.8654C98.9245 12.3374 99.3805 11.952 99.9312 11.8654L106.558 10.904C107.062 10.852 107.505 10.5454 107.731 10.092L110.651 4.10536C110.721 3.97203 110.81 3.84936 110.918 3.74536L111.038 3.65203C111.101 3.5827 111.173 3.52536 111.253 3.4787L111.398 3.42536L111.625 3.33203H112.186C112.687 3.38403 113.129 3.68403 113.359 4.13203L116.318 10.092C116.531 10.528 116.946 10.8307 117.425 10.904L124.051 11.8654C124.611 11.9454 125.079 12.332 125.265 12.8654C125.439 13.4 125.289 13.9867 124.878 14.372L119.891 19.092Z"
                          fill="#FACD49"
                        />
                        <path
                          d="M167.891 19.092C167.546 19.4267 167.387 19.9107 167.466 20.3853L168.651 26.9453C168.751 27.5013 168.517 28.064 168.051 28.3853C167.595 28.7187 166.989 28.7587 166.491 28.492L160.586 25.412C160.381 25.3027 160.153 25.244 159.919 25.2373H159.558C159.433 25.256 159.31 25.296 159.198 25.3573L153.291 28.452C152.999 28.5987 152.669 28.6507 152.345 28.5987C151.555 28.4493 151.029 27.6973 151.158 26.904L152.345 20.344C152.423 19.8653 152.265 19.3787 151.919 19.0387L147.105 14.372C146.702 13.9813 146.562 13.3947 146.746 12.8654C146.925 12.3374 147.381 11.952 147.931 11.8654L154.558 10.904C155.062 10.852 155.505 10.5454 155.731 10.092L158.651 4.10536C158.721 3.97203 158.81 3.84936 158.918 3.74536L159.038 3.65203C159.101 3.5827 159.173 3.52536 159.253 3.4787L159.398 3.42536L159.625 3.33203H160.186C160.687 3.38403 161.129 3.68403 161.359 4.13203L164.318 10.092C164.531 10.528 164.946 10.8307 165.425 10.904L172.051 11.8654C172.611 11.9454 173.079 12.332 173.265 12.8654C173.439 13.4 173.289 13.9867 172.878 14.372L167.891 19.092Z"
                          fill="#FACD49"
                        />
                        <path
                          d="M215.891 19.092C215.546 19.4267 215.387 19.9107 215.466 20.3853L216.651 26.9453C216.751 27.5013 216.517 28.064 216.051 28.3853C215.595 28.7187 214.989 28.7587 214.491 28.492L208.586 25.412C208.381 25.3027 208.153 25.244 207.919 25.2373H207.558C207.433 25.256 207.31 25.296 207.198 25.3573L201.291 28.452C200.999 28.5987 200.669 28.6507 200.345 28.5987C199.555 28.4493 199.029 27.6973 199.158 26.904L200.345 20.344C200.423 19.8653 200.265 19.3787 199.919 19.0387L195.105 14.372C194.702 13.9813 194.562 13.3947 194.746 12.8654C194.925 12.3374 195.381 11.952 195.931 11.8654L202.558 10.904C203.062 10.852 203.505 10.5454 203.731 10.092L206.651 4.10536C206.721 3.97203 206.81 3.84936 206.918 3.74536L207.038 3.65203C207.101 3.5827 207.173 3.52536 207.253 3.4787L207.398 3.42536L207.625 3.33203H208.186C208.687 3.38403 209.129 3.68403 209.359 4.13203L212.318 10.092C212.531 10.528 212.946 10.8307 213.425 10.904L220.051 11.8654C220.611 11.9454 221.079 12.332 221.265 12.8654C221.439 13.4 221.289 13.9867 220.878 14.372L215.891 19.092Z"
                          fill="#FACD49"
                        />
                      </svg>
                    </div>
                    <p className="text-center text-secondary font-thin">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots <br /> in a piece of classical
                      Latin literature from 45 BC
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            disabled={activeSlide === 0}
            onClick={handlePrevSlide}
            aria-label="Prev Button"
            className="absolute top-1/2 left-4 md:left-20 transform -translate-y-1/2 bg-white p-4 w-14 h-14 rounded-full text-gray-800 dark:text-gray-200"
          >
            <img src="/icons/left.svg" />
          </button>
          <button
            disabled={activeSlide === testimonials.length - 1}
            onClick={handleNextSlide}
            aria-label="Next Button"
            className="absolute top-1/2 right-4 md:right-20 transform -translate-y-1/2  bg-primary p-4 rounded-full text-gray-800 dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Testi;
