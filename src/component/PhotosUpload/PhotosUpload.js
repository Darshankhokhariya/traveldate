import React from "react";
import Secondary2button from "../Buttons/Secondary2Button";
import Secondarybutton from "../Buttons/Secondarybutton";
import Link from "next/link";

function PhotosUpload() {
  return (
    <div>
      <div className="mt-10">
        <div className="flex justify-center md:justify-start gap-3">
          <Secondarybutton text="Upload" />
          <Secondary2button text="Save Photos" />
        </div>
        <div class="mt-12 grid md:grid-cols-3 grid-cols-2 gap-x-3 gap-y-5">
          <div className="rounded-xl h-[clamp(170px, 20em, 270px)]  overflow-hidden aspect-square">
            <img
              src={"/images1/signup2.jpg"}
              alt="Product"
              class="object-cover h-full"
            />
          </div>
          <div className="rounded-xl h-[clamp(170px, 20em, 270px)]  overflow-hidden aspect-square">
            <img
              src={"/images1/signup2.jpg"}
              alt="Product"
              class="object-cover h-full"
            />
          </div>
          <div className="rounded-xl h-[clamp(170px, 20em, 270px)]  overflow-hidden aspect-square">
            <img
              src={"/images1/signup2.jpg"}
              alt="Product"
              class="object-cover h-full"
            />
          </div>
          <div className="rounded-xl h-[clamp(170px, 20em, 270px)]  overflow-hidden aspect-square">
            <img
              src={"/images1/signup2.jpg"}
              alt="Product"
              class="object-cover h-full"
            />
          </div>
          <div className="rounded-xl h-[clamp(170px, 20em, 270px)]  overflow-hidden aspect-square">
            <img
              src={"/images1/signup2.jpg"}
              alt="Product"
              class="object-cover h-full"
            />
          </div>
          <div className="rounded-xl h-[clamp(170px, 20em, 270px)]  overflow-hidden aspect-square">
            <img
              src={"/images1/signup2.jpg"}
              alt="Product"
              class="object-cover h-full"
            />
          </div>
          <div className="rounded-xl h-[clamp(170px, 20em, 270px)]  overflow-hidden aspect-square">
            <img
              src={"/images1/signup2.jpg"}
              alt="Product"
              class="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotosUpload;
