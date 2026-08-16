import Link from "next/link";

export default function ElectionManagementSystems() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🗳️
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-blue-600">
          Election Technology
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Election Management Systems
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Digital systems that support election planning, administration,
          logistics, voter services, candidate management, and election
          operations.
        </p>

      </div>

      {/* Introduction */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900">
          What is an Election Management System?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          An Election Management System (EMS) is a collection of digital
          tools, databases, and processes used to support different stages
          of an electoral process. These systems can help election
          management bodies organize complex operations and make election
          administration more efficient and transparent.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A modern EMS may support voter registration, candidate management,
          polling station management, election logistics, results
          management, reporting, and communication with stakeholders.
        </p>
      </section>

      {/* Key Components */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Key Components
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Voter Registration",
              text: "Management of voter information, registration processes, updates, and electoral roll preparation.",
            },
            {
              title: "Candidate Management",
              text: "Digital management of candidate registration, nomination information, documents, and related processes.",
            },
            {
              title: "Polling Station Management",
              text: "Planning and management of polling locations, polling staff, equipment, and election-day requirements.",
            },
            {
              title: "Election Logistics",
              text: "Planning and tracking the movement of election materials, equipment, personnel, and resources.",
            },
            {
              title: "Results Management",
              text: "Collection, verification, aggregation, and publication of election results.",
            },
            {
              title: "Reporting and Dashboards",
              text: "Real-time or periodic dashboards that help election officials monitor operations and make informed decisions.",
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

      {/* Benefits */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Why Election Management Systems Matter
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Properly designed digital election management systems can reduce
          administrative workloads, improve data accuracy, support faster
          decision-making, and provide election officials with better
          visibility into election operations.
        </p>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
          <li>Improved administrative efficiency</li>
          <li>Better data management</li>
          <li>Reduced manual errors</li>
          <li>Improved transparency and reporting</li>
          <li>Faster access to operational information</li>
          <li>Better coordination among election stakeholders</li>
        </ul>
      </section>

      {/* Security */}
      <section className="mt-14 rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-3xl font-bold">
          Security and Resilience
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Election management systems handle highly sensitive information.
          Security should therefore be incorporated from the beginning of
          system design. Access control, encryption, backups, monitoring,
          audit logs, vulnerability management, and incident response are
          important elements of a secure EMS.
        </p>
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