import FaqSection from "../components/FaqSection/FaqSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import HeroHome from "../components/HeroHome/HeroHome";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import ValuedClientSection from "../components/ValuedClientSection/ValuedClientSection";







const Home = () => {
    return (
        <div>
            <HeroHome/>
            <FeaturedSection/>
            <TestimonialSection/>
            <ValuedClientSection></ValuedClientSection>
            <FaqSection/>
        </div>
    )
}

export default Home;
