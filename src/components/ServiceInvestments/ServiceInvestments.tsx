
import { ServiceInvestmentsData } from "../../data/ServiceInvestments/ServiveInvestments"
import SectionHeader from "../SectionHeader/SectionHeader"
import ServicePropertyCard from "../ServicePropertyCard/ServicePropertyCard"

const ServiceInvestments = () => {
  return (
    <div className="bg-gray-08 w-full px-4 lg:px-[7.8125vw] xl:px-[5.55555vw] 2xl:px-[8.4375vw]">
     
      <div className="flex flex-col xl:gap-[50px] 2xl:gap-15 lg:flex-row ">
     
        <div className=" lg:w-[33%]">
           <SectionHeader 
              title={ServiceInvestmentsData.headerData.title} 
              description={ServiceInvestmentsData.headerData.description}
              className={ServiceInvestmentsData.headerData.className}
           />
        
          <h4></h4>
          
        </div>
        
        <div className="lg:w-[65%] grid grid-cols-1 gap-5 sm:border  sm:border-gray-15 sm:rounded-xl sm:grid-cols-2 lg:gap-2.5 lg:grid-cols-2 sm:p-2.5 sm:bg-gray-10">
          {ServiceInvestmentsData.cardsData.map((card) => {
            return (
              <div className="">
              <ServicePropertyCard 
               id={card.id}
               image={card.image}
               title={card.title}
               description={card.description}
               className="bg-gray-08 "
              />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ServiceInvestments


