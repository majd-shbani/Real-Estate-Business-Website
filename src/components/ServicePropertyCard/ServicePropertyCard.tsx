import type { ServicePropertyCardProps } from "../../interfaces/ServicePropertyCard/ServicePropertyCard"



const ServicePropertyCard = ({ id, title, description, image, className } : ServicePropertyCardProps) => {
  
  return (
    

   <div key={id} className={`w-full  sm:max-w-112.5 xl:max-w-103.25 2xl:max-w-lg border border-gray-15 rounded-xl p-6 xl:p-10 2xl:p-12.5  
   ${className || ''}`}
    >

      <div className="flex gap-3 mb-4 xl:mb-5 xl:gap-4 2xl:gap-5 2xl:mb-7.5">

      <img className="w-12 h-12 xl:w-15 xl:h-15 2xl:w-20.5 2xl:h-20.5"
       src={image} alt={title} />
      <h3 className=" font-semibold my-auto text-lg  xl:text-xl 2xl:text-2xl ">
        {title}
        </h3>
      
      </div>
      
      <p className="text-gray-60 text-sm font-medium xl:text-base 2xl:text-lg ">
        {description}
        </p>

     </div>

  )
}

export default ServicePropertyCard

