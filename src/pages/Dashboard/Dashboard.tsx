import { NavLink, Outlet } from "react-router-dom"
import { DEFAULT_DATA } from "../../data/DashboardData/DashboardData"
import type { DashboardProps } from "../../interfaces/Dashboard/Dashboard"
import Button from "../../components/Button/Button";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Dashboard = ({links}: DashboardProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
        <header className="md:hidden fixed top-0 left-0 right-0 bg-gray-15 p-4 flex items-center justify-between z-50">
            <div className="max-w-20">
                <img src={DEFAULT_DATA.logo} alt="logo" className="w-full h-auto"/>
            </div>
            <button 
                onClick={toggleMenu}
                className="text-white text-3xl focus:outline-none"
            >
                {isMenuOpen ? <IoCloseCircleOutline /> : <IoMenu /> }
            </button>
        </header>
        <aside className={`flex flex-col items-center justify-between bg-gray-15 p-4 xl:p-6 2xl:p-7.5 fixed
            top-0 bottom-0 left-0 md:left-0 w-1/2 md:w-1/4 lg:w-1/6 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
            <div className="flex flex-col items-center gap-5 xl:gap-10">
                <div className="max-w-30 xl:max-w-full">
                    <img src={DEFAULT_DATA.logo} alt="logo" className="w-full"/>
                </div>
                <div className="max-w-25 xl:max-w-full">
                    <img src={DEFAULT_DATA.profile} alt={`${DEFAULT_DATA.user}'s profile`} className="object-cover rounded-full w-full" />
                </div>
                <p className="text-xl xl:text-3xl 2xl:text-4xl text-white">{DEFAULT_DATA.user}</p>
            </div>
            <nav className="w-full">
                <ul className="flex flex-col gap-4 xl:gap-5">
                    {links.map((link) => (
                        <li key={link.href}>
                            <NavLink to={link.href} onClick={closeMenu} end={link.href === link.href} className={({ isActive }) => `flex items-center justify-center w-full py-3 rounded-lg xl:text-lg 2xl:text-2xl transition-all duration-200
                                ${isActive
                                    ? "bg-purple-60 text-white shadow-lg scale-105"
                                    : "text-gray-60 hover:text-white hover:bg-gray-800 border border-gray-30 hover:border-gray-600"
                                    }`
                                }>{link.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Button text={DEFAULT_DATA.button} to="/" className="w-full bg-purple-60 text-white border-0 text-sm xl:text-lg! 2xl:text-2xl! transition-all duration-200 ease-out hover:scale-110"/>
        </aside>
        {isMenuOpen && (
            <div 
                className="md:hidden fixed inset-0 bg-gray-08 bg-opacity-50 z-30"
                onClick={closeMenu}
            />
        )}
        <main className="flex-1 bg-gray-08 overflow-auto ml-0 md:ml-[25%] lg:ml-[16.666667%] p-[4.16666vw] pt-28 md:pt-[4.16666vw] xl:py-7.5 2xl:py-10">
            <Outlet />
        </main>
    </div>
  )
}

export default Dashboard
