

import { Link, NavLink, useLocation } from "react-router-dom"
import Button from "../Button/Button"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react"
import { PiSunDimBold } from "react-icons/pi"
import { HiOutlineMoon } from "react-icons/hi"

interface NavProps {
    status: boolean;
    toggleMood: () => void
}

const Nav : React.FC<NavProps> = ({ status, toggleMood }) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [location])

    const [show , setShow] = useState(false)
    const editshow = () => {
        setShow(!show)
    }



    return (
        <nav className="fixed top-0 w-full bg-gray-10 z-10">
            <div className="pt-10 pb-5 xl:py-3.5 2xl:py-4.5 relative ps-4 pe-12 xl:px-0 bg-[url(assets/images/navBG.webp)] bg-cover bg-center">
                <p className="xl:text-center text-white text-xs xl:text-sm 2xl:text-lg font-medium ">✨Discover Your Dream Property with Estatein <Link to={"/"} className="underline">Learn More</Link></p>
                <AiOutlineClose  className="text-white cursor-pointer w-6.5 h-6.5 2xl:w-8 2xl:h-8 rounded-full bg-[#FFFFFF1A] absolute right-4 xl:right-7.5 p-1 top-9 xl:top-[50%] xl:-translate-y-1/2"/>
            </div>
            <div className="flex items-center justify-between h-17 xl:h-19.25 2xl:h-24.75 px-4 xl:px-20 2xl:px-40.5">
                <img className="w-23.25 xl:w-28.25 2xl:w-40" src="assets/icons/company-logo.svg" alt="company logo" />
                <ul className="hidden xl:flex">
                    <NavLink to={"/"} className={ ({isActive}) => isActive? "bg-gray-08 rounded-lg 2xl:rounded-[10px] border border-gray-15 " : ""} >
                        <li className={ `text-sm 2xl:text-lg font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-white`}>Home</li>
                    </NavLink>
                    <NavLink to={"/aboutUs"} className={ ({isActive}) => isActive? "bg-gray-08 rounded-lg 2xl:rounded-[10px] border border-gray-15 " : ""} >
                        <li className={ `text-sm 2xl:text-lg font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-white`}>About Us</li></NavLink>
                    <NavLink to={"/Properties"} className={ ({isActive}) => isActive? "bg-gray-08 rounded-lg 2xl:rounded-[10px] border border-gray-15 " : ""} >
                        <li className={ `text-sm 2xl:text-lg font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-white`}>Properties</li></NavLink>
                    <NavLink to={"/services"} className={ ({isActive}) => isActive? "bg-gray-08 rounded-lg 2xl:rounded-[10px] border border-gray-15 " : ""} >
                        <li className={ `text-sm 2xl:text-lg font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-white`}>Services</li></NavLink>
                </ul>
                <div className="hidden xl:flex items-center gap-2">
                    <NavLink to={"/contact"}>
                        
                            <Button text="Contact Us" className="text-white bg-gray-08"/>
                    </NavLink>
                    <div className={`flex items-center gap-4 py-3 px-3 rounded-[29px] ${status? "bg-gray-08" : "bg-white"}`}>
                        <PiSunDimBold className={`w-4 h-4 cursor-pointer rounded-full ${status? "text-white" : "bg-gray-08 text-gray-08"} `} onClick={toggleMood}/> 
                        <HiOutlineMoon className={`w-4 h-4 cursor-pointer rounded-full bg-white ${status? "bg-white text-white " : "text-gray-08"}`} onClick={toggleMood} /> 
                    </div>
                </div>

                <button onClick={() => editshow()} className="block xl:hidden">
                    <img src="assets/icons/burger.svg" alt="burger" />
                </button>
                    <ul className={`${show ? "top-35" : "-top-300"} absolute w-full h-[calc(100vh-130px)] right-0 flex flex-col justify-center items-center gap-2 p-1 xl:hidden bg-[#211E2F] backdrop-blur-3xl transition-all`}>
                        <NavLink to={"/"} className={ ({isActive}) => isActive? "bg-gray-08 rounded-lg 2xl:rounded-[10px] border border-gray-15 " : ""} >
                            <li className={ `text-sm 2xl:text-lg  font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-white`}>Home</li>
                        </NavLink>
                        <NavLink to={"/aboutUs"} className={ ({isActive}) => isActive? "bg-gray-08 rounded-lg 2xl:rounded-[10px] border border-gray-15 " : ""} >
                            <li className={ `text-sm 2xl:text-lg font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-white`}>About Us</li>
                        </NavLink>
                        <NavLink to={"/Properties"} className={ ({isActive}) => isActive? "bg-gray-08 rounded-lg 2xl:rounded-[10px] border border-gray-15 " : ""} >
                            <li className={ `text-sm 2xl:text-lg font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-white`}>Properties</li>
                        </NavLink>
                        <NavLink to={"/services"} className={ ({isActive}) => isActive? "bg-gray-08 rounded-lg 2xl:rounded-[10px] border border-gray-15 " : ""} >
                            <li className={ `text-sm 2xl:text-lg font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-white`}>Services</li>
                        </NavLink>
                        <NavLink to={"/contact"}>
                            <Button text="Contact Us" className="text-white bg-gray-08"/>
                        </NavLink>
                        <div className={`flex mt-2 items-center gap-4 py-2 px-4 rounded-[29px] ${status? "bg-gray-08" : "bg-white"}`}>
                            <PiSunDimBold className={`w-4 h-4 cursor-pointer rounded-full ${status? "text-white" : "bg-gray-08 text-gray-08"} `} onClick={toggleMood}/> 
                            <HiOutlineMoon className={`w-4 h-4 cursor-pointer rounded-full bg-white ${status? "bg-white text-white " : ""}`} onClick={toggleMood} /> 
                        </div>
                    </ul>
            </div>
        </nav>
    )
}

export default Nav
