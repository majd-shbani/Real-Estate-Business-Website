


import { stepsCardData } from "../../data/stepsCardData/stepsCardData"
import Section from "../Section/Section"
import StepsCard from "../StepsCard/StepsCard"


const NavigationSection = () => {
    return (
        <Section title="Navigating the Estatein Experience"
                description={`At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.`}
                buttonText="View All Properties">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7.5 lg:gap-x-5 lg:gap-y-10 ">
                        <StepsCard items = {stepsCardData}/>
                    </div>
        </Section>
    )
}

export default NavigationSection
