<<<<<<< HEAD
=======


>>>>>>> 9dd58fe72d14ab31b10921a44fbf8adf12b4e6bb

import FaqSection from "../components/FaqSection/FaqSection"
import InquireAboutSeaside from "../components/InquireAboutSeaside/InquireAboutSeaside"
import PricingSection from "../components/PricingSection/PricingSection"
import PropertyKeyFeatures from "../components/PropertyKeyFeatures/PropertyKeyFeatures"

import PropertyDetailsHeader from "../components/PropertyDetailsHeader/PropertyDetailsHeader"

import { property } from "../data/PropertyDetailsHeader/PropertyDetailsHeader"






const PropertyDetails = () => {
    return (
        <div>
<<<<<<< HEAD
            <PropertyKeyFeatures />
=======
            <PropertyDetailsHeader property={property}/>
            <InquireAboutSeaside/>
>>>>>>> 9dd58fe72d14ab31b10921a44fbf8adf12b4e6bb
            <PricingSection title="Listing Price" price="1,250,000" /> 
            <FaqSection />
        </div>
    )
}

export default PropertyDetails
