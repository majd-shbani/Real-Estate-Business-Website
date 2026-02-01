import type { HeroAboutProps } from "../../interfaces/HeroAbout/HerpAbout"
import Section from "../Section/Section"
import StatisticeSection from "../StatisticeSection/StatisticeSection"

const HeroAbout = ({img, alt}: HeroAboutProps) => {
    return (
        <div className="pt-36 xl:pt-0 mt-10 xl:mt-[98px] 2xl:mt-36 min-h-screen  flex flex-col-reverse justify-evenly xl:flex-row xl:items-center xl:justify-between gap-10 xl:gap-15 2xl:gap-20 pr-0  xl:pr-[5.55555vw] 2xl:pr-[8.4375vw]">
            <Section className="xl:w-[59.3229vw]! mb-0! xl:pr-0!" title="Our Journey" description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.">
                <StatisticeSection className="[&>div]:py-[18px] [&>div]:xl:p-5 [&>div]:2xl:p-6 [&>div]:px-4"/>
            </Section>
            <div className="mx-auto mb-10 xl:mb-0 xl:mx-0 px-4 xl:px-0">
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}

export default HeroAbout
