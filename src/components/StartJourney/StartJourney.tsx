import type {  StartJourneyProps } from "../../interfaces/StartJourney/StartJourney"
import Button from "../Button/Button"

const StartJourney = (journeyProps : StartJourneyProps) => {
  return (
    <div>
      <div className="py-12.5 px-4 xl:py-15 relative    h-91.75 xl:h-64.75 2xl:h-[367px] border border-gray-15">
   

       <img className=" absolute  rotate-180 top-0 right-45 sm:right-90 md:top-15  md:left-0 md:rotate-0 xl:-top-13  xl:left-0 xl:rotate-0 2xl:top-14 " src={journeyProps.journeyProps.leftImage}></img>
       <img className="absolute  bottom-0 right-0 " src={journeyProps.journeyProps.rightImage}></img>
       <div className="xl:mx-20 ">
       <div className=" absolute  w-89.25 sm:w-[80%]  xl:w-244.75 2xl:px-40.5 2xl:w-288.5">
       <h3 className=" text-[28px] font-semibold">{journeyProps.journeyProps.title}</h3>
       <p className=" text-[14px] text-gray-60">{journeyProps.journeyProps.description}</p>
       </div>
       <Button text={journeyProps.journeyProps.button.text} to={journeyProps.journeyProps.button.to} className={journeyProps.journeyProps.button.style} />
       </div>
    </div>
    </div>
  )
}

export default StartJourney
