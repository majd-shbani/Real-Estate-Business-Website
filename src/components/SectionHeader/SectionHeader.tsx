
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
                <div className="flex gap-1 mb-1 -ms-2 lg:-ms-5">
                    <img src="./assets/icons/SectionIcon-1.svg" className='opacity-100' alt="SectionIcon-1" />
                    <img src="./assets/icons/SectionIcon-2.svg" className='opacity-60' alt="SectionIcon-2" />
                    <img src="./assets/icons/SectionIcon-3.svg" className='opacity-40' alt="SectionIcon-3" />
                </div>
                <div>
                    <h2 className="text-[28px] lg:text-[38px] 2xl:text-5xl font-semibold   mb-1.5 lg:mb-2.5 2xl:mb-3.5 leading-[150%] ">
                        {title}
                    </h2>
                    <p className=" text-sm lg:text-base  2xl:text-lg leading-[150%] font-medium">
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
