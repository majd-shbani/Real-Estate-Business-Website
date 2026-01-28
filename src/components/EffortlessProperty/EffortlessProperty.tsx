

import { effortlessCardData, effortlessInformations } from '../../data/EffortlessSectionData/EffortlessData'
import Section from '../Section/Section'
import ServicePropertyCard from '../ServicePropertyCard/ServicePropertyCard'

import UnblockCard from '../UnblockCard/UnblockCard'


const EffortlessProperty = () => {
    return (
        <Section title="Effortless Property Management"
                description={`Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 2xl:gap-7.5">
                        {effortlessInformations.map((information) => {
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
                            <UnblockCard card={effortlessCardData}/>
                        </div>
                    </div>
        </Section>
    )
}

export default EffortlessProperty
