import { useState } from "react";
import type { PropsDetails } from "../../interfaces/PropertyDetailsHeader/PropertyDetailsHeader";
import PaginationDots from "../PaginationDots/PaginationDots";



const PropertyDetailsHeader = ({ property }: PropsDetails) => {
      const [activeIndex, setActiveIndex] = useState(0);

      return (
            <div className="w-full px-4 lg:px-[7.8125vw] xl:px-[5.55555vw] 2xl:px-[8.4375vw] pt-51.5 2xl:pt-70.5 mb-5 2xl:mb-7.5">

                  {/* 1. Header Section */}
                  <div className="flex flex-col gap-2.5 xl:flex-row xl:gap-5 xl:items-center mb-7.5 xl:mb-10 2xl:mb-12.5">
                        <h2 className="text-[20px] xl:text-[24px] 2xl:text-[30px] font-semibold text-nowrap">{property.title}</h2>
                        <div className="flex justify-between items-center flex-wrap gap-2.5 w-full">
                              <div className="p-2.5 flex items-center gap-1.5 border border-Silver dark:border-gray-15 rounded-lg w-fit">
                                    <img src="/assets/icons/Location-Icon.svg" alt="Location-Icon" className="invert dark:invert-0"></img>
                                    <span className=" text-[14px] 2xl:text-[18px] font-medium">{property.location}</span>
                              </div>
                              <div className="flex flex-row xl:flex-col items-center gap-1 xl:items-start">
                                    <p className="text-gray-60 text-[14px] 2xl:text-[18px] font-medium">Price</p>
                                    <p className="text-[18px] xl:text-[20px] 2xl:text-[24px]">${property.price.toLocaleString()}</p>
                              </div>
                        </div>
                  </div>

                  {/* 2. Image Gallery Section */}
                  <div className="bg-Platinum dark:bg-gray-15 p-5 xl:p-10 2xl:p-12.5 border border-Silver dark:border-gray-15 rounded-xl">
                        <div className="flex flex-col-reverse md:flex-col gap-5 2xl:gap-7.5">
                              <div className="flex w-full gap-2 overflow-x-auto p-2.5 2xl:p-5 custom-scrollbar border dark:bg-gray-08 dark:border-gray-15 bg-Alice-Blue border-Silver rounded-xl  ">
                                    {property.images.map((img, index) => (
                                          <button
                                                key={img.id}
                                                onClick={() => setActiveIndex(index)}
                                                className={`relative flex-1 h-10.25 min-w-16.75 md:h-18.5 md:min-w-[30.5px] 2xl:h-23.5 2xl:min-w-36 rounded-lg overflow-hidden transition-all shrink-0
                                                ${activeIndex === index ? 'border border-pu' : 'border-transparent opacity-60'}`}
                                          >
                                                <img src={img.url} alt={img.alt} className="object-cover w-full h-full" />
                                          </button>
                                    ))}
                              </div>

                              {/* Main Side-by-Side Display */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-7.5 h-62.5 xl:h-126.75 2xl:h-145.75">

                                    <div className="w-full h-full overflow-hidden rounded-[10px]">
                                          <img
                                                src={property.images[activeIndex].url}
                                                className="w-full h-full object-cover"
                                                alt="Main view 1"
                                          />
                                    </div>

                                    <div className="w-full h-full overflow-hidden rounded-[10px] hidden md:block">
                                          <img
                                                src={property.images[(activeIndex + 1) % property.images.length].url}
                                                className="w-full h-full object-cover"
                                                alt="Main view 2"
                                          />
                                    </div>
                              </div>

                        </div>

                        <div className="flex justify-between md:justify-center items-center w-full mt-5 2xl:mt-7.5 gap-4 p-2 2xl:p-2.5 dark:bg-gray-08 bg-Alice-Blue sm:w-fit mx-auto rounded-[100px]">
                              <button onClick={() => setActiveIndex(prev => prev > 0 ? prev - 1 : 0)} className="p-2.5 2xl:p-3.5 border dark:border-gray-15 border-Silver rounded-full">
                                    <img src="/assets/icons/arrow-left-Icon.svg" alt="arrow-left-Icon" className="invert-0 w-6 h-6 2xl:w-7.5 2xl:h-7.5 "/>
                              </button>

                              <PaginationDots
                                    total={property.images.length}
                                    activeIndex={activeIndex}
                              />

                              <button onClick={() => setActiveIndex(prev => (prev + 1) % property.images.length)} className="p-2.5 2xl:p-3.5 border dark:border-gray-15 border-Silver rounded-full">
                                    <img src="/assets/icons/arrow-right-Icon.svg" alt="arrow-right-Icon" className="invert dark:invert-0 w-6 h-6 2xl:w-7.5 2xl:h-7.5" />
                              </button>
                        </div>
                  </div>
            </div>
      )
}

export default PropertyDetailsHeader
