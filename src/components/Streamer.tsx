import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Streamer {
    id: string;
    category: string;
    streamer: string;
    bio: string;
    thumbnail: string;
    viewcount: string;
    location: string;
}

interface StreamerProps {
    streamer: Streamer;
}

export default function Streamer({ streamer }: StreamerProps) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let bio = streamer.bio;

    if (!showFullDescription && bio.length > 50) {
        bio = bio.substring(0, 50) + "...";
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{streamer.category}</div>
                    <h3 className="text-xl font-bold">{streamer.streamer}</h3>
                </div>

                <div className="mb-5">{bio}</div>
                <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="text-indigo-500 mb-5 hover:text-indigo-600"
                >
                    {showFullDescription ? "Show less" : "Show more"}
                </button>

                {/*<!-- div for streamer thumbnail -->*/}
                <div className="mb-5">
                    <img src={streamer.thumbnail} alt="Richard Zampieri" className="rounded-lg" />
                </div>

                <h3 className="text-indigo-500 mb-2">{`Views Count: ${streamer.viewcount}`}</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <FaMapMarker className="inline-block text-lg mb-1 mr-1" />
                        {streamer.location}
                    </div>
                    <Link
                        to="/streamers"
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Watch Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
