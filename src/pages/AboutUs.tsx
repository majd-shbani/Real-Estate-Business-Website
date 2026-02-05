
import AchievementsSection from "../components/Achievements/AchievementsSection"
import HeroAbout from "../components/HeroAbout/HeroAbout"
import NavigationSection from "../components/NavigationSection/NavigationSection"
import OurTeamSection from "../components/OurTeamSection/OurTeamSection"
import ValuedClientSection from "../components/ValuedClientSection/ValuedClientSection"
import Values from "../components/Values/Values"





const AboutUs = () => {
    return (
        <div> 
            <HeroAbout img="/assets/images/heroAoutUs.webp" alt="Hero Image About Page"/> 
            <Values/>
            <AchievementsSection/>
            <NavigationSection/>
            <OurTeamSection/>
            <ValuedClientSection/>
        </div>
    )
}

export default AboutUs
