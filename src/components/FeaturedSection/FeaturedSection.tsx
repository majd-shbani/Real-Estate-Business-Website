import FeaturedCard from "../FeaturedCard/FeaturedCard";
import Section from "../Section/Section";
import { useProperties } from "../../pages/Dashboard/Hooks/Hooks";
import SliderMovement from "../SliderMovement/SliderMovement";
interface FeaturedSectionProps {
      viewMode?: "home" | "properties";
}

const FeaturedSection = ({ viewMode }: FeaturedSectionProps) => {
      const { properties, loading } = useProperties();

      return (
            <Section
                  title="Featured Properties"
                  description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein."
                  buttonText="View All Properties"
            >
                  {loading ? (
                        <div className="text-white text-center py-10 text-2xl animate-pulse">Loading Properties...</div>
                  ) : (
                              <SliderMovement
                                    data={properties}
                                    renderItem={(item) => (
                                          <FeaturedCard
                                                key={item.id}
                                                id={item.id}
                                                image={item.mainImage}
                                                alt={item.name}
                                                title={item.name}
                                                description={item.description}
                                                price={item.pricing.listingPrice.toLocaleString()}
                                                details={viewMode === "home" ? [
                                                      { icon: "/assets/icons/Bedroom.svg", description: `${item.specs.bedrooms}-Bedroom` },
                                                      { icon: "/assets/icons/Bathroom.svg", description: `${item.specs.bathrooms}-Bathroom` },
                                                      { icon: "/assets/icons/Villa.svg", description: item.type },
                                                ] : undefined}

                                                categoryBadge={viewMode === "properties" ? (item.categoryBadge || item.type) : undefined}
                                          />
                                    )}
                              />
                  )}

                  {!loading && properties.length === 0 && (
                        <p className="text-gray-60 text-center py-10">No featured properties found.</p>
                  )}
            </Section>
      );
};

export default FeaturedSection;