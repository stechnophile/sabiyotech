export default function AIAssistedThreatAnalysis() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <header className="text-center">
        <div className="mb-4 text-5xl">🛡️</div>

        <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
          Generative AI for Cybersecurity
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          AI-Assisted Threat Analysis
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Explore how artificial intelligence can assist cybersecurity
          professionals in analyzing security events, identifying potential
          threats, understanding attack patterns, and supporting faster
          security decision-making.
        </p>
      </header>

      {/* What Is AI-Assisted Threat Analysis? */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          What Is AI-Assisted Threat Analysis?
        </h2>

        <p className="mt-4 leading-7 text-gray-700 dark:text-gray-300">
          AI-assisted threat analysis uses artificial intelligence to help
          cybersecurity professionals examine security data and identify
          potentially malicious activity. AI can process large amounts of
          security information, identify patterns, summarize events, and
          provide analytical context for human security analysts.
        </p>

        <div className="mt-6 rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-900 dark:bg-purple-950/30">
          <p className="font-semibold text-purple-900 dark:text-purple-200">
            AI assists the analyst — it does not replace cybersecurity
            expertise.
          </p>

          <p className="mt-2 text-purple-800 dark:text-purple-300">
            The analyst remains responsible for validating evidence,
            interpreting findings, and making security decisions.
          </p>
        </div>
      </section>

      {/* Threat Analysis Workflow */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          AI-Assisted Threat Analysis Workflow
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            {
              number: "1",
              title: "Collect",
              description: "Gather logs, alerts, events, and security data.",
            },
            {
              number: "2",
              title: "Analyze",
              description: "Examine events and identify suspicious patterns.",
            },
            {
              number: "3",
              title: "Correlate",
              description: "Connect related events and security indicators.",
            },
            {
              number: "4",
              title: "Explain",
              description: "Generate understandable context around the threat.",
            },
            {
              number: "5",
              title: "Validate",
              description: "Security analysts review and validate the findings.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                {step.number}
              </div>

              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What Can AI Analyze? */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          What Can AI Assist With?
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Security Log Analysis",
              description:
                "AI can help summarize large volumes of authentication, network, application, and system logs.",
            },
            {
              title: "Threat Pattern Identification",
              description:
                "AI can help identify unusual patterns and relationships across security events.",
            },
            {
              title: "Indicator Analysis",
              description:
                "AI can assist analysts in interpreting indicators such as IP addresses, domains, usernames, and other security data.",
            },
            {
              title: "Alert Context",
              description:
                "AI can provide additional context around security alerts and explain why an event may require investigation.",
            },
            {
              title: "Threat Explanation",
              description:
                "Generative AI can translate technical security information into explanations that are easier for analysts and stakeholders to understand.",
            },
            {
              title: "Threat Reporting",
              description:
                "AI can help organize analysis results into structured investigation notes and security reports.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 p-6 dark:border-gray-700"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Example */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Example: Analyzing a Suspicious Login Pattern
        </h2>

        <p className="mt-4 leading-7 text-gray-700 dark:text-gray-300">
          Consider a situation where a security monitoring system detects
          multiple failed login attempts against an account. AI can assist the
          analyst by organizing the available evidence and highlighting
          potentially relevant patterns.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-5 py-4 font-semibold text-gray-900 dark:text-white">
                  Evidence
                </th>
                <th className="px-5 py-4 font-semibold text-gray-900 dark:text-white">
                  AI-Assisted Analysis
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  Multiple failed logins
                </td>
                <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                  Identify the frequency and timing of the events.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  Same source
                </td>
                <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                  Correlate events associated with the same source.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  Unusual login behavior
                </td>
                <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                  Highlight patterns that may require further investigation.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  Security context
                </td>
                <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                  Summarize the available evidence for the analyst.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  Analyst decision
                </td>
                <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                  Human analyst validates the evidence and determines the
                  appropriate response.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Generative AI */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Role of Generative AI in Threat Analysis
        </h2>

        <p className="mt-4 leading-7 text-gray-700 dark:text-gray-300">
          Generative AI is particularly useful for turning complex security
          information into structured and understandable outputs. It can
          support analysts by summarizing events, explaining technical
          findings, and helping organize investigation information.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Summarize",
              description:
                "Convert large amounts of security information into concise summaries.",
            },
            {
              title: "Explain",
              description:
                "Provide understandable explanations of technical security events.",
            },
            {
              title: "Structure",
              description:
                "Organize observations, evidence, and findings into a consistent format.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-blue-50 p-6 dark:bg-blue-950/30"
            >
              <h3 className="font-semibold text-blue-900 dark:text-blue-200">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-blue-800 dark:text-blue-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AI and Threat Intelligence */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          AI-Assisted Threat Intelligence Analysis
        </h2>

        <p className="mt-4 leading-7 text-gray-700 dark:text-gray-300">
          AI can also support the analysis of threat intelligence by helping
          security professionals organize information and identify relevant
          relationships between indicators, events, and potential threats.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-5 py-4 font-semibold text-gray-900 dark:text-white">
                  Threat Intelligence Activity
                </th>
                <th className="px-5 py-4 font-semibold text-gray-900 dark:text-white">
                  AI Assistance
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  Information Collection
                </td>
                <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                  Organize relevant security information.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  Indicator Analysis
                </td>
                <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                  Assist with interpreting security indicators.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  Correlation
                </td>
                <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                  Help connect related security observations.
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                  Reporting
                </td>
                <td className="px-5 py-4 text-gray-600 dark:text-gray-400">
                  Help structure threat analysis findings.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Human in the Loop */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Human Expertise + AI
        </h2>

        <p className="mt-4 leading-7 text-gray-700 dark:text-gray-300">
          Effective threat analysis combines AI capabilities with human
          cybersecurity expertise. AI can process and organize information,
          while analysts provide context, judgment, validation, and
          decision-making.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            "AI processes security data",
            "AI identifies potential patterns",
            "Analyst validates evidence",
            "Analyst makes the security decision",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="text-2xl font-bold text-purple-600">
                {index + 1}
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Considerations */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Important Considerations
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Accuracy",
              description:
                "AI-generated analysis should be validated against available security evidence.",
            },
            {
              title: "Evidence",
              description:
                "Security decisions should be based on relevant evidence rather than AI output alone.",
            },
            {
              title: "Privacy",
              description:
                "Sensitive security information should be handled according to applicable security and privacy requirements.",
            },
            {
              title: "Human Oversight",
              description:
                "Security professionals should review important findings before making significant decisions.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30"
            >
              <h3 className="font-semibold text-green-900 dark:text-green-200">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-green-800 dark:text-green-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Applications */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Practical Applications
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Security Operations Centers",
              description:
                "Assist SOC analysts with alert analysis, event correlation, and security summaries.",
            },
            {
              title: "Threat Hunting",
              description:
                "Support analysts in examining security data and identifying potentially suspicious patterns.",
            },
            {
              title: "Incident Response",
              description:
                "Help organize evidence and provide structured analysis during security investigations.",
            },
            {
              title: "Cybersecurity Education",
              description:
                "Use threat-analysis scenarios to support practical learning and analyst training.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 p-6 dark:border-gray-700"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mt-16">
        <div className="rounded-2xl bg-gray-900 p-8 text-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold">Key Takeaways</h2>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• AI can help analyze large volumes of security information.</li>
            <li>
              • Generative AI can summarize, explain, and structure threat
              analysis.
            </li>
            <li>
              • AI-assisted analysis can support SOC operations, threat
              hunting, and incident response.
            </li>
            <li>
              • Security analysts should validate AI-generated findings against
              available evidence.
            </li>
            <li>
              • Human expertise and oversight remain important in cybersecurity
              decision-making.
            </li>
          </ul>
        </div>
      </section>

      {/* Related Topics */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Related Topics
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a
            href="/genAI"
            className="rounded-xl border border-gray-200 p-5 transition hover:border-purple-400 dark:border-gray-700"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Generative AI for Cybersecurity
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Explore the role of Generative AI in cybersecurity.
            </p>
          </a>

          <a
            href="/genAI/discriminative-generative-agentic-ai"
            className="rounded-xl border border-gray-200 p-5 transition hover:border-purple-400 dark:border-gray-700"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Discriminative, Generative & Agentic AI
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Understand different AI approaches used in cybersecurity.
            </p>
          </a>

          <a
            href="/genAI/ai-powered-investigation"
            className="rounded-xl border border-gray-200 p-5 transition hover:border-purple-400 dark:border-gray-700"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              AI-Powered Investigation
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Explore how AI can support cybersecurity investigations.
            </p>
          </a>

          <a
            href="/genAI/benefits-ethics-ai-cybersecurity"
            className="rounded-xl border border-gray-200 p-5 transition hover:border-purple-400 dark:border-gray-700"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Benefits & Ethics of AI in Cybersecurity
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Understand the benefits and responsible use of AI.
            </p>
          </a>
        </div>
      </section>

      {/* Back */}
      <div className="mt-12 text-center">
        <a
          href="/genAI"
          className="text-sm font-semibold text-purple-600 hover:text-purple-700"
        >
          ← Back to Generative AI for Cybersecurity
        </a>
      </div>
    </main>
  );
}