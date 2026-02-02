import { createSlice, createAsyncThunk,type PayloadAction } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig";
import { ref, set, remove, update, runTransaction } from "firebase/database";

export interface Property {
      id: string;
      name: string;
      description: string;
      location: string;
      type: string;
      categoryBadge: string;
      mainImage: string;
      gallery: string[];
      specs: { bedrooms: number; bathrooms: number; area: string; };
      amenities: string[];
      pricing: {
            listingPrice: number;
            additionalFees: {
                  propertyTransferTax: number;
                  legalFees: number;
                  homeInspection: number;
                  propertyInsurance: number;
                  mortgageFees: number; 
            };
            monthlyCosts: {
                  propertyTaxes: number;
                  hoaFees: number; 
            };
            totalInitialCosts: {
                  listingPrice: number;
                  additionalFeesSum: number; 
                  downPayment: number; 
                  mortgageAmount: number; 
            };
            monthlyExpenses: {
                  propertyTaxes: number;
                  hoaFees: number;
                  mortgagePayment: number; 
                  propertyInsurance: number; 
            };
      };
}

interface PropertiesState {
      properties: Property[];
      loading: boolean;
      actionLoading: boolean;
      error: string | null;
}

const initialState: PropertiesState = {
      properties: [],
      loading: false,
      actionLoading: false,
      error: null,
};

export const addProperty = createAsyncThunk("properties/addProperty", async (newProperty: Omit<Property, "id">, { rejectWithValue }) => {
      try {
            const lastIdRef = ref(db, "propertyLastId");
            const newId = await runTransaction(lastIdRef, (currentValue) => (currentValue || 0) + 1).then(res => res.snapshot.val());
            const propertyData = { ...newProperty, id: newId.toString() };
            await set(ref(db, `properties/${newId}`), propertyData);
            return propertyData;
      } catch (error: unknown) { 
            if (error instanceof Error) {
                  return rejectWithValue(error.message);
            }
            return rejectWithValue("An unexpected error occurred");
      }

});

export const updateProperty = createAsyncThunk("properties/updateProperty", async (property: Property) => {
      const { id, ...data } = property;
      await update(ref(db, `properties/${id}`), data);
      return property;
});

export const deleteProperty = createAsyncThunk("properties/deleteProperty", async (id: string) => {
      await remove(ref(db, `properties/${id}`));
      return id;
});

const propertiesSlice = createSlice({
      name: "properties",
      initialState,
      reducers: {
            setProperties: (state, action: PayloadAction<Property[]>) => { state.properties = action.payload; },
            setLoading: (state, action: PayloadAction<boolean>) => { state.loading = action.payload; },
            setError: (state, action: PayloadAction<string | null>) => { state.error = action.payload; },
      },
      extraReducers: (builder) => {
            builder
                  .addCase(addProperty.pending, (state) => { state.actionLoading = true; })
                  .addCase(addProperty.fulfilled, (state) => { state.actionLoading = false; })
                  .addCase(addProperty.rejected, (state, action) => { state.actionLoading = false; state.error = action.payload as string; });
      },
});

export const { setProperties, setLoading, setError } = propertiesSlice.actions;
export default propertiesSlice.reducer;