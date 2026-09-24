import Link from "next/link";

const topics = [
  {
    title: "Discriminative, Generative & Agentic AI",
    slug: "discriminative-generative-agentic-ai",
    icon: "🤖",
    description:
      "Understand the differences between discriminative, generative, and agentic AI, and explore how each approach can be applied to cybersecurity detection, analysis, automation, and investigation.",
  },
  {
    title: "Benefits & Ethics of AI in Cybersecurity",
    slug: "benefits-ethics-ai-cybersecurity",
    icon: "⚖️",
    description:
      "Explore how AI can improve cybersecurity operations while examining important considerations such as privacy, accuracy, bias, explainability, human oversight, and responsible use.",
  },
  {
    title: "AI-Assisted Threat Analysis",
    slug: "ai-assisted-threat-analysis",
    icon: "🔍",
    description:
      "Learn how AI can assist security professionals in analyzing alerts, identifying suspicious patterns, correlating security events, assessing severity, and mapping threats to relevant attack techniques.",
  },
  {
    title: "AI-Powered Investigation",
    slug: "ai-powered-investigation",
    icon: "🕵️",
    description:
      "Explore how AI can support security investigations by collecting evidence, correlating events, analyzing attack patterns, generating investigation narratives, and recommending appropriate next steps.",
  },
  {
    title: "AI for Cybersecurity Capacity Building",
    slug: "ai-cybersecurity-capacity-building",
    icon: "🎓",
    description:
      "Explore how AI-powered learning assistants, interactive simulations, and personalized learning tools can support cybersecurity education, professional development, and workforce capacity building.",
  },
];

export default function GenerativeAICybersecurity() {
  return (
    <section
      id="generative-ai-cybersecurity"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* SECTION HEADER */}
        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-purple-600">
            Knowledge Hub
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Generative AI for Cybersecurity
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore how Generative AI, intelligent automation, and AI-powered
            investigation can support cybersecurity operations, threat
            analysis, incident response, and cybersecurity capacity building.
          </p>

        </div>

        {/* TOPIC CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {topics.map((topic) => (
            <div
              key={topic.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl"
            >

              {/* ICON */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-4xl transition-transform duration-300 group-hover:scale-110">
                {topic.icon}
              </div>

              {/* TITLE */}
              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                {topic.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-4 leading-7 text-slate-600">
                {topic.description}
              </p>

              {/* LINK */}
              <Link
                href={`/generative-ai-cybersecurity/${topic.slug}`}
                className="mt-8 inline-block font-semibold text-purple-700 transition-colors hover:text-purple-900 hover:underline"
              >
                Learn More →
              </Link>

            </div>
          ))}

        </div>

        {/* RESPONSIBLE AI */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">

          <h2 className="text-2xl font-bold text-slate-900">
            Responsible AI in Cybersecurity
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            AI should augment cybersecurity professionals rather than replace
            appropriate human judgment. Effective use requires attention to
            privacy, accuracy, transparency, bias, security, and human
            oversight.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Privacy
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Accuracy
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Transparency
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Human Oversight
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              Responsible AI
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}