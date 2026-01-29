
import type { PropertyKeyFeatures } from "../../interfaces/PropertyKeyFeatures/PropertyKeyFeatures"

 {/*<PropertyKeyFeatures card={propertyKeyData} />*/}

const PropertyKeyFeatures = ( card  : PropertyKeyFeatures) => {
  return (
    <div className="w-full px-4 lg:px-[7.8125vw] xl:px-[5.55555vw] 2xl:px-[8.4375vw] flex flex-col lg:flex-row  gap-5 lg:gap-5 2xl:gap-7.5   py-5 ">

      <div className="border border-gray-15 rounded-xl leading-[150%] p-5 xl:p-10 h-max  2xl:p-12.5 lg:w-[49%]">
        <div className="mb-5 xl:mb-10 2xl:mb-12.5   ">
        <h2 className=" font-semibold text-[18px] xl:text-[20px] mb-1.5 xl:mb-2.5 2xl:mb-3.5 2xl:text-[24px]">{card.card.title}</h2>
        <p className="text-gray-60 text-[14px] xl:text-[16px] 2xl:text-[18px]">{card.card.description}</p>
        </div>

        <div className="relative grid grid-cols-2 grid-rows-2 divide-y sm:divide-y-0 divide-gray-300 border-t sm:flex sm:divide-x sm:divide-gray-25 sm:justify-between border-gray-15  sm:pt-3 xl:pt-4 2xl:pt-7 ">

          {card.card.propertyRooms.map((item) => {
            return (
              <div className={`relative flex flex-col  last:odd:col-span-2  first:after:absolute first:after:right-0 first:after:top-1/4   first:after:h-13.5  first:after:w-px  first:after:bg-gray-15  first:after:sm:w-0 
                 border-gray-15 pl-4 my-auto py-5 sm:py-0  md:px-2.5 lg:px-0  sm:w-[30%]   `}>
 
                <div className="flex 2xl:mb-2.5 gap-1 2xl:gap-[7px]">
                  
                <img className="h-5 w-5 2xl:h-6 2xl:w-6" src={item.icon}></img>
                <h3 className="text-gray-60 text-[14px] xl:text-[14px] 2xl:text-[18px]">{item.name}</h3>
                </div>
                <p className="  text-[18px] xl:text-[20px] xl:w-max font-semibold  2xl:text-[24px]">{item.value}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="p-5 xl:p-10 2xl:p-12.5 border border-gray-15 rounded-xl lg:w-[49%]">

        <h2 className=" font-semibold mb-5 text-[18px] xl:text-[20px] xl:mb-10 2xl:text-[24px] 2xl:mb-12.5">{card.card.keyFeatures.title}</h2>
        <div className="flex flex-col gap-4.5 xl:gap-5 2xl:gap-7.5 ">
          {card.card.keyFeatures.features.map((item) => {
            return (
              <div className="align-center  2xl:h-[63px] border-l-1 border-purple-60 bg-gradient-to-r from-gray-10 to-transparent 2xl:w-max">
                <div className="flex px-2.5 py-3 gap-2.5 xl:gap-2.5 xl:p-4 2xl:px-[24px] 2xl:py-5 ">
                  <img className="my-auto h-[18px] w-[18px] lg:h-5 lg:w-5 " src={item.icon}></img>
                  <p className="text-gray-60  text-[14px] xl:text-[16px] 2xl:text-[18px]">{item.feature}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default PropertyKeyFeatures

