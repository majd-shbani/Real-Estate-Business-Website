import type { TitleProps } from "../../interfaces/HeroHome/HeroHome"


const Title = ({ title, description}: TitleProps) => {
    return (
        <div>
            <h1 className="my-4 xl:mt-0 xl:mb-5 2xl:mb-6  text-[28px] xl:text-[46px] 2xl:text-6xl font-semibold leading-[120%]">
                {title}
            </h1>
            <p className="mb-10 xl:mb-[50px] 2xl:mb-15 text-gray-60 text-[16px] 2xl:text-lg font-medium leading-[150%]">{description}</p>
        </div>
    )
}

export default Title
