import ServiceInvestments from "../components/ServiceInvestments/ServiceInvestments"
import ServicePropertyCard from "../components/ServicePropertyCard/ServicePropertyCard"


const Services = () => {
    return (
        <div>
          <ServicePropertyCard 
          id={1}
            title="Luxury Villa"
            description="Experience the epitome of luxury living in this stunning villa, featuring exquisite design, spacious interiors, and breathtaking views."
           
            image="./assets/images/service-property-1.jpg"
            className="bg-gray-08 text-white"
          />
          <ServiceInvestments />
        </div>
    )
}

export default Services
