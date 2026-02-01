import { TestimonialHeaderData, testimonialsData } from "../../data/TestimonialCardData/TestimonialCardData"
import Section from "../Section/Section"
import SliderMovement from "../SliderMovement/SliderMovement"
import TestimonialCard from "../TestimonialCard/TestimonialCard"

const TestimonialSection = () => {
  return (
    <Section 
      title={TestimonialHeaderData.title}
      description={TestimonialHeaderData.description}
      buttonText={TestimonialHeaderData.buttonText}
    >
      <SliderMovement 
        data={testimonialsData}
        renderItem={(card) => (
          <TestimonialCard key={card.id} card={card} />
        )}
      />
    </Section>
    
  )
}

export default TestimonialSection
