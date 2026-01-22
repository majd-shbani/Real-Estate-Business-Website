import { ValuedClient } from "../../data/ClientSectionData/ClientSectionData"
import Section from "../Section/Section"
import ValuedClientCard from "../ValuedClientCard/ValuedClientCard"

const ValuedClientSection = () => {
      return (
            <Section title="Our Valued Clients" description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 2xl:gap-12.5">
                        {ValuedClient.map((item) => (
                              <ValuedClientCard key={item.id} card={item}></ValuedClientCard>
                        ))}

                  </div>
            </Section>
      )
}

export default ValuedClientSection
