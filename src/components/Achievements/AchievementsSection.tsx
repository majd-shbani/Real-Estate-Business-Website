
import { achievementHeader, achievementsData } from "../../data/Achievment/Achievment"
import Section from "../Section/Section";
import  Achievement from "./Achievement"



const AchievementsSection = () => {
  return (
    <div className=" ">

      <Section title={achievementHeader.title} 
      description={achievementHeader.description} 
      children={
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
        </div>
      }
      />


    </div>
  )
}

export default AchievementsSection


