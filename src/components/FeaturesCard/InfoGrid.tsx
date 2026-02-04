import React from 'react';
import FeaturesCard from './FeaturesCard';

const defaultFeatures = [
    {
        id: 1,
        title: 'Find Your Dream Home',
        icon: './assets/icons/FeatureIcon-1.svg',
        link: '/Properties'
            
    },
    {
        id: 2,
        title: 'Unlock Property Value',
        icon: './assets/icons/FeatureIcon-2.svg',
        link: '/services'
    },
    {
        id: 3,
        title: 'Effortless Property Management  ',
        icon: './assets/icons/FeatureIcon-3.svg',
        link: '/services'
    },
    {
        id: 4,
        title: 'Smart Investments, Informed Decisions',
        icon: './assets/icons/FeatureIcon-4.svg',
        link: '/contact'
    }
];

interface InfoGridProps {
    items?: {
        id: number;
        title: React.ReactNode;
        icon: string;
        link?: string;
    }[];
}

const InfoGrid = ({ items = defaultFeatures }: InfoGridProps) => {

    return (
        <div className="

        w-full grid grid-cols-2 lg:grid-cols-4 gap-2.5 2xl:gap-5 items-start  p-2.5 2xl:p-5  ">
            {items.map((feature) => (
                <FeaturesCard
                    key={feature.id}
                    icon={feature.icon}
                    title={feature.title}
                    link={feature.link}
                />
            ))}
        </div>
    );
};

export default InfoGrid;
