import DiscoverOurOfficeLocations from "../components/DiscoverOurOfficeLocations/DiscoverOurOfficeLocations"
import ExploreWorldSection from "../components/ExploreWorldSection/ExploreWorldSection"
import { explorCardData } from "../data/ExploreData/ExploreData"


const Contact = () => {
    return (
        <div>
            <ExploreWorldSection images={explorCardData}/>
            <DiscoverOurOfficeLocations filters={["All", "Regional", "International"]}/>
        </div>
    )
}

export default Contact