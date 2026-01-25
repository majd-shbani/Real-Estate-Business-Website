import { useState } from "react";
import Section from "../Section/Section"
import { DiscoverOurOfficeLocationsData } from "../../data/DiscoverOurOfficeLocationsData/DiscoverOurOfficeLocationsData";
import CardDiscoverOfiiceLoaction from "../CardDiscoverOfiiceLoaction/CardDiscoverOfiiceLoaction";

const DiscoverOurOfficeLocations = ({filters} : {filters: Array<string>}) => {
    const [selectedType, setSelectedType] = useState("All");
    const [active, setActive] = useState("All")
    return (
        <div className="my-20 xl:my-30 2xl:my-[150px]">
            <Section title="Discover Our Office Locations" description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you">
                <div className="max-w-129 mb-[30px] xl:mb-10 2xl:mb-[50px] p-2.5 rounded-lg 2xl:rounded-xl bg-gray-10 flex flex-wrap xl:flex-nowrap gap-2.5 items-center text-[clamp(12px,3vw,14px)] 2xl:text-lg font-semibold text-center">
                    {filters?.map((filter, index) => {
                        return(
                            <button key={index} className={`flex-1 xl:basis-[158.6666px] rounded-[10px] py-3.5 2xl:py-[18px] px-[clamp(8px,2vw,20px)] whitespace-nowrap 2xl:px-6  border border-solid ${active == filter ? "bg-gray-08 border-gray-08" : "border-gray-15" }`} onClick={() => {
                                setSelectedType(`${filter}`)
                                setActive(`${filter}`)
                            }}>
                                {filter}
                            </button>
                        )
                    })}
                </div>
                <div className="flex flex-col xl:flex-row justify-between gap-5 2xl:gap-[30px]">
                    {DiscoverOurOfficeLocationsData.filter((data) => selectedType === "All" || data.type === selectedType).map((card, index) => {
                        return(
                            <CardDiscoverOfiiceLoaction key={index} office={card.office} title={card.title} desc={card.desc} contact={card.contact}/>
                        )
                    })}
                </div>
            </Section>
        </div>
    )
}

export default DiscoverOurOfficeLocations
