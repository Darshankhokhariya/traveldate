import { useRouter } from "next/router";
import React from "react";

function Secondarybutton(props) {
  const { text, path } = props;
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          path && router.push(path);
        }}
        className="py-3 px-4 md:px-[32px] md:py-[16px] bg-primary text-sm md:text-[17px] text-nowrap text-white font-semibold rounded-full"
      >
        {text}
      </button>
    </>
  );
}

export default Secondarybutton;
