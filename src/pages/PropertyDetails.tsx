import PropertyDetailsHeader from "../components/PropertyDetailsHeader/PropertyDetailsHeader"
import { property } from "../data/PropertyDetailsHeader/PropertyDetailsHeader"


import FaqSection from "../components/FaqSection/FaqSection"
import PricingSection from "../components/PricingSection/PricingSection"


const PropertyDetails = () => {
      return (
            <div>
                  <PropertyDetailsHeader property={property} />
                  <PricingSection title="Listing Price" price="1,250,000" />
                  <FaqSection />
            </div>
      )
}

export default PropertyDetails
