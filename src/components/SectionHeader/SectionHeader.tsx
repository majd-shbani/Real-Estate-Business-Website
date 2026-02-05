
import Button from '../Button/Button';
import Star from '../Star/Star';

export interface SectionHeaderProps {
    title: string;
    description: string;
    buttonText?: string;
    to?: string;
    className?: string;
    starbg?: string;
    showStars?: boolean;
}
const SectionHeader = ({ title, description, buttonText, to, className, starbg, showStars = true }: SectionHeaderProps) => {
  
    return (
        <div className={`w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 lg:gap-37.5 xl:gap-50 font-urbanist ${className || ""}`}>
            <div className="flex flex-col  flex-1 ">
                 {showStars &&  <div className="flex items-center gap-1 lg:gap-1.25 2xl:gap-1.5 mb-2.5 -ms-2 lg:-ms-5">

                  <Star starbg={starbg} properties={`  bg-gray-40       h-5 w-5 lg:h-6 lg:w-6 2xl:h-7.5 2xl:w-7.5 opacity-100 mt-0` } />
                    <Star starbg={starbg} properties={`  bg-gray-08      h-3 w-3 lg:h-[14.4px] lg:w-[14.4px] 2xl:h-4.5 2xl:w-4.5 opacity-60 `} />
                    <Star starbg={starbg} properties={`  bg-gray-08       h-[5.6px] w-[5.6px] lg:h-[6.72px] lg:w-[6.72px] 2xl:h-[8.5px] 2xl:w-[8.5px] opacity-40`} />
         
                </div>}
                <div>
                    <h2 className={`text-[28px] lg:text-[38px] 2xl:text-5xl font-semibold   mb-2 lg:mb-2.5 2xl:mb-3.5 leading-[150%] `}>
                        {title}
                    </h2>
                    <p className=" text-sm lg:text-base text-gray-60  2xl:text-lg leading-[150%] font-medium">
                        {description}
                    </p>
                </div>
            </div>

            {buttonText && (
    <div className="shrink-0 absolute bottom-0 lg:relative">
        <Button
            text={buttonText}
            to={to}
            className="dark:bg-gray-10 bg-[#E8E8E8] border-Silver  dark:text-white dark:hover:bg-gray-700 transition-colors leading-[150%] "
        />
    </div>
)}
        </div>
    );
};

export default SectionHeader;
