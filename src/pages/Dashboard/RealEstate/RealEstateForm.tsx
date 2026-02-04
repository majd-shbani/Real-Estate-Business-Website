import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { type AppDispatch } from "../../../redux/store/index";
import { addProperty, updateProperty, type Property } from "../../../redux/slice/propertiesSlice";
import { FaArrowLeft, FaCheckCircle, FaCoins, FaImage, FaPlus, FaTrash } from "react-icons/fa";
import FormInput from "../../../components/FormInput/FormInput";
import { basicInfoFields, pricingConfig, specsFields } from "../../../data/DashboardData/DashboardData";
import { useProperties } from "../Hooks/Hooks";

const getCleanPropertyData = (property: Property | null): Omit<Property, "id"> => ({
      name: property?.name || "",
      description: property?.description || "",
      location: property?.location || "",
      type: property?.type || "Villa",
      categoryBadge: property?.categoryBadge || "",
      mainImage: property?.mainImage || "",
      gallery: property?.gallery || [],
      amenities: property?.amenities || [],
      specs: property?.specs || { bedrooms: 0, bathrooms: 0, area: "",buildYear:"" },
      pricing: {
            listingPrice: property?.pricing?.listingPrice || 0,
            additionalFees: property?.pricing?.additionalFees || {
                  propertyTransferTax: 0, legalFees: 0, homeInspection: 0, propertyInsurance: 0, mortgageFees: 0
            },
            monthlyCosts: property?.pricing?.monthlyCosts || { propertyTaxes: 0, hoaFees: 0 },
            totalInitialCosts: property?.pricing?.totalInitialCosts || {
                  listingPrice: 0, additionalFeesSum: 0, downPayment: 0, mortgageAmount: 0
            },
            monthlyExpenses: property?.pricing?.monthlyExpenses || {
                  propertyTaxes: 0, hoaFees: 0, mortgagePayment: 0, propertyInsurance: 0
            }
      }
});

