import { useMemo, useState } from "react"
import { FeaturedSectionBase } from "../components/FeaturedSection/FeaturedSection"
import HeroProperties, { type PropertiesFilters, type PropertiesFilterOptions } from "../components/HeroProperties/HeroProperties"
import PropertyBookingSection from "../components/PropertyBookingSection/PropertyBookingSection"
import { useProperties } from "./Dashboard/Hooks/Hooks"
import type { Property } from "../redux/slice/propertiesSlice"






interface PriceRange {
      start: number;
      end: number;
      label: string;
}

const buildPriceRanges = (prices: number[]): PriceRange[] => {
      if (prices.length === 0) return [];
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      if (min === max) {
            const label = `$${min.toLocaleString()}`;
            return [{ start: min, end: max, label }];
      }
      const bucketCount = Math.min(4, prices.length);
      const step = Math.max(1, Math.ceil((max - min + 1) / bucketCount));
      const ranges: PriceRange[] = [];
      for (let start = min; start <= max; start += step) {
            const end = Math.min(max, start + step - 1);
            const label = `$${start.toLocaleString()} - $${end.toLocaleString()}`;
            ranges.push({ start, end, label });
      }
      return ranges;
};

const PropertyDetails = () => {
      const { properties, loading } = useProperties();
      const [pendingFilters, setPendingFilters] = useState<PropertiesFilters>({ search: "" });
      const [appliedFilters, setAppliedFilters] = useState<PropertiesFilters>({ search: "" });

      const priceRanges = useMemo(() => {
            const prices = properties
                  .map((p) => p.pricing?.listingPrice)
                  .filter((v): v is number => typeof v === "number" && !Number.isNaN(v));
            return buildPriceRanges(prices);
      }, [properties]);

      const filterOptions = useMemo<PropertiesFilterOptions>(() => {
            const uniqueSorted = (values: string[]) =>
                  Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));

            return {
                  locations: uniqueSorted(properties.map((p) => p.location)),
                  types: uniqueSorted(properties.map((p) => p.type)),
                  priceRanges: priceRanges.map((r) => r.label),
                  sizeRanges: uniqueSorted(properties.map((p) => p.specs?.area || "")),
                  buildYears: uniqueSorted(properties.map((p) => p.specs?.buildYear || ""))
            };
      }, [properties, priceRanges]);

      const [prevFilterOptions, setPrevFilterOptions] = useState<PropertiesFilterOptions>(filterOptions);
      if (prevFilterOptions !== filterOptions) {
            const sanitize = (prev: PropertiesFilters) => {
                  const next = { ...prev };
                  if (next.location && !filterOptions.locations.includes(next.location)) next.location = "";
                  if (next.type && !filterOptions.types.includes(next.type)) next.type = "";
                  if (next.priceRange && !filterOptions.priceRanges.includes(next.priceRange)) next.priceRange = "";
                  if (next.sizeRange && !filterOptions.sizeRanges.includes(next.sizeRange)) next.sizeRange = "";
                  if (next.buildYear && !filterOptions.buildYears.includes(next.buildYear)) next.buildYear = "";
                  return next;
            };

            setPrevFilterOptions(filterOptions);
            setPendingFilters((prev) => sanitize(prev));
            setAppliedFilters((prev) => sanitize(prev));
      }

      const filteredProperties = useMemo(() => {
            const search = appliedFilters.search.trim().toLowerCase();
            const getPriceRangeLabel = (price: number) => {
                  const match = priceRanges.find((r) => price >= r.start && price <= r.end);
                  return match?.label;
            };

            return properties.filter((p: Property) => {
                  if (search) {
                        const haystack = [
                              p.name,
                              p.description,
                              p.location,
                              p.type,
                              p.categoryBadge
                        ].join(" ").toLowerCase();
                        if (!haystack.includes(search)) return false;
                  }
                  if (appliedFilters.location && p.location !== appliedFilters.location) return false;
                  if (appliedFilters.type && p.type !== appliedFilters.type) return false;
                  if (appliedFilters.sizeRange && (p.specs?.area || "") !== appliedFilters.sizeRange) return false;
                  if (appliedFilters.buildYear && (p.specs?.buildYear || "") !== appliedFilters.buildYear) return false;
                  if (appliedFilters.priceRange) {
                        const label = getPriceRangeLabel(p.pricing?.listingPrice || 0);
                        if (label !== appliedFilters.priceRange) return false;
                  }
                  return true;
            });
      }, [properties, appliedFilters, priceRanges]);

      return (
            <div>

                  <HeroProperties
                        filters={pendingFilters}
                        options={filterOptions}
                        onSearchChange={(value) => setPendingFilters((prev) => ({ ...prev, search: value }))}
                        onFilterChange={(key, value) => setPendingFilters((prev) => ({ ...prev, [key]: value }))}
                        onSubmit={() => setAppliedFilters(pendingFilters)}
                  />
                  <FeaturedSectionBase viewMode="properties" data={filteredProperties} loading={loading} />
                  <PropertyBookingSection />
            </div>
      )
}

export default PropertyDetails
