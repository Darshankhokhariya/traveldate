import React from "react";

function Input(props) {
  return (
    <>
      <input
        {...props}
        className="block w-full py-2 pl-4 pr-4 text-black placeholder-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 focus:bg-white "
      />
    </>
  );
}

export default Input;
