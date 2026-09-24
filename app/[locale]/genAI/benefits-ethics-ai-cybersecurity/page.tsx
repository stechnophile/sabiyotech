import Link from "next/link";

export default function BenefitsEthicsAICybersecurity() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🛡️
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-purple-600">
          Generative AI for Cybersecurity
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Benefits & Ethics of AI in Cybersecurity
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Exploring how artificial intelligence can strengthen cybersecurity
          while addressing ethical, technical, privacy, and human oversight
          considerations.
        </p>

      </div>


      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          AI in Cybersecurity
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Artificial intelligence can support cybersecurity professionals by
          helping analyze security data, identify suspicious activity,
          summarize complex information, and assist with investigation and
          response workflows.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          However, the use of AI in cybersecurity also introduces important
          responsibilities. Security teams need to consider accuracy,
          privacy, transparency, bias, security of AI systems, and appropriate
          human oversight when integrating AI into security operations.
        </p>

      </section>


      {/* Benefits */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Benefits of AI in Cybersecurity
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI can augment cybersecurity teams by helping them process large
          amounts of information and focus their attention on activities that
          require human expertise and judgment.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Faster Threat Detection",
              icon: "🚨",
              text: "AI can analyze security events and identify patterns that may indicate suspicious or malicious activity, helping security teams investigate potential threats more efficiently.",
            },
            {
              title: "Alert Prioritization",
              icon: "🎯",
              text: "AI can help classify and prioritize security alerts so analysts can focus their attention on events that may require more immediate investigation.",
            },
            {
              title: "Security Data Analysis",
              icon: "📊",
              text: "AI can assist with analyzing large volumes of logs, events, indicators, and other security information that may be difficult to process manually.",
            },
            {
              title: "Investigation Support",
              icon: "🔍",
              text: "AI can help correlate information from different sources, summarize findings, and support analysts during security investigations.",
            },
            {
              title: "Incident Reporting",
              icon: "📝",
              text: "Generative AI can transform technical findings into structured incident summaries and reports that are easier for different stakeholders to understand.",
            },
            {
              title: "Cybersecurity Capacity Building",
              icon: "🎓",
              text: "AI-powered assistants can support cybersecurity education by explaining concepts, generating learning scenarios, and providing interactive guidance.",
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


      {/* AI Security Workflow */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          How AI Can Support the Security Workflow
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI can provide assistance across multiple stages of a cybersecurity
          workflow, from identifying potential threats to supporting
          investigation and reporting.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

          <div className="grid bg-slate-100 md:grid-cols-3">

            <div className="p-5 font-bold text-slate-900">
              Security Activity
            </div>

            <div className="p-5 font-bold text-slate-900">
              AI Assistance
            </div>

            <div className="p-5 font-bold text-slate-900">
              Example
            </div>

          </div>

          {[
            [
              "Detection",
              "Pattern recognition and classification",
              "Identify potentially suspicious activity",
            ],
            [
              "Analysis",
              "Summarization and explanation",
              "Explain security events and logs",
            ],
            [
              "Investigation",
              "Correlation and reasoning support",
              "Connect evidence from multiple sources",
            ],
            [
              "Response",
              "Recommendation and workflow support",
              "Suggest appropriate investigation or response steps",
            ],
            [
              "Reporting",
              "Content generation",
              "Create structured incident summaries",
            ],
            [
              "Learning",
              "Interactive explanations",
              "Support cybersecurity training and capacity building",
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


      {/* Ethics Introduction */}
      <section className="mt-14 rounded-2xl bg-purple-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Ethics of AI in Cybersecurity
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI systems can influence security decisions, investigations, and the
          handling of sensitive information. Responsible use therefore requires
          organizations to consider not only what AI can do, but also how it is
          deployed, monitored, and governed.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Ethical cybersecurity AI should support security professionals while
          preserving appropriate human responsibility, privacy, transparency,
          and accountability.
        </p>

      </section>


      {/* Ethical Considerations */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Key Ethical Considerations
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Privacy & Data Protection",
              icon: "🔐",
              text: "Cybersecurity systems often process sensitive information. Organizations should consider what data is provided to AI systems, how it is stored, who can access it, and whether it is appropriate to use for a particular purpose.",
            },
            {
              title: "Accuracy & Hallucinations",
              icon: "⚠️",
              text: "AI-generated outputs can contain incorrect or misleading information. Security analysts should validate important AI-generated findings before using them to make consequential decisions.",
            },
            {
              title: "Bias & Fairness",
              icon: "⚖️",
              text: "AI systems may reflect limitations or biases present in their training data or design. Security teams should evaluate whether AI-assisted decisions produce inappropriate or unfair outcomes.",
            },
            {
              title: "Transparency",
              icon: "🔎",
              text: "Where AI contributes to important security decisions, organizations should maintain appropriate visibility into how AI is being used and communicate its role to relevant stakeholders.",
            },
            {
              title: "Human Oversight",
              icon: "👨‍💻",
              text: "AI should augment professional judgment rather than automatically replace it. Analysts should review AI-generated findings when decisions could affect systems, users, investigations, or organizational risk.",
            },
            {
              title: "Security of AI Systems",
              icon: "🛡️",
              text: "AI systems themselves can become targets of attacks or manipulation. Organizations should consider threats such as malicious inputs, prompt injection, data exposure, unauthorized access, and misuse of AI capabilities.",
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


      {/* Responsible AI */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Responsible AI in Cybersecurity
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Responsible AI means designing and using AI systems in ways that
          consider security, privacy, reliability, accountability, and human
          oversight throughout the AI lifecycle.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">

          {[
            {
              title: "Define",
              icon: "🎯",
              text: "Define the security objective",
            },
            {
              title: "Protect",
              icon: "🔐",
              text: "Protect sensitive data",
            },
            {
              title: "Validate",
              icon: "🔎",
              text: "Validate AI outputs",
            },
            {
              title: "Monitor",
              icon: "📊",
              text: "Monitor AI behavior",
            },
            {
              title: "Govern",
              icon: "🏛️",
              text: "Maintain accountability",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl bg-slate-50 p-5 text-center shadow-sm"
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

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* Benefits vs Risks */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Benefits and Risks
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          The value of AI in cybersecurity needs to be considered alongside
          the risks introduced by its use.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

          <div className="grid bg-slate-100 md:grid-cols-3">

            <div className="p-5 font-bold text-slate-900">
              Area
            </div>

            <div className="p-5 font-bold text-slate-900">
              Potential Benefit
            </div>

            <div className="p-5 font-bold text-slate-900">
              Key Consideration
            </div>

          </div>

          {[
            [
              "Threat Detection",
              "Faster identification of suspicious activity",
              "False positives and false negatives",
            ],
            [
              "Log Analysis",
              "Faster processing of large datasets",
              "Data privacy and accuracy",
            ],
            [
              "Investigation",
              "Correlation and investigation support",
              "Human validation of findings",
            ],
            [
              "Automation",
              "Reduced repetitive work",
              "Authorization and unintended actions",
            ],
            [
              "Reporting",
              "Faster creation of security documentation",
              "Accuracy and confidentiality",
            ],
            [
              "Education",
              "Accessible cybersecurity knowledge",
              "Quality and reliability of generated content",
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


      {/* Human + AI */}
      <section className="mt-14 rounded-2xl bg-green-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Human Expertise + AI
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Effective cybersecurity requires a combination of technology and
          professional judgment. AI can help security teams analyze information
          and work more efficiently, while cybersecurity professionals remain
          responsible for interpreting evidence, validating results, and making
          appropriate decisions.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">

          {[
            {
              title: "AI",
              icon: "🤖",
              text: "Analyze, summarize, correlate",
            },
            {
              title: "Analyst",
              icon: "👨‍💻",
              text: "Validate and interpret",
            },
            {
              title: "Security Team",
              icon: "🛡️",
              text: "Make informed decisions",
            },
            {
              title: "Organization",
              icon: "🏢",
              text: "Manage security risk",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-5 text-center shadow-sm"
            >

              <div className="text-3xl">
                {item.icon}
              </div>

              <h3 className="mt-3 font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* Practical Guidelines */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Practical Guidelines for Security Teams
        </h2>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

          <ul className="list-disc space-y-4 pl-6 text-lg leading-8 text-slate-700">

            <li>
              Define clear objectives and authorized use cases before deploying
              AI in security workflows.
            </li>

            <li>
              Avoid exposing sensitive or confidential security information to
              AI systems without appropriate safeguards.
            </li>

            <li>
              Validate important AI-generated findings before taking
              consequential security actions.
            </li>

            <li>
              Maintain appropriate human oversight for decisions that can
              affect systems, users, investigations, or organizational risk.
            </li>

            <li>
              Monitor AI systems for unexpected behavior, errors, misuse, and
              security vulnerabilities.
            </li>

            <li>
              Establish governance processes that define responsibilities,
              authorization, accountability, and acceptable AI use.
            </li>

          </ul>

        </div>

      </section>


      {/* Key Takeaways */}
      <section className="mt-14 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

        <h2 className="text-3xl font-bold text-slate-900">
          Key Takeaways
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">

          <li>
            AI can help cybersecurity teams analyze large volumes of security
            information and improve workflow efficiency.
          </li>

          <li>
            AI can support threat detection, alert prioritization, investigation,
            reporting, and cybersecurity education.
          </li>

          <li>
            Privacy and data protection are important considerations when
            security information is processed by AI systems.
          </li>

          <li>
            AI-generated results can contain errors and should be appropriately
            validated before being used for important security decisions.
          </li>

          <li>
            Human oversight remains important when AI-assisted decisions could
            affect systems, users, investigations, or organizational risk.
          </li>

          <li>
            Responsible AI requires appropriate security, governance,
            transparency, accountability, and monitoring.
          </li>

          <li>
            The goal should be to use AI to augment cybersecurity professionals
            while maintaining appropriate human responsibility and judgment.
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
            href="/genAI/ai-assisted-threat-analysis"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            AI-Assisted Threat Analysis →
          </Link>

          <Link
            href="/genAI/ai-powered-investigation"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            AI-Powered Investigation →
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