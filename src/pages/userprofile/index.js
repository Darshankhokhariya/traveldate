import React, { useEffect, useState } from "react";
import Iconstartbutton from "@/component/Buttons/Iconstartbutton";
import Sidebar from "@/component/sidebar/Sidebar";
import {
  deleteapi,
  get,
  getNoAuth,
  post,
  postAuthToken,
} from "@/redux/services/apiServices";
import { useDispatch, useSelector } from "react-redux";
import { HEADERS } from "@/constant/authorization";
import { Carousel } from "react-responsive-carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/router";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Loader from "@/component/Loader/Loader";
import { showToast } from "@/constant/toast/toastUtils";
import Join from "../../component/Joinmodal";

function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  // const userData = useSelector((state) => state?.Auth?.otherUserDetails);
  const userDatas = useSelector((state) => state?.Auth?.otherUserDetails);
  const [userData, setUserData] = useState({})
  let authToken = typeof localStorage !== 'undefined' && localStorage.getItem("authToken")


  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOnChange = (index) => { setCurrentSlide(index) };
  const handleClose = () => { setOpen(false) }
  const handlePrevClick = () => { setCurrentIndex(currentIndex - 1); };
  const handleNextClick = () => { setCurrentIndex(currentIndex + 1) };

  const getSingleProfile = () => {
    get(
      `/user/moreProfile?id=${router.query.id}&page=1`,
      "GET_OTHER_USER_PROFILE",
      dispatch,
      HEADERS
    );
  };

  const getOneProfile = () => {
    getNoAuth(`/user/getOneUser?id=${router.query.id}`, "GET_OTHER_USER_PROFILE", dispatch);
  }

  const handleAddFavouriteProfile = (profileId) => {
    let data = userData;
    setUserData({ ...data, isFavourite: 1 })
    let body = [{ profile_id: profileId }];
    setLoading(true);
    postAuthToken(
      "/user/addFavourite",
      body,
      "ADD_USER_FAVORITE",
      dispatch,
      HEADERS
    )
      .then((res) => {
        if (res?.status === 200) {
          setLoading(false);
          getSingleProfile();
          showToast(res?.message, { type: "success" });
        }
      })
      .catch((err) => {
        showToast(err?.response?.data?.message, { type: "error" });
        setLoading(false);
      });
  };

  const handleRemoveFavouriteProfile = (profileId) => {
    let data = userData;
    setUserData({ ...data, isFavourite: 0 })
    setLoading(true);
    deleteapi(
      `/user/removeFavourite?profile_id=${profileId}`,
      "REMOVE_USER_FAVORITE",
      dispatch,
      HEADERS
    )
      .then((res) => {
        if (res?.status === 201) {
          setLoading(false);
          getSingleProfile();
          showToast(res?.message, { type: "success" });
        }
      })
      .catch((err) => {
        setLoading(false);
        showToast(err?.response?.data?.message, { type: "error" });
        setLoading(false);
      });
  };

  useEffect(() => {
    if (router.query.id && router.query.page !== "Home" && authToken) {
      get(`/user/userProfile`, "GET_SINGLE_PROFILE", dispatch, HEADERS);
      getSingleProfile();
    }
    if (router.query.id && router.query.page == "Home") {
      getOneProfile();
    }
  }, [router.query]);


  useEffect(() => {
    if (userDatas) {
      setUserData(userDatas)
    }
  }, [userDatas])


  return (
    <>
      <section class="bg-transparent">
        {loading && <Loader />}
        <Sidebar userData={userData}>
          <div className="px-4 xl:px-14 ">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-col gap-y-8 items-center justify-center w-full  lg:w-[40%] xl:w-[40%] ">
                <div className="relative">
                  <Carousel
                    className=" "
                    selectedItem={currentIndex}
                    onChange={handleOnChange}
                    showThumbs={true}
                    showArrows={false}
                    dynamicHeight={false}
                    showStatus={false}
                  >
                    {userData?.image?.map((image, index) => (
                      <div key={index}>
                        <img
                          className="rounded-xl object-cover"
                          src={image?.filename}
                          alt={image?.alt}
                          showStatus={false}
                        />
                      </div>
                    ))}
                  </Carousel>
                  <BsChevronLeft
                    direction="left"
                    className={`absolute  transform -translate-y-1/2 left-0 md:left-3 bottom-10 md:bottom-14  cursor-pointer text-secondary1`}
                    onClick={handlePrevClick}
                  />
                  <BsChevronRight
                    direction="left"
                    className={`absolute transform -translate-y-1/2 right-0  md:right-5 bottom-10 md:bottom-14  cursor-pointer text-secondary1`}
                    onClick={handleNextClick}
                  />
                </div>
                {/* <div className="w-full ">
                <div className="relative  overflow-hidden ">
                  <div
                    className="flex transition-transform duration-500 ease-in-out "
                    style={{ transform: `translateX(-${activeSlide1 * 100}%)` }}
                  >
                    {userData?.image?.map((e, index) => {
                      return (
                        <div key={index} className="flex-shrink-0">
                          <div className=" w-full flex flex-col justify-center items-center px-2">
                            <div className="">
                              <img
                                src={e?.filename}
                                className="w-[75px] h-[75px] rounded-md"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <button
                    disabled={activeSlide1 === 0}
                    onClick={handlePrevSlide}
                    aria-label="Prev Button"
                    className="absolute top-1/2 left-0 md:left-0 transform -translate-y-1/2 "
                  >
                    <svg
                      width="6"
                      height="11"
                      viewBox="0 0 6 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.12793 5.28277L5.84333 8.9981L4.78181 10.0596L0.00488281 5.28277L4.78181 0.505859L5.84333 1.56739L2.12793 5.28277Z"
                        fill="#8C8C92"
                      />
                    </svg>
                  </button>
                  <button
                    disabled={activeSlide1 === testimonials.length - 1}
                    onClick={handleNextSlide}
                    aria-label="Next Button"
                    className="absolute top-1/2 right-4 md:right-0 transform -translate-y-1/2  "
                  >
                    <svg
                      width="6"
                      height="11"
                      viewBox="0 0 6 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.87207 5.2807L0.156667 1.56537L1.21819 0.503851L5.99512 5.2807L1.21819 10.0576L0.156666 8.99609L3.87207 5.2807Z"
                        fill="#8C8C92"
                      />
                    </svg>
                  </button>
                </div>
              </div> */}
              </div>
              <div className="text-dark m-auto  py-4 md:mt-14  md:px-10  w-full  lg:w-[60%] xl:w-[60%] flex flex-col items-start ">
                <h1 className="text-2xl md:text-4xl font-semibold capitalize">
                  {userData?.name}
                </h1>
                <p className="font-medium text-xl py-2 hidden  md:block capitalize">
                  {userData?.age} Year | {userData?.gender}
                </p>
                <div className="flex items-center py-2 md:py-4 gap-4 text-secondary1 text-[12px]">
                  <div className="flex items-center text-primary gap-2  ">
                    <svg
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 13.4337L9.2998 10.1338C11.1223 8.31139 11.1223 5.3566 9.2998 3.53415C7.4774 1.7117 4.52261 1.7117 2.70017 3.53415C0.87772 5.3566 0.87772 8.31139 2.70017 10.1338L6 13.4337ZM6 15.3193L1.75736 11.0767C-0.585787 8.73345 -0.585787 4.93449 1.75736 2.59134C4.10051 0.248198 7.89947 0.248198 10.2427 2.59134C12.5858 4.93449 12.5858 8.73345 10.2427 11.0767L6 15.3193ZM6 8.16732C6.7364 8.16732 7.33333 7.57038 7.33333 6.83399C7.33333 6.0976 6.7364 5.50065 6 5.50065C5.2636 5.50065 4.66667 6.0976 4.66667 6.83399C4.66667 7.57038 5.2636 8.16732 6 8.16732ZM6 9.50065C4.52724 9.50065 3.33333 8.30672 3.33333 6.83399C3.33333 5.36122 4.52724 4.16732 6 4.16732C7.47273 4.16732 8.66667 5.36122 8.66667 6.83399C8.66667 8.30672 7.47273 9.50065 6 9.50065Z"
                        fill="#F4425A"
                      />
                    </svg>
                    {userData?.country}
                  </div>
                  {/* Active about 3 hours ago */}
                </div>
                <div className="hidden md:flex items-center gap-3">
                  <Iconstartbutton text={`Chat With ${userData?.name}`} />
                  <button
                    className="px-[32px] py-[16px] bg-primary  bg-opacity-[13%] text-primary rounded-full flex items-center gap-2 font-semibold"
                    style={{ whiteSpace: "nowrap" }}
                    onClick={() => {
                      if (authToken && userData?.isFavourite === 0) {
                        handleAddFavouriteProfile(userData._id)
                      }
                      else {
                        if (!authToken) {
                          setOpen(true)
                        } else {
                          handleRemoveFavouriteProfile(userData._id)
                        }
                      }
                    }}
                  >
                    {userData?.isFavourite === 0 ? (
                      <FaRegHeart />
                    ) : (
                      <FaHeart />
                    )}
                    Add Favorites
                  </button>
                </div>
              </div>
            </div>
            <div className="md:py-10  md:px-10  flex  flex-col lg:flex-row  lg:gap-20">
              <div>
                <h1 className="py-3 text-base font-semibold">About Me</h1>
                <div className="max-w-72 md:space-y-4 text-secondary1">
                  <p className="text-sm">{userData?.aboutUser}</p>
                </div>
              </div>
              <div className="pt-3">
                <h1 className="text-base font-semibold">Other Details</h1>
                <div className="flex gap-8 py-2">
                  <div className="text-secondary1 w-20">Country</div>
                  <div className="font-medium">{userData?.country}</div>
                </div>
                <div className="flex gap-8 py-2">
                  <div className="text-secondary1 w-20">City</div>
                  <div className="font-medium">
                    {" "}
                    {userData?.city?.join(", ")}
                  </div>
                </div>
                <div className="flex gap-8 py-2">
                  <div className="text-secondary1 w-20">Languages</div>
                  <div className="font-medium">
                    {userData?.language?.join(", ")}
                  </div>
                </div>
                <div className="flex gap-8 py-2">
                  <div className="text-secondary1 w-20">Body type</div>
                  <div className="font-medium">{userData?.bodyType}</div>
                </div>
              </div>
            </div>
            <div className="flex md:hidden justify-center items-center gap-1 w-full mt-8">
              <button className="px-3 md:px-[32px]  text-[12px] py-[16px] bg-primary text-white rounded-full flex justify-center items-center gap-2 w-full text-nowrap">
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
                Contact Rebecca
              </button>
              <button onClick={() => {
                if (authToken && userData?.isFavourite === 0) {
                  handleAddFavouriteProfile(userData._id)
                }
                else {
                  if (!authToken) {
                    setOpen(true)
                  } else {
                    handleRemoveFavouriteProfile(userData._id)
                  }
                }
              }} className="px-3 md:px-[32px] text-[12px]  py-[16px] bg-primary  bg-opacity-[13%] text-primary rounded-full flex items-center justify-center gap-2 w-full  font-semibold">
                {userData?.isFavourite === 0  ? (
                  <FaRegHeart />
                ) : (
                  <FaHeart />
                )}
                Favorites
              </button>
            </div>
          </div>
        </Sidebar>
        <Join isOpen={open} onClose={handleClose} />
      </section>
    </>
  );
}

export default Index;
