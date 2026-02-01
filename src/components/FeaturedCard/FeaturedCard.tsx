import { useState } from "react";
import type { FeaturedCardProps } from "../../interfaces/FeaturedCard/FeaturedCard"
import Button from "../Button/Button"
import BaseCard from "../BaseCard/BaseCard";

const FeaturedCard = ({ id, image, alt, title, description, details, price, categoryBadge }: FeaturedCardProps) => {
      const [isReadMore, setIsReadMore] = useState(true);

      return (
            <BaseCard className="p-6! xl:p-7.5! 2xl:p-10! h-full self-start mx-auto xl:mx-0 max-w-112.5 md:max-w-full">

                  <div className="h-52.5 xl:h-63.5 2xl:h-79.5 rounded-[10px] mb-4 xl:mb-5 2xl:mb-7.5 relative">
                        <img src={image} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-[10px]" />
                  </div>

                  {categoryBadge && (
                        <div className="px-3 py-2 text-[14px] 2xl:text-[18px] font-medium border border-gray-15 rounded-[28px] w-fit bg-gray-10 mb-4 xl:mb-5">
                              {categoryBadge}
                        </div>
                  )}

                  <div className="flex flex-col grow">
                        <h3 className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">{title}</h3>
                        <p className="text-[14px] font-medium text-gray-60 leading-[150%] xl:text-[16px] 2xl:text-[18px] min-h-15">
                              {isReadMore ? description.slice(0, 60) + "..." : description}
                              <span onClick={() => setIsReadMore(!isReadMore)} className="text-white cursor-pointer underline ml-1">
                                    {isReadMore ? "Read more" : " Show less"}
                              </span>
                        </p>

                        {details && details.length > 0 && (
                              <div className="flex items-center flex-wrap gap-1.5 2xl:gap-2.5 pt-6 2xl:pt-7.5">
                                    {details.map((item, index) => (
                                          <div key={index} className="flex items-center gap-1 px-3.5 py-2 border border-gray-15 bg-gray-10 rounded-3xl">
                                                <img src={item.icon} alt="icon" className="w-5 h-5 2xl:w-6 2xl:h-6"/>
                                                <span className="text-sm">{item.description}</span>
                                          </div>
                                    ))}
                              </div>
                        )}

                        <div className={`flex justify-between items-center gap-[1vw]  pt-6 2xl:pt-7.5 }`}>
                              <div>
                                    <p className="text-[14px] 2xl:text-[18px] font-medium text-gray-60">Price</p>
                                    <p className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">{`$${price}`}</p>
                              </div>
                              <Button text="View Property Details" to={`/propertyDetails/${id}`} className=" bg-purple-60 text-white px-[2.24vw] xl:px-[3.3104vw]! 2xl:px-[2.83vw]! " />
                        </div>
                  </div>
            </BaseCard>
      );
};
export default FeaturedCard
