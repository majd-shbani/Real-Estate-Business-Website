import type { UnblockCardProps } from "../../interfaces/UnblockCard/UnblockCard"
import BaseCard from "../BaseCard/BaseCard"
import Button from "../Button/Button"

const UnblockCard = ({ card }: UnblockCardProps) => {
      return (
            <BaseCard className={` ${card.variant ==='horizontal'?" py-6! xl:py-[45.5px]! 2xl:py-[59.5px]! ":"" } p-6! xl:p-10! 2xl:p-12.5! bg-gray-15 bg-[url('/assets/images/Unblock-Background.png')] bg-center border border-gray-15 flex flex-col gap-4 leading-[150%] h-full`}>

                  <div className="flex flex-col xl:flex-row justify-between gap-4 items-start xl:items-center">
                        <h2 className={`text-[20px] ${card.variant === 'horizontal' ? 'xl:text-[24px] 2xl:text-[30px] font-bold ' : 'xl:text-[22px] 2xl:text-[24px] font-semibold'}`}>
                              {card.title}
                        </h2>
                        {card.variant === 'horizontal' && (<Button text={card.button} className="bg-gray-08 w-full xl:w-fit"></Button>)}
                  </div>

                  <p className="text-gray-60 text-[14px] xl:text-[16px] 2xl:text-[18px] ">
                        {card.description}
                  </p>

                  {card.variant === 'vertical' && (
                        <div className="mt-4">
                              {<Button text={card.button} className="bg-gray-08 w-full"></Button>}
                        </div>
                  )}

            </BaseCard>
      )
}

export default UnblockCard
