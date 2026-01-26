import Section from "../Section/Section";
import FilterDropdown, { filterData } from "./FilterDropdown";

const HeroProperties = () => {
    return (
        <div className="mt-12.5 2xl:my-40.5">
            <Section
                title="Find Your Dream Property"
                description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey"
                className="bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] text-white mb-0! pt-30 pb-10"
                showStars={false}
            />
       
            <div className="relative  mt-10 lg:-mt-12 px-4 lg:px-20 2xl:px-40.5">
                {/* Search Bar Container */}
                <div className="rounded-t-xl md:rounded-t-2xl shadow-md mx-auto lg:px-37 mb-5 lg:mb-0">
                    <div className="bg-gray-10 p-1 lg:p-2.5 rounded-xl lg:rounded-t-xl">
                        <div className="bg-gray-08 flex items-center justify-between rounded-xl p-3 px-4 py-2 md:py-3 lg:p-4">
                            <input 
                                type="text" 
                                placeholder="Search For A Property" 
                                className="bg-transparent text-white text-sm md:text-base lg:text-lg w-full focus:outline-none py-2.5 pr-2.5 pl-4.5 lg:py-4 lg:pr-4 lg:pl-5 2xl:py-5 2xl:pr-5 2xl:pl-6 font-urbanist"
                            />
                            <button className="bg-purple-60 hover:bg-purple-700 text-white flex items-center justify-center rounded-[10px] px-5 py-3.5 2xl:px-6 2xl:py-4.5 transition-colors gap-2 shrink-0">
                                <img src="./assets/icons/SearchIcon.svg" alt="search" className="w-5 h-5 2xl:w-6 2xl:h-6" />
                                <span className="hidden md:inline font-medium text-sm md:text-base">Find Property</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-10  rounded-2xl shadow-md ">
                    {/* Filters Container */}
                    <div className="bg-gray-10 p-5 lg:p-2.5 rounded-2xl flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-5">
                        {filterData.map((filter) => (
                            <FilterDropdown key={filter.label} filter={filter} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroProperties;
