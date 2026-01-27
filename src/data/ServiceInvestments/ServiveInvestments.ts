import type { SectionHeaderProps } from "../../components/SectionHeader/SectionHeader";
import type { ServicePropertyCardProps } from "../../interfaces/ServicePropertyCard/ServicePropertyCard";

export const ServiceInvestmentsHeaderData : SectionHeaderProps = {
   title : "Smart Investments, Informed Decisions" ,
   description : "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.",
   className : "  bg-red-100  "
}

export const ServiveInvestmentsCardsData : ServicePropertyCardProps[] = [
    {
        id : 1 ,
        image : "./assets/images/Icon Container (1).webp",
        title : "Market Insight" ,
        description : "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
    }
    ,
      {
        id : 2 ,
        image : "./assets/images/Icon Container (2).webp",
        title : "ROI Assessment" ,
        description : "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
    }
    ,
      {
        id : 3 ,
        image : "./assets/images/Icon Container (3).webp",
        title : "Customized Strategies" ,
        description : "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
      },
      {
        id : 4 ,
        image : "./assets/images/Icon Container (4).webp",
        title : "Diversification Mastery" ,
        description : "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
    }
]

export const ServiceInvestmentsData = {
    headerData: ServiceInvestmentsHeaderData,
    cardsData: ServiveInvestmentsCardsData
}