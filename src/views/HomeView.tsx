import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import StreamerList from "../components/StreamerList";
import ViewAllStreamers from "../components/ViewAllStreamers";

export default function HomeView() {
    return (
        <>
            <Hero />
            <HomeCard />
            <StreamerList isHome={true} />
            <ViewAllStreamers />
        </>
    );
}
