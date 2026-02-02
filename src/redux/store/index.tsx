import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../slice/employeesSlice";
import propertiesReducer from "../slice/propertiesSlice";
export const store = configureStore({
      reducer: {
            employees: employeesReducer,
            properties: propertiesReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
