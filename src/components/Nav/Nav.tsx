

import { Link, NavLink, useLocation } from "react-router-dom"
import Button from "../Button/Button"
import { AiOutlineClose } from "react-icons/ai"
import { useEffect, useState } from "react"
import { PiSunDimBold } from "react-icons/pi"
import { HiOutlineMoon } from "react-icons/hi"
import NavLogoText from "../NavLogoText/NavLogoText"
import NavItems from "../NavItems/NavItems"
import { navItemsData } from "../../data/NavData/NavData"

export type Theme = "dark" | "light"

interface NavProps {
    status: Theme
    toggleMood: () => void
}


const Nav : React.FC<NavProps> = ({ status , toggleMood }) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [location])

    const [show , setShow] = useState(false)
    const editshow = () => {
        setShow(!show)
    }

    return (
        <nav className={`fixed top-0 w-full z-100  dark:bg-gray-10 dark:text-white bg-[#9578a8] text-gray-08`}>
                                           {/* top Panner */}
            <div className="h-19.5 xl:h-full pt-10 pb-5 xl:py-3.5 2xl:py-4.5 relative ps-4 pe-12 lg:ps-[7.8125vw] xl:px-0 bg-[url(assets/images/navBG.webp)] bg-cover bg-center">
                <p className="xl:text-center text-xs xl:text-sm 2xl:text-lg font-medium xl:pe-30">✨Discover Your Dream Property with Estatein <Link to={"/"} className="underline">Learn More</Link></p>
                <AiOutlineClose  className=" cursor-pointer w-6.5 h-6.5 2xl:w-8 2xl:h-8 rounded-full bg-[#FFFFFF1A] absolute right-4 xl:right-7.5 p-1 top-9 xl:top-[50%] xl:-translate-y-1/2"/>
            </div>

                                            {/* nav */}
            <div className="flex items-center justify-between h-17 xl:h-19.25 2xl:h-24.75 px-4 lg:px-[7.8125vw] xl:px-[5.55555vw] 2xl:px-[8.4375vw]">
                <div className="w-23.25 xl:w-28.25 2xl:w-40 flex items-center gap-1.5 xl:gap-2 2xl:gap2.5">
                    <img src="assets/icons/navLogoSymbol.svg" className="w-7 xl:w-8.5 2xl:w-12" alt="company logo" />
                    <NavLogoText color="white" />
                </div>
                <ul className="hidden xl:flex">
                    <NavItems items={navItemsData}/>
                </ul>
                <div className="hidden xl:flex items-center gap-2">
                    <NavLink to={"/contact"}>
                        <Button text="Contact Us" className="text-white bg-gray-08 px-5! 2xl:px-6! py-3! 2xl:py-3.5!"/>
                    </NavLink>
                    <div className={`flex items-center gap-4 py-3 px-3 rounded-[29px] dark:bg-white  bg-gray-08`}>
                        <PiSunDimBold className={`w-4 h-4 cursor-pointer rounded-full bg-gray-08 dark:text-gray-08 text-white `} onClick={toggleMood}/> 
                        <HiOutlineMoon className={`w-4 h-4 cursor-pointer rounded-full bg-white dark:text-gray-08 text-white `} onClick={toggleMood} /> 
                    </div>
                </div>

                                {/* nav for screen smaller than 1280px */}
                <button onClick={() => editshow()} className="block xl:hidden">
                    <img src="assets/icons/burger.svg" alt="burger" />
                </button>
                    <ul className={`${show ? "top-36.5" : "-top-300"} ${status? "" : "bg-[#9578a8]"} absolute z-50 w-full h-[calc(100vh-100px)] right-0 flex flex-col justify-center items-center gap-2 p-1 xl:hidden backdrop-blur-3xl transition-all`}>
                        <NavItems items={navItemsData}/>
                        <NavLink to={"/contact"}>
                            <Button text="Contact Us" className="text-white bg-gray-08 text-base!"/>
                        </NavLink>
                        <div className={`flex mt-2 items-center gap-4 py-2 px-4 rounded-[29px] `}>
                            <PiSunDimBold className={`w-4 h-4 cursor-pointer rounded-full bg-gray-08 `} onClick={toggleMood}/> 
                            <HiOutlineMoon className={`w-4 h-4 cursor-pointer rounded-full bg-white `} onClick={toggleMood} /> 
                        </div>
                    </ul>
            </div>
        </nav>
    )
}

export default Nav
