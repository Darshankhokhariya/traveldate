import React from "react";

function Recent() {
  const cards = [
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model1.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model2.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model3.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model4.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model5.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model6.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model7.png",
      location: "Rome, Italy",
    },
    {
      name: "Aasta Smith",
      age: "",
      image: "/images1/models/model8.png",
      location: "Rome, Italy",
    },
  ];
  return (
    <>
      <section
        id="Projects"
        class="  grid   xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 justify-items-center justify-center gap-y-10 lg:gap-x-10  gap-4 py-10 mb-5 px-3"
      >
        {cards.map((e) => {
          return (
            <>
              <div class="rounded-xl duration-500 bg-white hover:scale-105">
                <a href="#">
                  <img
                    src={e?.image}
                    alt="Product"
                    class="object-cover rounded-t-xl"
                  />
                  <div class="px-4 py-3 ">
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
    </>
  );
}

export default Recent;
