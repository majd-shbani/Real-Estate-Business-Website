
import Button from "../Button/Button"
import InfoGrid from "../FeaturesCard/InfoGrid"
import StatisticeSection from "../StatisticeSection/StatisticeSection"
import Title from "../Title/Title"

const HeroHome = () => {
    return (
        <header className="pt-36 xl:pt-0 my-10 xl:my-[98px] 2xl:my-36">
            <div className="pl-4 lg:pl-[7.8125vw] xl:pl-[5.55555vw] 2xl:pl-[8.4375vw] flex flex-col-reverse xl:flex-row xl:flex-wrap xl:items-center xl:justify-between">
                <div className="max-w-[100vw] pr-4 xl:pr-0 xl:max-w-[37.9166vw]">
                    <Title
                        title="Discover Your Dream Property with Estatein"
                        description="Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams."
                    />

                    <div className="">
                        <Button to="" className="w-full mb-4 bg-gray-15 md:w-fit md:mr-4 md:mb-12.5 2xl:mr-5 2xl:mb-15" text="Learn More"></Button>
                        <Button to="Properties" className="w-full mb-10 bg-purple-60 md:w-fit md:mr-4 md:mb-12.5 2xl:mr-5 2xl:mb-15" text="Browse Properties"></Button>
                    </div>

                    <StatisticeSection/>
                </div>

                <div className="xl:w-[47.9166vw] pr-4 xl:pr-0 mx-auto xl:mx-0 mb-22 xl:mb-0 flex flex-col-reverse relative max-w-[100vw] xl:max-w-[37.9166vw]">
                    <div className="absolute top-full xl:top-[40%] left-0 xl:-left-15 -translate-y-15 xl:-translate-y-full bg-gray-08  border border-solid border-gray-15 w-[117px] h-[117px] md:w-[129px] 2xl:w-[140px] md:h-[129px] 2xl:h-[140px] rounded-full  flex justify-center items-center">
                        
                        {/* الصورة الخلفية */}
                        <img
                            src="/Real-Estate-Business-Website/assets/images/herohome/textContainer.webp"
                            alt="textContainer img"
                            className="absolute inset-0 m-auto"
                        />

                        {/* الدائرة الداخلية + السهم */}
                        <div className="bg-gray-10 w-[53.18px] md:w-[58.63px] 2xl:w-[70px] h-[53.18px] 2xl:h-[70px] md:h-[58.63px] rounded-full flex justify-center items-center z-10">
                            <img
                            src="/Real-Estate-Business-Website/assets/images/herohome/arrow.webp"
                            alt="arrow icon"
                            />
                        </div>
                    </div>
                    <div className="w-full border border-sloid border-gray-15 rounded-xl xl:rounded-none">
                        <img className="w-full" src="/Real-Estate-Business-Website/assets/images/herohome/heroImage.webp" alt="hero img"></img>
                    </div>
                </div>

            </div>
            <div className="   border-t border-b border-gray-15 shadow-thin-grey xl:shadow-[0px_0px_0px_10px_#191919] mb-20 xl:mb-30 2xl:mb-37.5 mt-10 xl:mt-0 ">

            <InfoGrid/> 
            </div>
        </header>
    )
}

export default HeroHome
