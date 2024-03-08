import { useRouter } from "next/router";
import React from "react";

function Secondarybutton(props) {
  const { text, path } = props;
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => { path && router.push(path) }}
        className="px-[32px] py-[16px] bg-primary text-[17px] text-nowrap text-white font-semibold rounded-full"
      >
        {text}
      </button>
    </>
  );
}

export default Secondarybutton;
