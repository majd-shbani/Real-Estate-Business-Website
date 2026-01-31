import DiscoverOurOfficeLocations from "../components/DiscoverOurOfficeLocations/DiscoverOurOfficeLocations"
import ExploreWorldSection from "../components/ExploreWorldSection/ExploreWorldSection"
import HeroContact from "../components/HeroContact/HeroContact"
import { explorCardData } from "../data/ExploreData/ExploreData"


const Contact = () => {
    return (
        <div>
            <HeroContact/>
            <Connect/>
            <DiscoverOurOfficeLocations filters={["All", "Regional", "International"]}/>
            <ExploreWorldSection images={explorCardData}/>
        </div>
    )
}

export default Contact