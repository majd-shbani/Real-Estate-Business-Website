import type {  StartJourneyProps } from "../../interfaces/StartJourney/StartJourney"
import Button from "../Button/Button"

const StartJourney = (journeyProps : StartJourneyProps) => {
  return (
   
      <div className="py-10 px-4 md: md:py-20  lg:py-15 md:px-20 2xl:px-0 2xl:py-25 relative  overflow-hidden  h-91.75 lg:h-64.75 2xl:h-91.75 border border-gray-15">
   

       <img className=" absolute  rotate-180 top-0 right-45 sm:right-60 sm:top-20 sm:rotate-0 lg:top-0  md:left-0 md:rotate-0 md:top-15 xl:-top-13  xl:left-0 xl:rotate-0 2xl:top-14 " src={journeyProps.journeyProps.leftImage}></img>
       <img className="absolute sm:-bottom-10 sm:-right-10 bottom-0 right-0 md:bottom-0 md:right-0" src={journeyProps.journeyProps.rightImage}></img>
       <div className="">
       <div className=" absolute  w-[94%] sm:w-[80%]  md:w-[50%] lg:w-[65%] 2xl:px-40.5 2xl:w-[73%] ">
       <h3 className=" text-[28px]  xl:text-[38px] 2xl:text-[48px] font-semibold xl:mb-3.5">{journeyProps.journeyProps.title}</h3>
       <p className=" text-[14px] xl:text-[16px] 2xl:text-[18px] text-gray-60">{journeyProps.journeyProps.description}</p>
       </div>
       <Button text={journeyProps.journeyProps.button.text} to={journeyProps.journeyProps.button.to} className={journeyProps.journeyProps.button.style} />
       </div>
    </div>
  
  )
}

export default StartJourney
