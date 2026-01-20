
import AchievementsSection from "../components/Achievements/AchievementsSection"
import FaqSection from "../components/FaqSection/FaqSection"
import FeaturedSection from "../components/FeaturedSection/FeaturedSection"
import Footer, { type FooterProps } from "../components/Footer/Footer"
import HeroHome from "../components/HeroHome/HeroHome"
import StartJourney from "../components/StartJourney/StartJourney"
import TestimonialSection from "../components/TestimonialSection/TestimonialSection"
import { footerProps } from "../data/Footer/Footer"
import { journeyProps } from "../data/JourneyStart/StartJourney"






const Home = () => {
    return (
        <div>

            <HeroHome />
            <FeaturedSection />
            <TestimonialSection />
            <FaqSection />
            <StartJourney journeyProps={journeyProps} />
           <Footer footerProps={footerProps} />
           <AchievementsSection />

            <HeroHome/>
            <FeaturedSection/>
            <TestimonialSection/>
            <FaqSection/>

        </div>
    )
}

export default Home;
