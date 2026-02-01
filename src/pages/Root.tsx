import { Outlet } from "react-router-dom"
import Nav, { type Theme } from "../components/Nav/Nav"
import StartJourney from "../components/StartJourney/StartJourney"

import { journeyProps } from "../data/JourneyStart/StartJourney"
import { footerProps } from "../data/Footer/Footer"
import Footer from "../components/Footer/Footer"
import { useEffect, useState } from "react"




const Root: React.FC = () => {
    const [status, setStatus] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme") as Theme
        return savedTheme || "dark"
    })
    useEffect(() => {
        localStorage.setItem("theme", status)
    }, [status])

    const editStatusHandle = (): void => {
        setStatus((prev) => (prev === "dark" ? "light" : "dark"))
    }
    return (
        <div className={`${status} dark:bg-gray-08 dark:text-white bg-white text-gray-08`}>
            <Nav status={status} toggleMood={editStatusHandle} /> 
            <Outlet/>
            <StartJourney journeyProps={journeyProps} />
            <Footer footerProps={footerProps} />
        </div>
    )
}


export default Root
