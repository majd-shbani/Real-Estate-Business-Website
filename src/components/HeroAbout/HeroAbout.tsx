import Section from "../Section/Section"
import StatisticeSection from "../StatisticeSection/StatisticeSection"

interface HeroAboutProps {
    img: string
    alt: string
}

const HeroAbout = ({img, alt}: HeroAboutProps) => {
    return (
        <div className="flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between pt-[200px] xl:pr-20 2xl:pr-[162px]">
            <Section title="Our Journey" description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients." buttonText="button">
                <StatisticeSection/>
            </Section>
            <div className="mx-auto mb-10 xl:mb-0 xl:mx-0 px-4 xl:px-0">
                <img src={img} alt={alt} />
            </div>
        </div>
    )
}

export default HeroAbout
