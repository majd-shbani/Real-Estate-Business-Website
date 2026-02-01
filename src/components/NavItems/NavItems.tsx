
import { NavLink } from "react-router-dom"
import type { Nav } from "../../interfaces/NavInterface/NavInterface"


const NavItems = ({items} : Nav ) => {
    return (
        <>
        {items.map((item , index) => {
            return (
                <NavLink key={index} to={item.to} className={ ({isActive}) => isActive? "bg-gray-08 rounded-lg 2xl:rounded-[10px] border border-gray-15 " : ""} >
                    <li className={`font-medium px-5 2xl:px-6 py-3 2xl:py-3.5 text-white`}>{item.title}</li>
                </NavLink>
            )
        })}
        </>
    )
}

export default NavItems
