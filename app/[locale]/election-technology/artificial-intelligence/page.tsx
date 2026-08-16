import Link from "next/link";

export default function ArtificialIntelligence() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🤖
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-purple-600">
          Election Technology
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Artificial Intelligence in Elections
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Exploring how artificial intelligence can support election
          administration, cybersecurity, data analysis, logistics,
          and citizen services.
        </p>

      </div>

      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          Understanding AI in Election Technology
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Artificial intelligence is transforming how organizations
          process information and make decisions. Election management
          bodies generate large volumes of data throughout the electoral
          cycle, creating opportunities for responsible applications of
          AI and machine learning.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          However, election-related AI applications require careful
          governance because elections directly affect democratic
          participation and public trust.
        </p>

      </section>

      {/* Applications */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Potential Applications
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Election Planning",
              icon: "📅",
              text: "AI can help analyze historical information and support planning for election resources, staffing, and logistics.",
            },
            {
              title: "Cybersecurity",
              icon: "🔐",
              text: "Machine learning can assist in detecting anomalies and potential security threats in system logs and network activity.",
            },
            {
              title: "Data Analytics",
              icon: "📊",
              text: "AI can identify patterns in large datasets and support election officials with operational analysis.",
            },
            {
              title: "Citizen Services",
              icon: "💬",
              text: "AI-powered assistants can provide citizens with accessible information about election procedures and services.",
            },
            {
              title: "Logistics Optimization",
              icon: "🚚",
              text: "AI can support resource allocation, transportation planning, and election material distribution.",
            },
            {
              title: "Information Analysis",
              icon: "🔎",
              text: "AI tools can help analyze large volumes of information and identify areas that require human review.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm"
            >

              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Responsible AI */}
      <section className="mt-14 rounded-2xl bg-purple-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Responsible AI for Democratic Processes
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI systems used in election environments should be designed
          with transparency, accountability, privacy, security, and
          human oversight in mind.
        </p>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
          <li>Human oversight</li>
          <li>Transparency and explainability</li>
          <li>Privacy protection</li>
          <li>Security and resilience</li>
          <li>Bias monitoring</li>
          <li>Clear accountability</li>
        </ul>

      </section>

      {/* AI + Cybersecurity */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          AI and Cybersecurity
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          One particularly promising area is the use of AI for
          cybersecurity. Security systems can generate thousands of
          events and logs every day. AI can help security analysts
          prioritize suspicious events and identify patterns that may
          otherwise be difficult to detect manually.
        </p>

      </section>

            {/* Related Topics */}
      <section className="mt-16 border-t pt-10">

        <h2 className="text-2xl font-bold text-slate-900">
          Related Topics
        </h2>

        <div className="mt-5 flex flex-wrap gap-4">

          <Link
            href="/en/election-technology/election-cybersecurity"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Election Cybersecurity →
          </Link>

          <Link
            href="/en/election-technology/election-management-systems"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Election Management Systems →
          </Link>

          <Link
            href="/en/election-technology/election-data-analytics"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Election Data Analytics →
          </Link>

          <Link
            href="/en/election-technology/digital-voting"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Digital Voting →
          </Link>

        </div>

      </section>

      {/* Back */}
      <div className="mt-16 border-t pt-8">
        <Link
          href="/en/election-technology"
          className="font-semibold text-blue-700 hover:underline"
        >
          ← Back to Election Technology
        </Link>
      </div>

    </main>
  );
}