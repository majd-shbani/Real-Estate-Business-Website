import PropertyDetailsHeader from "../components/PropertyDetailsHeader/PropertyDetailsHeader"
import { property } from "../data/PropertyDetailsHeader/PropertyDetailsHeader"


const PropertyDetails = () => {
      return (
            <div>
                  <PropertyDetailsHeader property={property} />

                  {/* <PricingSection title="Listing Price" price="1,250,000" /> */}
            </div>
      )
}

export default PropertyDetails
