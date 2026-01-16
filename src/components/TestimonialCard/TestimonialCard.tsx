import { memo } from "react"
import { StarIcon } from "../../data/TestimonialCardData/TestimonialCardData"
import type { TestimonialCardProps } from "../../interfaces/TestimonialCard/TestimonialCard"
import BaseCard from "../BaseCard/BaseCard"
import StarRating from "./StarRating"

const TestimonialCard = ({card}: TestimonialCardProps) => {
  return (
    <BaseCard className="flex flex-col justify-between h-full">
        <div>
          <StarRating icon={StarIcon.icon} rating={card.rating}/>
          <div className="text-white flex flex-col gap-1.5 xl:gap-2.5 2xl:gap-3.5 mb-6 xl:mb-7.5 2xl:mb-10">
            <h3 className="text-lg xl:text-xl 2xl:text-2xl font-semibold leading-[150%]">{card.title}</h3>
            <p className="text-sm xl:text-base 2xl:text-lg font-medium leading-[150%]">{card.subTitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 2xl:gap-3">
          <div className="rounded-full 2xl:w-15">
            <img src={card.avatar} alt={card.name} width={60} height={60} className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col 2xl:gap-0.5">
            <p className="text-white text-base xl:text-lg 2xl:text-xl font-medium leading-[150%]">{card.name}</p>
            <p className="text-gray-60 text-sm xl:text-base 2xl:text-lg font-medium leading-[150%]">{card.location}</p>
          </div>
        </div>
    </BaseCard>
  )
}

export default memo(TestimonialCard) 
