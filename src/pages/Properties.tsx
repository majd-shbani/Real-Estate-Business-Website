import FeaturedSection from "../components/FeaturedSection/FeaturedSection"
import HeroProperties from "../components/HeroProperties/HeroProperties"
import PropertyBookingSection from "../components/PropertyBookingSection/PropertyBookingSection"






const PropertyDetails = () => {
      return (
            <div>

                  <HeroProperties />
                  <FeaturedSection viewMode="properties" />
                  <PropertyBookingSection />
            </div>
      )
}

export default PropertyDetails

