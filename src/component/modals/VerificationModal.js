import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdClose } from 'react-icons/md';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  outline: "none"
};

const VerificationModal = ({ open, onClose,email }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MdClose className='absolute right-5 top-5 text-2xl cursor-pointer' onClick={onClose} />
          <div className='flex flex-col justify-center items-center pt-5 px-3'>
            <h1 className='font-extrabold text-2xl'>Please check your email!</h1>
            <div className='pt-[35px] text-center'>
              An activation email has been sent to:
               {" "}{email}
            </div>
            <p className='text-xs text-center pt-5'>
                Note! if you experience any deley in receiving your 
                activation email, please check your spam of junk mail
                folder. <a href="" className='text-blue-700 underline'>Resend Email</a>
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default VerificationModal