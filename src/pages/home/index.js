import Slider from "@/component/slider";
import Nav from "../../component/navbar/Nav";
import React from "react";
import Sliderimg from "@/component/sliderimg";
import Recent from "@/component/recent";
import Footer from "@/component/footer/Footer";
import Maintext from "@/component/maintext/Maintext";
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
