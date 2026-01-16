import FaqSection from "../components/FaqSection/FaqSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";


const Home = () => {
      return (
            <div className="bg-gray-08">
                  <FeaturedSection></FeaturedSection>
                  <TestimonialSection />
                  <FaqSection />
            </div>
      )
}

export default Home;
