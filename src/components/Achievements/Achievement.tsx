import type { Achievement } from "../../interfaces/Achievement/Achievement"


const Achievement = ({id ,title , description}: Achievement) => {

  return (
    <div key={id}  className=" justify-center border border-gray-15  shadow-thin-grey xl:shadow-medium-grey 2xl:shadow-thick-grey rounded-xl p-7.5  xl:p-10 2xl:p-[2.5vw] 2xl:w-[505.6px]  2xl:h-[256px] ">
      <div>
        <h3 className="text-white text-xl xl:text-2xl 2xl:text-3xl 2xl:font-semibold mb-4 xl:mb-6 2xl:mb-[30px]">{title}</h3>
        <p className="text-gray-60 text-sm xl:text-base 2xl:text-lg">{description}</p>
      </div>
    </div>
  )
}

export default Achievement


