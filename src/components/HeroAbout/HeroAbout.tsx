import type { HeroAboutProps } from "../../interfaces/HeroAbout/HerpAbout"
import Section from "../Section/Section"
import StatisticeSection from "../StatisticeSection/StatisticeSection"

const HeroAbout = ({img, alt}: HeroAboutProps) => {
    return (
        <div className=" h-screen mt-[50px] xl:mt-[70px] 2xl:mt-25 flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between pr-4 lg:pr-[7.8125vw] xl:pr-[5.55555vw] 2xl:pr-[8.4375vw]">
            <Section className="mb-0 xl:pr-[60px]! 2xl:pr-20!" title="Our Journey" description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.">
                <StatisticeSection/>
            </Section>
            <div className="mx-auto mb-10 xl:mb-0 xl:mx-0 px-4 xl:px-0">
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}

export default HeroAbout
