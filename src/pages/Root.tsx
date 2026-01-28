import { Outlet } from "react-router-dom"
import Nav from "../components/Nav/Nav"
import StartJourney from "../components/StartJourney/StartJourney"

import { journeyProps } from "../data/JourneyStart/StartJourney"
import { footerProps } from "../data/Footer/Footer"
import Footer from "../components/Footer/Footer"
import { useState } from "react"



const Root : React.FC = () => {
    const [status, setStatus] = useState<boolean>(true)
    const editStatusHandle = (): void => {
    setStatus((prev) => !prev)
    }
    return (
        <div className={`${status? "text-white bg-gray-08" : "bg-white text-gray-08"}`}>
            <Nav status={status} toggleMood={editStatusHandle} /> 
            <Outlet/>
            <StartJourney journeyProps={journeyProps} />
            <Footer footerProps={footerProps} />
        </div>
    )
}


export default Root
