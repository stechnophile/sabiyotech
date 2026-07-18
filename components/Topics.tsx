import Link from "next/link";

const topics = [
  {
    title: "Election Management Systems",
    icon: "🗳️",
    description:
      "Explore voter registration, polling, candidate management, and election operations.",
  },
  {
    title: "Election Cybersecurity",
    icon: "🔐",
    description:
      "Protect election infrastructure from cyber threats and strengthen resilience.",
  },
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    description:
      "Discover how AI supports election planning, logistics, and integrity.",
  },
  {
    title: "Digital Democracy",
    icon: "🌍",
    description:
      "Technology that enhances transparency, citizen participation, and trust.",
  },
  {
    title: "GIS & Boundary Delimitation",
    icon: "🛰️",
    description:
      "Geospatial technologies for constituency mapping and polling station planning.",
  },
  {
    title: "Election Data Analytics",
    icon: "📊",
    description:
      "Insights from election data, dashboards, visualization, and reporting.",
  },
];

export default function Topics() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Knowledge Hub
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Explore Election Technology
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-lg">
            A growing collection of articles, research, case studies,
            and practical resources on election technology and digital democracy.
          </p>
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
                href="/election-technology"
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