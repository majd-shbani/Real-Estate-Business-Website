
import Section from '../components/Section'

const Home = () => {
    return (
        <div className="bg-gray-50 dark:bg-[#141414] min-h-screen">
            <Section 
                title="Featured Properties" 
                description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click View Details for more information."
                buttonText='View All Properties'
            >
             
            </Section>
        </div>
    )
}

export default Home
