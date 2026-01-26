
import { Link } from "react-router-dom";
import type {  FooterInterface } from "../../interfaces/Footer/Footer"



const Footer = (footerProps : FooterInterface) => {
  return (
    <div className=" font-urbanist ">

    <div className="  xl:mr-25.25 px-4 py-12.5 sm:px-[40px] lg:px-17 xl:flex w-full  xl:gap-20 xl:p-20 2xl:h-113.5 2xl:px-40.5 2xl:py-25">
      <div className=" ">
        <div className="flex 2xl:gap-2.5 gap-[7.25px] mb-5 2xl:mb-7.5">
       <img className="2xl:w-12 2xl:h-12 w-.5 h-8.5" src={footerProps.footerProps.imageIcon}></img>
       <img className=" xl:w-18 xl:h-3.5 mt-2.5 xl:mb-6 2xl:w-25.25 2xl:h-5 2xl:mt-[14.6px] 2xl:mb-[12.5px]" src={footerProps.footerProps.imageName}></img>
       </div>


       <form className="flex gap-[7.5px] justify-between 2xl:gap-2.5 border border-gray-15 rounded-lg  h-13  xl:h-13 px-[21.6px] py-[18.5px] mb-12.5 w-[357px] lg:w-max xl:w-[305px] 2xl:w-[423px]  2xl:h-16.5 2xl:px-[26.5px] 2xl:py-[21.5px]">
        <div className="flex gap-2.5  items-center">
        <img src={footerProps.footerProps.sendEmail.emailIcon}></img>
        <input className=" xl:text-[14px] 2xl:text-[18px]" placeholder={footerProps.footerProps.sendEmail.placeholder}></input>
        </div>
         <button><img src={footerProps.footerProps.sendEmail.telegramIcon}></img></button>
       </form>
      </div>

      <div className="relative grid grid-cols-2 gap-5   border-gray-15 divide-gray-300 lg:divide-none lg:flex lg:justify-between   xl:w-[80%]">
         <div className="absolute  top-0 inset-x-0 mx-auto   w-px  dark:bg-gray-15 h-53 lg:w-0"  />
         <div className="absolute  bottom-0 inset-x-0 mx-auto  w-px  dark:bg-gray-15 h-63 lg:w-0"  />
        {footerProps.footerProps.footerService.map((colunm ,index) => {
              const isThird = index === 3;
            return (

                <div   key={index} className={` border-b border-gray-15 xl:w-max lg:border-0 flex flex-col gap-4  sm:text-center lg:text-left xl:gap-6  2xl:gap-6.25  2xl:font-medium ${isThird ? "row-span-2 " : ""} `}>
                    
                    <h2 className="text-[16px] xl:text-[18px] 2xl:text-[20px] mb-2 text-gra-60 ">{colunm.serviceTitle}</h2>
                  
                    <div className="mb-5  flex flex-col gap-2 xl:gap-6 2xl:gap-3.75 text-[16px]">
                        {colunm.services.map((item) => {
                        return (
                        <Link  to="/" >{item.service}</Link>
                      )})}
                    </div>
                </div>
            )
        })}
      </div>
    </div>

    <div className="flex flex-col-reverse  lg:flex-row  lg:justify-between   text-[14px] lg:px-31 xl:px-20 lg:h-17  2xl:text-[18px] border border-gray-10 lg:flex w-full 2xl:h-26  2xl:px-[162px] 2xl:px-10">
        <div className="text-center mb-5 lg:flex lg:my-2 lg:gap-5 2xl:gap-9.5 2xl:my-10 lg:items-center">
        <p className=" mb-2.5 lg:mb-0">{footerProps.footerProps.copyright}</p>
        <p>{footerProps.footerProps.terms}</p>
        </div>
        <div className=" flex gap-2 items-center justify-center  2xl:gap-4 mx-15.5 sm:mx-auto py-5  xl:my-3.5 2xl:my-6.5 lg:mr-5 ">
            {footerProps.footerProps.socialMedia.map((item) => {
                return (
                    <div className="bg-gray-08 border border-gray-08 rounded-full w-15 h-15 p-5 lg:w-10 lg:h-10 lg:px-3 lg:py-2.75 2xl:p-3.5 2xl:w-13 2xl:h-13">
                    <button><img className="w-5 h-5 xl:w-3.75 xl:h-3.75 2xl:w-6 2xl:h-6" src={item.icon} alt="Social Media Icon" /></button>
                    </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Footer

