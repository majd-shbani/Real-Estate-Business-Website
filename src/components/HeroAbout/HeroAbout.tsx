import type { HeroAboutProps } from "../../interfaces/HeroAbout/HerpAbout"
import Section from "../Section/Section"
import StatisticeSection from "../StatisticeSection/StatisticeSection"
// md:px-[5.208333vw]
const HeroAbout = ({img, alt}: HeroAboutProps) => {
    return (
        <div className="pt-49 pb-20 xl:pb-30 2xl:pt-[262px] 2xl:pb-[150px] flex flex-col-reverse xl:flex-row  xl:items-center gap-[21px] xl:gap-15 2xl:gap-20 pr-0 xl:pr-[5.55555vw] 2xl:pr-[8.4375vw]">
            <Section className="xl:w-[59.3229vw]! mb-0! xl:pr-0! shrink-90" title="Our Journey" description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.">
                <StatisticeSection className="[&>div]:py-[18px] [&>div]:xl:p-5 [&>div]:2xl:p-6 [&>div]:px-4"/>
            </Section>
            <div className="w-[91.7948vw] xl:w-[42.3611vw] 2xl:w-[39.3229vw] mx-auto xl:mb-0 xl:mx-0">
                <img className="w-full" src={img} alt={alt} />
            </div>
        </div>
    )
}

export default HeroAbout
