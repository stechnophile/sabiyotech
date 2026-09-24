import Link from "next/link";

export default function AIPoweredInvestigation() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🕵️
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-purple-600">
          Generative AI for Cybersecurity
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          AI-Powered Investigation
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Exploring how AI can assist cybersecurity professionals in
          collecting evidence, analyzing security events, correlating
          information, and developing investigation findings.
        </p>

      </div>


      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          What Is AI-Powered Investigation?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI-powered investigation refers to the use of artificial intelligence
          to assist security professionals throughout the investigation of
          suspicious activity, security alerts, and potential cyber incidents.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Rather than replacing the investigator, AI can help process large
          amounts of information, identify relationships between events,
          summarize evidence, explain technical findings, and support the
          development of an investigation timeline.
        </p>

      </section>


      {/* Investigation Lifecycle */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          AI-Assisted Investigation Lifecycle
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A security investigation can involve multiple sources of evidence
          and several analytical steps. AI can provide assistance across
          different stages of this process.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          {[
            {
              title: "1. Detect",
              icon: "🚨",
              text: "Identify an alert, anomaly, suspicious behavior, or other event requiring investigation.",
            },
            {
              title: "2. Collect",
              icon: "📥",
              text: "Gather relevant logs, alerts, indicators, system information, and other available evidence.",
            },
            {
              title: "3. Analyze",
              icon: "🔍",
              text: "Examine events, patterns, indicators, timelines, and relationships between available evidence.",
            },
            {
              title: "4. Correlate",
              icon: "🔗",
              text: "Connect information from different sources to identify relationships and possible attack activity.",
            },
            {
              title: "5. Explain",
              icon: "💡",
              text: "Generate understandable explanations and summaries of technical investigation findings.",
            },
            {
              title: "6. Report",
              icon: "📝",
              text: "Organize findings into a structured investigation report for analyst review and further action.",
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


      {/* Investigation Workflow */}
      <section className="mt-14 rounded-2xl bg-purple-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          AI-Assisted Investigation Workflow
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A simplified AI-assisted investigation workflow can combine
          automated analysis with human validation and decision-making.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">

          {[
            {
              title: "Security Alert",
              icon: "🚨",
            },
            {
              title: "Evidence",
              icon: "📂",
            },
            {
              title: "AI Analysis",
              icon: "🤖",
            },
            {
              title: "Analyst Review",
              icon: "👨‍💻",
            },
            {
              title: "Investigation Report",
              icon: "📋",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-5 text-center shadow-sm"
            >

              <div className="text-3xl">
                {item.icon}
              </div>

              <div className="mt-3 text-sm font-semibold text-purple-600">
                Step {index + 1}
              </div>

              <h3 className="mt-2 font-bold text-slate-900">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </section>


      {/* AI Investigation Capabilities */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          What Can AI Assist With?
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Log Analysis",
              icon: "📊",
              text: "Assist analysts in reviewing large volumes of authentication, network, application, and system logs to identify potentially relevant events.",
            },
            {
              title: "Event Correlation",
              icon: "🔗",
              text: "Identify relationships between events occurring across different systems, users, devices, or time periods.",
            },
            {
              title: "Threat Intelligence Analysis",
              icon: "🌐",
              text: "Summarize threat intelligence and help investigators understand indicators, techniques, and potentially relevant threat information.",
            },
            {
              title: "Timeline Construction",
              icon: "⏱️",
              text: "Organize investigation evidence chronologically to help analysts understand how an incident may have developed.",
            },
            {
              title: "Threat Explanation",
              icon: "💡",
              text: "Convert complex technical observations into explanations that can be reviewed by security professionals and other stakeholders.",
            },
            {
              title: "Investigation Reporting",
              icon: "📝",
              text: "Assist with organizing evidence, observations, findings, and recommendations into structured investigation reports.",
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


      {/* Example Investigation */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Example: Investigating a Suspicious Login Pattern
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Consider a situation where a security monitoring system identifies
          multiple failed authentication attempts followed by a successful
          login. AI can assist the analyst in organizing and interpreting the
          available evidence.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

          <div className="grid bg-slate-100 md:grid-cols-3">

            <div className="p-5 font-bold text-slate-900">
              Investigation Stage
            </div>

            <div className="p-5 font-bold text-slate-900">
              AI Assistance
            </div>

            <div className="p-5 font-bold text-slate-900">
              Analyst Responsibility
            </div>

          </div>

          {[
            [
              "Alert Review",
              "Summarize authentication events",
              "Confirm the alert and investigation scope",
            ],
            [
              "Evidence Analysis",
              "Identify unusual patterns",
              "Validate the relevant evidence",
            ],
            [
              "Correlation",
              "Connect IP, account, time, and system information",
              "Determine whether the relationships are meaningful",
            ],
            [
              "Threat Assessment",
              "Explain possible attack patterns",
              "Evaluate the evidence and context",
            ],
            [
              "Reporting",
              "Generate an investigation summary",
              "Review, correct, and approve findings",
            ],
          ].map((row) => (
            <div
              key={row[0]}
              className="grid border-t md:grid-cols-3"
            >

              <div className="p-5 font-semibold text-slate-900">
                {row[0]}
              </div>

              <div className="p-5 text-slate-600">
                {row[1]}
              </div>

              <div className="p-5 text-slate-600">
                {row[2]}
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* Generative AI Role */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Role of Generative AI in Investigation
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Generative AI can be particularly useful when investigation data
          needs to be transformed into understandable explanations, summaries,
          and structured reports.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {[
            {
              title: "Summarize",
              icon: "📋",
              text: "Turn large amounts of technical information into concise investigation summaries.",
            },
            {
              title: "Explain",
              icon: "💡",
              text: "Explain technical events and potential security implications in understandable language.",
            },
            {
              title: "Structure",
              icon: "🗂️",
              text: "Organize observations and evidence into structured investigation reports.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm"
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


      {/* Agentic AI */}
      <section className="mt-14 rounded-2xl bg-green-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Agentic AI for Investigation
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Agentic AI can extend investigation assistance by working through
          multiple authorized steps. Depending on the system design, an agent
          could gather information, query approved data sources, analyze
          results, and prepare findings for human review.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">

          {[
            "Receive Objective",
            "Gather Evidence",
            "Use Authorized Tools",
            "Analyze Results",
            "Present Findings",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-xl bg-white p-5 text-center shadow-sm"
            >

              <div className="text-sm font-semibold text-green-600">
                Step {index + 1}
              </div>

              <div className="mt-2 font-bold text-slate-900">
                {step}
              </div>

            </div>
          ))}

        </div>

        <p className="mt-8 leading-7 text-slate-700">
          Agentic systems should operate within clearly defined permissions
          and security boundaries. Actions that could affect systems, users,
          or evidence should require appropriate authorization and oversight.
        </p>

      </section>


      {/* Human in the Loop */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Human-in-the-Loop Investigation
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI-generated findings are assistance rather than automatically
          established facts. Human investigators should evaluate the quality,
          relevance, and context of AI-generated results before incorporating
          them into an investigation.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">

          {[
            {
              title: "AI Analysis",
              icon: "🤖",
              text: "Process and summarize information",
            },
            {
              title: "Human Validation",
              icon: "🔎",
              text: "Verify evidence and findings",
            },
            {
              title: "Security Decision",
              icon: "🛡️",
              text: "Determine appropriate action",
            },
            {
              title: "Documentation",
              icon: "📄",
              text: "Record validated findings",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-slate-50 p-5 text-center shadow-sm"
            >

              <div className="text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-3 font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* Investigation Quality */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Important Investigation Considerations
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Evidence Integrity",
              icon: "🔐",
              text: "AI assistance should not compromise the integrity, provenance, or appropriate handling of investigation evidence.",
            },
            {
              title: "Accuracy",
              icon: "🎯",
              text: "AI-generated interpretations should be validated because models can produce incomplete, incorrect, or misleading outputs.",
            },
            {
              title: "Privacy",
              icon: "🔒",
              text: "Investigations may contain sensitive information, so data handling and access controls should be carefully considered.",
            },
            {
              title: "Auditability",
              icon: "📑",
              text: "Important investigation activities and conclusions should be appropriately documented so that decisions can be reviewed.",
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


      {/* Practical Applications */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Practical Applications
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "SOC Investigations",
              icon: "🛡️",
              text: "Assist analysts in investigating suspicious alerts and understanding relationships between security events.",
            },
            {
              title: "Incident Response",
              icon: "🚨",
              text: "Support evidence analysis, incident timelines, investigation summaries, and response documentation.",
            },
            {
              title: "Threat Hunting",
              icon: "🔍",
              text: "Help analysts explore security data and investigate patterns that may indicate previously unidentified threats.",
            },
            {
              title: "Digital Investigation",
              icon: "💻",
              text: "Assist with organizing and analyzing digital investigation information while maintaining appropriate evidence-handling practices.",
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


      {/* Key Takeaways */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

        <h2 className="text-3xl font-bold text-slate-900">
          Key Takeaways
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">

          <li>
            AI can assist investigators with collecting, organizing, analyzing,
            and summarizing security information.
          </li>

          <li>
            Generative AI is particularly useful for explanation, summarization,
            correlation support, and investigation reporting.
          </li>

          <li>
            Agentic AI can support multi-step investigation workflows when
            operating within clearly defined permissions.
          </li>

          <li>
            AI-generated findings should be validated against relevant evidence
            before they are treated as investigation conclusions.
          </li>

          <li>
            Privacy, evidence integrity, accuracy, and auditability are
            important considerations when using AI during investigations.
          </li>

          <li>
            Human investigators remain responsible for interpreting evidence
            and making appropriate security decisions.
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
            href="/genAI"
            className="rounded-lg bg-purple-100 px-5 py-3 font-medium text-purple-700 hover:bg-purple-200"
          >
            Generative AI for Cybersecurity →
          </Link>

          <Link
            href="/genAI/discriminative-generative-agentic-ai"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Discriminative, Generative & Agentic AI →
          </Link>

          <Link
            href="/genAI/benefits-ethics-ai-cybersecurity"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Benefits & Ethics of AI →
          </Link>

          <Link
            href="/genAI/ai-assisted-threat-analysis"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            AI-Assisted Threat Analysis →
          </Link>

        </div>

      </section>


      {/* Back */}
      <div className="mt-16 border-t pt-8">

        <Link
          href="/genAI"
          className="font-semibold text-purple-700 hover:underline"
        >
          ← Back to Generative AI for Cybersecurity
        </Link>

      </div>

    </main>
  );
}