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
        style: "absolute  bottom-4 w-[93%] bg-purple-60 sm:bottom-15 xl:right-40 xl:top-[105px] xl:w-38 xl:h-13 xl:text-[14px] xl:px-4 2xl:w-48  2xl:px-[15px] 2xl:py-[15px] "
    }
}