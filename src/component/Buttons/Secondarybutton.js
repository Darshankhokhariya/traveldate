import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Secondarybutton(props) {
  const { text, icon } = props;
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.push(path)}
        className="px-[32px] py-[16px] bg-primary text-white rounded-full"
      >
        {text}
      </button>
    </>
  );
}

export default Secondarybutton;
