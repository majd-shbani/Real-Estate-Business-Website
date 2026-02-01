import type { ReactNode } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

interface SectionProps {
    title: string;
    description: string;
    buttonText?: string;
    to?: string;
    padding?: string;
    children?:ReactNode;
    className?: string;
    showStars?: boolean;
    headerClassName?: string;
}

const Section = ({ 
    title, 
    description, 
    buttonText, 
    to,
    children,
    className,
    showStars = true,
    headerClassName
}: SectionProps) => {
    return (
        <section className={`w-full px-4 lg:px-[7.8125vw] xl:px-[5.55555vw] 2xl:px-[8.4375vw] mb-20 xl:mb-30 2xl:mb-37.5 ${className || ''}`}>
            <SectionHeader 
                title={title}
                description={description}
                buttonText={buttonText}
                to={to}
                showStars={showStars}
                className={`mb-10 xl:mb-15 2xl:mb-20 ${headerClassName || ''}`}
            />
            {children}
        </section>
    );
};

export default Section;
