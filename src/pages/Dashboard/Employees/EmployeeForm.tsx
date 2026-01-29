import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee, updateEmployee, setEmployees, setLoading, setError } from "../../../redux/slice/employeesSlice";
import type { Employee } from "../../../redux/slice/employeesSlice";
import type { RootState, AppDispatch } from "../../../redux/store";
import FormInput from "../../../components/FormInput/FormInput";
import { EmployeeFormInputs } from "../../../data/DashboardData/DashboardData";
import { db } from "../../../firebaseConfig";
import { ref, onValue } from "firebase/database";

const EmployeeForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { employees, loading } = useSelector((state: RootState) => state.employees);

  const [formData, setFormData] = useState<Omit<Employee, "id">>({
    name: "",
    position: "",
    image: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditMode = !!id;
  const employee = id
    ? employees.find((emp) => emp.id === id || emp.id === Number(id).toString())
    : null;

  useEffect(() => {
    dispatch(setLoading(true));
    const employeesRef = ref(db, 'employees');
    
    const unsubscribe = onValue(
      employeesRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const employeesList: Employee[] = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          dispatch(setEmployees(employeesList));
        } else {
          dispatch(setEmployees([]));
        }
        dispatch(setLoading(false));
      },
      (err) => {
        dispatch(setError(err.message));
        dispatch(setLoading(false));
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (employee) {
      setFormData({
        name: employee.name,
        position: employee.position,
        image: employee.image,
      });
    }
  }, [employee]);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isEditMode && id) {
        await dispatch(updateEmployee({ id, ...formData })).unwrap();
      } else {
        await dispatch(addEmployee(formData)).unwrap();
      }
      navigate("/dashboard/employees");
    } catch (error) {
      console.error("Failed to save employee:", error);
      const errorMessage = error instanceof Error ? error.message : "Failed to save employee";
      alert(`Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  
  if (id && !employee && loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-15 rounded-xl">
        <p className="text-white text-center">Loading employee data...</p>
      </div>
    );
  }

  if (id && !employee && !loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-15 rounded-xl">
        <p className="text-white text-center">Employee not found</p>
      </div>
    );
  }

  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-15 rounded-xl">
      <h2 className="text-3xl font-bold text-white mb-4">
        {isEditMode ? "Edit Employee" : "Add New Employee"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {EmployeeFormInputs.map((input) => (
          <FormInput
            key={input.id}
            input={{
              id: input.id,
              name: input.name,
              label: input.label,
              placeholder: input.placeholder,
              type: input.type,
              value: formData[input.name as keyof typeof formData],
              onChange: handleChange,
              className: "text-white text-2xl!",
              disabled: isSubmitting,
            }}
          />
        ))}

        <div className="flex gap-4 mt-4">
          <button
            type="button"
            onClick={() => navigate("/dashboard/employees")}
            className="px-6 py-3 rounded-lg border border-gray-60 text-white hover:bg-gray-800 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
            >
            <p className="text-lg xl:text-xl">Cancel</p>
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-purple-60 text-lg xl:text-xl text-white hover:bg-purple-70 transition-colors font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving...": isEditMode ? "Update Changes" : "Create Employee"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;