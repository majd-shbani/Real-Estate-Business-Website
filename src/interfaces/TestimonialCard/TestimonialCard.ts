export interface TestimonialCardProps {
    card: {
        id: number;
        rating: number;
        title: string;
        subTitle: string;
        avatar: string;
        name: string;
        location: string;
    }
}

export interface StarRatingProps {
    icon: string;
    rating: number;
}