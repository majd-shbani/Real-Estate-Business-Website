import type { FooterProps } from "../../interfaces/Footer/Footer";


export let footerProps : FooterProps = {
    imageIcon : "/assets/images/Symbol.webp" ,
    imageName : "/assets/images/Estatein.webp" ,
    sendEmail : {
        emailIcon : "/assets/images/Vector(15).webp",
        placeholder : "Enter Your Email",
        telegramIcon : "./assets/images/Send.webp"
    },
   footerService : [
    {
        serviceTitle : "Home" ,
        services : [
            {
                service : "Hero Section" 
            }
            ,
             {
                service : "Features" 
            }
            ,
             {
                service : "Properties" 
            },
             {
                service : "Testimonials" 
            }
            ,
             {
                service : "FAQ’s" 
            }
        ]
    }
    ,
     {
        serviceTitle : "About Us" ,
        services : [
            {
                service : "Our Story" 
            }
            ,
             {
                service : "Our Works" 
            }
            ,
             {
                service : "How It Works" 
            },
             {
                service : "Our Team" 
            }
            ,
             {
                service : "Our Clients" 
            }
        ]
    }
    ,
     {
        serviceTitle : "Properties" ,
        services : [
            {
                service : "Portfolio" 
            }
            ,
             {
                service : "Categories" 
            }
           
        ]
    }
    ,
     {
        serviceTitle : "Services" ,
        services : [
            {
                service : "Valuation Mastery" 
            }
            ,
             {
                service : "Strategic Marketing" 
            }
            ,
             {
                service : "Negotiation Wizardry" 
            },
             {
                service : "Closing Success" 
            }
            ,
             {
                service : "Property Management" 
            }
        ]
    },
     {
        serviceTitle : "Contact Us" ,
        services : [
            {
                service : "Contact Form" 
            }
            ,
             {
                service : "Our Offices" 
            }
        
        ]
    }
   
      
    
   ]
   ,
   copyright : "@2023 Estatein. All Rights Reserved." ,
   terms : "Terms & Conditions",
   socialMedia : [
       {
           icon : "./assets/images/facebook.webp"
       }
       ,
       {
           icon : "./assets/images/linkdin.webp"
       }
       ,
       {
           icon : "./assets/images/x.webp"
       }
       ,
       {
        icon : "./assets/images/youtube.webp"
       }
   ]
   

}