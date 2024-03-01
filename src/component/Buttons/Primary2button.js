import React from "react";

function Primary2button(props) {
  const { text } = props;
  return (
    <>
      <button className="px-[32px] py-[16px] border-2 bg-white text-primary border-primary rounded-full font-medium hover:bg-primary hover:text-white">
        {text}
      </button>
    </>
  );
}

export default Primary2button;
