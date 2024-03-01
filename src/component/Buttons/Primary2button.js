import React from "react";

function Primary2button(props) {
  const { text } = props;
  return (
    <>
      <button className="md:px-16 px-10 md:py-[12px] py-[12px] border bg-white text-primary border-primary rounded-full font-medium hover:bg-primary hover:text-white">
        {text}
      </button>
    </>
  );
}

export default Primary2button;
