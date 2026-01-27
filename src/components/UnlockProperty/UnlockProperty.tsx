import { UnblockCardData, UnblockInformations } from "../../data/UnlockSectionData/UnlockSectionData"
import Section from "../Section/Section"
import ServicePropertyCard from "../ServicePropertyCard/ServicePropertyCard"
import UnblockCard from "../UnblockCard/UnblockCard"


const UnlockProperty = () => {
    return (
        <Section title="Unlock Property Value"
                description={`Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7.5 lg:gap-x-5 lg:gap-y-10 ">
                        {UnblockInformations.map((information) => {
                            return(
                                <ServicePropertyCard
                                id = {information.id}
                                title={information.title}
                                description={information.description}
                                image={information.image}
                                />
                            )
                        })}
                        <div className="sm:col-span-2">
                            <UnblockCard card={UnblockCardData}/>
                        </div>
                    </div>
        </Section>
    )
}

export default UnlockProperty