import { defaultServices } from "../../data/HeroData/HeroData";
import SerivceCard from "../SerivceCard/SerivceCard";

const HeroCards = () => {
    return (
        <div className="w-[91.7948vw] mx-auto mt-10 xl:mt-0 flex flex-wrap gap-2.5 bg-gray-08 rounded-xl p-2.5 border border-solid border-gray-15 xl:w-full xl:rounded-none shadow-[0_0_0_4px_#191919]">
            {defaultServices.map((item, index) => (
                <SerivceCard
                  key={index}
                  logo={item.icon}
                  alt={item.alt}
                  titleService={item.serviceName}
                />
            ))}
        </div>
    )
}

export default HeroCards
