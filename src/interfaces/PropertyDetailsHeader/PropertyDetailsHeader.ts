export interface PropertyImage {
      id: string;
      url: string;
      alt: string;
}

export interface PropertyDetails {
      id: string;
      title: string;
      location: string;
      price: number;
      images: PropertyImage[];
      description: string;
}

export interface PropsDetails {
      property: PropertyDetails;
}
