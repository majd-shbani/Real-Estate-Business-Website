
import Button from "../Button/Button"
import InfoGrid from "../FeaturesCard/InfoGrid"
import StatisticeSection from "../StatisticeSection/StatisticeSection"
import Title from "../Title/Title"

import { motion } from "framer-motion";

const HeroHome = () => {
    return (
        <header className="pt-[184px] xl:pt-24.5 2xl:pt-36">
            <div className="pl-0 xl:pl-[5.55555vw] 2xl:pl-[8.4375vw] flex flex-col-reverse xl:flex-row xl:flex-wrap xl:items-center xl:justify-between">
                <div className="xl:w-[42.3611vw] 2xl:w-[39.4791vw] px-4 lg:px-[7.8125vw] xl:px-0">
                    <Title
                        title="Discover Your Dream Property with Estatein"
                        description="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
                    />

                    <div className="">
                        <Button to="" className="w-full mb-4 bg-Platinum dark:bg-gray-15 md:w-fit md:mr-4 md:mb-12.5 2xl:mr-5 2xl:mb-15 leading-[150%]" text="Learn More"></Button>
                        <Button to="Properties" className="w-full mb-10 text-white bg-Indigo dark:bg-purple-60 md:w-fit md:mr-4 md:mb-12.5 2xl:mr-5 2xl:mb-15 leading-[150%]" text="Browse Properties"></Button>
                    </div>

                    <StatisticeSection className="[&>div]:p-4 [&>div]:xl:py-3.5 [&>div]:xl:px-5 [&>div]:2xl:py-4 [&>div]:2xl:px-6"/>
                </div>

                <div className="xl:w-[47.9166vw] px-4 xl:px-0 mx-auto xl:mx-0 mb-14 xl:mb-0 flex flex-col-reverse relative">
                    <motion.div
                        className="absolute z-20 bg-Alice-Blue dark:bg-gray-08 top-full xl:top-[40%] left-0 xl:-left-15 2xl:-left-23 -translate-y-15 xl:-translate-y-full  border border-solid border-Silver dark:border-gray-15 w-29.25 h-29.25 md:w-32.25 2xl:w-43.75 md:h-32.25 2xl:h-43.75 rounded-full  flex justify-center items-center"
                        animate={{
                            rotate: 360,
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            rotate: {
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            scale: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.3 }
                        }}
                    >
                        
                        {/* الصورة الخلفية */}
                        <img

                            src="/assets/images/herohome/textContainer.webp"

                            alt="textContainer img"
                            className="w-[96.12px] xl:w-[105.99] 2xl:w-[143.76px] h-[96.05px] xl:h-[105.99] 2xl:h-[143.76px] absolute inset-0 m-auto invert dark:invert-0"
                        />

                        {/* الدائرة الداخلية + السهم */}
                        <div className="bg-Platinum dark:bg-gray-10 w-[53.18px] md:w-[58.63px] 2xl:w-17.5 h-[53.18px] 2xl:h-17.5 md:h-[58.63px] rounded-full flex justify-center items-center z-10">
                            <img
                            src="/assets/images/herohome/arrow.webp"
                            className=" invert dark:invert-0"
                            alt="arrow icon"
                            />
                        </div>
                    </motion.div>
                    <div className="w-full bg-Platinum dark:bg-gray-10 border border-sloid border-Silver dark:border-gray-15 rounded-xl  relative flex justify-center items-center z-10">

                        <img className="w-full absolute" src="/assets/images/herohome/heroHome.webp" alt="hero img"></img>
                        <img className="w-full relative rounded-xl" src="/assets/images/herohome/abstractDesignHeroHome.webp" alt="hero img"></img>

                    </div>
                </div>

            </div>
            <div className="border-t border-b border-gray-15 shadow-thin-grey xl:shadow-[0px_0px_0px_10px_#191919] mb-20 xl:mb-30 2xl:mb-37.5 mt-10 xl:mt-0 ">

            <InfoGrid/> 
            </div>
        </header>
    )
}

export default HeroHome
