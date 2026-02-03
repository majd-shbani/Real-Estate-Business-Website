import { useEffect } from "react";
import { TeamHeaderData } from "../../data/OurTeamSection/OurTeamSectionData"
import EmployeeCard from "../EmployeeCard/EmployeeCard"
import Section from "../Section/Section"
import { useDispatch, useSelector } from "react-redux"
import { setEmployees, setLoading } from "../../redux/slice/employeesSlice"
import type { RootState, AppDispatch } from "../../redux/store"
import { db } from "../../firebaseConfig";
import { ref, onValue } from "firebase/database";
import type { Employee as EmployeeType } from "../../redux/slice/employeesSlice";


const OurTeamSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { employees } = useSelector((state: RootState) => state.employees);

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
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Section
        title={TeamHeaderData.title}
        description={TeamHeaderData.description}
    >
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-5 2xl:gap-7.5'>
          {employees.map(card => (
            <EmployeeCard key={card.id} card={card} />
          ))}
        </div>
    </Section>
  )
}

export default OurTeamSection
