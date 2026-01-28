import DiscoverOurOfficeLocations from "../components/DiscoverOurOfficeLocations/DiscoverOurOfficeLocations"
import ExploreWorldSection from "../components/ExploreWorldSection/ExploreWorldSection"
import { explorCardData } from "../data/ExploreData/ExploreData"


const Contact = () => {
    return (
        <div>
            <DiscoverOurOfficeLocations filters={["All", "Regional", "International"]}/>
            <ExploreWorldSection images={explorCardData}/>
        </div>
    )
}

export default Contact