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
            description: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
            icon: "./assets/icons/Star.svg"
        }
    ];

    return (
        <div className="flex flex-col lg:flex-row items-center w-full
            gap-5 lg:gap-20 2xl:gap-20
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
                gap-5 lg:gap-7.5
                p-6 lg:p-12.5 2xl:p-15
                rounded-xl border border-gray-15
                shadow-[0px_0px_0px_10px_#191919] 
            ">
                {values.map((item, index) => (
                    <div key={item.id} className={`
                          border-b border-gray-15
                        pb-5
                        last:border-b-0
                        lg:pb-0 lg:border-b-0
                        ${index % 2 === 0 ? "lg:border-l-0" : "lg:border-l lg:border-gray-15 lg:pl-5"}`}
                        >
                        <div className="flex items-center gap-5 ">
                             {/* Icon */}
                             <div className="
                                rounded-[52px] border border-purple-60 
                                flex items-center justify-center relative
                                shrink-0
                                p-3.5 lg:p-4 2xl:p-5 gap-2.5
                                mb-3.5 lg:mb-4 2xl:mb-5
                             ">
                                <img 
                                    src={item.icon} 
                                    alt={item.title} 
                                    className="relative  "
                                />
                             </div>
                             <h3 className="text-lg lg:text-xl 2xl:text-2xl font-semibold ">{item.title}</h3>
                        </div>
                        <p className=" text-sm lg:text-base 2xl:text-lg line-height-[150%]">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Values;
