
export interface NumberOfRooms {
    icon: string
    name: string
    value : string
}
export interface Feature {
    icon : string
    feature : string
}
export interface KeyFeatures {
    title : string
    features: Feature[]
}


export interface PropertyKeyFeaturesProps {
    title : string
    description : string
   propertyRooms: NumberOfRooms[]
   keyFeatures: KeyFeatures
}

export interface PropertyKeyFeatures {
   card : PropertyKeyFeaturesProps
}