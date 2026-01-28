
import HeroAbout from "../components/HeroAbout/HeroAbout"
import AchievementsSection from "../components/Achievements/AchievementsSection"
import NavigationSection from "../components/NavigationSection/NavigationSection"
import OurTeamSection from "../components/OurTeamSection/OurTeamSection"
import ValuedClientSection from "../components/ValuedClientSection/ValuedClientSection"
import Values from "../components/Values/Values"
import SliderMovement from "../components/SliderMovement/SliderMovement"



const AboutUs = () => {
    return (
        <div> 
            <HeroAbout img="/Real-Estate-Business-Website/assets/images/heroAbout.webp" alt="Hero Image About Page"/> 
            <Values />
            <AchievementsSection />
            <NavigationSection/>
            <SliderMovement/>
            <OurTeamSection/>
            <ValuedClientSection/>
        </div>
    )
}

export default AboutUs
