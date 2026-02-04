import type { JourneyProps } from "../../interfaces/StartJourney/StartJourney";

export let journeyProps : JourneyProps = {
    title: "Start Your Real Estate Journey Today",
    description: "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.",
    exploreButton: "Explore Properties",
    rightImage: "/assets/images/AbstractDesign(5).webp",
    leftImage: "/assets/images/AbstractDesign(4).webp" ,
    button : {
        text: "Explore Properties",
        to: "/",
        style: "absolute text-white border border-Indigo! dark:border-purple-60! bottom-10 w-[93%] bg-Indigo dark:bg-purple-60  sm:bottom-15  md:right-20 lg:right-20 2xl:right-40 md:top-[135px] lg:top-[105px] 2xl:top-[152px] md:w-[154px] md:h-[49px] lg:text-[14px] font-medium tracking-normal 2xl:w-[194px] 2xl:h-[63px] "
    }
}