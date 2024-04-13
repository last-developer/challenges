import Link from "next/link";

export default function Home() {
  const challenges = [
    {
      title: '30 Days Minimalist Components',
      route: '/30DaysMinimalist'
    }
  ]
  return (
    <div className=" min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Last Developer Challenges
      </h1>
      <div className="flex flex-col items-center gap-4 ">
        {challenges.map((challenge, index) => (
          <Link key={index} href={challenge.route} className="text-xl text-black hover:underline transition duration-300">
              {`${index + 1}) ${challenge.title}`}
          </Link>
        ))}
      </div>
    </div>
  );
}
