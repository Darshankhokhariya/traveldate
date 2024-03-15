import Slider from "@/component/slider";
import React from "react";
import Recent from "@/component/recent";
import Footer from "@/component/footer/Footer";
import Offer from "@/component/Offer/Offer";
import Testi from "@/component/testi/Testi";

function Home() {

  return (
    <>
      <div className="">
        <Slider />
        <Recent />
        <Offer />
        <Testi />
        <Footer />
      </div>
    </>
  );
}

export default Home;
