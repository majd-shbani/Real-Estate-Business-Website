import PropertyKeyFeatures from "../components/PropertyKeyFeatures/PropertyKeyFeatures"
import ServiceInvestments from "../components/ServiceInvestments/ServiceInvestments"
import { propertyKeyData } from "../data/PropertyKeyFeatures/PropertyKeyFeatures"


const Services = () => {
    return (
        <div>

           <ServiceInvestments />
           <PropertyKeyFeatures card={propertyKeyData} />
        </div>
    )
}

export default Services
