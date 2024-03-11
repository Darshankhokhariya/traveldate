import Slider from "@/component/slider";
import React, { useEffect } from "react";
import Recent from "@/component/recent";
import Footer from "@/component/footer/Footer";
import Offer from "@/component/Offer/Offer";
import Testi from "@/component/testi/Testi";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  useEffect(() => {
    let getToken = localStorage.getItem("authToken")
    if (getToken) {
      router.push("/dashboard")
    }
    else {
      router.push("/")
    }
  }, [])

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
