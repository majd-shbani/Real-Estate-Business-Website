import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard/Dashboard'
import { Links } from './data/DashboardData/DashboardData'
import ListRealEstates from './pages/Dashboard/RealEstate/ListRealEstates'
import ListEmployees from './pages/Dashboard/Employees/ListEmployees'
import ViewRealEstate from './pages/Dashboard/RealEstate/ViewRealEstate'
import RealEstateForm from './pages/Dashboard/RealEstate/RealEstateForm'
import EmployeeForm from './pages/Dashboard/Employees/EmployeeForm'
import ViewEmployee from './pages/Dashboard/Employees/ViewEmployee'




const routes = createBrowserRouter([
  {
    path :"/",
    element : <Root /> ,
    children :[{
      path : "" ,
      element : <Home/>
    },
    {
      path : "aboutUs" ,
      element : <AboutUs/>
    },
    {
      path : "Properties" ,
      element : <Properties/>
    },
    {
      path : "propertyDetails/:id" ,
      element : <PropertyDetails/>
    },
    {
      path : "services" ,
      element : <Services/>
    },
    {
      path : "contact" ,
      element : <Contact/>
    },
  ]},
  {
    path: "dashboard",
    element: <Dashboard links={Links}/>,
    children: [{
      index: true,
      element: <ListRealEstates />
    },
    {
      path: "real-estate/:id/create",
      element: <RealEstateForm />
    },
    {
      path: "real-estate/:id",
      element: <ViewRealEstate />
    },
    {
      path: "real-estate/:id/edit",
      element: <RealEstateForm />
    },
    {
      path: "employees",
      element: <ListEmployees />
    },
    {
      path: "employees/create",
      element: <EmployeeForm />
    },
    {
      path: "employees/:id",
      element: <ViewEmployee />
    },
    {
      path: "employees/:id/edit",
      element: <EmployeeForm />
    },
  ]}
],{
  basename:"/Real-Estate-Business-Website/",
}
)

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>,
)