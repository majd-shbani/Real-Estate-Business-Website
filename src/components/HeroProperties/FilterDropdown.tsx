import React, { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaHome, FaDollarSign, FaCube, FaCalendarAlt } from "react-icons/fa";

export interface FilterOption {
    label: string;
    icon: React.ComponentType;
    options: string[];
    className?: string;
}

export const filterData: FilterOption[] = [
    { label: "Location", icon: FaMapMarkerAlt, options: ["London, UK", "New York, USA", "Dubai, UAE"] },
    { label: "Property Type", icon: FaHome, options: ["Apartments", "Houses", "Villas"] },
    { label: "Pricing Range", icon: FaDollarSign, options: ["$50k - $100k", "$100k - $200k", "$200k+"] },
    { label: "Property Size", icon: FaCube, options: ["< 1000 sqft", "1000 - 2000 sqft", "2000+ sqft"] },
    { label: "Build Year", icon: FaCalendarAlt, options: ["2024", "2023", "2022", "Before 2020"] }
];

interface FilterDropdownProps {
    filter: FilterOption;
}

const FilterDropdown = ({ filter }: FilterDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const Icon = filter.icon;

    return (
        <div ref={dropdownRef} className="flex-1 relative ">
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-08 border border-gray-15 rounded-lg 12 14  px-3.5 py-3   2xl:px-3.5 2xl:py-3 flex items-center justify-between cursor-pointer group hover:border-gray-30 transition-colors"
            >
                <div className="flex items-center gap-2 text-gray-60 group-hover:text-white transition-colors">
                    <Icon />
                    <span className=" border-l-2 border-gray-15 pl-2  text-sm 2xl:text-lg font-medium">{filter.label}</span>
                </div>

                <img 
                    src="./assets/icons/drop.svg" 
                    alt="chevron" 
                    className={` opacity-50 group-hover:opacity-100 transition-transform ${isOpen ? "rotate-180" : ""} bg-gray-10 rounded-2xl p-1`} 
                />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-10 border border-gray-15 rounded-lg shadow-xl z-50 overflow-hidden">
                    <div className="max-h-60 overflow-y-auto">
                        {filter.options.map((option) => (
                            <div key={option} className="px-4 py-3 text-sm text-gray-60 hover:text-white hover:bg-gray-15 cursor-pointer transition-colors">
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
