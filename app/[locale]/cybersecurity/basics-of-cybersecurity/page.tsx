import Link from "next/link";

export default function CybersecurityBasics() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🔐
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-blue-600">
          Cybersecurity
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Basics of Cybersecurity
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Understanding the fundamental principles, threats, and practices
          used to protect information, systems, networks, and digital
          services.
        </p>

      </div>

      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          Understanding Cybersecurity
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity is the practice of protecting computers, networks,
          applications, systems, and information from unauthorized access,
          disruption, modification, destruction, and other security threats.
          As organizations increasingly depend on digital technologies,
          cybersecurity has become an essential part of modern information
          technology and organizational risk management.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity is not limited to installing antivirus software or
          firewalls. It involves people, processes, technologies, policies,
          monitoring, risk management, and continuous improvement. Effective
          security requires organizations to understand their assets, identify
          potential threats, reduce vulnerabilities, and prepare for security
          incidents.
        </p>

      </section>

      {/* CIA Triad */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          The CIA Triad
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          One of the fundamental concepts in cybersecurity is the CIA triad.
          It represents three important security objectives that organizations
          should consider when protecting information and systems.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Confidentiality",
              icon: "🔒",
              text: "Ensures that information is accessible only to authorized users, systems, or processes.",
            },
            {
              title: "Integrity",
              icon: "🛡️",
              text: "Ensures that information remains accurate, complete, and protected from unauthorized modification.",
            },
            {
              title: "Availability",
              icon: "⚡",
              text: "Ensures that systems and information remain accessible to authorized users when required.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Common Cyber Threats */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Common Cybersecurity Threats
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cyber threats can target individuals, organizations, networks,
          applications, and critical infrastructure. Understanding common
          threats is an important first step toward developing effective
          security practices.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Phishing",
              icon: "🎣",
              text: "Fraudulent messages or websites designed to trick users into revealing credentials, financial information, or other sensitive data.",
            },
            {
              title: "Malware",
              icon: "🦠",
              text: "Malicious software such as viruses, worms, trojans, ransomware, and spyware designed to compromise systems or information.",
            },
            {
              title: "Password Attacks",
              icon: "🔑",
              text: "Attempts to obtain or guess passwords through techniques such as brute force, password spraying, or credential attacks.",
            },
            {
              title: "Social Engineering",
              icon: "👤",
              text: "Manipulation of people into revealing information or performing actions that may compromise security.",
            },
            {
              title: "Denial-of-Service Attacks",
              icon: "🌐",
              text: "Attempts to make systems or services unavailable by overwhelming resources or exploiting weaknesses.",
            },
            {
              title: "Insider Threats",
              icon: "⚠️",
              text: "Security risks caused by authorized users who intentionally or unintentionally misuse access to systems or information.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm"
            >

              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Vulnerabilities and Risk */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Vulnerabilities, Threats and Risk
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity professionals distinguish between vulnerabilities,
          threats, and risks. A vulnerability is a weakness that could be
          exploited. A threat is a potential cause of harm, while risk
          represents the potential impact of a threat exploiting a
          vulnerability.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

          <div className="grid bg-slate-100 md:grid-cols-3">

            <div className="p-5 font-bold text-slate-900">
              Concept
            </div>

            <div className="p-5 font-bold text-slate-900 md:col-span-2">
              Explanation
            </div>

          </div>

          <div className="grid border-t md:grid-cols-3">

            <div className="p-5 font-semibold text-slate-900">
              Vulnerability
            </div>

            <div className="p-5 text-slate-600 md:col-span-2">
              A weakness or security gap that could potentially be exploited.
            </div>

          </div>

          <div className="grid border-t md:grid-cols-3">

            <div className="p-5 font-semibold text-slate-900">
              Threat
            </div>

            <div className="p-5 text-slate-600 md:col-span-2">
              A potential event, actor, or circumstance that could cause harm
              to a system or organization.
            </div>

          </div>

          <div className="grid border-t md:grid-cols-3">

            <div className="p-5 font-semibold text-slate-900">
              Risk
            </div>

            <div className="p-5 text-slate-600 md:col-span-2">
              The potential for loss or impact resulting from threats
              exploiting vulnerabilities.
            </div>

          </div>

        </div>

      </section>

      {/* Basic Security Practices */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Basic Cybersecurity Practices
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Good cybersecurity begins with practical security practices.
          Individuals and organizations can reduce many common security risks
          by implementing appropriate controls and maintaining secure
          operational practices.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Strong Authentication",
              icon: "🔑",
              text: "Use strong passwords, password managers, and multi-factor authentication where appropriate.",
            },
            {
              title: "Regular Updates",
              icon: "🔄",
              text: "Keep operating systems, applications, network devices, and security tools updated with appropriate patches.",
            },
            {
              title: "Access Control",
              icon: "👥",
              text: "Give users only the access they need to perform their responsibilities and regularly review permissions.",
            },
            {
              title: "Data Protection",
              icon: "💾",
              text: "Protect sensitive information through appropriate encryption, access controls, backups, and secure handling practices.",
            },
            {
              title: "Security Monitoring",
              icon: "📊",
              text: "Monitor systems, applications, and network activity to identify unusual behavior and potential security incidents.",
            },
            {
              title: "Security Awareness",
              icon: "🎓",
              text: "Train users to recognize phishing, social engineering, suspicious activity, and other common security risks.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm"
            >

              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* Security Lifecycle */}
      <section className="mt-14 rounded-2xl bg-blue-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          A Basic Cybersecurity Lifecycle
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity should be treated as a continuous process rather than
          a one-time activity. Organizations need to understand their
          environment, protect important assets, monitor for threats, respond
          to incidents, and continuously improve their security practices.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">

          {[
            "Identify",
            "Protect",
            "Detect",
            "Respond",
            "Recover",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-xl bg-white p-5 text-center shadow-sm"
            >
              <div className="text-sm font-semibold text-blue-600">
                Step {index + 1}
              </div>

              <div className="mt-2 text-lg font-bold text-slate-900">
                {step}
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* Cybersecurity and Python */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Cybersecurity and Automation
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity teams often work with large amounts of logs, network
          information, alerts, and vulnerability data. Automation can help
          reduce repetitive tasks and allow security professionals to focus
          on investigation and decision-making.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Python is widely used for security automation because it provides
          libraries and tools for working with networks, files, APIs,
          databases, logs, and security data. Python can be used to build
          scripts for log analysis, network discovery, vulnerability
          assessment, alert processing, and security reporting.
        </p>

      </section>

      {/* Key Takeaways */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

        <h2 className="text-3xl font-bold text-slate-900">
          Key Takeaways
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
          <li>
            Cybersecurity protects information, systems, networks, and
            digital services.
          </li>

          <li>
            Confidentiality, integrity, and availability are fundamental
            cybersecurity objectives.
          </li>

          <li>
            Understanding threats and vulnerabilities is essential for
            managing cybersecurity risk.
          </li>

          <li>
            Strong authentication, access control, patching, monitoring,
            backups, and security awareness are important security practices.
          </li>

          <li>
            Cybersecurity requires continuous monitoring, response, recovery,
            and improvement.
          </li>

          <li>
            Automation and Python can help security teams perform repetitive
            security tasks more efficiently.
          </li>
        </ul>

      </section>

      {/* Related Topics */}
      <section className="mt-16 border-t pt-10">

        <h2 className="text-2xl font-bold text-slate-900">
          Related Topics
        </h2>

        <div className="mt-5 flex flex-wrap gap-4">

          <Link
            href="/en/cybersecurity/security-domains"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Security Domains →
          </Link>

          <Link
            href="/en/cybersecurity/incident-detection-response"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Incident, Detection and Response →
          </Link>

          <Link
            href="/en/cybersecurity/disaster-recovery-business-continuity"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Disaster Recovery and Business Continuity →
          </Link>

          <Link
            href="/en/cybersecurity/tools-in-python"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Tools in Cybersecurity →
          </Link>

          <Link
            href="/en/cybersecurity/automation-python"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Cybersecurity Automation by Python →
          </Link>

        </div>

      </section>

      {/* Back */}
      <div className="mt-16 border-t pt-8">

        <Link
          href="/en/cybersecurity"
          className="font-semibold text-blue-700 hover:underline"
        >
          ← Back to Cybersecurity
        </Link>

      </div>

    </main>
  );
}