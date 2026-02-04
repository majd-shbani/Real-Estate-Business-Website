import{ useState, useRef, useEffect } from "react";

export interface FilterOption {
    label: string;
    icon: string ;
    options: string[];
    className?: string;
}

interface FilterDropdownProps {
    filter: FilterOption;
    selected?: string;
    onSelect: (value: string) => void;
}

const FilterDropdown = ({ filter, selected, onSelect }: FilterDropdownProps) => {
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

        const iconPath =  filter.icon ;
    

    return (
        <div ref={dropdownRef} className="flex-1  relative ">
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="dark:bg-gray-08 bg-Alice-Blue border border-gray-15 rounded-lg   px-3.5 py-3   2xl:p-5  flex items-center justify-between cursor-pointer group hover:border-gray-30 transition-colors"
            >
                <div className="flex items-center gap-2 text-gray-60 group-hover:text-white transition-colors">
                  
                        <img src={iconPath} alt="" className="w-5 h-5 2xl:w-6 2xl:h-6 bg-" />
                                   <span className=" border-l-2 border-gray-15 pl-2  text-sm 2xl:text-lg font-medium">
                        {filter.label}
                    </span>
                </div>
                {selected ? (
                    <span className="text-xs 2xl:text-sm text-white/80 me-2 truncate max-w-32">
                        {selected}
                    </span>
                ) : null}

                <img 
                    src="./assets/icons/drop.svg" 
                    alt="chevron" 
                    className={` opacity-50 group-hover:opacity-100 transition-transform ${isOpen ? "rotate-180" : ""} bg-gray-10 rounded-2xl p-1`} 
                />
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 dark:bg-gray-10 light:bg-Silver border border-gray-15 rounded-lg shadow-xl z-50 overflow-hidden">
                    <div className="max-h-60 overflow-y-auto">
                        <div
                            className="px-4 py-3 text-sm text-gray-60 hover:text-white hover:bg-gray-15 cursor-pointer transition-colors "
                            onClick={() => { onSelect(""); setIsOpen(false); }}
                        >
                            Any
                        </div>
                        {filter.options.length === 0 ? (
                            <div className="px-4 py-3 text-sm text-gray-60 ">No options</div>
                        ) : (
                            filter.options.map((option) => (
                                <div
                                    key={option}
                                    className="  px-4 py-3 text-sm text-gray-60 hover:text-white hover:bg-gray-15 cursor-pointer transition-colors"
                                    onClick={() => { onSelect(option); setIsOpen(false); }}
                                >
                                    {option}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