const RealEstateForm = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const dispatch = useDispatch<AppDispatch>();
      const { properties, loading } = useProperties();
      const [loadedId, setLoadedId] = useState<string | null>(null);
      const [tempGalleryUrl, setTempGalleryUrl] = useState("");
      const [tempAmenity, setTempAmenity] = useState("");
      const [formData, setFormData] = useState<Omit<Property, "id">>(getCleanPropertyData(null));
      const isEditMode = !!id;
      const property = id ? properties.find((p) => p.id === id) : null;

      useEffect(() => {
            if (isEditMode && property && property.id !== loadedId) {
                  Promise.resolve().then(() => {
                        setFormData(getCleanPropertyData(property));
                        setLoadedId(property.id);
                  });
            }
      }, [isEditMode, property, loadedId]);


      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            try {
                  if (isEditMode && id) {
                        await dispatch(updateProperty({ id, ...formData })).unwrap();
                  } else {
                        await dispatch(addProperty(formData)).unwrap();
                  }
                  navigate("/dashboard");
            } catch (err) { alert(err); }
      };

      if (id && loading && !property) return <div className="text-white text-center py-20 animate-pulse">Loading Property Data...</div>;
      if (id && !loading && !property) return <div className="text-white text-center py-20">Property Not Found</div>;


      const handleUpdate = (path: string, value: string | number | string[]) => {
            const keys = path.split('.');
            setFormData(prev => {
                  const newState = JSON.parse(JSON.stringify(prev));
                  let current = newState as Record<string, unknown>;
                  for (let i = 0; i < keys.length - 1; i++) {
                        current = current[keys[i]] as Record<string, unknown>;
                  }
                  current[keys[keys.length - 1]] = value;
                  return newState;
            });
      };

      return (
            <div className=" bg-gray-08 rounded-3xl text-white mb-20 shadow-2xl">
                  <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-gray-60 hover:text-white mb-4 transition-colors">
                        <FaArrowLeft /> Back to List
                  </button>
                  <h2 className="text-3xl font-bold mb-10 border-b border-gray-15">
                        {isEditMode ? "Edit Detailed Listing" : "Create Full Property Portfolio"}
                  </h2>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* Basic Info & Specifications */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              <section className="bg-gray-10 p-8 rounded-2xl border border-gray-15 space-y-6 shadow-sm">
                                    <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                                          <div className="w-1.5 h-6 bg-purple-60 rounded-full"></div>
                                          Basic Information
                                    </h3>
                                    <div className="grid grid-cols-1 gap-6">
                                          {basicInfoFields.map(f => (
                                                <FormInput key={f.id} input={{
                                                      ...f,
                                                      value: (formData[f.name as keyof typeof formData] as string),
                                                      onChange: (e) => handleUpdate(f.name, e.target.value)
                                                }} />
                                          ))}
                                    </div>
                              </section>

                              <section className="bg-gray-10 p-8 rounded-2xl border border-gray-15 space-y-6 shadow-sm">
                                    <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                                          <div className="w-1.5 h-6 bg-purple-60 rounded-full"></div>
                                          Property Specifications
                                    </h3>
                                    <div className="grid grid-cols-1 gap-6">
                                          {specsFields.map(field => {
                                                const specKey = field.name.split('.')[1] as keyof typeof formData.specs;

                                                return (
                                                      <FormInput key={field.id} input={{
                                                            ...field,
                                                            value: formData.specs[specKey].toString(),
                                                            onChange: (e) => handleUpdate(field.name, field.isNumber ? Number(e.target.value) : e.target.value)
                                                      }} />
                                                );
                                          })}
                                    </div>
                              </section>
                        </div>

                        {/* Description */}
                        <section className="bg-gray-10 p-8 rounded-2xl border border-gray-15 space-y-6 shadow-sm">
                              <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                                    <div className="w-1.5 h-6 bg-purple-60 rounded-full"></div>
                                    About Property
                              </h3>
                              <FormInput input={{
                                    id: 7, label: "Property Description", name: "description", type: "textarea",
                                    placeholder: "Write a detailed description about the property, its surroundings, and what makes it unique...",
                                    value: formData.description,
                                    onChange: (e) => handleUpdate('description', e.target.value),
                                    className: "min-h-28!"
                              }} />
                        </section>

                        {/* Image Gallery & Amenities */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                              <section className="bg-gray-10 p-6 rounded-2xl border border-gray-15 space-y-4 shadow-sm">
                                    <h3 className="text-xl font-bold flex items-center gap-2 text-purple-60"><FaImage /> Gallery</h3>
                                    <FormInput input={{ id: 8, label: "Main Image URL", name: "mainImg", type: "text", placeholder: "http://...", value: formData.mainImage, onChange: (e) => handleUpdate('mainImage', e.target.value) }} />
                                    <div className="flex gap-2 items-end">
                                          <div className="flex-1"><FormInput input={{ id: 9, label: "Add Photo", name: "gal", type: "text", placeholder: "http://...", value: tempGalleryUrl, onChange: (e) => setTempGalleryUrl(e.target.value) }} /></div>
                                          <button type="button" onClick={() => { if (tempGalleryUrl) { handleUpdate('gallery', [...formData.gallery, tempGalleryUrl]); setTempGalleryUrl(""); } }} className="bg-purple-60 p-4 rounded-lg h-fit mb-1 cursor-pointer hover:bg-purple-70 transition-colors"><FaPlus /></button>
                                    </div>

                                    <div className="grid grid-cols-4 gap-2 mt-2">
                                          {formData.gallery.map((url, i) => (
                                                <div key={i} className="relative group aspect-square rounded-lg overflow-hidden border border-gray-20">
                                                      <img src={url} className="w-full h-full object-cover" alt="" />
                                                      <button type="button" onClick={() => handleUpdate('gallery', formData.gallery.filter((_, idx) => idx !== i))} className="absolute inset-0 bg-red-600/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"><FaTrash size={14} /></button>
                                                </div>
                                          ))}
                                    </div>
                              </section>

                              <section className="bg-gray-10 p-6 rounded-2xl border border-gray-15 space-y-4 shadow-sm">
                                    <h3 className="text-xl font-bold flex items-center gap-2 text-purple-60"><FaCheckCircle /> Amenities</h3>
                                    <div className="flex gap-2 items-end">
                                          <div className="flex-1"><FormInput input={{ id: 10, label: "Add Amenity", name: "am", type: "text", placeholder: "e.g. Smart Home", value: tempAmenity, onChange: (e) => setTempAmenity(e.target.value) }} /></div>
                                          <button type="button" onClick={() => { if (tempAmenity) { handleUpdate('amenities', [...formData.amenities, tempAmenity]); setTempAmenity(""); } }} className="bg-purple-60 p-4 rounded-lg h-fit mb-1 cursor-pointer hover:bg-purple-70 transition-colors"><FaPlus /></button>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                          {formData.amenities.map((amenity, i) => (
                                                <span key={i} className="bg-gray-15 px-3 py-1 rounded-full text-xs border border-purple-60 flex items-center gap-2">
                                                      {amenity} <FaTrash className="cursor-pointer text-red-500" onClick={() => handleUpdate('amenities', formData.amenities.filter((_, idx) => idx !== i))} />
                                                </span>
                                          ))}
                                    </div>
                              </section>
                        </div>

                        {/* Pricing Tables */}
                        <section className="space-y-6">
                              <h3 className="text-2xl font-bold text-purple-60 flex items-center gap-3">
                                    <FaCoins /> Comprehensive Pricing Tables
                              </h3>
                              {pricingConfig.map((table, tIdx) => {
                                    const sectionKey = table.section as keyof typeof formData.pricing;
                                    const sectionData = formData.pricing[sectionKey];

                                    return (
                                          <div key={tIdx} className='bg-gray-10 p-8 rounded-2xl border shadow-sm transition-all hover:border-purple-60/20 border-gray-15'>
                                                <h4 className={`font-bold mb-6 border-b border-gray-15 pb-2`}>
                                                      {table.title}
                                                </h4>

                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                      {table.section === 'totalInitialCosts' && (
                                                            <FormInput input={{
                                                                  id: 27, label: "Listing Price", name: "lp", type: "number", placeholder: "0",
                                                                  value: formData.pricing.listingPrice.toString(),
                                                                  onChange: (e) => handleUpdate('pricing.listingPrice', Number(e.target.value))
                                                            }} />
                                                      )}

                                                      {table.fields.map(field => {
                                                            const data = sectionData as Record<string, number | string>;
                                                            const fieldValue = data[field.name];
                                                            const inputType = field.type || "number";

                                                            return (
                                                                  <FormInput
                                                                        key={field.id}
                                                                        input={{
                                                                              ...field,
                                                                              type: inputType,
                                                                              placeholder: inputType === "number" ? "0" : "Enter details...",
                                                                              value: fieldValue?.toString() || "",
                                                                              onChange: (e) => {
                                                                                    const val = e.target.value;
                                                                                    handleUpdate(
                                                                                          `pricing.${table.section}.${field.name}`,
                                                                                          inputType === "number" ? Number(val) : val
                                                                                    );
                                                                              }
                                                                        }}
                                                                  />
                                                            );
                                                      })}
                                                </div>
                                          </div>
                                    );
                              })}
                        </section>

                        <button type="submit" disabled={loading} className="w-full py-6 bg-purple-60 hover:bg-purple-70 rounded-2xl font-bold text-xl shadow-xl transition-all disabled:opacity-50 mt-10">
                              {loading ? "Processing Listing..." : id ? "Update All Data & Tables" : "Publish Complete Property Portfolio"}
                        </button>
                  </form>
            </div>
      );
}

export default RealEstateForm