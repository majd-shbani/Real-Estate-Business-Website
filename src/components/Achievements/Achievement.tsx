import type { Achievement } from "../../interfaces/Achievement/Achievement"


const Achievement = ({id ,title , description}: Achievement) => {

  return (
    <div key={id}  className=" justify-center border-4 xl:border-6 2xl:border-8 border-Silver  dark:border-gray-15  dark:shadow-thin-grey  dark:xl:shadow-medium-grey dark:2xl:shadow-thick-grey rounded-xl h-42.25 sm:w-full p-7.5 md:h-35 lg:w-87.5 lg:h-53 xl:p-10 xl:w-[28.2vw]  2xl:p-[2.605vw] 2xl:w-[505.6px]  2xl:h-64 ">
      <div>
        <h3 className=" text-xl xl:text-2xl 2xl:text-3xl xl:font-semibold mb-4 xl:mb-6 2xl:mb-7.5">{title}</h3>
        <p className="text-gray-60 text-sm xl:text-base 2xl:text-lg">{description}</p>
      </div>
    </div>
  )
}

export default Achievement


