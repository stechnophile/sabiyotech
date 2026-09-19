import Link from "next/link";

const topics = [
  {
    title: "Basics of Cybersecurity",
    slug: "basics-of-cybersecurity",
    icon: "🔐",
    description:
      "Build a strong foundation in cybersecurity concepts, threats, vulnerabilities, authentication, access control, encryption, and security principles.",
  },
  {
    title: "Security Domains",
    slug: "security-domains",
    icon: "🛡️",
    description:
      "Explore major cybersecurity domains including network security, application security, cloud security, identity management, data protection, and governance.",
  },
  {
    title: "Incident Detection and Response",
    slug: "incident-detection-response",
    icon: "🚨",
    description:
      "Learn how security teams detect, investigate, contain, and respond to cyber incidents using monitoring, log analysis, threat intelligence, and incident response techniques.",
  },
  {
    title: "Disaster Recovery and Business Continuity",
    slug: "disaster-recovery-business-continuity",
    icon: "🔄",
    description:
      "Understand how organizations prepare for cyber incidents, system failures, and disasters while maintaining critical operations and recovering securely.",
  },
  {
    title: "Tools and Automation by Python",
    slug: "tools-automation-python",
    icon: "🐍",
    description:
      "Discover how Python can automate cybersecurity tasks such as log analysis, network scanning, vulnerability assessment, threat detection, reporting, and security monitoring.",
  },
];

export default function CybersecurityTopics() {
  return (
    <section
      id="cybersecurity"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* SECTION HEADER */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-600">
            Knowledge Hub
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Explore Cybersecurity
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore practical cybersecurity concepts, security domains,
            incident response, business continuity, and Python-based
            security automation.
          </p>
        </div>

        {/* TOPIC CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {topics.map((topic) => (
            <div
              key={topic.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              {/* ICON */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl transition-transform duration-300 group-hover:scale-110">
                {topic.icon}
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {topic.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 leading-7 text-slate-600">
                {topic.description}
              </p>

              {/* LINK */}
              <Link
                href={`/cybersecurity/${topic.slug}`}
                className="mt-8 inline-block font-semibold text-blue-700 transition-colors hover:text-blue-900 hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}

        </div>

        {/* BOTTOM INFORMATION */}
        <div className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Cybersecurity in Practice
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            Cybersecurity is not only about protecting systems from attacks.
            It involves understanding risks, detecting suspicious activity,
            responding to incidents, maintaining business operations, and
            continuously improving security through technology and automation.
          </p>

          <Link
            href="/cybersecurity"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
          >
            Explore Cybersecurity →
          </Link>
        </div>

      </div>
    </section>
  );
}