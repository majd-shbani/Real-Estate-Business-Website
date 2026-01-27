import type { CardDiscoverOfiiceLoactionProps } from "../../interfaces/CardDiscoverOfiiceLoactionInterface/CardDiscoverOfiiceLoactionInterface"
import Button from "../Button/Button"

const CardDiscoverOfiiceLoaction = ({office, title, desc, contact}: CardDiscoverOfiiceLoactionProps) => {
    return (
        <div className="flex-1 flex flex-col p-6 xl:p-10 2xl:p-[50px] rounded-lg 2xl:rounded-xl border border-solid border-gray-15">
            <p className="text-[14px] 2xl:text-lg font-medium">{office}</p>
            <h3 className="flex-1 text-[20px] xl:text-2xl 2xl:text-3xl font-semibold leading-normal mt-1 xl:mt-1.5 2xl:mt-2.5 mb-2 xl:mb-2.5 2xl:mb-3.5">{title}</h3>
            <p className="flex-1 text-[14px] xl:text-[16px] 2xl:text-lg leading-normal tracking-[0.006em] font-medium text-gray-60">{desc}</p>
            <div className="my-6 xl:my-[30px] 2xl:my-10 flex flex-wrap gap-2 2xl:gap-2.5">
                {contact.map((item, index) => {
                    return(
                        <div key={index} className="py-2.5 2xl:py-3.5 px-4 2xl:px-5 rounded-[28px] bg-gray-10 flex gap-1 items-center">
                            <img src={item.icon} alt="" />
                            <p className="text-[14px] 2xl:text-lg font-medium">{item.text}</p>
                        </div>
                    )
                })}
            </div>
            <Button text="Get Direction" className="w-full bg-purple-60"/>
        </div>
    )
}

export default CardDiscoverOfiiceLoaction
