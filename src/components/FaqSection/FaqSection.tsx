import { faqCardData, FaqHeaderData } from "../../data/FaqCardData/FaqCardData"
import FaqCard from "../FaqCard/FaqCard"
import Section from "../Section/Section"
import SliderMovement from "../SliderMovement/SliderMovement"

const FaqSection = () => {
  return (
      <Section 
        title={FaqHeaderData.title}
        description={FaqHeaderData.description}
        buttonText={FaqHeaderData.buttonText}
        className="xl:mb-18! 2xl:mb-24!"
      >
        <SliderMovement 
          data={faqCardData}
          renderItem={(card) => (
            <FaqCard key={card.id} card={card}/>
          )}
        />
      </Section>
  )
}

export default FaqSection
