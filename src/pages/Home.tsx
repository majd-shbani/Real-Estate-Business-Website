import Footer, { type FooterProps } from "../components/Footer/Footer"
import StartJourney from "../components/StartJourney/StartJourney"
import { footerProps } from "../data/Footer/Footer"
import { journeyProps } from "../data/JourneyStart/StartJourney"






const Home = () => {
    return (
        <div>
            <StartJourney journeyProps={journeyProps} />
           <Footer footerProps={footerProps} />
          
        </div>
    )
}

export default Home
