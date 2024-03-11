import { useRouter } from "next/router";
import React from "react";

function Secondary2button(props) {
  const { text, path } = props;
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => {
          path && router.push(path);
        }}
        className="py-3 px-4 md:px-[32px] md:py-[16px] w-full bg-[#fcdbe1] text-[17px] text-primary font-semibold rounded-full"
      >
        {text}
      </button>
    </>
  );
}

export default Secondary2button;
