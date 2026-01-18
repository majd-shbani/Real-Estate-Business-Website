import { faqCardData, FaqHeaderData } from "../../data/FaqCardData/FaqCardData"
import FaqCard from "../FaqCard/FaqCard"
import Section from "../Section/Section"

const FaqSection = () => {
  return (
      <Section 
        title={FaqHeaderData.title}
        description={FaqHeaderData.description}
        buttonText={FaqHeaderData.buttonText}
        className="xl:mb-18! 2xl:mb-24!"
      >
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-5 2xl:gap-7.5'>
        {faqCardData.map(card => (
            <FaqCard key={card.id} card={card}/>
        ))}
      </div>
      </Section>
  )
}

export default FaqSection
