import { useParams } from "react-router-dom";
import { usePropertyDetails } from "./Dashboard/Hooks/Hooks";
import PropertyDetailsHeader from "../components/PropertyDetailsHeader/PropertyDetailsHeader";
import PropertyKeyFeatures from "../components/PropertyKeyFeatures/PropertyKeyFeatures";
import PricingSection from "../components/PricingSection/PricingSection";
import InquireAboutSeaside from "../components/InquireAboutSeaside/InquireAboutSeaside";
import FaqSection from "../components/FaqSection/FaqSection";

const PropertyDetailsPage = () => {
      const { id } = useParams();
      const { mappedData, loading } = usePropertyDetails(id);

      if (loading) return <div className="text-white text-center py-20">Loading...</div>;
      if (!mappedData) return <div className="text-white text-center py-20">Property Not Found</div>;
      return (
            <div>
                  <PropertyDetailsHeader property={mappedData.header} />
                  <PropertyKeyFeatures card={mappedData.features} />
                  <InquireAboutSeaside/>
                  <PricingSection
                        title="Listing Price"
                        price={mappedData.header.price.toLocaleString()}
                        pricingItems={mappedData.pricingItems}
                  />
                  <FaqSection />
            </div>
      );
};

export default PropertyDetailsPage;
