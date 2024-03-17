import React, { useEffect, useState } from "react";

const Modal = (props) => {
  const { isOpen, onClose } = props;

  // Close modal when clicking outside the modal content
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const modalContainer = document.querySelector(".modal-container");
      if (isOpen && !modalContainer.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div
          className="main-modal fixed  w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
          style={{ background: "rgba(0,0,0,.7)" }}
        >
          <div className="modal-container mx-3 md:mx-auto bg-white  w-full sm:max-w-lg  md:rounded-3xl rounded-2xl shadow-lg z-50 overflow-y-auto">
            <div className="modal-content  text-left p-10 relative">
              {props?.children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
