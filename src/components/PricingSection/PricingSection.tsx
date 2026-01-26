

import { PricingCarsData } from "../../data/PricingData/PricingData"
import type { pricingData } from "../../interfaces/Pricing/Pricing"
import PricingCard from "../PricingCard/PricingCard"
import Section from "../Section/Section"

const PricingSection = ({title , price}: pricingData) => {
    return (
        <Section title="Comprehensive Pricing Details"
                description={`At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision`}>
                    <div className="flex flex-col gap-7.5 xl:gap-10 2xl:gap-12.5">
                        <div className="flex justify-between items-center px-5 py-6 lg:py-5 lg:px-10 2xl:px-12.5 2xl:py-7.5 bg-gray-15 w-full rounded-xl">
                            <b className="text-lg xl:text-xl 2xl:text-2xl font-semibold pb-2.5 lg:pb-0 lg:pe-4 2xl:pe-5 text-white">Note</b>
                            <p className="text-sm 2xl:text-lg font-medium pt-2.5 lg:pt-0 lg:ps-4 2xl:ps-5 text-gray-60">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
                        </div>
                        <div className="flex flex-col xl:flex-row justify-between gap-5 xl:gap-10 2xl:gap-12.5">
                            <div>
                                <p className="text-sm xl:text-base 2xl:text-xl text-gray-60">{title}</p>
                                <b className="text-2xl xl:text-3xl 2xl:text-[40px]">${price}</b>
                            </div>
                            <div className="flex flex-col gap-5 xl:gap-10 2xl:gap-12.5">
                                <PricingCard items={PricingCarsData} />
                            </div>
                        </div>
                    </div>
        </Section>
    )
}

export default PricingSection
