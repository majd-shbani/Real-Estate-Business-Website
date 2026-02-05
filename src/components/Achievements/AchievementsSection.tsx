
import { achievementHeader, achievementsData } from "../../data/Achievment/Achievment"
import Section from "../Section/Section";
import  Achievement from "./Achievement"



const AchievementsSection = () => {
  return (
    

      <Section title={achievementHeader.title} 
      description={achievementHeader.description} 
      children={
        <div className="flex flex-col  items-center justify-center gap-5 lg:flex-row xl:gap-7.5 2xl:gap-10 leading-[150%]">
          {achievementsData.map((item) => {
            return (
              <Achievement 
               id={item.id}
               title={item.title}
               description={item.description}
              />
            )
          })}
        </div>
      }
      />


    
  )
}

export default AchievementsSection


