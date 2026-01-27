

import type { steps } from "../../interfaces/StepsCard/StepsCard"
import BaseCard from "../BaseCard/BaseCard"


const StepsCard = ({items} : steps) => {
    return (
        <>
        {items.map((item , index) => {
            return (
                <div key={index} className="h-full max-w-112.5 xl:max-w-106 2xl:max-w-3xl">
                    <p className="font-medium text-base 2xl:text-xl ps-4 py-3.5 2xl:ps-5 2xl:py-4 border-l opacity-70 border-purple-60">{item.stepNumber}</p>
                    <BaseCard className="relative h-[80%] rounded-tl-none flex flex-col gap-3.5 lg:gap-4 2xl:gap-5 bg-[linear-gradient(130.79deg,#703BF7_-49.01%,rgba(112,59,247,0)_14.65%)]">
                        <div className="absolute -top-px -left-px border-purple-60 border-l border-t w-1/4 h-24 opacity-40"></div>
                        <strong className="font-semibold text-lg lg:text-xl 2xl:text-[26px]">{item.title}</strong>
                        <p className="font-medium text-gray-60 text-sm lg:text-base 2xl:text-lg">{item.subTitle}</p>
                    </BaseCard>
                </div> 
            )
        })}
        </>
    )
}

export default StepsCard