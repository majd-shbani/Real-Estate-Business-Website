import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig";
import { ref, get, set, remove, update, runTransaction } from "firebase/database";

export interface Employee {
  id: string;
  name: string;
  position: string;
  image: string;
}

interface EmployeesState {
  employees: Employee[];
  loading: boolean;
  actionLoading: boolean;
  error: string | null;
}

const initialState: EmployeesState = {
  employees: [],
  loading: false,
  actionLoading: false,
  error: null,
};

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees", 
  async () => {
    const employeesRef = ref(db, "employees");
    const snapshot = await get(employeesRef);
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
    }
    return [];
  }
);

export const addEmployee = createAsyncThunk("employees/addEmployee", async (newEmployee: Omit<Employee, "id">, { rejectWithValue }) => {
    if (!newEmployee.name?.trim()) {
      return rejectWithValue("Name is required");
    }
    
    const lastId = ref(db, "employeeLastId");
    
    const newId = await runTransaction(lastId, (currentValue) => {
      return (currentValue || 0) + 1;
    }).then(result => result.snapshot.val());
    
    const employeeData = {
      name: newEmployee.name.trim(),
      position: newEmployee.position.trim(),
      image: newEmployee.image.trim()
    };

    const newEmployeeRef = ref(db, `employees/${newId}`); 
    await set(newEmployeeRef, employeeData);
    
    return {
      id: newId.toString(),
      ...employeeData
    };
  }
);

export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async (updatedEmployee: Employee) => {
    const { id, ...data } = updatedEmployee;
    const employeeRef = ref(db, `employees/${id}`);
    await update(employeeRef, data);
    return updatedEmployee;
  }
);

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (id: string) => {
    const employeeRef = ref(db, `employees/${id}`);
    await remove(employeeRef);
    return id;
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setLoading: (state, action) => { 
      state.loading = action.payload;
    },
    setError: (state, action) => { 
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch";
      })
      
      .addCase(addEmployee.pending, (state) => {
        state.actionLoading = true;
        state.error = null;
      })
      .addCase(addEmployee.fulfilled, (state) => {
        state.actionLoading = false;
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.actionLoading = false;
        state.error = action.payload as string || "Failed to add";
      })
      
      .addCase(updateEmployee.pending, (state) => {
        state.actionLoading = true;
      })
      .addCase(updateEmployee.fulfilled, (state) => {
        state.actionLoading = false;
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.actionLoading = false;
        state.error = action.error.message || "Failed to update";
      })
      
      .addCase(deleteEmployee.pending, (state) => {
        state.actionLoading = true;
      })
      .addCase(deleteEmployee.fulfilled, (state) => {
        state.actionLoading = false;
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.actionLoading = false;
        state.error = action.error.message || "Failed to delete";
      });
  },
});

export const { setEmployees, setLoading, setError } = employeesSlice.actions;
export default employeesSlice.reducer;