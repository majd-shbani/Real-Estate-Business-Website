import SectionHeader from './SectionHeader';

interface SectionProps {
    title: string;
    description: string;
    buttonText: string;
    padding?: string;
}

const Section = ({ 
    title, 
    description, 
    buttonText, 
    padding = ''
}: SectionProps) => {
    return (
        <section className={`w-full py-10 px-4 md:px-12 lg:px-20 xl:px-[140px] `}>
            <SectionHeader 
                title={title}
                description={description}
                buttonText={buttonText}
            />
           
        </section>
    );
};

export default Section;
