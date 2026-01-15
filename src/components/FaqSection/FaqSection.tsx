import { faqCardData } from "../../data/FaqCardData/FaqCardData"
import FaqCard from "../FaqCard/FaqCard"

const FaqSection = () => {
  return (
      <div className='grid grid-cols-1 xl:grid-cols-3 xl:gap-5 2xl:gap-7.5'>
        {faqCardData.map(card => (
            <FaqCard key={card.id} card={card}/>
        ))}
      </div>
  )
}

export default FaqSection
