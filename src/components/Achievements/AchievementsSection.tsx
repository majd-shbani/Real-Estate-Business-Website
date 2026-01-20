
import { achievementsData } from "../../data/Achievment/Achievment"
import Section from "../Section/Section";
import SectionHeader from "../SectionHeader/SectionHeader"
import  Achievement from "./Achievement"








const AchievementsSection = () => {
  console.log(achievementsData);
  return (
    <div className="bg-[#141414] px-4 xl:px-20 2xl:px-40.5 pb-15 xl:pb-22.5 2xl:pb-28">

      <Section title="Achievements" 
      description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary." 
      buttonText="fhtyh"
      />
      <div className="flex flex-col  items-center justify-center gap-5 sm:flex-row xl:gap-7.5 2xl:gap-10 ">
        {achievementsData.map((item) => {
          return (
          
              <Achievement 
               id={item.id}
               title={item.title}
               description={item.description}
              />
          
     
          )
        
        })}
  
      </div >


    </div>
  )
}

export default AchievementsSection


