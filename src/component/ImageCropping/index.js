import 'react-image-crop/dist/ReactCrop.css';
import { Button } from '@mui/base'
import 'react-image-crop/dist/ReactCrop.css';
import { Box, Fade, Modal, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import ReactCrop from 'react-image-crop'
import { MdClose } from 'react-icons/md';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '40%',
  bgcolor: '#F6F6F6',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
  outline: "none",
};


const ImageCropping = ({ open, imgSrc, handleOpen, handleClose, callBack, imgFileName }) => {

  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
    height: 50,
    width: 50,
    aspect: 1,
    locked: true
  });

  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const croppedImageForUpload = () => {
    if (croppedImageUrl) {
      if (callBack) {
        callBack(croppedImageUrl, `cropped-${imgFileName}`);
      }
    } else {
      baseImageForUpload();
    }
    setCrop({ unit: '%', width: 100, height: 100 });
  };

  const baseImageForUpload = () => {
    if (callBack) {
      callBack(imgSrc, imgFileName);
    }
    setCrop({ unit: '%', width: 100, height: 100 });
  };

  const onCropComplete = (crop) => {
    const element = document.getElementById('displayImage');
    const image = new Image();
    image.src = imgSrc;
    const scaleX = image.naturalWidth / element.width;
    const scaleY = image.naturalHeight / element.height;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = crop.width;
    canvas.height = crop.height;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const croppedDataUrl = canvas.toDataURL('image/png');
    setCroppedImageUrl(croppedDataUrl);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style} className="w-full md:w-[450px]">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
                color: 'white'
              }}
            >
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                sx={{ color: '#262424', fontSize: 23, fontWeight: 500 }}
              >
                Photo Crop
              </Typography>
              <MdClose
                className='text-black text-2xl cursor-pointer'
                onClick={handleClose}
              />
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                width: '100%',
                height: '100%'
              }}
            >
              <ReactCrop
                crop={crop}
                onChange={onCropChange}
                onComplete={onCropComplete}
                locked
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden'
                }}
              >
                <Box sx={{ width: '100%', height: '100%', backgroundImage: `url(${"https://forum.shotcut.org/uploads/default/original/3X/c/2/c2ba65a9436c259e6f9c6fbe692191301215103b.png"})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                  <img
                    id="displayImage"
                    src={imgSrc}
                    alt="Crop Preview"
                    style={{ objectFit: 'contain', height: "300px" }}
                    width={'auto'}
                  // height={'100%'}
                  />
                </Box>
              </ReactCrop>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: 'wrap',
                gap: '10px',
                mt: 2
              }}
            >
              <Button
                onClick={baseImageForUpload}
              >
                Upload without crop
              </Button>
              <Button
                variant="contained"
                className='bg-blue-600 p-2 text-white'
                onClick={croppedImageForUpload}
              >
                Crop & Upload
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default ImageCropping