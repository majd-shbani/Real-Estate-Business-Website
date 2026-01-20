import type { SerivceCardProps } from "../../interfaces/HeroHome/HeroHome"

const SerivceCard = ({ logo, alt, titleService } : SerivceCardProps) => {
  return (
    <div className="w-[40.0512vw] xl:w-[20.1319vw] rounded-[10px] bg-gray-10 py-5 px-3.5 text-center mx-auto border border-solid border-gray-15 relative">
      <img
        src="/Real-Estate-Business-Website/assets/images/herohome/arrowPurple.webp"
        alt="arrowTop"
        className="w-[16.25px] w-[16.25px] absolute right-2"
      />

      <img src={logo} alt={alt} className="mx-auto" />

        <p className="text-white text-sm font-semibold leading-normal mt-3.5 ">{titleService}</p>
      
    </div>
  )
}

export default SerivceCard
