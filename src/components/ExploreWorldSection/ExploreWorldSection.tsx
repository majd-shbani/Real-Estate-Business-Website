import type { ExploreImg } from "../../interfaces/Explore/Explore"
import SectionHeader from "../SectionHeader/SectionHeader"


const ExploreWorldSection = ({images} : ExploreImg) => {
    return (
        <div className="px-4 lg:px-[7.8125vw] xl:px-[5.55555vw] 2xl:px-[8.4375vw]">
            <div className="w-full mx-auto mb-20 xl:mb-30 2xl:mb-37.5 p-6 md:p-10 xl:p-15 2xl:p-20 bg-[url(assets/images/EploreBGDesign.webp)] bg-gray-10 bg-cover bg-center rounded-xl grid grid-cols-4 gap-2.5 xl:gap-5 ">
                {images.map((img  , index) => {
                    let spanClass = ""
                    let orderClass = ""
                    if (index < 3) {
                        spanClass = "col-span-2 w-full xl:max-w-152 2xl:max-w-248"
                        orderClass = `order-${index + 1}`
                    } else if (index === 3 || index === 4) {
                        spanClass = "col-span-1 xl:max-w-73 2xl:max-w-120"
                        orderClass = `order-${index + 1}`
                    } else if (index === 5) {
                        spanClass = "col-span-4 xl:col-span-2 xl:max-w-152 2xl:max-w-248 mt-2.5 xl:mt-0"
                        orderClass = "order-7" 
                    }
                    return(
                        <img className={`${spanClass} ${orderClass} w-full`} key={index} src={img.src} alt={img.alt} />
                    )
                })}
                <div className="col-span-4 xl:col-span-2 order-6">
                    <SectionHeader title="Explore Estatein's World" className="mb-0! xl:mb-0 2xl:mb-0! mt-6 xl:mt-2 nth-[1]:gap-0!"
                    description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."/>
                </div>
            </div>
        </div>
    )
}

export default ExploreWorldSection
