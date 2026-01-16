import type { ReactNode } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

interface SectionProps {
    title: string;
    description: string;
    buttonText: string;
    to?: string;
    padding?: string;
    children?:ReactNode;
}

const Section = ({ 
    title, 
    description, 
    buttonText, 
    to,
    children,
}: SectionProps) => {
    return (
        <section className={`w-full py-10 px-4 md:px-12 lg:px-20 xl:px-40.5 `}>
            <SectionHeader 
                title={title}
                description={description}
                buttonText={buttonText}
                to={to}

            />
            {children}
        </section>
    );
};

export default Section;
