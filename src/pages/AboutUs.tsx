import HeroAbout from "../components/HeroAbout/HeroAbout"
import AchievementsSection from "../components/Achievements/AchievementsSection"
import NavigationSection from "../components/NavigationSection/NavigationSection"
import OurTeamSection from "../components/OurTeamSection/OurTeamSection"
import ValuedClientSection from "../components/ValuedClientSection/ValuedClientSection"
import Values from "../components/Values/Values"

const AboutUs = () => {
    return (
        <div className=""> 
            <HeroAbout img="/Real-Estate-Business-Website/assets/images/heroAbout.webp" alt="Hero Image About Page"/> 
            <NavigationSection/>
            <Values />
            <AchievementsSection />
            <NavigationSection/>
            <OurTeamSection/>
            <ValuedClientSection/>
        </div>
    )
}

export default AboutUs
