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
}

const Section = ({ 
    title, 
    description, 
    buttonText, 
    to,
    children,
    className
}: SectionProps) => {
    return (
        <section className={`w-full px-4 xl:px-[80px] 2xl:px-[162px] mb-10 xl:mb-15 2xl:mb-20 ${className || ''}`}>
            <SectionHeader 
                title={title}
                description={description}
                buttonText={buttonText}
                to={to} 
                className={className}

            />
            {children}
        </section>
    );
};

export default Section;
