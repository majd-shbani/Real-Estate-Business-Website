

interface SectionHeaderProps {
    title: string;
    description: string;
    buttonText: string; 
}

const SectionHeader = ({ title, description, buttonText }: SectionHeaderProps) => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 xl:gap-[200px] py-10 px-4 md:px-12 lg:px-20 xl:px-[120px] font-urbanist">
 
            <div className="flex flex-col flex-1 gap-4">
                <div className="flex gap-1 mb-1">
                    <div className="relative w-7 h-7 bg-[#141414] dark:bg-gray-300">
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                    </div>
                    
                    <div className="relative w-[22px] h-[22px] bg-gray-500 dark:bg-gray-500 opacity-60 mt-1">
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                    </div>

                    <div className="relative w-[18px] h-[18px] bg-gray-400 dark:bg-gray-600 opacity-40 mt-2">
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full rounded-full bg-gray-50 dark:bg-[#141414]"></div>
                    </div>
                </div>
            <div className="ps-4">

                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {description}
                </p>
                </div>
            </div>
            <div className="shrink-0">
               <button className=" bg-[#262626] text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">{buttonText}</button>
            </div>

       
        </div>
    );
};

export default SectionHeader;
