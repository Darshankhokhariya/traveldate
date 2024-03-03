import { useRouter } from "next/router";
import React from "react";

function Primarybutton(props) {
  const { text, path } = props;
  const router = useRouter();
  return (
    <>

      <button onClick={() => { path && router.push(path) }} className="px-[32px] py-[16px] font-semibold bg-white text-primary rounded-full">
        {text}
      </button>
    </>
  );
}

export default Primarybutton;
