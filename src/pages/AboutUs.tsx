import AchievementsSection from "../components/Achievements/AchievementsSection"
import NavigationSection from "../components/NavigationSection/NavigationSection"
import OurTeamSection from "../components/OurTeamSection/OurTeamSection"
import ValuedClientSection from "../components/ValuedClientSection/ValuedClientSection"
import Values from "../components/Values/Values"

const AboutUs = () => {
    return (
        <div className=" min-h-screen"> 

            <Values />
            <AchievementsSection />
            <NavigationSection/>
            <OurTeamSection/>
            <ValuedClientSection/>
        </div>
    )
}

export default AboutUs
