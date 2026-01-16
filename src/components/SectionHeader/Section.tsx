import SectionHeader from './SectionHeader';

interface SectionProps {
    title: string;
    description: string;
    buttonText: string;
    to?: string;
    padding?: string;
}

const Section = ({ 
    title, 
    description, 
    buttonText, 
    to,
}: SectionProps) => {
    return (
        <section className={`w-full py-10 px-4 md:px-12 lg:px-20 xl:px-40.5 `}>
            <SectionHeader 
                title={title}
                description={description}
                buttonText={buttonText}
                to={to}
            />
        </section>
    );
};

export default Section;
