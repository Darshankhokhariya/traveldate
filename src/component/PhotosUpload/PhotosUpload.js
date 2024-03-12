import React from "react";
import Secondary2button from "../Buttons/Secondary2Button";
import Secondarybutton from "../Buttons/Secondarybutton";
import Link from "next/link";

function PhotosUpload({ userData }) {
  return (
    <div>
      <div className="mt-10">
        <div className=" flex justify-center md:justify-start gap-3  ">
          <div className="w-full lg:w-auto">
            <Secondarybutton text="Upload" />
          </div>
          <div className="w-full lg:w-auto">
            <Secondary2button text="Save Photos" />
          </div>
        </div>
        <div class="mt-12 grid md:grid-cols-3 grid-cols-2 gap-x-3 gap-y-5">
          {userData?.image?.map((item) => {
            return (
              <div className="rounded-xl h-[clamp(170px, 20em, 270px)]  overflow-hidden aspect-square">
                <img
                  src={item?.filename}
                  alt="Product"
                  class="object-cover h-full"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default PhotosUpload;
