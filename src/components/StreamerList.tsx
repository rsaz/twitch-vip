import Streamer from "./Streamer";
import streamers from "../streamers.json";

export default function StreamerList({ isHome = false }: { isHome?: boolean }) {
    const recentStreamers = isHome ? streamers.slice(0, 3) : streamers;

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Most Watched" : "All Online Streamers"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recentStreamers.map((streamer) => (
                        <Streamer key={streamer.id} streamer={streamer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
