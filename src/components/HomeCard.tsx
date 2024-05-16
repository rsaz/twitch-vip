import Card from "./Card";

export default function HomeCard() {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card
                        card={{
                            title: "For Streamers",
                            subtitle: "Increase your engagement and revenue",
                        }}
                    />
                    <Card
                        card={{
                            title: "For Viewers",
                            subtitle: "Get exclusive access to your favorite streamers",
                        }}
                        layout={{
                            cardBackground: "bg-indigo-100",
                            buttonBackground: "bg-indigo-500",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
