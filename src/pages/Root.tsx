import { Outlet } from "react-router-dom"
import Nav from "../components/Nav/Nav"
import StartJourney from "../components/StartJourney/StartJourney"

import { journeyProps } from "../data/JourneyStart/StartJourney"
import { footerProps } from "../data/Footer/Footer"
import Footer from "../components/Footer/Footer"



const Root = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <StartJourney journeyProps={journeyProps} />
            <Footer footerProps={footerProps} />
        </div>
    )
}

export default Root
