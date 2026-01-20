import { EmployeeCardData, TeamHeaderData } from "../../data/OurTeamSection/OurTeamSectionData"
import EmployeeCard from "../EmployeeCard/EmployeeCard"
import Section from "../Section/Section"

const OurTeamSection = () => {
  return (
    <Section
        title={TeamHeaderData.title}
        description={TeamHeaderData.description}
        buttonText={TeamHeaderData.ButtonText}
    >
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-5 2xl:gap-7.5'>
          {EmployeeCardData.map(card => (
            <EmployeeCard key={card.id} card={card} />
          ))}
        </div>
    </Section>
  )
}

export default OurTeamSection
