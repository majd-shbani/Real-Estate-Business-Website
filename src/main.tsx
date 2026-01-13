import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Properties from './pages/Properties'
import PropertyDetails from './pages/PropertyDetails'
import Services from './pages/Services'
import Contact from './pages/Contact'


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
      path : "propertyDetails" ,
      element : <PropertyDetails/>
    },
    {
      path : "services" ,
      element : <Services/>
    },
    {
      path : "contact" ,
      element : <Contact/>
    }]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={routes}/>
  </StrictMode>,
)