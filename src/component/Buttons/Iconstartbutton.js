import React, { useState } from "react";
import Join from "../../component/Joinmodal";

function Iconstartbutton(props) {
  const { text } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    let isLogin = localStorage.getItem("authToken");
    if (!isLogin) {
      setOpen(true)
    }
  };

  const handleClose = () => { setOpen(false) };

  return (
    <>
      <button
        onClick={() => handleOpen()}
        className="px-[32px] py-[16px] bg-primary text-white rounded-full flex items-center gap-2"
        style={{ whiteSpace: 'nowrap' }}
      >
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5.99374C0 2.68349 2.67654 0 6.00066 0H13.9993C17.3134 0 20 2.69478 20 5.99374V18H6.00066C2.68659 18 0 15.3052 0 12.0063V5.99374ZM18 16V5.99374C18 3.79539 16.2049 2 13.9993 2H6.00066C3.78458 2 2 3.78458 2 5.99374V12.0063C2 14.2046 3.79512 16 6.00066 16H18ZM12 8H14V10H12V8ZM6 8H8V10H6V8Z"
            fill="white"
          />
        </svg>
        {text}{" "}
      </button>
      <Join isOpen={open} onClose={handleClose} />
    </>
  );
}

export default Iconstartbutton;
