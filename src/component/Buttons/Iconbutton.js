import React, { useState } from "react";
import { useRouter } from "next/router";
import Join from "../../component/Joinmodal"

function Iconbutton(props) {
  const { text, icon } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <button
        onClick={() => handleOpen()}
        className="px-[32px] py-[16px] bg-primary text-white rounded-full flex items-center gap-2"
      >
        {text}{" "}
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.99765 6.41306L3.86097 9.3248C5.03648 10.5202 6.96352 10.5202 8.13903 9.3248L11.0023 6.41306C12.3326 5.06036 12.3326 2.86721 11.0024 1.51452C9.67215 0.161826 7.51547 0.161827 6.18527 1.51452C6.08346 1.61806 5.91654 1.61806 5.81473 1.51452C4.48453 0.161827 2.32785 0.161826 0.997649 1.51452C-0.33255 2.86721 -0.33255 5.06036 0.99765 6.41306Z"
            fill="white"
          />
        </svg>
      </button>

      <Join isOpen={open} onClose={handleClose} />
    </>
  );
}

export default Iconbutton;
