
import Star from './Star';

interface SectionHeaderProps {
    title: string;
    description: string;
    buttonText: string; 
}

const SectionHeader = ({ title, description, buttonText }: SectionHeaderProps) => {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 xl:gap-50 font-urbanist  ">
            <div className="flex flex-col flex-1 gap-4">
                <div className="flex gap-1 mb-1">
                    <Star properties="w-7 h-7 opacity-100 mt-0" />
                    <Star properties="w-[22px] h-[22px] opacity-60 mt-1" />
                    <Star properties="w-[18px] h-[18px] opacity-40 mt-2" />
                </div>
            <div className="ps-4">
                <h2 className="text-3xl md:text-5xl font-semibold  text-white mb-6 ">
                    {title}
                </h2>
                <p className="text-gray-600 text-sm">
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
