

export interface pricingData {
      title: string;
      price: string;
}

export interface DetailsInterface {
      title?: string;
      price?: string;
      btn?: string;
      subTitle?: string;
      isCurrency?: boolean;
}


export interface PricingPlane {
      title: string;
      gridColumn?: string
      details: DetailsInterface[];
}

export interface pricinCardgData {
      items: PricingPlane[]
}