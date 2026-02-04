import Section from '../Section/Section';

const Values = () => {
    const values = [
        {
            id: 1,
            title: "Trust",
            description: "Trust is the cornerstone of every successful real estate transaction.",
            icon: "./assets/icons/Star.svg" 
        },
        {
            id: 2,
            title: "Excellence",
            description: "We set the bar high for ourselves. From the properties we list to the services we provide.",
            icon: "./assets/icons/Excellence.svg"
        },
        {
            id: 3,
            title: "Client-Centric",
            description: "Your dreams and needs are at the center of our universe. We listen, understand.",
            icon: "./assets/icons/Client.svg"
        },
        {
            id: 4,
            title: "Our Commitment",
            description: "We are dedicated to providing you with the highest level of service, professionalism",
            icon: "./assets/icons/Star.svg"
        }
    ];

    return (
        <div className="flex flex-col xl:flex-row items-center w-full
            gap-5 lg:gap-15 2xl:gap-20
            px-4 lg:px-20 2xl:px-40.5
            py-12.5 2xl:py-15"> 
            
            {/* Left Section - SectionHeader Component */}
            <div className="
                flex-1 w-full 
                flex flex-col gap-3.5 
                items-start text-left
            ">
                <Section
                   title="Our Values"
                   description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                   className="text-left pl-0! pr-0! mb-0! " 
                 
                />
            </div>

            {/* Right Section - Cards Grid */}
            <div className="
                flex-2 w-full
                grid grid-cols-1 md:grid-cols-2 
                gap-5 lg:gap-0 
                p-6 lg:p-12.5 2xl:p-15
                rounded-xl border border-Silver dark:border-gray-15
                shadow-[0px_0px_0px_10px_#d4d4d4] 
                dark:shadow-[0px_0px_0px_10px_#191919] 
                relative
                lg:after:content-[''] lg:after:absolute lg:after:top-1/2 lg:after:h-px lg:after:bg-Silver dark:lg:after:bg-gray-15 lg:after:-translate-y-1/2
                lg:after:lg:left-12.5 lg:after:lg:right-12.5
                lg:after:2xl:left-15 lg:after:2xl:right-15
            ">
                {values.map((item, index) => (
                    <div key={item.id} className={`
                        border-b border-Silver dark:border-gray-15
                        pb-5
                        last:border-b-0
                        lg:pb-0 lg:border-b-0
                        ${index % 2 === 0 ? "lg:border-l-0" : "lg:border-l border-Silver dark:border-gray-15 lg:pl-5 xl:pl-6 2xl:pl-7.5"}
                        ${index < 2 ? "lg:mb-6 2xl:mb-7.5" : "lg:mt-6 2xl:mt-7.5"}
                    `}>
                        <div className="flex items-center gap-5
                        mb-3.5 lg:mb-4 2xl:mb-5
                        ">
                             {/* Icon */}
                             <div className="
                                rounded-[52px] border border-purple-60 
                                flex items-center justify-center relative
                                shrink-0
                                p-3.5 lg:p-4 2xl:p-5 gap-2.5
                                
                             ">
                                <img 
                                    src={item.icon} 
                                    alt={item.title} 
                                    className=" relative w-6 h-6 lg:w-7 lg:h-7 2xl:w-8.5 2xl:h-8.5 "
                                />
                             </div>
                             <h3 className="text-lg lg:text-xl 2xl:text-2xl font-semibold ">{item.title}</h3>
                        </div>
                        <p className=" text-sm lg:text-base 2xl:text-lg leading-[150%] text-gray-60 ">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Values;
