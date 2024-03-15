import React from "react";
import Home from "./home";
import Loader from "@/component/Loader/Loader";

function index({ isPageLoading }) {
  return <div>
    <Home />
  </div>;
}

export default index;
