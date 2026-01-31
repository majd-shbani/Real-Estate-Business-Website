import React from 'react';

interface FeaturesCardProps {
    icon: string;
    title: React.ReactNode;
}

const FeaturesCard = ({ icon, title }: FeaturesCardProps) => {
    return (
        <div className="
        
        relative bg-gray-10 rounded-[10px] py-5 px-3.5 xl:px-4 xl:py-7.5 2xl:py-10 2xl:px-5 border
         border-gray-15 hover:border-purple-60 transition-all duration-300 group flex flex-col items-center justify-center h-full">
        
            <div className="absolute 2xl:p-[6.37px] top-5 right-5 ">
                <img src="./assets/icons/Arrow.svg" alt="arrow-icon" width={21.25} height={21.25} className="" />
            </div>

            <div className="">
            
                    <div className="mb-3.5 lg:mb-5 flex items-center justify-center w-12 xl:w-15 2xl:w-20.5">
                        <img src={icon} alt={typeof title === 'string' ? title : 'icon'} className="  " />
                    </div>
                
            </div>

            <h3 className="text-white font-urbanist text-sm xl:text-base 2xl:text-xl font-semibold text-center text-leading-[150%]">

                {title}
                
            </h3>
            
        </div>
        
    );
    
};

export default FeaturesCard;
