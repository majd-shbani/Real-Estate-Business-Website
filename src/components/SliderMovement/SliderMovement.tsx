


import { IoMdArrowForward } from "react-icons/io"
import { IoArrowBackOutline } from "react-icons/io5"

const SliderMovement = () => {
    return (
        <div>
            <div className="flex justify-between pt-4 2xl:pt-5 border-t border-gray-15 w-full ">
                <span className="font-medium text-base 2xl:text-xl"></span>
                <div className="flex gap-2.5 ">
                    <IoArrowBackOutline className="border border-gray-15 rounded-full bg-gray-10 w-12 h-12 2xl:w-14.5 2xl:h-14.5 p-2.5 2xl:p-3.5 "/>
                    <IoMdArrowForward  className="border border-gray-15 rounded-full bg-gray-15 w-12 h-12 2xl:w-14.5 2xl:h-14.5 p-2.5 2xl:p-3.5 "/>
                </div>
            </div>
        </div>
    )
}

export default SliderMovement