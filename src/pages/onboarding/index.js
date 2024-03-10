import Secondarybutton from "@/component/Buttons/Secondarybutton";
import ErrorMessage from "@/component/ErrorMessage/ErrorMessage";
import ImageCropping from "@/component/ImageCropping";
import getCroppedImg from "@/component/ImageCropping/cropImage";
import Modal from "@/component/Modal/Modal";
import ImageUploading from "react-images-uploading";
import Input from "@/component/inputs/Input";
import Select from "@/component/inputs/Select";
import Textarea from "@/component/inputs/Textarea";
import { FORM_HEADERS, HEADERS } from "@/constant/authorization";
import { bodyType } from "@/constant/bodyType";
import { gender } from "@/constant/gender";
import { showToast } from "@/constant/toast/toastUtils";
import { get, put } from "@/redux/services/apiServices";
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { cropImage } from "../../constant/cropUtils";
import Loader from "@/component/Loader/Loader";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [openLanguage, setOpenLanguage] = useState(false);
  const [city, setCity] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [languageField, setLanguageField] = useState("");
  const [image, setImage] = useState([]);
  const [croppedImage, setCroppedImage] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const countries = useSelector((state) => state?.Auth?.countryList);
  const cities = useSelector((state) => state?.Auth?.cityList);

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
              <div
                className="h-24 w-24 overflow-hidden cursor-pointer rounded-lg flex items-center justify-center bg-[#FFEBED]"
                id="fileInputWrapper"
              >
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 2L16.5 31"
                    stroke="#F4425A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M31 16.6631L2 16.6631"
                    stroke="#F4425A"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </label>
          </>
        )}
      </ImageUploading>
    );
  };

  const handleCloseImage = () => {
    setDialogOpen(false);
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

  const languageData = useSelector((state) => state?.Auth?.languageList);
  const languageList = languageData?.map((e) => e?.name);
  const countryList = countries?.map((e) => e?.name);

  const handleInputChange = (event, newInputValue) => {
    setCity(newInputValue);
    if (newInputValue.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const handleOpen = () => {
    if (city.length > 0) {
      setOpen(true);
    }
  };

  useEffect(() => {
    if (city) {
      get(`/country/getCity?city=${city}`, "GET_CITY", dispatch, HEADERS);
    }
  }, [city]);

  const optionsArray = Array.from({ length: 58 }, (_, index) => 18 + index);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      about: "",
      bodyType: "",
      country: "",
      city: [],
      language: [],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(
          /^[a-zA-Z]+$/,
          "Invalid name format. Only letters are allowed."
        )
        .max(10),
      age: Yup.number()
        .required("Age is required")
        .typeError("Age must be a number"),
      gender: Yup.string().required("Gender is required"),
      about: Yup.string().required("About is required"),
      bodyType: Yup.string().required("Body type is required"),
      country: Yup.string().required("Country is required"),
      city: Yup.array()
        .min(1, "City is required")
        .max(5, "You can select up to 5 cities"),
      language: Yup.array()
        .min(1, "Language is required")
        .max(5, "You can select up to 5 languages"),
    }),
    onSubmit: (values, { setErrors }) => {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length === 0 && croppedImage !== null) {
          handleSubmit(values, setErrors);
        }
      });
    },
  });

  const handleGetCountry = async () => {
    await get("/country/getCountry", "GET_COUNTRY", dispatch, HEADERS);
  };

  useEffect(() => {
    handleGetCountry();
    get(`/language/getLanguage`, "GET_LANGUAGE", dispatch, HEADERS);
  }, []);

  const handleInputChangeLanguage = (event, newInputValue) => {
    setLanguageField(newInputValue);
    if (newInputValue.length > 0) {
      setOpenLanguage(true);
    } else {
      setOpenLanguage(false);
    }
  };

  const handleOpenLanguage = () => {
    if (languageField.length > 0) {
      setOpenLanguage(true);
    }
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values?.name);
    formData.append("id", id);
    formData.append("gender", values?.gender);
    formData.append("age", values?.age);
    formData.append("bodyType", values?.bodyType);
    formData.append("language", values?.language);
    formData.append("country", values?.country);
    formData.append("aboutUser", values?.about);
    formData.append("city", values?.city);
    formData.append("image", croppedImage);

    setLoading(true);
    put("/user/userDetails", formData, "USER_UPDATE", dispatch, FORM_HEADERS)
      .then((res) => {
        if (res?.status === 200) {
          setLoading(false);
          showToast(res.message, { type: "success" });
          formik.resetForm();
          setIsSubmit(false);
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        setLoading(false);
        showToast(error.message, { type: "error" });
      });
  };

  return (
    <div className="md:pt-5 mx-auto m-auto mb-9">
      {loading && <Loader />}
      <div
        className={`md:border md:border-white md:rounded-3xl md:w-8/12 m-auto h-100 ${
          loading ? "opacity-35 pointer-events-none" : ""
        } `}
      >
        <form
          onSubmit={(e) => {
            formik.handleSubmit(e);
            setIsSubmit(true);
          }}
        >
          <div className="flex items-center flex-col justify-center p-10">
            <img className="h-[58px]" src="/images1/Frame1.png" />
            <div className="md:flex w-full items-start gap-10 mt-14 md:mt-">
              <div className=" w-full md:w-[50%] mx-auto">
                <div>
                  <Input
                    label="Name"
                    placeholder="Enter Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <ErrorMessage error={formik.errors.name} />
                  )}
                </div>
                <div className="pt-5">
                  <Select
                    onChange={formik.handleChange}
                    value={formik.values.age}
                    name="age"
                    data={optionsArray}
                    label="Age"
                  />
                  {formik.touched.age && formik.errors.age && (
                    <ErrorMessage error={formik.errors.age} />
                  )}
                </div>
                <div className="pt-5">
                  <Select
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    name="gender"
                    data={gender}
                    label="Gender"
                  />
                  {formik.touched.gender && formik.errors.gender && (
                    <ErrorMessage error={formik.errors.gender} />
                  )}
                </div>
                <div className="pt-5">
                  <div className="text-gray-400">Select Language</div>
                  <Autocomplete
                    size="small"
                    name="language"
                    multiple
                    open={openLanguage}
                    onOpen={handleOpenLanguage}
                    onChange={(event, value) =>
                      formik.setFieldValue("language", value ? value : null)
                    }
                    value={formik.values.language}
                    disablePortal
                    onInputChange={handleInputChangeLanguage}
                    className="block w-full bg-white  border border-[#e6e6e6] rounded-xl"
                    options={languageList}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "0",
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderRadius: "10px",
                          border: "1px solid #e6e6e6",
                        },
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {formik.touched.language && formik.errors.language && (
                    <ErrorMessage error={formik.errors.language} />
                  )}
                </div>
                <div className="pt-5">
                  <Textarea
                    name="about"
                    value={formik.values.about}
                    onChange={formik.handleChange}
                    label="About Me"
                  />
                  {formik.touched.about && formik.errors.about && (
                    <ErrorMessage error={formik.errors.about} />
                  )}
                </div>
              </div>
              <div className="w-full md:w-[50%] mt-10 md:mt-0 mx-auto">
                <span className="text-[#191825] text-[20px] font-bold">
                  More details
                </span>
                <div className="pt-5">
                  <Select
                    onChange={formik.handleChange}
                    value={formik.values.bodyType}
                    name="bodyType"
                    data={bodyType}
                    label="Body type"
                  />
                  {formik.touched.bodyType && formik.errors.bodyType && (
                    <ErrorMessage error={formik.errors.bodyType} />
                  )}
                </div>
                <div className="pt-5">
                  <div className="text-gray-400">Country</div>
                  <Autocomplete
                    size="small"
                    name="country"
                    onChange={(event, value) =>
                      formik.setFieldValue("country", value ? value : null)
                    }
                    value={formik.values.country}
                    disablePortal
                    className="block w-full bg-white  border border-[#e6e6e6] rounded-xl"
                    options={countryList}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "0",
                        // height: "40px",
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderRadius: "10px",
                          border: "1px solid #e6e6e6",
                        },
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {formik.touched.country && formik.errors.country && (
                    <ErrorMessage error={formik.errors.country} />
                  )}
                </div>
                <div className="pt-5">
                  <div className="text-gray-400">Wants to Visit</div>
                  <Autocomplete
                    size="small"
                    disablePortal
                    multiple
                    open={open}
                    onOpen={handleOpen}
                    onChange={(event, value) =>
                      formik.setFieldValue("city", value ? value : null)
                    }
                    value={formik.values.city}
                    className="block w-full bg-white  border border-[#e6e6e6] rounded-xl"
                    options={cities}
                    name="city"
                    onInputChange={handleInputChange}
                    onClose={() => setOpen(false)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "0",
                      },
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          borderRadius: "10px",
                          border: "1px solid #e6e6e6",
                        },
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <ErrorMessage error={formik.errors.city} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 pb-10">
            <p className="text-lg font-semibold">Photo Gallery</p>
            <div className="flex  gap-3 mt-4">
              {croppedImage && (
                <>
                  <div className="h-24 w-24 overflow-hidden rounded-lg flex relative ">
                    <img src={URL.createObjectURL(croppedImage)} />
                    <MdClose
                      onClick={() => setCroppedImage(null)}
                      className="text-black text-1xl cursor-pointer absolute right-1 top-1 bg-white rounded-full"
                    />
                  </div>
                </>
              )}
              {croppedImage === null && (
                <ImageUploadingButton
                  value={image}
                  onChange={(newImage) => {
                    setDialogOpen(true);
                    setImage(newImage);
                  }}
                />
              )}
              <ImageCropper
                open={dialogOpen}
                image={image.length > 0 && image[0].dataURL}
                onComplete={(imagePromisse) => {
                  imagePromisse.then((image) => {
                    setCroppedImage(image);
                    setDialogOpen(false);
                  });
                }}
                containerStyle={{
                  position: "relative",
                  width: "100%",
                  height: 300,
                  background: "#333",
                }}
              />
            </div>
            <div>
              {isSubmit && croppedImage === null && (
                <ErrorMessage error={"Photo is Requried!"} />
              )}
            </div>
            <div className="w-full flex justify-center md:justify-end mt-16 md:mt-3">
              <Secondarybutton text="Continue" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
