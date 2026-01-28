import { EMPLOYEE_CARD_DEFAULTS } from "../../data/OurTeamSection/OurTeamSectionData"
import type { EmployeeCardProps } from "../../interfaces/OurTeamSection/OurTeamSection"
import BaseCard from "../BaseCard/BaseCard"
const EmployeeCard = ({card}: EmployeeCardProps) => {
  return (
    <BaseCard className="p-5! md:p-7! xl:p-6! 2xl:p-7.5! flex flex-col w-full max-w-112.5 md:max-w-full mx-auto md:mx-0">
        <div className="relative mb-10 xl:mb-12.5 flex justify-center items-center">
            <div className="w-full">
                <img src={card.image} alt={card.name} width={316.75} height={253} className="object-fill w-full h-67 sm:h-auto xl:h-[15.27777vw] 2xl:h-[13.177083vw] rounded-[10px] 2xl:rounded-xl" />
            </div>
            <div className="absolute -bottom-4.5 2xl:-bottom-6.5 rounded-[43px] px-[clamp(1.25rem,1.25vw+0.125rem,1.625rem)] py-[clamp(0.625rem,0.833vw-0.125rem,0.875rem)] bg-purple-60 flex justify-center items-center">
                <img src={EMPLOYEE_CARD_DEFAULTS.twitterIcon} alt="twitter-icon" width={24} height={24} className="w-5 2xl:w-full"/>
            </div>
        </div>
        <div className="text-center mb-4 xl:mb-5 2xl:mb-6 flex flex-1 flex-col">
            <h3 className="text-lg xl:text-xl 2xl:text-2xl leading-7 font-semibold mb-0.5 xl:mb-1 2xl:mb-1.5">{card.name}</h3>
            <p className="text-sm xl:text-base 2xl:text-lg leading-6 font-medium text-gray-60">{card.position}</p>
        </div>
        <div className="flex items-center justify-between p-2 pl-6 xl:p-2.5 xl:pl-5 2xl:p-3.5 2xl:pl-6 border border-gray-15 rounded-full bg-gray-10">
            <input type="text" id={`employee-message-${card.id}`} name="employee message" placeholder={EMPLOYEE_CARD_DEFAULTS.placeholder} className="w-30 xl:max-w-37.5 bg-transparent text-sm xl:text-base 2xl:text-lg outline-none placeholder:text-white placeholder:text-sm placeholder:xl:text-base placeholder:2xl:text-lg placeholder:font-medium placeholder:leading-7"/>
            <button type="submit" className="p-3.5 xl:p-2 2xl:p-2.5 bg-purple-60 rounded-full">
                <img src={EMPLOYEE_CARD_DEFAULTS.sendIcon} alt="send-icon" width={24} height={24} className="w-5 2xl:w-full" />
            </button>
        </div>
    </BaseCard>
  )
}

export default EmployeeCard
