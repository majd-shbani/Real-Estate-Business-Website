import { Link } from "react-router-dom";
import InfoGrid from "../FeaturesCard/InfoGrid"
import Section from "../Section/Section"

const HeroContact = () => {
    const contactInfoItems = [
        {
            id: 1,
            title: 'info@estatein.com', 
            icon: './assets/icons/MailIcon.svg' 
        },
        {
            id: 2,
            title: '+1 (123) 456-7890', 
            icon: './assets/icons/PhoneIcon.svg' 
        },
        {
            id: 3,
            title: 'Main Headquarters', 
            icon: './assets/icons/LocationIcon.svg' 
        },
        {
            id: 4,
            title: (
                <div className="flex flex-wrap gap-2.5 xl:gap-5 2xl:gap-7.5 items-center justify-center">
                   <Link to="https://www.instagram.com/" className="cursor-pointer hover:text-purple-60">Instagram</Link>
                   <Link to="https://www.linkedin.com/" className="cursor-pointer hover:text-purple-60">LinkedIn</Link>
                   <Link to="https://www.facebook.com/" className="cursor-pointer hover:text-purple-60">Facebook</Link>
                </div>
            ),
            icon: './assets/icons/SocialMediaIcon.svg' 
        }
    ];

    return (
        <div className="mt-36.25 xl:mt-31.25 2xl:mt-40.5 ">
            <Section
                title="Get in Touch with Estatein"
                description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
                className="px-4 py-12.5  xl:pr-50 xl:pl-20 xl:py-25   2xl:pt-37.5 2xl:pb-25 2xl:pr-100 2xl:pl-40.5  bg-[linear-gradient(95.93deg,#262626_-26.82%,rgba(38,38,38,0)_40.46%)] mb-0!"
                showStars={false}
                headerClassName="mb-0!"
            />
        
  <div className="border-t border-b border-gray-15 shadow-thin-grey xl:shadow-[0px_0px_0px_10px_#191919] mb-20 xl:mb-30 2xl:mb-37.5 mt-10 xl:mt-0  ">
            <InfoGrid items={contactInfoItems} />
            </div>
         </div>
    )
}

export default HeroContact