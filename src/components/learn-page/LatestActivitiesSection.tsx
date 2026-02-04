interface LatestActivitiesProps {
    onActivityClick: () => void;
}
const activities = [
    {
        title: "Top-up with $100 and get $30 in BTC",
        desc: "New users who top-up and trade enjoy a $30 BTC reward",
        date: "Jan 23",
        // Random 3D style placeholder image
        img: "/images/learnsection.png"
    },
    {
        title: "Top-up with $100 and get $30 in BTC",
        desc: "New users who top-up and trade enjoy a $30 BTC reward",
        date: "Jan 23",
        img: "/images/learnsection.png"
    },
    {
        title: "Top-up with $100 and get $30 in BTC",
        desc: "New users who top-up and trade enjoy a $30 BTC reward",
        date: "Jan 23",
        img: "/images/learnsection.png"
    },
    {
        title: "Top-up with $100 and get $30 in BTC",
        desc: "New users who top-up and trade enjoy a $30 BTC reward",
        date: "Jan 23",
        img: "/images/learnsection.png"
    }
];

export default function LatestActivities({ onActivityClick }: LatestActivitiesProps) {
    return (
        <div className="space-y-8">
            {activities.map((item, index) => (
                <div
                    onClick={onActivityClick}
                    key={index}
                    className="flex items-center gap-6 cursor-pointer group"
                >
                    {/* 3D Image Container matching the layout */}
                    <div className="w-50 h-38 bg-[#222222] rounded-sm flex items-center justify-center shrink-0  relative overflow-hidden">
                        {/* Random Placeholder Image */}
                        <img
                            src={item.img}
                            alt="Activity Icon"
                            className="w-30 h-30 object-contain "
                        />
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-white ">
                            {item.title}
                        </h3>

                        {/* Description Pill - exactly as in image */}
                        <div className="bg-[#222222] text-gray-400 text-sm px-4 py-2 rounded-lg inline-block w-fit">
                            {item.desc}
                        </div>

                        <p className="text-gray-400 text-sm font-light">
                            {item.date}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}