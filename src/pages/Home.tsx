
import FaqSection from "../components/FaqSection/FaqSection"
import FeaturedSection from "../components/FeaturedSection/FeaturedSection"
import HeroHome from "../components/HeroHome/HeroHome"
import PropertyKeyFeatures from "../components/PropertyKeyFeatures/PropertyKeyFeatures"
import TestimonialSection from "../components/TestimonialSection/TestimonialSection"







const Home = () => {
    return (
        <div>

            <HeroHome />
            <FeaturedSection />
            <TestimonialSection />
            <FaqSection />
            <PropertyKeyFeatures />
        </div>
    )
}

export default Home;
