import React from 'react'

const Loader = () => {
    return (
        <div><div className="z-50 absolute left-[50%] right-[50%]">
            <div className="">
                <div
                    className="flex justify-center text-center mt-72 items-center w-12 h-12 rounded-full animate-spin
border-4 border-solid border-red-500 border-t-transparent"
                ></div>
            </div>
        </div></div>
    )
}

export default Loader