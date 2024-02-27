import React, { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose }) => {

    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    // Close modal when clicking outside the modal content
    useEffect(() => {
        const handleOutsideClick = (event) => {
            const modalContainer = document.querySelector('.modal-container');
            if (isOpen && !modalContainer.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return (
        <>
            {isOpen && (
                <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
                    style={{ background: 'rgba(0,0,0,.7)' }}>
                    <div className="modal-container mx-3 md:mx-auto bg-white  w-full sm:max-w-xl  md:rounded-3xl rounded-2xl shadow-lg z-50 overflow-y-auto">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-end   items-center pb-3">
                                <div className="modal-close cursor-pointer z-50" onClick={onClose}>
                                    <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                        viewBox="0 0 18 18">
                                        <path
                                            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full'>
                                {/* Your modal content here */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
