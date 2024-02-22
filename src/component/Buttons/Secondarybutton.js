import React from "react";

function Secondarybutton(props) {
  const { text } = props;
  return (
    <>
      <button className="px-[32px] py-[16px] bg-primary text-white rounded-full">
        {text}
      </button>
    </>
  );
}

export default Secondarybutton;
