import type { PricingPlane } from "../../interfaces/Pricing/Pricing";



export const PricingCarsData :PricingPlane[] = [
    {
        title: "Additional Fees",
        details:[
            {
                title:"Property Transfer Tax" ,
                price:"25,000" ,
                btn:"Based on the sale price and local regulations" ,
            },
            {
                title:"Legal Fees" ,
                price:"3,000" ,
                btn:"Approximate cost for legal services, including title transfer" ,
            },
            {
                title:"Home Inspection" ,
                price:"500" ,
                btn:"Recommended for due diligence" ,
            },
            {
                title:"Property Insurance" ,
                price:"1,200" ,
                btn:"Annual cost for comprehensive property insurance" ,
            },
            {
                title:"Mortgage Fees" ,
                subTitle:"Varies" ,
                btn:"If applicable, consult with your lender for specific details" ,
            }
        ]
    },    

    {
        title: "Monthly Costs",
        details:[
            {
                title:"Property Taxes" ,
                price:"1,250" ,
                btn:"Approximate monthly property tax based on the sale price and local rates" ,
            },
            {
                title:"Homeowners' Association Fee" ,
                price:"300" ,
                btn:"Monthly fee for common area maintenance and security" ,
            }
        ]
    },


    {
        title: "Total Initial Costs",
        details:[
            {
                title:"Listing Price" ,
                price:"1,250,000" ,
            },
            {
                title:"Additional Fees" ,
                price:"29,700" ,
                btn:"Property transfer tax, legal fees, inspection, insurance" ,
            },
            {
                title:"Down Payment" ,
                price:"250,000" ,
                btn:"20%" ,
            },
            {
                title:"Mortgage Amount" ,
                price:"1,000,000" ,
                btn:"If applicable" ,
            }
        ]
    },    


    {
        title: "Monthly Expenses",
        details:[
            {
                title:"Property Taxes" ,
                price:"1,250" ,
            },
            {
                title:"Homeowners' Association Fee" ,
                price:"300" ,
            },
            {
                title:"Mortgage Payment" ,
                subTitle:"Varies based on terms and interest rate" ,
                btn:"If applicable" ,
            },
            {
                title:"Property Insurance" ,
                price:"100" ,
                btn:"Approximate monthly cost" ,
            }
        ]
    },
]