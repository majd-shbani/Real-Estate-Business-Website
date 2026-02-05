
import { NavLink } from "react-router-dom"
import type { Nav } from "../../interfaces/NavInterface/NavInterface"


const NavItems = ({items , onItemClick } : Nav ) => {
    return (
        <>
        {items.map((item , index) => {
            return (
                <NavLink key={index} to={item.to} onClick={onItemClick} className={ ({isActive}) => isActive? "dark:bg-gray-08 bg-Alice-Blue rounded-lg 2xl:rounded-[10px] border dark:border-gray-15 border-Silver" : ""} >
                    <li className={`font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-Jet-Gray dark:text-white text-sm xl:text-base 2xl:text-lg`}>{item.title}</li>
                </NavLink>
            )
        })}
        </>
    )
}

export default NavItems
