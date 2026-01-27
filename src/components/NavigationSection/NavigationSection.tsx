


import { stepsCardData } from "../../data/stepsCardData/stepsCardData"
import Section from "../Section/Section"
import StepsCard from "../StepsCard/StepsCard"


const NavigationSection = () => {
    return (
        <Section title="Navigating the Estatein Experience"
                description={`At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-7.5 sm:gap-x-4 sm:gap-y-6 xl:gap-5 2xl:gap-x-7.5 xl:gap-y-10 2xl:gap-y-12.5 ">
                        <StepsCard items = {stepsCardData}/>
                    </div>
        </Section>
    )
}

export default NavigationSection
