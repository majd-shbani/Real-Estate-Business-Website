import { ValuedClient } from "../../data/ClientSectionData/ClientSectionData"
import Section from "../Section/Section"
import SliderMovement from "../SliderMovement/SliderMovement"
import ValuedClientCard from "../ValuedClientCard/ValuedClientCard"

const ValuedClientSection = () => {
      return (
            <Section title="Our Valued Clients" description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving">
                  <SliderMovement
                        data={ValuedClient}
                        renderItem={(card) => (
                              <ValuedClientCard key={card.id} card={card} />
                        )}
                        breakpoints={{
                              768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20
                              },
                              1280: {
                                    slidesPerView: 2,
                                    spaceBetween: 40
                              },
                              1441: {
                                    slidesPerView: 2,
                                    spaceBetween: 50
                              }
                        }}
                  />
            </Section>
      )
}

export default ValuedClientSection
