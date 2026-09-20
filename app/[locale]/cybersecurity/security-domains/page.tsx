import Link from "next/link";

export default function SecurityDomains() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🛡️
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-blue-600">
          Cybersecurity
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Security Domains
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Explore the major areas of cybersecurity used to protect
          information, systems, applications, networks, identities,
          and digital infrastructure.
        </p>

      </div>

      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          Understanding Cybersecurity Domains
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity is a broad field that covers many different
          technologies, processes, and areas of expertise. Organizations
          divide cybersecurity activities into different domains to help
          manage security risks and protect their digital assets.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Each security domain focuses on a particular aspect of protection.
          For example, network security protects communication infrastructure,
          application security focuses on software, identity and access
          management controls who can access resources, while security
          operations focuses on monitoring and responding to threats.
        </p>

      </section>

      {/* Major Security Domains */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Major Security Domains
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          The following domains represent important areas of modern
          cybersecurity practice.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Network Security",
              icon: "🌐",
              text: "Protects networks, communication channels, routers, switches, firewalls, and network-connected systems from unauthorized access and malicious activity.",
            },
            {
              title: "Application Security",
              icon: "💻",
              text: "Focuses on protecting software and applications from vulnerabilities such as insecure authentication, injection attacks, and unauthorized access.",
            },
            {
              title: "Cloud Security",
              icon: "☁️",
              text: "Protects cloud infrastructure, services, applications, identities, and data while organizations use cloud-based computing environments.",
            },
            {
              title: "Identity and Access Management",
              icon: "👤",
              text: "Controls who can access systems and resources through authentication, authorization, account management, and appropriate access permissions.",
            },
            {
              title: "Data Security",
              icon: "🔒",
              text: "Protects sensitive and valuable information through access controls, encryption, data classification, secure storage, and appropriate handling practices.",
            },
            {
              title: "Security Operations",
              icon: "🚨",
              text: "Focuses on continuous security monitoring, log analysis, threat detection, alert investigation, incident response, and security operations.",
            },
            {
              title: "Governance, Risk and Compliance",
              icon: "📋",
              text: "Helps organizations establish security policies, assess risks, meet regulatory requirements, and align cybersecurity activities with organizational objectives.",
            },
            {
              title: "Security Architecture",
              icon: "🏗️",
              text: "Designs security controls and architectures that protect systems, applications, networks, data, and organizational infrastructure.",
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

      {/* Network Security */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Network Security
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Network security focuses on protecting communication networks and
          the systems connected to them. Security controls can include
          firewalls, network segmentation, secure protocols, intrusion
          detection, intrusion prevention, and network monitoring.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Security professionals monitor network traffic and infrastructure
          to identify suspicious activity and reduce the possibility of
          unauthorized access or disruption.
        </p>

      </section>

      {/* Application and Cloud Security */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Application and Cloud Security
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Applications can contain vulnerabilities that attackers may
          exploit to gain unauthorized access, modify information, or
          disrupt services. Application security therefore needs to be
          considered throughout the software development lifecycle.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cloud environments introduce additional security considerations
          involving identity management, configuration, data protection,
          APIs, infrastructure, and access controls. Organizations need to
          understand their responsibilities when deploying systems and
          information in cloud environments.
        </p>

      </section>

      {/* Identity and Data Security */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Identity and Data Security
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Identity is a central component of cybersecurity. Organizations
          need to ensure that users and systems are properly authenticated
          and that access is granted according to legitimate business
          requirements.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Authentication",
              icon: "🔑",
              text: "Verifying the identity of a user, device, or system.",
            },
            {
              title: "Authorization",
              icon: "✅",
              text: "Determining what an authenticated user or system is allowed to access.",
            },
            {
              title: "Data Protection",
              icon: "🔐",
              text: "Protecting information from unauthorized access, modification, disclosure, or loss.",
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

      {/* Security Operations */}
      <section className="mt-14 rounded-2xl bg-blue-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Security Operations
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Security operations focuses on continuously monitoring an
          organization's technology environment for potential security
          events. Security teams analyze logs, alerts, network activity,
          endpoint information, and other security data to identify
          suspicious behavior.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">

          {[
            {
              title: "Monitor",
              icon: "👁️",
            },
            {
              title: "Detect",
              icon: "🔎",
            },
            {
              title: "Investigate",
              icon: "🕵️",
            },
            {
              title: "Respond",
              icon: "🚨",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-5 text-center shadow-sm"
            >

              <div className="text-3xl">
                {item.icon}
              </div>

              <div className="mt-2 font-bold text-slate-900">
                {item.title}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Governance Risk Compliance */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Governance, Risk and Compliance
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Technical security controls are only one part of cybersecurity.
          Organizations also need policies, procedures, risk assessments,
          security standards, responsibilities, and governance processes.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Governance and risk management help organizations understand their
          security priorities, establish appropriate controls, and make
          informed decisions about cybersecurity risks. Compliance activities
          help organizations demonstrate that relevant requirements and
          security obligations are being addressed.
        </p>

      </section>

      {/* How Domains Work Together */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          How Security Domains Work Together
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity domains should not operate independently. Effective
          security requires coordination between technology, people,
          processes, and governance.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

          <div className="grid bg-slate-100 md:grid-cols-3">

            <div className="p-5 font-bold text-slate-900">
              Domain
            </div>

            <div className="p-5 font-bold text-slate-900 md:col-span-2">
              Example Security Objective
            </div>

          </div>

          {[
            {
              domain: "Network Security",
              objective: "Protect network communication and infrastructure.",
            },
            {
              domain: "Application Security",
              objective: "Reduce vulnerabilities in software and applications.",
            },
            {
              domain: "Identity Security",
              objective: "Ensure appropriate authentication and access.",
            },
            {
              domain: "Data Security",
              objective: "Protect sensitive information throughout its lifecycle.",
            },
            {
              domain: "Security Operations",
              objective: "Detect and respond to suspicious security activity.",
            },
            {
              domain: "Governance and Risk",
              objective: "Manage cybersecurity risks and organizational requirements.",
            },
          ].map((item) => (
            <div
              key={item.domain}
              className="grid border-t md:grid-cols-3"
            >

              <div className="p-5 font-semibold text-slate-900">
                {item.domain}
              </div>

              <div className="p-5 text-slate-600 md:col-span-2">
                {item.objective}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Career Perspective */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

        <h2 className="text-3xl font-bold text-slate-900">
          Cybersecurity Career Perspective
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Understanding different security domains can help cybersecurity
          professionals identify areas in which they want to develop deeper
          expertise. Roles in cybersecurity can involve security operations,
          network security, application security, cloud security,
          vulnerability management, governance, risk management, digital
          forensics, and security engineering.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A strong cybersecurity foundation allows professionals to understand
          how these areas connect and how security controls contribute to the
          broader protection of an organization.
        </p>

      </section>

      {/* Key Takeaways */}
      <section className="mt-14 rounded-2xl bg-blue-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Key Takeaways
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">

          <li>
            Cybersecurity consists of multiple interconnected domains.
          </li>

          <li>
            Network, application, cloud, identity, and data security address
            different areas of organizational risk.
          </li>

          <li>
            Security operations helps organizations continuously monitor,
            detect, investigate, and respond to security events.
          </li>

          <li>
            Governance, risk, and compliance provide organizational direction
            for managing cybersecurity risks.
          </li>

          <li>
            Effective cybersecurity requires cooperation between people,
            processes, and technology.
          </li>

          <li>
            Understanding security domains provides a foundation for
            developing specialized cybersecurity skills.
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
            href="/en/cybersecurity/basics-of-cybersecurity"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Basics of Cybersecurity →
          </Link>

          <Link
            href="/en/cybersecurity/incident-detection-response"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Incident, Detection and Response →
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