import InquireAboutSeaside from "../components/InquireAboutSeaside/InquireAboutSeaside"


import FaqSection from "../components/FaqSection/FaqSection"
import PricingSection from "../components/PricingSection/PricingSection"
import PropertyKeyFeatures from "../components/PropertyKeyFeatures/PropertyKeyFeatures"



const PropertyDetails = () => {
    return (
        <div>
            <InquireAboutSeaside/>
            <PropertyKeyFeatures/>
            <PricingSection title="Listing Price" price="1,250,000" /> 
            <FaqSection />
        </div>
    )
}

export default PropertyDetails
