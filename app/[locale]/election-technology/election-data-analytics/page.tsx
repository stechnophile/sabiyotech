import Link from "next/link";

export default function ElectionDataAnalytics() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          📊
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-orange-600">
          Election Technology
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Election Data Analytics
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Turning election data into useful information for planning,
          monitoring, reporting, research, and evidence-based
          decision-making.
        </p>

      </div>

      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          What is Election Data Analytics?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Election data analytics involves collecting, processing,
          analyzing, and visualizing information generated throughout
          the electoral process.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          When properly managed, election data can help election
          officials understand operational trends, identify problems,
          allocate resources, and communicate information effectively
          with stakeholders and citizens.
        </p>

      </section>

      {/* Applications */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Applications of Election Data Analytics
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Voter Registration Analysis",
              text: "Analyze voter registration trends, demographic information, and geographic distribution.",
            },
            {
              title: "Polling Station Planning",
              text: "Use historical and geographic data to support polling station planning and resource allocation.",
            },
            {
              title: "Election Logistics",
              text: "Track election materials, personnel, transportation, and other operational requirements.",
            },
            {
              title: "Turnout Analysis",
              text: "Analyze voter participation patterns across different geographic areas and election cycles.",
            },
            {
              title: "Election Results",
              text: "Present election results through structured databases, dashboards, charts, and maps.",
            },
            {
              title: "Research and Policy",
              text: "Support researchers and policymakers with reliable election datasets and analytical insights.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm"
            >

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Dashboards */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Election Dashboards
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Interactive dashboards can provide election officials and
          stakeholders with a centralized view of important indicators.
          Depending on the purpose, dashboards can display registration
          statistics, polling station information, logistics status,
          turnout information, and election results.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          <div className="rounded-xl bg-blue-50 p-6">
            <h3 className="font-bold">
              Monitoring
            </h3>

            <p className="mt-2 text-slate-600">
              Monitor important election indicators.
            </p>
          </div>

          <div className="rounded-xl bg-green-50 p-6">
            <h3 className="font-bold">
              Visualization
            </h3>

            <p className="mt-2 text-slate-600">
              Present complex information visually.
            </p>
          </div>

          <div className="rounded-xl bg-orange-50 p-6">
            <h3 className="font-bold">
              Decision Support
            </h3>

            <p className="mt-2 text-slate-600">
              Support evidence-based decisions.
            </p>
          </div>

        </div>

      </section>

      {/* Data Quality */}
      <section className="mt-14 rounded-2xl bg-slate-900 p-8 text-white">

        <h2 className="text-3xl font-bold">
          Data Quality and Security
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Good analytics depend on good data. Election datasets should
          be accurate, complete, timely, consistent, and protected
          against unauthorized access or manipulation.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Data governance, privacy protection, access control,
          validation, auditing, and secure storage should therefore
          be part of the election data lifecycle.
        </p>

      </section>

            {/* Related Topics */}
      <section className="mt-16 border-t pt-10">

        <h2 className="text-2xl font-bold text-slate-900">
          Related Topics
        </h2>

        <div className="mt-5 flex flex-wrap gap-4">

          <Link
            href="/en/election-technology/artificial-intelligence"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Artificial Intelligence →
          </Link>

          <Link
            href="/en/election-technology/election-management-systems"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Election Management Systems →
          </Link>

          <Link
            href="/en/election-technology/election-cybersecurity"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Election Cybersecurity →
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