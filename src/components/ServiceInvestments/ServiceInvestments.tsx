
import { ServiceInvestmentsData } from "../../data/ServiceInvestments/ServiceInvestments"
import { CardVertical } from "../../data/UnblockCards/UnblockCards"
import SectionHeader from "../SectionHeader/SectionHeader"
import ServicePropertyCard from "../ServicePropertyCard/ServicePropertyCard"
import UnblockCard from "../UnblockCard/UnblockCard"

{/*<ServiceInvestments /> */ }

const ServiceInvestments = () => {
  return (
  
    <div className="w-full px-4 lg:px-[7.8125vw] xl:px-[5.55555vw] 2xl:px-[8.4375vw] mb-20 xl:mb-30 2xl:mb-37.5 ">
     
      <div className="flex flex-col gap-10 xl:gap-12.5 2xl:gap-15 lg:flex-row ">
     
        <div className=" lg:w-[33%] flex flex-col gap-7.5 sm:gap-0">
           <SectionHeader 
              title={ServiceInvestmentsData.headerData.title} 
              description={ServiceInvestmentsData.headerData.description}
              className={ServiceInvestmentsData.headerData.className}
           />
        
          <UnblockCard
          card ={CardVertical} 
          />
          
        </div>
        
        <div className="lg:w-[65%]  grid grid-cols-1 gap-2.5 border  border-gray-15 rounded-xl sm:grid-cols-2 lg:gap-2.5 lg:grid-cols-2 p-2.5 bg-gray-10">
          {ServiceInvestmentsData.cardsData.map((card) => {
            return (
              <div >
              <ServicePropertyCard 
               id={card.id}
               image={card.image}
               title={card.title}
               description={card.description}
               className=" lg:py-15 bg-[#ffffff] dark:bg-gray-08 "
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

/*

  <SectionHeader 
              title={ServiceInvestmentsData.headerData.title} 
              description={ServiceInvestmentsData.headerData.description}
              className={ServiceInvestmentsData.headerData.className}
           />
*/ 
