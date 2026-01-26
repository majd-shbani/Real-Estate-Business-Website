
import type { pricinCardgData } from "../../interfaces/Pricing/Pricing"
import Button from "../Button/Button"


const PricingCard = ({items} : pricinCardgData ) => {
    return (
        <>
            {items.map((item , index) => {
                const total = item.details.length
                const isEven = total % 2 == 0 && total > 2
                const isOdd = total % 2 !== 0
                const towCol = total > 3
                return(
                    <div key={index} className="w-full border border-gray-15 rounded-xl px-5 pt-5 pb-0 xl:p-10 2xl:p-12.5 max-w-112.5 sm:max-w-175 xl:max-w-261.25 2xl:max-w-331.5">
                        <div className="flex justify-between items-center pb-5 xl:pb-7.5 2xl:pb-10">
                            <p className="text-lg xl:text-xl 2xl:text-2xl font-semibold">{item.title}</p>
                            <Button text="Learn More" className="rounded-[28px]"/>
                        </div>
                        <div className={`grid grid-cols-1 ${towCol ? "xl:grid-cols-2" : ""}`}>
                            {item.details.map((detail , index) => {
                                const isLast = index === total - 1
                                const isSecondToLast = index === total - 2
                                const changePadding = isLast || (isEven && isSecondToLast)
                                const spanFullWidth = isOdd && isLast
                                const applyLeftBorder = towCol && index % 2 !== 0 && !spanFullWidth
                                return(
                                    <div key={index} className={`${spanFullWidth ? 'xl:col-span-2' : ''} ${changePadding ? 'pb-5 xl:pb-0 2xl:pb-0 pt-5 xl:pt-7.5 2xl:pt-10' : 'py-5 xl:py-7.5 2xl:py-10'} pe-3 border-t border-gray-15`}>
                                        <div className={` ${applyLeftBorder ? 'xl:pl-5 xl:border-l xl:border-gray-15' : ''} `}>
                                            <p className="text-sm font-medium 2xl:text-lg text-gray-60 mb-2.5 xl:mb-3 2xl:mb-4">{detail.title}</p>
                                            <div className="flex items-center gap-3 2xl:gap-4">
                                                {detail.price && 
                                                    <b className="text-lg lg xl:text-xl 2xl:text-2xl font-semibold">
                                                    ${detail.price}
                                                    </b>}
                                                    {detail.subTitle && <p className="text-lg lg xl:text-xl 2xl:text-2xl font-semibold">{detail.subTitle }</p> }
                                                    {detail.btn && <Button text={detail.btn} className="rounded-[28px]! px-3! py-1.5! xl:px-3! xl:py-1.5! 2xl:px-3.5! 2xl:py-2! bg-gray-10 text-gray-60"/>}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default PricingCard