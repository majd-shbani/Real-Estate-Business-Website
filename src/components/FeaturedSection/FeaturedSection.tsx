import { Features } from "../../data/FeaturedSectionData/FeaturedSectionData"
import FeaturedCard from "../FeaturedCard/FeaturedCard"
import Section from "../Section/Section"

const FeaturedSection = () => {
      return (
            <Section title="Featured Properties"
                  description={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click ' View Details' for more information.`}
                  buttonText="View All Properties">
                  <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-5 2xl:gap-7.5 items-start">
                        {Features.map((item) => (
                              <FeaturedCard
                                    id={item.id}
                                    image={item.image}
                                    alt={item.alt}
                                    title={item.title}
                                    description={item.description}
                                    details={item.details}
                                    price={item.price}>
                              </FeaturedCard>
                        ))}
                  </div>

            </Section>
      )
}

export default FeaturedSection
