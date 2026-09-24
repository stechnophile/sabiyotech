import Link from "next/link";

export default function AICybersecurityCapacityBuilding() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🎓
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-purple-600">
          Generative AI for Cybersecurity
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          AI for Cybersecurity Capacity Building
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Exploring how artificial intelligence can support cybersecurity
          education, workforce development, knowledge sharing, and continuous
          professional learning.
        </p>

      </div>


      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          What Is Cybersecurity Capacity Building?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity capacity building focuses on developing the knowledge,
          skills, capabilities, and institutional practices needed to prevent,
          detect, investigate, and respond to cybersecurity threats.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Artificial intelligence can complement traditional cybersecurity
          education by providing interactive learning, personalized
          explanations, practical scenarios, and accessible cybersecurity
          knowledge to learners and professionals.
        </p>

      </section>


      {/* Why AI for Capacity Building */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Why Use AI for Cybersecurity Capacity Building?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity knowledge is continuously evolving. AI can help
          learners and security professionals access explanations, practice
          scenarios, and learning resources in a more interactive way.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Accessible Learning",
              icon: "🌐",
              text: "AI assistants can make cybersecurity concepts and learning resources more accessible by providing explanations and guidance through natural language interaction.",
            },
            {
              title: "Personalized Learning",
              icon: "🎯",
              text: "AI can adapt explanations and examples to different levels of knowledge, helping beginners and experienced professionals explore topics at an appropriate depth.",
            },
            {
              title: "Interactive Practice",
              icon: "💻",
              text: "AI can generate scenarios, questions, exercises, and simulated security situations that allow learners to practice analytical and decision-making skills.",
            },
            {
              title: "Continuous Learning",
              icon: "📚",
              text: "AI can support ongoing professional development by helping cybersecurity practitioners explore emerging technologies, threats, and security concepts.",
            },
            {
              title: "Knowledge Sharing",
              icon: "🤝",
              text: "AI can help transform technical knowledge into explanations, summaries, training materials, and other resources that can be shared across teams and organizations.",
            },
            {
              title: "Training Efficiency",
              icon: "⚡",
              text: "AI can assist educators and trainers with developing learning materials, scenarios, quizzes, and structured training content.",
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


      {/* AI Learning Workflow */}
      <section className="mt-14 rounded-2xl bg-purple-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          AI-Assisted Cybersecurity Learning
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI can support a continuous learning cycle in which learners explore
          concepts, practice skills, receive feedback, and apply their
          knowledge to realistic cybersecurity scenarios.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-5">

          {[
            {
              title: "Learn",
              icon: "📖",
            },
            {
              title: "Practice",
              icon: "💻",
            },
            {
              title: "Analyze",
              icon: "🔍",
            },
            {
              title: "Receive Feedback",
              icon: "💡",
            },
            {
              title: "Apply",
              icon: "🛡️",
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


      {/* Applications */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          AI Applications for Cybersecurity Education
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Cybersecurity Learning Assistant",
              icon: "🤖",
              text: "Provide interactive explanations of cybersecurity concepts, technologies, frameworks, vulnerabilities, and security practices.",
            },
            {
              title: "Scenario-Based Learning",
              icon: "🎭",
              text: "Generate realistic cybersecurity scenarios that allow learners to practice threat analysis, incident response, and security decision-making.",
            },
            {
              title: "SOC Analyst Training",
              icon: "🛡️",
              text: "Support practical exercises involving alerts, logs, indicators, investigation workflows, and incident analysis.",
            },
            {
              title: "Security Labs",
              icon: "🧪",
              text: "Guide learners through controlled cybersecurity exercises and help explain the results of authorized security testing activities.",
            },
            {
              title: "Interactive Quizzes",
              icon: "📝",
              text: "Generate questions and knowledge checks to reinforce cybersecurity concepts and identify areas requiring additional study.",
            },
            {
              title: "Training Material Development",
              icon: "📚",
              text: "Assist trainers and educators in developing presentations, exercises, case studies, assessments, and other learning resources.",
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


      {/* Capacity Building Levels */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          AI Across Different Learning Levels
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI-assisted learning can support different stages of cybersecurity
          capability development.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">

          <div className="grid bg-slate-100 md:grid-cols-3">

            <div className="p-5 font-bold text-slate-900">
              Learning Level
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
              "Beginner",
              "Concept explanations and guided learning",
              "Explain networking, threats, vulnerabilities, and security fundamentals",
            ],
            [
              "Intermediate",
              "Practical exercises and scenario analysis",
              "Analyze logs and investigate simulated security alerts",
            ],
            [
              "Advanced",
              "Research and complex problem solving",
              "Explore threat hunting, detection engineering, and security architecture",
            ],
            [
              "Professional",
              "Continuous learning and knowledge support",
              "Explore emerging threats, technologies, and security practices",
            ],
            [
              "Trainer",
              "Training material development",
              "Create scenarios, exercises, assessments, and learning resources",
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


      {/* Workforce Development */}
      <section className="mt-14 rounded-2xl bg-green-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          AI for Cybersecurity Workforce Development
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI can support cybersecurity workforce development by helping
          learners build practical capabilities and helping organizations
          develop continuous learning programs.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">

          {[
            {
              title: "Knowledge",
              icon: "📖",
              text: "Build foundational cybersecurity knowledge",
            },
            {
              title: "Skills",
              icon: "🛠️",
              text: "Develop practical technical skills",
            },
            {
              title: "Experience",
              icon: "💻",
              text: "Practice realistic security scenarios",
            },
            {
              title: "Professional Growth",
              icon: "📈",
              text: "Support continuous development",
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

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* Institutional Capacity */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Beyond Individual Learning
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Cybersecurity capacity building extends beyond individual technical
          skills. Organizations and institutions also need processes,
          knowledge-sharing mechanisms, training programs, and governance
          capabilities.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "Organizational Training",
              icon: "🏢",
              text: "Support structured cybersecurity awareness and professional training programs within organizations.",
            },
            {
              title: "Knowledge Management",
              icon: "📚",
              text: "Help organize and communicate cybersecurity knowledge, procedures, lessons learned, and good practices.",
            },
            {
              title: "Training-of-Trainers",
              icon: "👨‍🏫",
              text: "Assist cybersecurity educators and trainers in developing practical learning materials and exercises.",
            },
            {
              title: "Cybersecurity Awareness",
              icon: "🛡️",
              text: "Support accessible security education for employees, students, technical professionals, and other audiences.",
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
          Responsible Use of AI for Learning
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          AI can be a powerful learning assistant, but learners should
          understand its limitations. AI-generated information should be
          evaluated critically and verified when accuracy is important.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm">

          <ul className="list-disc space-y-4 pl-6 text-lg leading-8 text-slate-700">

            <li>
              Verify important technical information using authoritative
              cybersecurity resources and documentation.
            </li>

            <li>
              Treat AI-generated explanations and examples as learning
              assistance rather than automatically authoritative information.
            </li>

            <li>
              Avoid sharing sensitive organizational information or confidential
              security data with inappropriate AI systems.
            </li>

            <li>
              Use AI within authorized educational and cybersecurity
              environments.
            </li>

            <li>
              Encourage critical thinking rather than relying on AI to provide
              all answers.
            </li>

          </ul>

        </div>

      </section>


      {/* AI + Human Learning */}
      <section className="mt-14 rounded-2xl bg-purple-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Human Expertise + AI Learning
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Effective cybersecurity capacity building combines AI-enabled
          learning with human expertise, practical experience, mentoring, and
          professional judgment.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4">

          {[
            {
              title: "AI Assistant",
              icon: "🤖",
              text: "Explain and generate learning resources",
            },
            {
              title: "Learner",
              icon: "🎓",
              text: "Explore, practice, and critically evaluate",
            },
            {
              title: "Trainer",
              icon: "👨‍🏫",
              text: "Guide and validate learning",
            },
            {
              title: "Organization",
              icon: "🏢",
              text: "Build sustainable cybersecurity capability",
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

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* Practical Applications */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Practical Capacity-Building Applications
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            {
              title: "SOC Analyst Training",
              icon: "🛡️",
              text: "Create practical scenarios involving security alerts, logs, threat analysis, and incident investigation.",
            },
            {
              title: "Cybersecurity Workshops",
              icon: "🎓",
              text: "Support interactive workshops with examples, exercises, discussions, and scenario-based learning.",
            },
            {
              title: "Cybersecurity Awareness",
              icon: "📢",
              text: "Develop accessible security awareness content for employees, students, and non-technical audiences.",
            },
            {
              title: "Professional Development",
              icon: "📈",
              text: "Support cybersecurity professionals in learning new technologies, frameworks, threats, and security practices.",
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
            AI can support cybersecurity capacity building through interactive
            learning, practical exercises, and knowledge assistance.
          </li>

          <li>
            AI can help personalize learning for different levels of
            cybersecurity knowledge and experience.
          </li>

          <li>
            AI can support SOC training, cybersecurity labs, scenario-based
            learning, quizzes, and professional development.
          </li>

          <li>
            Cybersecurity capacity building includes both individual skills
            development and organizational knowledge development.
          </li>

          <li>
            Human trainers, mentors, and cybersecurity professionals remain
            important for guidance, validation, and professional judgment.
          </li>

          <li>
            AI-generated learning content should be critically evaluated and
            verified when accuracy is important.
          </li>

          <li>
            Responsible use of AI can help expand access to cybersecurity
            knowledge while supporting continuous workforce development.
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