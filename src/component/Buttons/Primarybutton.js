import React from "react";

function Primarybutton(props) {
  const { text } = props;
  return (
    <>
      <button className="px-[32px] py-[16px] font-semibold bg-white text-primary rounded-full">
        {text}
      </button>
    </>
  );
}

export default Primarybutton;
