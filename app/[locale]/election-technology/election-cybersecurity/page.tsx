import Link from "next/link";

export default function ElectionCybersecurity() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🔐
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-green-600">
          Election Technology
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Election Cybersecurity
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Protecting election infrastructure, information systems, data,
          digital services, and election operations from cyber threats.
        </p>

      </div>

      {/* Introduction */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-900">
          Why Election Cybersecurity Matters
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Modern elections increasingly depend on digital infrastructure.
          Voter databases, election management systems, communication
          networks, results systems, websites, and other digital services
          must remain secure and available throughout the electoral cycle.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A successful cyberattack could disrupt election operations,
          compromise sensitive information, or undermine public confidence.
          Therefore, cybersecurity should be considered an essential
          component of election integrity.
        </p>
      </section>

      {/* CIA */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Three Fundamental Security Principles
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-blue-50 p-6">
            <h3 className="text-xl font-bold">
              Confidentiality
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Sensitive election information should only be accessible to
              authorized individuals and systems.
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 p-6">
            <h3 className="text-xl font-bold">
              Integrity
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Election data and systems must be protected against
              unauthorized modification or manipulation.
            </p>
          </div>

          <div className="rounded-2xl bg-purple-50 p-6">
            <h3 className="text-xl font-bold">
              Availability
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Critical election services should remain available when
              election officials and citizens need them.
            </p>
          </div>

        </div>
      </section>

      {/* Threats */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Common Cybersecurity Threats
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {[
            "Phishing and social engineering",
            "Malware and ransomware",
            "Unauthorized access",
            "Denial-of-service attacks",
            "Data breaches",
            "Website attacks",
            "Credential theft",
            "Disinformation and influence operations",
          ].map((threat) => (
            <div
              key={threat}
              className="rounded-xl border border-slate-200 bg-white/80 p-5"
            >
              <span className="mr-3">⚠️</span>
              <span className="font-medium text-slate-800">
                {threat}
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* Security Measures */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Essential Security Measures
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
          <li>Multi-factor authentication</li>
          <li>Network segmentation</li>
          <li>Encryption</li>
          <li>Continuous security monitoring</li>
          <li>Regular vulnerability assessments</li>
          <li>Secure backups</li>
          <li>Incident response planning</li>
          <li>Security awareness training</li>
          <li>Regular security audits</li>
        </ul>

      </section>

      {/* CyberGuard AI */}
      <section className="mt-14 rounded-2xl bg-slate-900 p-8 text-white">

        <h2 className="text-3xl font-bold">
          AI-Powered Election Security
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Artificial intelligence can support cybersecurity teams by
          analyzing security logs, identifying unusual activity, detecting
          potential threats, and assisting analysts during incident
          investigation.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          AI should complement—not replace—human cybersecurity expertise,
          particularly in high-impact democratic systems.
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