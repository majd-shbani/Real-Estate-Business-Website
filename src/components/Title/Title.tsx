import type { TitleProps } from "../../interfaces/HeroHome/HeroHome"


const Title = ({ title, description}: TitleProps) => {
    return (
        <div className="xl:w-[43.4791vw]">
            <h1 className="text-[28px] xl:text-[40px] 2xl:text-6xl 2xl:mb-6 font-semibold leading-[1.2] mb-4">
                {title}
            </h1>
            <p className="text-gray-60 text-sm 2xl:text-lg font-medium leading-normal mb-10 2xl:mb-15">{description}</p>
        </div>
    )
}

export default Title
