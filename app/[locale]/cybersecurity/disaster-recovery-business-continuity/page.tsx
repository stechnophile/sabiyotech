import Link from "next/link";

export default function DisasterRecoveryBusinessContinuity() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🔄
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-blue-600">
          Cybersecurity
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Disaster Recovery and Business Continuity
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Understanding how organizations prepare for cyber incidents,
          system failures, disasters, and disruptions while maintaining
          critical operations and recovering securely.
        </p>

      </div>

      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          Understanding Disaster Recovery and Business Continuity
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Organizations depend on information systems, applications,
          networks, databases, cloud services, and other digital
          infrastructure to deliver their services. A cyberattack, hardware
          failure, software problem, natural disaster, power outage, or other
          disruption can affect these systems and interrupt normal operations.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Business continuity and disaster recovery help organizations prepare
          for these situations. Business continuity focuses on maintaining
          critical business functions during a disruption, while disaster
          recovery focuses primarily on restoring systems, applications, data,
          and technology services after an incident.
        </p>

      </section>

      {/* Business Continuity vs Disaster Recovery */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Business Continuity vs Disaster Recovery
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Business continuity and disaster recovery are closely related but
          address different aspects of organizational resilience.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

            <div className="text-4xl">
              🏢
            </div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Business Continuity
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Focuses on keeping critical organizational functions operating
              during and after a disruption.
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-600">
              <li>Identify critical business functions</li>
              <li>Develop continuity procedures</li>
              <li>Define alternative operating arrangements</li>
              <li>Maintain essential services</li>
              <li>Coordinate people and resources</li>
            </ul>

          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

            <div className="text-4xl">
              💾
            </div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Disaster Recovery
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Focuses on restoring technology systems, applications, data,
              and infrastructure following a disruptive event.
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-600">
              <li>Restore systems and applications</li>
              <li>Recover data from backups</li>
              <li>Rebuild affected infrastructure</li>
              <li>Validate recovered systems</li>
              <li>Return services to normal operation</li>
            </ul>

          </div>

        </div>

      </section>

      {/* Why It Matters */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Why Resilience Matters
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A security incident does not necessarily end when an attacker is
          removed or a technical problem is fixed. Organizations also need to
          restore services and continue delivering important functions.
          Resilience therefore requires preparation before an incident occurs.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Reduce Downtime",
              icon: "⏱️",
              text: "Prepared recovery procedures can help organizations restore important services more efficiently.",
            },
            {
              title: "Protect Critical Data",
              icon: "🔐",
              text: "Backups and recovery procedures help protect important information from loss or disruption.",
            },
            {
              title: "Maintain Operations",
              icon: "🏢",
              text: "Continuity planning helps organizations maintain essential services during disruptive events.",
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

      {/* Business Impact Analysis */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Business Impact Analysis
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Business Impact Analysis, or BIA, helps an organization understand
          which business functions are most important and what could happen
          if those functions are disrupted.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A BIA can help identify critical services, dependencies, potential
          impacts, recovery priorities, and the resources required to restore
          operations.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

          <div className="grid bg-slate-100 md:grid-cols-3">

            <div className="p-5 font-bold text-slate-900">
              Area
            </div>

            <div className="p-5 font-bold text-slate-900 md:col-span-2">
              Key Question
            </div>

          </div>

          {[
            {
              area: "Critical Services",
              question: "Which services must continue during a disruption?",
            },
            {
              area: "Dependencies",
              question: "Which systems, people, facilities, and suppliers are required?",
            },
            {
              area: "Impact",
              question: "What would happen if the service became unavailable?",
            },
            {
              area: "Recovery Priority",
              question: "Which systems and services should be restored first?",
            },
            {
              area: "Resources",
              question: "What resources are required to maintain or restore operations?",
            },
          ].map((item) => (
            <div
              key={item.area}
              className="grid border-t md:grid-cols-3"
            >

              <div className="p-5 font-semibold text-slate-900">
                {item.area}
              </div>

              <div className="p-5 text-slate-600 md:col-span-2">
                {item.question}
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Backup and Recovery */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Backup and Data Recovery
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Reliable backups are an important part of disaster recovery.
          Backups provide organizations with a way to restore information
          following accidental deletion, hardware failure, malware incidents,
          ransomware, or other forms of data loss.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Regular Backups",
              icon: "💾",
              text: "Create backups according to the organization's recovery requirements and data criticality.",
            },
            {
              title: "Backup Protection",
              icon: "🔒",
              text: "Protect backups from unauthorized access, modification, and deletion.",
            },
            {
              title: "Recovery Testing",
              icon: "🧪",
              text: "Regularly test restoration procedures to verify that backups can actually be recovered when needed.",
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

      {/* RTO and RPO */}
      <section className="mt-14 rounded-2xl bg-blue-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          RTO and RPO
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Recovery planning often uses Recovery Time Objective (RTO) and
          Recovery Point Objective (RPO) to define recovery expectations.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-xl bg-white p-6 shadow-sm">

            <div className="text-4xl">
              ⏱️
            </div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Recovery Time Objective
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              RTO represents the targeted amount of time within which a
              system, service, or business function should be restored
              following a disruption.
            </p>

          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">

            <div className="text-4xl">
              🕐
            </div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Recovery Point Objective
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              RPO represents the targeted point in time to which data should
              be recoverable following a disruption.
            </p>

          </div>

        </div>

      </section>

      {/* Disaster Recovery Strategies */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Disaster Recovery Strategies
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Organizations can use different recovery approaches depending on
          their technology environment, operational requirements, available
          resources, and recovery objectives.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Backup and Restore",
              icon: "💾",
              text: "Restore systems and information from available backups after a disruption.",
            },
            {
              title: "Redundant Systems",
              icon: "🔁",
              text: "Use additional systems or infrastructure to provide continuity when primary resources become unavailable.",
            },
            {
              title: "Cloud Recovery",
              icon: "☁️",
              text: "Use cloud infrastructure and services to support backup, recovery, or alternative operating environments.",
            },
            {
              title: "Alternative Facilities",
              icon: "🏢",
              text: "Use alternative locations or facilities when the primary operating environment is unavailable.",
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

      {/* Incident Response and Recovery */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Incident Response and Recovery
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Disaster recovery and incident response are closely connected.
          Incident response focuses on managing and containing a security
          incident, while recovery focuses on restoring affected systems,
          services, and operations.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">

          {[
            {
              title: "Detect",
              icon: "🔎",
            },
            {
              title: "Contain",
              icon: "🧱",
            },
            {
              title: "Recover",
              icon: "🔄",
            },
            {
              title: "Validate",
              icon: "✅",
            },
            {
              title: "Improve",
              icon: "📈",
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

      {/* Testing */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Testing and Exercises
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A recovery plan should not simply exist as a document. Organizations
          need to test their procedures to identify gaps and verify that
          people, technology, communication channels, and recovery processes
          work as expected.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Tabletop Exercises",
              icon: "🪑",
              text: "Teams discuss a simulated disruption and walk through their planned response.",
            },
            {
              title: "Technical Testing",
              icon: "🧪",
              text: "Technical teams test backup restoration, system recovery, and other technical procedures.",
            },
            {
              title: "Full Exercises",
              icon: "🚨",
              text: "Organizations can conduct more comprehensive exercises to evaluate their overall recovery capabilities.",
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

      {/* Cyber Resilience */}
      <section className="mt-14 rounded-2xl bg-blue-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Building Cyber Resilience
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cyber resilience is the ability of an organization to continue
          operating, withstand disruption, recover from incidents, and adapt
          based on lessons learned. It combines preventive security controls
          with detection, response, recovery, and continuous improvement.
        </p>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">

          <li>
            Identify critical systems and business functions.
          </li>

          <li>
            Protect important systems and information.
          </li>

          <li>
            Maintain reliable and protected backups.
          </li>

          <li>
            Establish clear incident response and recovery procedures.
          </li>

          <li>
            Test recovery plans regularly.
          </li>

          <li>
            Continuously improve based on incidents and exercises.
          </li>

        </ul>

      </section>

      {/* Example Scenario */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Example: Recovering from a Cyber Incident
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Consider an organization whose critical server becomes unavailable
          following a cybersecurity incident. A coordinated response could
          involve the following activities:
        </p>

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
              stage: "Detection",
              activity: "Security monitoring identifies unusual activity affecting the server.",
            },
            {
              stage: "Containment",
              activity: "The affected system is isolated to limit further impact.",
            },
            {
              stage: "Investigation",
              activity: "Security teams analyze logs and other evidence to understand the incident.",
            },
            {
              stage: "Recovery",
              activity: "The system is restored using an appropriate recovery procedure or backup.",
            },
            {
              stage: "Validation",
              activity: "Security and technical teams verify that the recovered system is functioning correctly.",
            },
            {
              stage: "Improvement",
              activity: "The organization reviews the incident and updates its controls and recovery procedures.",
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
            Business continuity focuses on maintaining critical operations
            during disruptions.
          </li>

          <li>
            Disaster recovery focuses on restoring systems, data,
            applications, and technology services.
          </li>

          <li>
            Business Impact Analysis helps identify critical services,
            dependencies, impacts, and recovery priorities.
          </li>

          <li>
            Reliable and protected backups are an important part of recovery
            planning.
          </li>

          <li>
            RTO and RPO help define recovery expectations for systems and
            information.
          </li>

          <li>
            Recovery plans should be tested regularly to identify weaknesses
            and improve organizational resilience.
          </li>

          <li>
            Cyber resilience combines prevention, detection, response,
            recovery, and continuous improvement.
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