import Link from "next/link";

export default function minimalist() {
    const challenges = [
        {
            title: 'Tesla Heropage',
            route: '/day1minimalist'
        },
           { title: 'Reelables Heropage',
            route: '/day2minimalist'
        },
           { title: 'Evidence Dark Mode',
            route: '/day3minimalist'
        },
    ]

    return (
        <div className=" min-h-screen p-4">
            <h1 className="text-3xl font-bold text-center text-black mb-8">
                30 Days Minimalist Components
            </h1>
            <div className="flex flex-col items-center gap-4 ">
                {challenges.map((challenge, index) => (
                    <Link key={index} href={challenge.route} className="text-xl text-black">
                        <p className="group">
                            <span>
                                {`Day ${index + 1}) `}
                            </span>
                            <span className="group-hover:underline transition duration-300">
                                {`${challenge.title}`}
                            </span>
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
