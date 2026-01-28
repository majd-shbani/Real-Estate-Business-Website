


import FaqSection from "../components/FaqSection/FaqSection"
import InquireAboutSeaside from "../components/InquireAboutSeaside/InquireAboutSeaside"
import PricingSection from "../components/PricingSection/PricingSection"

import PropertyDetailsHeader from "../components/PropertyDetailsHeader/PropertyDetailsHeader"

import { property } from "../data/PropertyDetailsHeader/PropertyDetailsHeader"






const PropertyDetails = () => {
    return (
        <div>
            <PropertyDetailsHeader property={property}/>
            <InquireAboutSeaside/>
            <PricingSection title="Listing Price" price="1,250,000" /> 
            <FaqSection />
        </div>
    )
}

export default PropertyDetails
