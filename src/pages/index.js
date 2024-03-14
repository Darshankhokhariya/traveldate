import React from "react";
import Home from "./home";
import Loader from "@/component/Loader/Loader";

function index({ isPageLoading }) {
  return <div>
    {
      isPageLoading ?
        <Loader />
        :
        <Home />
    }
  </div>;
}

export default index;
