export interface Details{
      icon:string,
      description:string
}

export interface FeaturedCardProps {
      id:string,
      image: string,
      alt:string,
      title: string,
      description: string,
      details: Details[],
      price: string
}