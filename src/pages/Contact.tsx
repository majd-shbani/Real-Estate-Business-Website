import Connect from "../components/Connect/Connect"
import DiscoverOurOfficeLocations from "../components/DiscoverOurOfficeLocations/DiscoverOurOfficeLocations"


const Contact = () => {
    return (
        <div>
            <Connect/>
            <DiscoverOurOfficeLocations filters={["All", "Regional", "International"]}/>
        </div>
    )
}

export default Contact
