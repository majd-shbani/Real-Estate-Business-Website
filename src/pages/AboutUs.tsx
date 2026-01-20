import HeroAbout from "../components/HeroAbout/HeroAbout"
import NavigationSection from "../components/NavigationSection/NavigationSection"
import Values from "../components/Values/Values"

const AboutUs = () => {
    return (
        <div className="bg-gray-08 min-h-screen">
            <HeroAbout img="/Real-Estate-Business-Website/assets/images/heroAbout.webp" alt="Hero Image About Page"/> 
            <NavigationSection/>
            <Values />
        </div>
    )
}

export default AboutUs
