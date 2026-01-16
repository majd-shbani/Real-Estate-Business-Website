import { memo } from "react"
import { ButtonData } from "../../data/FaqCardData/FaqCardData"
import type { FaqCardProps } from "../../interfaces/FaqCard/FaqCard"
import BaseCard from "../BaseCard/BaseCard"
import Button from "../Button/Button"

const FaqCard = ({card}: FaqCardProps) => {
  return (
    <BaseCard className="text-white grid grid-rows-subgrid row-span-3 gap-5 xl:gap-6 2xl:gap-7.5">
        <h3 className="text-lg xl:text-xl 2xl:text-2xl leading-[150%] font-semibold">{card.title}</h3>
        <p className="text-sm xl:text-base 2xl:text-lg leading-[150%] text-gray-60 font-medium">{card.subTitle}</p>
        <div>
          <Button text={ButtonData.text} className="w-full xl:w-auto bg-gray-10 leading-[131%] tracking-[-0.006em]"/>
        </div>
    </BaseCard>
  )
}

export default memo(FaqCard)
