interface FeaturesCardProps {
    icon: string;
    title: string;
}

const FeaturesCard = ({ icon, title }: FeaturesCardProps) => {
    return (
        <div className="relative bg-gray-15 rounded-3xl py-5 px-3.5 lg:py-10 lg:px-5 border
         border-gray-15 hover:border-purple-60 transition-all duration-300 group flex flex-col items-center justify-center h-full">
        
            <div className="absolute 2xl:p-[6.37px] top-5 right-5">
                <img src="./assets/icons/Arrow.svg" alt="arrow-icon" width={21.25} height={21.25} className="" />
            </div>

            <div className="">
            
                    <div className="mb-3.5 lg:mb-5 flex items-center justify-center w-12 lg:w-20.5">
                        <img src={icon} alt={title} className=" lg:w-full " />
                    </div>
                
            </div>

            <h3 className="text-white font-urbanist text-sm lg:text-[20px] font-semibold text-center">
                {title}
            </h3>
        </div>
    );
};

export default FeaturesCard;
