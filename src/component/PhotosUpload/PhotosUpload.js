import React, { useState } from "react";
import Secondary2button from "../Buttons/Secondary2Button";
import Secondarybutton from "../Buttons/Secondarybutton";
import ImageUploading from "react-images-uploading";
import Link from "next/link";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { MdClose } from "react-icons/md";
import Cropper from "react-easy-crop";
import { cropImage } from "@/constant/cropUtils";
import { useDispatch } from "react-redux";
import { deleteapi, get, put } from "@/redux/services/apiServices";
import { FORM_HEADERS, HEADERS } from "@/constant/authorization";
import Modal from "../Modal/Modal";

function PhotosUpload({ userData }) {
  const dispatch = useDispatch()
  const [croppedImage, setCroppedImage] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false)
  const [image, setImage] = useState([]);
  const [imageId, setImageId] = useState("")

  const handleCloseImage = () => {
    setDialogOpen(false);
  };

  const handleOpenDelete = (id) => {
    console.log('id', id)
    setImageId(id)
    setOpenDelete(true)
  }

  const handleCloseDelete = () => {
    setOpenDelete(false)
  }


  const ImageUploadingButton = ({ value, onChange, ...props }) => {
    return (
      <ImageUploading value={value} onChange={onChange}>
        {({ onImageUpload, onImageUpdate }) => (
          <>
            <label
              htmlFor="fileInput"
              onClick={value ? onImageUpload : () => onImageUpdate(0)}
              {...props}
            >
              <div className="w-full lg:w-auto">
                <Secondarybutton text="Upload" />
              </div>
            </label>
          </>
        )}
      </ImageUploading>
    );
  };

  const ImageCropper = ({
    open,
    image,
    onComplete,
    containerStyle,
    ...props
  }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    return (
      <Dialog open={open} maxWidth="sm" fullWidth onClose={handleCloseImage}>
        <div className="flex justify-between items-center">
          <DialogTitle>Crop Image</DialogTitle>
          <DialogTitle
            className="cursor-pointer"
            onClick={() => handleCloseImage()}
          >
            <MdClose />
          </DialogTitle>
        </div>

        <DialogContent>
          <div style={containerStyle}>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onCropComplete={(_, croppedAreaPixels) => {
                setCroppedAreaPixels(croppedAreaPixels);
              }}
              onZoomChange={setZoom}
              {...props}
            />
          </div>
        </DialogContent>

        <DialogActions className="mx-5 flex items-center">
          <Typography variant="overline" className="mr-2">
            Zoom
          </Typography>
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => setZoom(zoom)}
          />
        </DialogActions>
        <DialogActions>
          <Button
            color="primary"
            onClick={() =>
              onComplete(cropImage(image, croppedAreaPixels, console.log))
            }
          >
            Finish
          </Button>
        </DialogActions>
      </Dialog>
    );
  };


  const updateImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    await put("/user/userProfileImageEdit", formData, "USER_IMAGES_UPDATE", dispatch, FORM_HEADERS).then((res) => {
      if (res?.status === 200) {
        get(`/user/userProfile`, "GET_SINGLE_PROFILE", dispatch, HEADERS);
      }
    })
  }

  const handleDelete = () => {
    let obj = {
      _id: imageId
    }
    deleteapi("/user/userProfileImageDelete", obj, "USER_IMAGES_DELETE", dispatch, FORM_HEADERS).then((res) => {
      if (res?.status === 200) {
        handleCloseDelete();
        get(`/user/userProfile`, "GET_SINGLE_PROFILE", dispatch, HEADERS);
      }
    })
  }


  return (
    <div>
      <div className="mt-10">
        <div className=" flex justify-center md:justify-start gap-3  ">
          <ImageUploadingButton
            value={image}
            onChange={(newImage) => {
              setDialogOpen(true);
              setImage(newImage);
            }}
          />
          {/* <div className="w-full lg:w-auto">
            <Secondary2button text="Save Photos" />
          </div> */}
        </div>
        <div class="mt-12 grid md:grid-cols-3 grid-cols-2 gap-x-3 gap-y-5">
          {userData?.image?.map((item, i) => {
            return (
              <div key={i} className="rounded-xl aspect-square relative">
                <img
                  src={item?.filename}
                  alt="Product"
                  class="object-cover z-0 h-full"
                />
                <div onClick={() => handleOpenDelete(item?._id)} className="absolute rounded-full cursor-pointer text-primary border-2 md:p-1 border-primary  bg-white right-3 top-2">
                  <MdClose />
                </div>
              </div>
            )
          })}
        </div>
        <ImageCropper
          open={dialogOpen}
          image={image.length > 0 && image[0].dataURL}
          onComplete={(imagePromisse) => {
            imagePromisse.then((image) => {
              setDialogOpen(false);
              updateImage(image)
            });
          }}
          containerStyle={{
            position: "relative",
            width: "100%",
            height: 300,
            background: "#333",
          }}
        />
        <Modal isOpen={openDelete} onClose={handleCloseDelete}>
          <MdClose className='absolute right-5 top-5 cursor-pointer' onClick={handleCloseDelete} />
          <div className='pt-2 px-2'>
            <h1 className='font-extrabold text-2xl'>Delete Image</h1>
            <p className='text-xs pt-5'>
              Are you sure want to delete this image?
            </p>
            <div className="flex justify-end pt-3 gap-3">
              <button onClick={handleCloseDelete} className="bg-white text-black rounded-lg p-3">Cancel</button>
              <button className="text-white bg-primary rounded-lg p-3" onClick={() => handleDelete()}>Delete</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default PhotosUpload;
