import Section from "../Section/Section";
import FilterDropdown from "./FilterDropdown";

export interface PropertiesFilters {
    search: string;
    location?: string;
    type?: string;
    priceRange?: string;
    sizeRange?: string;
    buildYear?: string;
}

export interface PropertiesFilterOptions {
    locations: string[];
    types: string[];
    priceRanges: string[];
    sizeRanges: string[];
    buildYears: string[];
}

interface HeroPropertiesProps {
    filters: PropertiesFilters;
    options: PropertiesFilterOptions;
    onSearchChange: (value: string) => void;
    onFilterChange: (key: keyof Omit<PropertiesFilters, "search">, value: string) => void;
    onSubmit: () => void;
}

const HeroProperties = ({ filters, options, onSearchChange, onFilterChange, onSubmit }: HeroPropertiesProps) => {
    const filterItems = [
        { key: "location", label: "Location", icon: './assets/icons/Location.svg', options: options.locations },
        { key: "type", label: "Property Type", icon: './assets/icons/House.svg', options: options.types },
        { key: "priceRange", label: "Pricing Range", icon: './assets/icons/Cube.svg', options: options.priceRanges },
        { key: "sizeRange", label: "Property Size", icon: './assets/icons/Stroke.svg', options: options.sizeRanges },
        { key: "buildYear", label: "Build Year", icon: './assets/icons/Calender.svg', options: options.buildYears }
    ] as const;

    return (
        <div className=" pt-41 pb-20 lg:pb-30 2xl:pb-37.5 ">
            <Section
                title="Find Your Dream Property"
                description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey"
                className="bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] text-white mb-0! px-4 py-12.5  lg:pr-50 lg:pl-20 lg:pt-25 lg:pb-32.5   2xl:pt-37.5 2xl:pb-40 2xl:pr-100 2xl:pl-40.5"
                showStars={false}
                headerClassName="mb-0!"
            />
       
            <div className="relative  mt-10  lg:-mt-20 2xl:-mt-17 px-4 lg:px-20 2xl:px-40.5">
                {/* Search Bar Container */}
                <form
                    className="rounded-t-xl md:rounded-t-2xl mx-auto lg:px-37 mb-5 lg:mb-0"
                    onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
                >
                    <div className="dark:bg-gray-10 bg-Silver dark:border-0 border border-Silver p-1 lg:p-2.5 rounded-xl lg:rounded-t-xl lg:rounded-b-none ">
                        <div className="dark:bg-gray-08 bg-Alice-Blue  dark:border-0 border border-Silver flex items-center justify-between rounded-xl p-3 px-4 py-2 md:py-3 lg:p-4">
                            <input 
                                type="text" 
                                placeholder="Search For A Property" 
                                value={filters.search}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="bg-transparent  dark:text-white text-sm md:text-base lg:text-lg w-full focus:outline-none py-2.5 pr-2.5 pl-4.5 lg:py-4 lg:pr-4 lg:pl-5 2xl:py-5 2xl:pr-5 2xl:pl-6 font-urbanist text-gray-15 placeholder:text-gray-15 dark:placeholder:text-gray-60"
                            />
                            <button
                                type="submit"
                                className="dark:bg-purple-60 bg-Royal-Indigo hover:bg-purple-700 text-white flex items-center justify-center rounded-[10px] px-5 py-3.5 2xl:px-6 2xl:py-4.5 transition-colors gap-2 shrink-0"
                            >
                                <img src="./assets/icons/SearchIcon.svg" alt="search" className="w-5 h-5 2xl:w-6 2xl:h-6" />
                                <span className="hidden md:inline font-medium text-sm md:text-base">Find Property</span>
                            </button>
                        </div>
                    </div>
                </form>

                <div className="dark:bg-gray-10 bg-Silver  rounded-2xl shadow-md ">
                    {/* Filters Container */}
                    <div className="dark:bg-gray-10 bg-Silver     p-5 lg:p-2.5 rounded-2xl flex flex-col md:flex-row gap-5">
                        {filterItems.map((filter) => (
                            <FilterDropdown
                                key={filter.label}
                                filter={filter}
                                selected={filters[filter.key]}
                                onSelect={(value) => onFilterChange(filter.key, value)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroProperties;
