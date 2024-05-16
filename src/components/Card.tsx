import { Link } from "react-router-dom";

interface Card {
    title: string;
    subtitle: string;
}

interface CardLayout {
    cardBackground?: string;
    buttonBackground?: string;
}

interface CardProps {
    card: Card;
    layout?: CardLayout;
}

export default function Card({
    card: { title, subtitle },
    layout: { cardBackground, buttonBackground } = {},
}: CardProps) {
    const isCardBackground = cardBackground ? cardBackground : "bg-gray-100";
    const isButtonBackground = buttonBackground ? buttonBackground : "bg-black";

    return (
        <div className={`${isCardBackground} p-6 rounded-lg shadow-md`}>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 mb-4">{subtitle}</p>
            <Link
                to="/streamers"
                className={`inline-block ${isButtonBackground} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
            >
                Learn More
            </Link>
        </div>
    );
}
