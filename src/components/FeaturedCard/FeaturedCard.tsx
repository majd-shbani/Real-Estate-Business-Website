import { useState } from "react";
import type { FeaturedCardProps } from "../../interfaces/FeaturedCard/FeaturedCard"
import Button from "../Button/Button"
import BaseCard from "../BaseCard/BaseCard";

const FeaturedCard = ({ id, image, alt, title, description, details, price }: FeaturedCardProps) => {
      const [isReadMore, setIsReadMore] = useState(true);

      const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
      };

      return (
            <BaseCard className="p-6! xl:p-7.5! 2xl:p-10! max-w-125 xl:max-w-full dark:text-white">
                  <div className="rounded-[10px] mb-4 xl:mb-5 2xl:mb-7.5 ">
                        <img src={image} alt={alt} className="w-full"></img>
                  </div>
                  <div className=" flex flex-col grow">
                        <h3>{title}</h3>
                        <p className="text-[14px] font-medium text-gray-60 leading-[150%] xl:text-[16px] 2xl:text-[18px] min-h-15">
                              {isReadMore ? description.slice(0, 60) + "..." : description}

                              <span
                                    onClick={toggleReadMore}
                                    className="text-white cursor-pointer underline"
                              >
                                    {isReadMore ? "Read more" : " Show less"}
                              </span>
                        </p>

                        <div className="flex items-center flex-wrap gap-1.5 2xl:gap-2.5 py-5 xl:py-6 2xl:py-7.5">
                              {details.map((item, index) => (
                                    <div key={index} className="flex items-center gap-1 px-3.5 py-2 border border-gray-15 bg-gray-10 rounded-3xl">
                                          <img src={item.icon} alt="icon"></img>
                                          <span>{item.description}</span>
                                    </div>
                              ))}
                        </div>
                        <div className="flex justify-between items-center gap-7.5  mt-auto">
                              <div>
                                    <p className="text-[14px] 2xl:text-[18px] font-medium text-gray-60">Pric:</p>
                                    <p className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-semibold">{`$${price}`}</p>
                              </div>
                              <Button
                                    text="View Property Details" to={`/propertyDetails/${id}`}
                                    className=" ... max-[400px]:text-[10px] bg-purple-60 border-none! text-white px-[2.7vw] xl:px-[2.4vw]! 2xl:px-[2.8vw]! [@media(min-width:1500px)_and_(max-width:1810px)]:px-4!">
                              </Button>
                        </div>
                  </div>

            </BaseCard>
      )
}

export default FeaturedCard
