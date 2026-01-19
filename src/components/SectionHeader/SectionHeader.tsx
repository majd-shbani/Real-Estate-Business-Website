import Star from '../Star';
import Button from '../Button/Button';

interface SectionHeaderProps {
    title: string;
    description: string;
    buttonText?: string;
    to?: string;
    className?: string;
}
const SectionHeader = ({ title, description, buttonText, to, className }: SectionHeaderProps) => {
  
    return (
        <div className={`w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 lg:gap-37.5 xl:gap-50 font-urbanist mb-10 xl:mb-15 2xl:mb-20 ${className || ""}`}>
            <div className="flex flex-col flex-1 gap-4">
                <div className="flex gap-1 mb-1 -ms-5">
                    <Star properties="w-7 h-7 opacity-100 mt-0" />
                    <Star properties="w-[22px] h-[22px] opacity-60 mt-1" />
                    <Star properties="w-[18px] h-[18px] opacity-40 mt-2" />
                </div>
                <div>
                    <h2 className="text-[28px] lg:text-[38px] xl:text-5xl font-semibold  text-white mb-1.5 lg:mb-2.5 2xl:mb-3.5 leading-[150%] ">
                        {title}
                    </h2>
                    <p className="text-gray-60 text-sm lg:text-base  xl:text-lg leading-[150%] font-medium">
                        {description}
                    </p>
                </div>
            </div>

            {buttonText && (
    <div className="shrink-0 hidden md:block">
        <Button
            text={buttonText}
            to={to}
            className="bg-gray-15 text-white hover:bg-gray-700 transition-colors"
        />
    </div>
)}
        </div>
    );
};

export default SectionHeader;
