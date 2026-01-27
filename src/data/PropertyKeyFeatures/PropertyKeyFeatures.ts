import type { PropertyKeyFeaturesProps } from "../../interfaces/PropertyKeyFeatures/PropertyKeyFeatures";

export const propertyKeyFeatures: PropertyKeyFeaturesProps = {
    title: "Description",
    description: "Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.",
    propertyRooms: [
        {
            icon: "./assets/icons/Icon (16).webp",
            name: "Bedrooms",
            value: "04"
        },
        {
            icon: "./assets/icons/Shape (1).webp",
            name: "Bathrooms",
            value: "03"
        }
        ,
        {
            icon : "./assets/icons/Icon (17).webp",
            name: "Area",
            value: "2,500 Square Feet"
        }
    ],
    keyFeatures: {
        title: "Key Features and Amenities",
        features: [
            {
                icon: "./assets/icons/lightning.svg",
                feature: "Expansive oceanfront terrace for outdoor entertaining"
            },
            {
                icon: "./assets/icons/lightning.svg",
                feature: "Gourmet kitchen with top-of-the-line appliances"
            }
            ,
            {
                icon: "./assets/icons/lightning.svg",
                feature : "Private beach access for morning strolls and sunset views"
            }
            ,
             {
                icon: "./assets/icons/lightning.svg",
                feature : "Master suite with a spa-inspired bathroom and ocean-facing balcony"
             }
             ,
             {
                icon : "./assets/icons/lightning.svg",
                feature : "Private garage and ample storage space"
             }
        ]
    }
};
