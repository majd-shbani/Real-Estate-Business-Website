import BaseCard from "../BaseCard/BaseCard"
import { FaEdit, FaTrash } from "react-icons/fa";
import type { EmployeeCardProps } from "../../interfaces/OurTeamSection/OurTeamSection"

const DashboardEmployeeCard = ({card, onEdit, onDelete}: EmployeeCardProps) => {
  return (
    <BaseCard className="p-4! xl:p-6! flex flex-col w-full max-w-100 md:max-w-full mx-auto md:mx-0 relative group bg-gray-15 border-gray-60 transition duration-300 ease-in-out hover:border-2 hover:scale-105">
        <div className="flex flex-col items-center h-full">
            <div className="mb-4 rounded-xl w-full">
                <img src={card.image} alt={card.name} width={316.75} height={253} className="object-fill w-full h-auto max-h-67 xl:h-[15.27777vw] 2xl:h-[13.177083vw] rounded-[10px] 2xl:rounded-xl" />
            </div>
            <h3 className="text-lg xl:text-xl font-bold text-white xl:mb-2">{card.name}</h3>
            <p className="xl:text-xl text-gray-60 mb-3 xl:mb-6 font-medium text-center">{card.position}</p>

            <div className="flex gap-3 w-full justify-center mt-auto">
                {onEdit && (
                    <button 
                        onClick={() => onEdit(card.id)} 
                        className="flex-1 flex items-center justify-center gap-2 px-2.5 py-1.25 xl:px-4 xl:py-2.5 text-sm font-semibold text-white bg-purple-60 hover:bg-purple-60/80 rounded-lg hover:scale-105 transition duration-200">
                        <FaEdit />
                        <p className="text-lg xl:text-xl font-semibold">Edit</p>
                    </button>
                )}
                {onDelete && (
                    <button 
                        onClick={() => onDelete(card.id)} 
                        className="flex-1 flex items-center justify-center gap-2 px-2.5 py-1.25 xl:px-4 xl:py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-600/80 rounded-lg hover:scale-105 transition duration-200"
                    >
                        <FaTrash />
                        <p className="text-lg xl:text-xl font-semibold">Delete</p>
                    </button>
                )}
            </div>
        </div>
    </BaseCard>
  )
}

export default DashboardEmployeeCard
