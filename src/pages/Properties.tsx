import  PropertyKeyFeatures from "../components/PropertyKeyFeatures/PropertyKeyFeatures"
import { propertyKeyData } from "../data/PropertyKeyFeatures/PropertyKeyFeatures"





const Properties = () => {
    return (
        <div>
          <PropertyKeyFeatures card={propertyKeyData} />
        </div>
    )
}

export default Properties
