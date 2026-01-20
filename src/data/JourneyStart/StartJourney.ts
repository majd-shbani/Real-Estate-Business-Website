import type { JourneyProps } from "../../interfaces/StartJourney/StartJourney";

export let journeyProps : JourneyProps = {
    title: "Start Your Real Estate Journey Today",
    description: "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.",
    exploreButton: "Explore Properties",
    rightImage: "./assets/images/AbstractDesign(5).webp",
    leftImage: "./assets/images/AbstractDesign(4).webp" ,
    button : {
        text: "Explore Properties",
        to: "/",
        style: "absolute  bottom-4 w-[93%] bg-purple-60 sm:bottom-15 md:top-[90px] md:right-20 lg:right-30 2xl:right-50 md:top-[105px] 2xl:top-[152px] md:w-38 md:h-13 lg:text-[14px] md:px-4 2xl:w-48  2xl:px-[15px] 2xl:py-[15px] "
    }
}