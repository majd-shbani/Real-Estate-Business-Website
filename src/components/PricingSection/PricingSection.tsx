
import type { pricingData, PricingPlane } from "../../interfaces/Pricing/Pricing"
import PricingCard from "../PricingCard/PricingCard"
import Section from "../Section/Section"
interface PricingSectionProps extends pricingData {
    pricingItems: PricingPlane[];
}

const PricingSection = ({ title, price, pricingItems }: PricingSectionProps) => {
    return (
        <Section title="Comprehensive Pricing Details"
                description={`At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision`}>
                <div className="flex flex-col gap-7.5 xl:gap-10 2xl:gap-12.5">
                    <div className="flex items-start sm:items-center flex-col sm:flex-row px-5 py-6 xl:py-5 xl:px-10 2xl:px-12.5 2xl:py-7.5 bg-Platinum dark:bg-gray-10 border border-Silver dark:border-gray-15 w-full rounded-xl">
                        <b className="text-lg xl:text-xl 2xl:text-2xl font-semibold pb-2.5 sm:pb-0 sm:pe-4 2xl:pe-5 ">Note</b>
                        <p className="text-sm 2xl:text-lg font-medium pt-2.5 sm:pt-0 sm:ps-4 2xl:ps-5 text-gray-60 border-t sm:border-0 sm:border-l border-Silver dark:border-gray-15 leading-normal lg:py-1.25 2xl:py-1.25">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between gap-5 xl:gap-10 2xl:gap-12.5">
                        <div>
                            <p className="text-sm xl:text-base 2xl:text-xl text-gray-60">{title}</p>
                            <b className="text-2xl xl:text-3xl 2xl:text-[40px]">${price}</b>
                        </div>
                        <div className="flex flex-col gap-5 xl:gap-10 2xl:gap-12.5">
                            <PricingCard items={pricingItems} />
                        </div>
                    </div>
                </div>
        </Section>
    )
}

export default PricingSection
