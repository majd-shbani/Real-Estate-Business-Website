import type { FeaturedCardProps } from "../../interfaces/FeaturedCard/FeaturedCard";

export const Features: FeaturedCardProps[] = [
      {
            id: "1",
            image: "assets/images/Seaside Serenity Villa.webp",
            alt: "Seaside Serenity Villa", 
            title: "Seaside Serenity Villa", 
            description: `A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood. 
            This architectural gem features a spacious open-concept living area bathed in natural light, 
            thanks to its expansive floor-to-ceiling windows.`, 
            details: [
                  { icon: "assets/icons/Bedroom.svg", description:"4-Bedroom"},
                  { icon: "assets/icons/Bathroom.svg", description: "3-Bathroom" },
                  { icon: "assets/icons/Villa.svg", description: "villa" }
            ], 
            price: "550,000"
      },
      {
            id: "2",
            image: "assets/images/Metropolitan Haven.webp",
            alt: "Metropolitan Haven",
            title: "Metropolitan Haven",
            description: `A chic and fully-furnished 2-bedroom apartment with panoramic city views.
            This modern residence features high-end finishes, designer furniture, and floor-to-ceiling windows that frame the urban skyline.`,
            details: [
                  { icon: "assets/icons/Bedroom.svg", description: "2-Bedroom" },
                  { icon: "assets/icons/Bathroom.svg", description: "2-Bathroom" },
                  { icon: "assets/icons/Villa.svg", description: "villa" }
            ],
            price: "550,000"
      },
      {
            id: "3",
            image: "assets/images/Rustic Retreat Cottage.webp",
            alt: "Rustic Retreat Cottage",
            title: "Rustic Retreat Cottage",
            description: `An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community, offering both security and style.
            This home features a bright, open-plan layout with modern flooring and a contemporary kitchen.`,
            details: [
                  { icon: "assets/icons/Bedroom.svg", description: "3-Bedroom" },
                  { icon: "assets/icons/Bathroom.svg", description: "3-Bathroom" },
                  { icon: "assets/icons/Villa.svg", description: "villa" }
            ],
            price: "550,000"
      }
]