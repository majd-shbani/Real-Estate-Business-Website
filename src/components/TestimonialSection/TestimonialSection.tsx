import { TestimonialHeaderData, testimonialsData } from "../../data/TestimonialCardData/TestimonialCardData"
import Section from "../Section/Section"
import TestimonialCard from "../TestimonialCard/TestimonialCard"

const TestimonialSection = () => {
  return (
    <Section 
      title={TestimonialHeaderData.title}
      description={TestimonialHeaderData.description}
      buttonText={TestimonialHeaderData.buttonText}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-5 2xl:gap-7.5'>
        {testimonialsData.map(card => (
          <TestimonialCard key={card.id} card={card} />
        ))}
      </div>
    </Section>
    
  )
}

export default TestimonialSection
