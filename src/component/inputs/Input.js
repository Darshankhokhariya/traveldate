import React from "react";

function Input(props) {

  return (
    <>
      <label htmlFor="" className="text-gray-400">
        {props?.label}{" "}
      </label>
      <div className="mt-1 relative text-gray-400 focus-within:text-gray-600">
        <input
          {...props}
          className="block w-full py-2 pl-4 pr-4 text-black placeholder-gray-400 transition-all duration-200 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:border-gray-400 focus:bg-white "
        />
        {props?.fieldType === "password" &&
          <div onClick={props.handleTogglePassword} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 z-30 cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"
                fill="#8C8C92"
              />
            </svg>
          </div>
        }
      </div>

    </>
  );
}

export default Input;
