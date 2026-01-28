import InquireAboutSeaside from "../components/InquireAboutSeaside/InquireAboutSeaside"


import FaqSection from "../components/FaqSection/FaqSection"
import PricingSection from "../components/PricingSection/PricingSection"

import PropertyDetailsHeader from "../components/PropertyDetailsHeader/PropertyDetailsHeader"
import PropertyKeyFeatures from "../components/PropertyKeyFeatures/PropertyKeyFeatures"
import { property } from "../data/PropertyDetailsHeader/PropertyDetailsHeader"
import { propertyKeyData } from "../data/PropertyKeyFeatures/PropertyKeyFeatures"






const PropertyDetails = () => {
    return (
        <div>
            <PropertyDetailsHeader property={property}/>
            <PropertyKeyFeatures card={propertyKeyData} />

            <PricingSection title="Listing Price" price="1,250,000" /> 
            <FaqSection />
        </div>
    )
}

export default PropertyDetails
