
import FaqSection from "../components/FaqSection/FaqSection"
import FeaturedSection from "../components/FeaturedSection/FeaturedSection"
import HeroHome from "../components/HeroHome/HeroHome"
import TestimonialSection from "../components/TestimonialSection/TestimonialSection"







const Home = () => {
    return (
        <div>
            <HeroHome />
            <FeaturedSection viewMode="home" />
            <TestimonialSection />
            <FaqSection />
        </div>
    )
}

export default Home;
