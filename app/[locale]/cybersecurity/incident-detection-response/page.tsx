import Link from "next/link";

export default function IncidentDetectionResponse() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🚨
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-red-600">
          Cybersecurity
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Incident, Detection and Response
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Understanding how security teams monitor environments, detect
          suspicious activity, investigate incidents, contain threats,
          and recover from cybersecurity events.
        </p>

      </div>

      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          Understanding Security Incidents
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A cybersecurity incident is an event that may compromise the
          confidentiality, integrity, or availability of information,
          systems, networks, or digital services. Incidents can range from
          suspicious login attempts and malware infections to unauthorized
          access, data exposure, and disruption of critical services.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Incident detection and response is the process of identifying
          potentially harmful activity, investigating what happened,
          containing the incident, removing the underlying threat, and
          restoring affected systems. A structured response helps
          organizations reduce the impact of security incidents and learn
          from security events.
        </p>

      </section>

      {/* Detection */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Security Detection
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Detection involves identifying unusual or potentially malicious
          activity within an organization's technology environment. Security
          teams collect information from systems, applications, endpoints,
          networks, and other sources to identify events that may require
          investigation.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Security Logs",
              icon: "📋",
              text: "Authentication, application, operating system, and security logs can provide evidence of suspicious activity.",
            },
            {
              title: "Network Monitoring",
              icon: "🌐",
              text: "Monitoring network traffic can help identify unusual connections, communication patterns, and potential attacks.",
            },
            {
              title: "Endpoint Monitoring",
              icon: "💻",
              text: "Endpoint information can help security teams identify suspicious processes, files, and system behavior.",
            },
            {
              title: "Security Alerts",
              icon: "🔔",
              text: "Security tools can generate alerts when activity matches predefined rules, indicators, or suspicious behavioral patterns.",
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

      {/* Incident Detection Process */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Incident Detection Process
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Detection usually begins with collecting security information and
          identifying events that appear unusual or potentially harmful.
          Security analysts then investigate the available evidence to
          determine whether an event represents a genuine security incident.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">

          {[
            {
              title: "Collect",
              icon: "📥",
            },
            {
              title: "Monitor",
              icon: "👁️",
            },
            {
              title: "Detect",
              icon: "🔎",
            },
            {
              title: "Analyze",
              icon: "📊",
            },
            {
              title: "Validate",
              icon: "✅",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl bg-slate-50 p-5 text-center shadow-sm"
            >

              <div className="text-3xl">
                {item.icon}
              </div>

              <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                Step {index + 1}
              </div>

              <div className="mt-1 font-bold text-slate-900">
                {item.title}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Incident Investigation */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Incident Investigation
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Once suspicious activity has been identified, security analysts
          investigate the available evidence to understand what happened.
          Investigation may involve reviewing logs, network activity,
          user accounts, system changes, files, processes, and other
          relevant information.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

          <h3 className="text-2xl font-bold text-slate-900">
            Important Investigation Questions
          </h3>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">

            <li>
              What happened?
            </li>

            <li>
              When did the suspicious activity begin?
            </li>

            <li>
              Which systems, accounts, or applications were affected?
            </li>

            <li>
              What indicators or evidence were identified?
            </li>

            <li>
              How did the activity occur?
            </li>

            <li>
              What is the potential impact?
            </li>

            <li>
              Are other systems or accounts potentially affected?
            </li>

          </ul>

        </div>

      </section>

      {/* Incident Response Lifecycle */}
      <section className="mt-14 rounded-2xl bg-red-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Incident Response Lifecycle
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Incident response provides a structured approach for managing
          cybersecurity incidents. The exact process can vary between
          organizations, but effective response generally includes
          preparation, detection and analysis, containment, eradication,
          recovery, and lessons learned.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          {[
            {
              title: "Preparation",
              icon: "🛠️",
              text: "Develop plans, procedures, tools, communication channels, and capabilities before incidents occur.",
            },
            {
              title: "Detection & Analysis",
              icon: "🔎",
              text: "Identify suspicious activity and analyze evidence to understand the incident.",
            },
            {
              title: "Containment",
              icon: "🧱",
              text: "Limit the impact of the incident and prevent further spread or unauthorized activity.",
            },
            {
              title: "Eradication",
              icon: "🧹",
              text: "Remove malicious components, compromised accounts, vulnerabilities, or other causes of the incident.",
            },
            {
              title: "Recovery",
              icon: "🔄",
              text: "Restore affected systems and services while monitoring for signs of continuing compromise.",
            },
            {
              title: "Lessons Learned",
              icon: "📚",
              text: "Review the incident and improve controls, procedures, monitoring, and response capabilities.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-6 shadow-sm"
            >

              <div className="text-3xl">
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

      {/* Containment */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Containment and Eradication
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Containment focuses on limiting the impact of an incident. Depending
          on the situation, security teams may isolate affected systems,
          disable compromised accounts, block malicious network activity, or
          apply other appropriate controls.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Eradication focuses on removing the underlying cause or malicious
          components associated with the incident. Security teams should also
          address the vulnerability or security weakness that allowed the
          incident to occur where possible.
        </p>

      </section>

      {/* Recovery */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Recovery and Continuous Monitoring
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Recovery involves restoring affected systems and services to normal
          operation. Before returning systems to production, organizations
          should verify that the underlying security issues have been
          addressed and that appropriate security controls are functioning.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Monitoring should continue after recovery because an attacker or
          malicious activity may persist. Security teams should review
          relevant logs, alerts, accounts, network activity, and system
          behavior for signs of additional compromise.
        </p>

      </section>

      {/* SOC */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Security Operations Center
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A Security Operations Center, or SOC, is a function responsible for
          monitoring and responding to cybersecurity events. SOC analysts
          commonly work with security logs, alerts, endpoint information,
          network activity, threat intelligence, and other security data.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Tier 1",
              icon: "👁️",
              text: "Monitor alerts, perform initial analysis, and identify events requiring further investigation.",
            },
            {
              title: "Tier 2",
              icon: "🔎",
              text: "Conduct deeper investigation and analysis of suspicious security events and incidents.",
            },
            {
              title: "Tier 3",
              icon: "🧠",
              text: "Handle complex investigations, advanced analysis, threat hunting, and specialized security activities.",
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

      {/* Tools */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Detection and Response Tools
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Security teams use a variety of tools to collect information,
          identify suspicious activity, investigate incidents, and support
          response activities.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "SIEM",
              icon: "📊",
              text: "Security Information and Event Management platforms collect and analyze security events from multiple sources.",
            },
            {
              title: "EDR",
              icon: "💻",
              text: "Endpoint Detection and Response technologies monitor endpoint activity and support investigation and response.",
            },
            {
              title: "Network Monitoring",
              icon: "🌐",
              text: "Network monitoring tools provide visibility into network traffic and communication patterns.",
            },
            {
              title: "Threat Intelligence",
              icon: "🧠",
              text: "Threat intelligence provides information that can help organizations understand indicators, threats, and attacker activity.",
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

      {/* AI and Automation */}
      <section className="mt-14 rounded-2xl bg-blue-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          AI and Automation in Incident Response
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Security teams often process large numbers of alerts and security
          events. Automation can help reduce repetitive tasks such as log
          processing, alert enrichment, event correlation, and report
          generation.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Artificial intelligence can also assist analysts by identifying
          patterns, summarizing security information, and supporting
          investigation workflows. Human analysts should remain responsible
          for important security decisions and response actions.
        </p>

      </section>

      {/* Example Workflow */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Example Incident Response Workflow
        </h2>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

          <div className="grid bg-slate-100 md:grid-cols-3">

            <div className="p-5 font-bold text-slate-900">
              Stage
            </div>

            <div className="p-5 font-bold text-slate-900 md:col-span-2">
              Example Activity
            </div>

          </div>

          {[
            {
              stage: "Alert",
              activity: "A security monitoring system identifies multiple failed login attempts.",
            },
            {
              stage: "Investigation",
              activity: "The analyst reviews authentication logs, source information, and related activity.",
            },
            {
              stage: "Containment",
              activity: "Appropriate controls are applied to limit potentially malicious activity.",
            },
            {
              stage: "Eradication",
              activity: "The underlying security issue is identified and addressed.",
            },
            {
              stage: "Recovery",
              activity: "Affected systems or services are restored and monitored.",
            },
            {
              stage: "Lessons Learned",
              activity: "The organization reviews the incident and improves security controls.",
            },
          ].map((item) => (
            <div
              key={item.stage}
              className="grid border-t md:grid-cols-3"
            >

              <div className="p-5 font-semibold text-slate-900">
                {item.stage}
              </div>

              <div className="p-5 text-slate-600 md:col-span-2">
                {item.activity}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Key Takeaways */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

        <h2 className="text-3xl font-bold text-slate-900">
          Key Takeaways
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">

          <li>
            Security detection helps organizations identify suspicious
            activity and potential incidents.
          </li>

          <li>
            Effective investigation requires collecting and analyzing
            relevant security evidence.
          </li>

          <li>
            Incident response provides a structured process for containing,
            eradicating, and recovering from security incidents.
          </li>

          <li>
            Continuous monitoring is important before, during, and after
            security incidents.
          </li>

          <li>
            SOC teams use logs, alerts, endpoint information, network data,
            and security tools to support detection and response.
          </li>

          <li>
            Automation and AI can assist security teams with repetitive
            analysis and investigation tasks.
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
            href="/en/cybersecurity/security-domains"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Security Domains →
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