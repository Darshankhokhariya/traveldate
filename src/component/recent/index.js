import React from "react";

function Recent() {
  const cards = [
    {
      name: "Aasta Smith",
      age: "",
      image: "/images/model1.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images/model1.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images/model1.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images/model1.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images/model1.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images/model1.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images/model1.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images/model1.png",
      location: "Rome, Italy",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-3 lg:px-20">
        <div className="py-5 lg:py-10">
          <div className="uppercase  text-primary font-medium">New Member</div>
          <p className="text-[48px] font-semibold text-black">
            Our Recent Member
          </p>
        </div>
        <section
          id="Projects"
          class="  grid  lg:grid-cols-4 grid-cols-2 justify-items-center justify-center gap-y-10 lg:gap-x-14 gap-4 mt-10 mb-5"
        >
          {cards.map((e) => {
            return (
              <>
                <div class=" bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <a href="#">
                    <img
                      src="/images1/model1.png"
                      alt="Product"
                      class="md:h-[250px] w-auto lg:w-72 object-cover rounded-t-xl"
                    />
                    <div class="px-4 py-3 w-auto lg:w-72">
                      <div class="flex items-start">
                        <div>
                          <p class="text-lg font-bold truncate block capitalize">
                            Aasta Smith
                          </p>
                          <div className="flex items-center gap-1 text-secondary">
                            <img src="/icons/location.svg" alt="" />
                            <p class="text-sm  cursor-auto my-3">Rome, Italy</p>
                          </div>
                        </div>

                        <div class="ml-auto pt-2 text-xl text-primary font-bold">
                          24
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default Recent;
