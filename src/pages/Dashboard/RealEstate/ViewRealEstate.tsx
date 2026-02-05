import { useParams, useNavigate } from "react-router-dom";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import BaseCard from "../../../components/BaseCard/BaseCard";
import { usePropertyDetails } from "../Hooks/Hooks";
import { BsHouseCheck } from "react-icons/bs";


const PricingRow = ({ label, value }: { label: string; value: number | string }) => (
      <div className="flex justify-between items-center py-3 border-b border-gray-15 last:border-0 text-[14px] lg:text-[18px]">
            <span className="text-gray-60">{label}</span>
            <span className=" font-semibold text-Jet-Gray dark:text-white">
                  {typeof value === "number" ? `$${value.toLocaleString()}` : value}
            </span>
      </div>
);

const ViewRealEstate = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const { mappedData, loading, property } = usePropertyDetails(id);

      if (loading)
            return <div className="text-white text-center py-20 animate-pulse text-2xl">Loading...</div>;

      if (!property || !mappedData) {
            return (
                  <div className="text-center py-20 text-white">
                        <h2 className="text-2xl font-bold">Property not found!</h2>
                        <button onClick={() => navigate("/dashboard")} className="mt-4 text-purple-60 underline">Go Back</button>
                  </div>
            );
      }

      return (
            <div className=" flex flex-col gap-4 lg:gap-6 xl:gap-8 text-Jet-Gray dark:text-white">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start md:items-center gap-4 mb-0!">
                        <div>
                              <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-gray-60 hover:text-white mb-4 transition-colors">
                                    <FaArrowLeft /> Back to List
                              </button>
                              <h1 className="text-2xl md:text-4xl font-bold text-Jet-Gray dark:text-white">{property.name}</h1>
                              <div className="flex gap-5">
                                    <p className="flex items-center gap-2 text-gray-60 mt-2 text-[24px] font-medium">
                                          <FaMapMarkerAlt className="text-purple-60 " /> {property.location}
                                    </p>
                                    <p className="flex items-center gap-2 text-gray-60 mt-2 text-[24px] font-medium">
                                          <BsHouseCheck className="text-purple-60" />{property.specs.buildYear}
                                    </p>
                              </div>
                              
                        </div>

                        <div className="bg-Platinum dark:bg-gray-10 px-6 py-4 rounded-[10px] 2xl:rounded-xl border border-Silver dark:border-gray-15">
                              <p className="text-gray-60 text-sm">Listing Price</p>
                              <p className="text-2xl md:text-4xl font-semibold text-Jet-Gray dark:text-white">${property.pricing.listingPrice.toLocaleString()}</p>
                        </div>
                  </div>

                  {/* Image Gallery */}
                  <div className="flex flex-col gap-6 mb-0!">

                        <div className="w-full h-75 md:h-130 lg:h-150 rounded-[10px] 2xl:rounded-xl overflow-hidden shadow-2xl border border-gray-15">
                              <img
                                    src={property.mainImage}
                                    alt="Main Property"
                                    className="w-full h-full object-cover"
                              />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                              {(property.gallery || []).map((img, index) => (
                                    <div
                                          key={index}
                                          className="h-24 md:h-32 lg:h-40 rounded-[10px] 2xl:rounded-xl overflow-hidden bg-gray-10 shadow-md group border border-gray-15 hover:border-purple-60 transition-all cursor-pointer"
                                    >
                                          <img
                                                src={img}
                                                alt={`Gallery ${index}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                          />
                                    </div>
                              ))}
                        </div>

                  </div>

                  {/* Description & Specs*/}
                  <BaseCard className="p-5! xl:p-10! 2xl:p-12.5! bg-Platinum dark:bg-gray-10 mb-0!">
                        <h3 className="text-xl font-bold mb-4 ">Description</h3>
                        <p className="text-gray-60 leading-relaxed">{property.description}</p>

                        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-15">
                              <div className="text-center">
                                    <FaBed className="mx-auto text-purple-60 text-2xl mb-2" />
                                    <p className="text-gray-60 text-[16px]">Bedrooms</p>
                                    <p className="font-bold">{property.specs.bedrooms}</p>
                              </div>

                              <div className="text-center border-x border-gray-15">
                                    <FaBath className="mx-auto text-purple-60 text-2xl mb-2" />
                                    <p className="text-gray-60 text-[16px]">Bathrooms</p>
                                    <p className="font-bold">{property.specs.bathrooms}</p>
                              </div>

                              <div className="text-center">
                                    <FaRulerCombined className="mx-auto text-purple-60 text-2xl mb-2" />
                                    <p className="text-gray-60 text-[16px]">Area Size</p>
                                    <p className="font-bold">{property.specs.area}</p>
                              </div>
                        </div>
                  </BaseCard>

                  {/* Amenities */}
                  <BaseCard className=" p-5! xl:p-10! 2xl:p-12.5! bg-Platinum dark:bg-gray-10 mb-0!">
                        <h3 className="text-xl font-bold mb-6">Key Features & Amenities</h3>
                        <div className="grid grid-cols-1 gap-4">
                              {(property.amenities || []).map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-gray-40 bg-Alice-Blue border-Silver dark:bg-gray-08 p-3 rounded-lg border dark:border-gray-15">
                                          <FaCheckCircle className="text-purple-60 shrink-0" /> {item}
                                    </div>
                              ))}
                        </div>
                  </BaseCard>

                  <h2 className="text-2xl font-bold border-l-4 border-purple-60 pl-4">Pricing Details</h2>

                  {/* Additional Fees */}
                  <BaseCard className="p-5! xl:p-10! 2xl:p-12.5! bg-Platinum dark:bg-gray-10 mb-0!">
                        <h4 className="text-[16px] lg:text-[24px] text-purple-60 font-bold mb-4">Additional Fees</h4>
                        <PricingRow label="Transfer Tax" value={property.pricing.additionalFees.propertyTransferTax} />
                        <PricingRow label="Legal Fees" value={property.pricing.additionalFees.legalFees} />
                        <PricingRow label="Home Inspection" value={property.pricing.additionalFees.homeInspection} />
                        <PricingRow label="Mortgage Fees" value={property.pricing.additionalFees.mortgageFees} />
                  </BaseCard>

                  {/* Monthly Costs */}
                  <BaseCard className="p-5! xl:p-10! 2xl:p-12.5! bg-Platinum dark:bg-gray-10 mb-0!">
                        <h4 className="text-[16px] lg:text-[24px]  text-purple-60 font-bold mb-4">Monthly Costs</h4>
                        <PricingRow label="Property Taxes" value={property.pricing.monthlyCosts.propertyTaxes} />
                        <PricingRow label="HOA Fees" value={property.pricing.monthlyCosts.hoaFees} />
                  </BaseCard>

                  {/* Total Initial Costs */}
                  <BaseCard className="p-5! xl:p-10! 2xl:p-12.5! bg-Platinum dark:bg-gray-10 mb-0!">
                        <h4 className="text-[16px] lg:text-[24px]  text-purple-60 font-bold mb-4">Initial Investment</h4>
                        <PricingRow label="Down Payment" value={property.pricing.totalInitialCosts.downPayment} />
                        <PricingRow label="Mortgage Amount" value={property.pricing.totalInitialCosts.mortgageAmount} />
                        <PricingRow label="Initial Fees Sum" value={property.pricing.totalInitialCosts.additionalFeesSum} />
                  </BaseCard>

                  {/* Monthly Expenses */}
                  <BaseCard className="p-5! xl:p-10! 2xl:p-12.5! bg-Platinum dark:bg-gray-10 mb-0!">
                        <h4 className="text-[16px] lg:text-[24px] text-purple-60 font-bold mb-4">Monthly Expenses</h4>
                        <PricingRow label="Mortgage Payment" value={property.pricing.monthlyExpenses.mortgagePayment} />
                        <PricingRow label="Property Insurance" value={property.pricing.monthlyExpenses.propertyInsurance} />
                  </BaseCard>
            </div>
      );
};

export default ViewRealEstate;