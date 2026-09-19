import Link from "next/link";

const topics = [
  {
    title: "Election Management Systems",
    slug: "election-management-systems",
    icon: "🗳️",
    description:
      "Explore voter registration, polling, candidate management, and election operations.",
  },
  {
    title: "Election Cybersecurity",
    slug: "election-cybersecurity",
    icon: "🔐",
    description:
      "Protect election infrastructure from cyber threats and strengthen resilience.",
  },
  {
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    icon: "🤖",
    description:
      "Discover how AI supports election planning, logistics, and integrity.",
  },
  {
    title: "Digital Voting",
    slug: "digital-voting",
    icon: "🗳️",
    description:
      "Explore different voting technologies and their applications in modern elections.",
  },
];

export default function Topics() {
  return (
  <section
    id="election-technology"
    className="mx-auto max-w-7xl px-6 py-20"
  >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Knowledge Hub
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Explore Election Technology
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="text-5xl">
                {topic.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {topic.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {topic.description}
              </p>

              <Link
                href={`/election-technology/${topic.slug}`}
                className="mt-8 inline-block text-blue-700 font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  
);
}