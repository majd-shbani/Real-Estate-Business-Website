import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ref, onValue } from "firebase/database";
import type { AppDispatch, RootState } from "../../../redux/store";
import { setLoading, setProperties } from "../../../redux/slice/propertiesSlice";
import { db } from "../../../firebaseConfig";
import { pricingDescriptions } from "../Utils/Utils";
import { pricingConfig } from "../../../data/DashboardData/DashboardData";

export const useProperties = () => {
      const dispatch = useDispatch<AppDispatch>();
      const { properties, loading } = useSelector((state: RootState) => state.properties);

      useEffect(() => {
            dispatch(setLoading(true)); 
            const unsubscribe = onValue(ref(db, 'properties'), (snapshot) => {
                  const data = snapshot.val();
                  const list = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
                  dispatch(setProperties(list));
                  dispatch(setLoading(false));
            });
            return () => unsubscribe();
      }, [dispatch]);

      return { properties, loading };
};

export const usePropertyDetails = (id: string | undefined) => {
      const { properties, loading } = useProperties();
      const property = useMemo(() => properties.find((p) => p.id === id), [properties, id]);

      const mappedData = useMemo(() => {
            if (!property) return null;

            const pricingItems = pricingConfig.map((config) => {
                  const sectionKey = config.section as keyof typeof property.pricing;
                  const sectionData = property.pricing[sectionKey] as Record<string, number | string>;
                  let details = config.fields.map((field) => {
                        const rawValue = sectionData?.[field.name] ?? 0; 
                        const isNumeric = typeof rawValue === 'number';
                        const specificKey = `${config.section}_${field.name}`;
                        const description = pricingDescriptions[specificKey] || pricingDescriptions[field.name] || "";


                        return {
                              title: field.label,
                              price: isNumeric ? rawValue.toLocaleString() : rawValue.toString(),
                              btn: description,
                              isCurrency: isNumeric 
                        };
                  });

                  if (config.section === "totalInitialCosts") {
                        details = [
                              {
                                    title: "Listing Price",
                                    price: property.pricing.listingPrice.toLocaleString(),
                                    btn: "",
                                    isCurrency: true 
                              },
                              ...details
                        ];
                  }

                  return {
                        title: config.title,
                        details: details
                  };
            });
            return {
                  header: {
                        id: property.id,
                        title: property.name,
                        location: property.location,
                        price: property.pricing.listingPrice,
                        images: [
                              { id: "main-img", url: property.mainImage, alt: property.name },
                              ...(property.gallery || []).map((url, i) => ({ id: `gallery-img-${i}`, url, alt: `${property.name} gallery ${i}` }))
                        ]
                  },
                  features: {
                        title: "Description",
                        description: property.description,
                        propertyRooms: [
                              { icon: "/assets/icons/Bedroom.svg", name: "Bedrooms", value: property.specs.bedrooms.toString() },
                              { icon: "/assets/icons/Bathroom.svg", name: "Bathrooms", value: property.specs.bathrooms.toString() },
                              { icon: "/assets/icons/Area.svg", name: "Area", value: property.specs.area }
                        ],
                        keyFeatures: {
                              title: "Key Features",
                              features: (property.amenities || []).map(a => ({ icon: "/assets/icons/lightning.svg", feature: a }))
                        }
                  },
                  pricingItems
            };
      }, [property]);

      return { mappedData, loading, property };
};