import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, setEmployees, setLoading, setError } from "../../../redux/slice/employeesSlice";
import type { Employee as EmployeeType } from "../../../redux/slice/employeesSlice";
import type { RootState, AppDispatch } from "../../../redux/store";
import { db } from "../../../firebaseConfig";
import { ref, onValue } from "firebase/database";
import DashboardEmployeeCard from "../../../components/EmployeeCard/DashboardEmployeeCard";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const ListEmployees = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { employees, loading, error } = useSelector((state: RootState) => state.employees);

  useEffect(() => {
    dispatch(setLoading(true));
    const employeesRef = ref(db, 'employees');
    
    const unsubscribe = onValue(employeesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const employeesList: EmployeeType[] = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          } as EmployeeType));
          dispatch(setEmployees(employeesList));
        } else {
          dispatch(setEmployees([]));
        }
        dispatch(setLoading(false));
      },
      (error) => {
        dispatch(setError(error.message));
        dispatch(setLoading(false));
      }
    );

    return () => unsubscribe();
  }, [dispatch]);

  const handleEdit = (id: string | number) => {
    navigate(`/dashboard/employees/${id}/edit`);
  };

  const handleDelete = async (id: string | number) => {
  if (window.confirm("Are you sure you want to delete this employee?")) {
    try {
      await dispatch(deleteEmployee(id.toString())).unwrap();
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : "Failed to delete employee";
      
      alert(`Error: ${errorMessage}`);
    }
  }
};

  if (loading) return <div className="text-white text-center"><p className="text-lg xl:text-4xl">Loading...</p></div>;
  if (error) return <div className="text-red-500 text-center"><p className="text-lg xl:text-4xl">Error: {error}</p></div>;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h2 className="text-lg xl:text-3xl font-semibold text-white">Employees</h2>
        <button
          onClick={() => navigate("/dashboard/employees/create")}
          className="flex items-center gap-2 px-4 py-2 bg-purple-60 text-white rounded-lg hover:bg-purple-70 transition-colors cursor-pointer">
          <FaPlus />
          <p className="text-lg xl:text-xl font-semibold">Add Employee</p>
        </button>
      </div>

      {employees.length === 0 ? (
        <p className="text-lg xl:text-2xl text-gray-60 text-center py-6 xl:py-10">No employees found. Add one to get started!</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-10'>
          {employees.map((emp) => (
            <DashboardEmployeeCard
              key={emp.id}
              card={emp}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListEmployees;