import type { Achievement } from "../../interfaces/Achievement/Achievement"


const Achievement = ({id ,title , description}: Achievement) => {

  return (
    <div key={id}  className=" justify-center border border-gray-15  shadow-thin-grey  xl:shadow-medium-grey 2xl:shadow-thick-grey rounded-xl p-7.5 md:w-60 md:h-65 lg:w-87.5 lg:h-53 xl:p-10 xl:w-101.5  2xl:p-[2.5vw] 2xl:w-[505.6px]  2xl:h-64 ">
      <div>
        <h3 className=" text-xl xl:text-2xl 2xl:text-3xl xl:font-semibold mb-6 xl:mb-4 2xl:mb-7.5">{title}</h3>
        <p className="text-gray-60 text-sm xl:text-base 2xl:text-lg">{description}</p>
      </div>
    </div>
  )
}

export default Achievement


