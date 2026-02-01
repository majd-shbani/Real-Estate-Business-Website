import { memo } from "react"
import { ButtonData } from "../../data/FaqCardData/FaqCardData"
import type { FaqCardProps } from "../../interfaces/FaqCard/FaqCard"
import BaseCard from "../BaseCard/BaseCard"
import Button from "../Button/Button"

const FaqCard = ({card}: FaqCardProps) => {
  return (
    <BaseCard className="flex flex-col gap-5 xl:gap-6 2xl:gap-7.5 mx-auto xl:mx-0 max-w-112.5 md:max-w-full h-full">
        <h3 className="text-lg xl:text-xl 2xl:text-2xl leading-[150%] font-semibold line-clamp-2 min-h-[calc(1.5em*2)]">{card.title}</h3>
        <p className="text-sm xl:text-base 2xl:text-lg leading-[150%] text-gray-60 font-medium">{card.subTitle}</p>
        <div className="mt-auto">
          <Button text={ButtonData.text} className="w-full xl:w-auto bg-gray-10 leading-[131%] tracking-[-0.006em]"/>
        </div>
    </BaseCard>
  )
}

export default memo(FaqCard)
