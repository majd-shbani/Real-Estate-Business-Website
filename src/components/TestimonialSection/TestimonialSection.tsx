import { testimonialsData } from "../../data/TestimonialCardData/TestimonialCardData"
import TestimonialCard from "../TestimonialCard/TestimonialCard"

const TestimonialSection = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-5 2xl:gap-7.5'>
      {testimonialsData.map(card => (
        <TestimonialCard key={card.id} card={card} />
      ))}
    </div>
  )
}

export default TestimonialSection
