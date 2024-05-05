import Link from "next/link";

export default function minimalist() {
    const challenges = [
        {
            title: 'Tesla Heropage',
            route: '/day1minimalist'
        },
        {
            title: 'Reelables Heropage',
            route: '/day2minimalist'
        },
        {
            title: 'Evidence Dark Mode',
            route: '/day3minimalist'
        },
        {
            title: 'Roame Minimalist Hero page',
            route: '/day4minimalist'
        },
        {
            title: 'Aviator overflow & padding fixed',
            route: '/day5minimalist'
        },
        {
            title: 'Getthera New Card',
            route: '/day6minimalist'
        },
        {
            title: 'Draftwise Nextjs Router',
            route: '/day7minimalist/day7minimalist'
        },
        {
            title: 'Join Arc New Card',
            route: '/day8minimalist'
        },
        {
            title: 'Skio Card Container',
            route: '/day9minimalist'
        },
        {
            title: 'Permit Flow New Heropage ',
            route: '/day10minimalist'
        },
        {
            title: 'One Month New Hero-section',
            route: '/day11minimalist'
        },
        {
            title: 'Teleo New Hero-section',
            route: '/day12minimalist'
        },
        {
            title: 'Retail Ready New Hero-section',
            route: '/day13minimalist'
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
