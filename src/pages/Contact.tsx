import Connect from "../components/Connect/Connect"
import DiscoverOurOfficeLocations from "../components/DiscoverOurOfficeLocations/DiscoverOurOfficeLocations"
import ExploreWorldSection from "../components/ExploreWorldSection/ExploreWorldSection"
import { explorCardData } from "../data/ExploreData/ExploreData"


const Contact = () => {
    return (
        <div>
            <Connect/>
            <ExploreWorldSection images={explorCardData}/>
            <DiscoverOurOfficeLocations filters={["All", "Regional", "International"]}/>
            <ExploreWorldSection images={explorCardData}/>
        </div>
    )
}

export default Contact