import PropertyKeyFeatures from "../components/PropertyKeyFeatures/PropertyKeyFeatures"
import ServiceInvestments from "../components/ServiceInvestments/ServiceInvestments"
import { propertyKeyData } from "../data/PropertyKeyFeatures/PropertyKeyFeatures"



import EffortlessProperty from "../components/EffortlessProperty/EffortlessProperty"
import HeroServices from "../components/HeroServices/HeroServices"
import UnlockProperty from "../components/UnlockProperty/UnlockProperty"



const Services = () => {
    return (
        <div>

            <ServiceInvestments />
            <PropertyKeyFeatures card={propertyKeyData} />
            <HeroServices/> 
            <UnlockProperty/>
            <EffortlessProperty/>
       </div>
    )
}

export default Services
