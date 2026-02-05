import InfoGrid from "../FeaturesCard/InfoGrid"
import Section from "../Section/Section"

const HeroServices = () => {
    return (
        <div className=" pt-41 ">

       
        <Section
            title="Elevate Your Real Estate Experience"
            description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
            className="px-4 py-12.5  xl:pr-50 xl:pl-20 xl:py-25   2xl:pt-37.5 2xl:pb-25 2xl:pr-100 2xl:pl-40.5  bg-[linear-gradient(95.93deg,rgba(38,38,38,0.3)_-5%,rgba(38,38,38,0)_25%)] dark:bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] mb-0!"
            showStars={false}
            headerClassName="mb-0!"
        />
        
          <div className=" p-2.5 2xl:p-5  border-t border-b dark:border-gray-15 border-Silver dark:shadow-thin-grey dark:xl:shadow-[0px_0px_0px_10px_#191919] xl:shadow-[0px_0px_0px_10px_#c0c0c0] mb-20 xl:mb-30 2xl:mb-37.5 mt-10 xl:mt-0  ">

            <InfoGrid/> 
            </div>

         </div>
    )
}

export default HeroServices
