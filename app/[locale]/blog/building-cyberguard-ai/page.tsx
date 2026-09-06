import Image from "next/image";
import Link from "next/link";

export default function BuildingCyberGuardAIBlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* =========================
          ARTICLE HEADER
      ========================== */}

      <section className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">

          <div className="max-w-4xl">

            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Cybersecurity & Artificial Intelligence
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              CyberGuard AI: Building an AI-Powered Security Analyst from Scratch
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-slate-500">

              <span>
                By <strong className="text-slate-700">Yogesh Aryal</strong>
              </span>

              <span>•</span>

              <span> June, 2025</span>
              
              <span>•</span>

              <span>Cybersecurity</span>

              <span>•</span>

              <span>8 min read</span>

            </div>


            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              A practical journey into building a lightweight AI-powered
              Security Operations Center that detects threats, stores security
              events, visualizes attacks, and generates AI-powered security
              recommendations.
            </p>

          </div>

        </div>
      </section>


      {/* =========================
          ARTICLE CONTENT
      ========================== */}

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

          {/* =========================
              ARTICLE NAVIGATION
          ========================== */}

          <aside className="hidden lg:block">

            <div className="sticky top-28 rounded-xl border bg-white p-5 shadow-sm">

              <p className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500">
                Contents
              </p>

              <nav className="space-y-3 text-sm">

                <a href="#problem" className="block text-slate-600 hover:text-blue-600">
                  1. The Problem
                </a>

                <a href="#vision" className="block text-slate-600 hover:text-blue-600">
                  2. Project Vision
                </a>

                <a href="#architecture" className="block text-slate-600 hover:text-blue-600">
                  3. System Architecture
                </a>

                <a href="#detection" className="block text-slate-600 hover:text-blue-600">
                  3.1 Detection Engine
                </a>

                <a href="#audit" className="block text-slate-600 hover:text-blue-600">
                  3.2 Security Audit Trail
                </a>

                <a href="#dashboard" className="block text-slate-600 hover:text-blue-600">
                  3.3 SOC Dashboard
                </a>

                <a href="#ai" className="block text-slate-600 hover:text-blue-600">
                  3.4 AI Security Analyst
                </a>

                <a href="#lessons" className="block text-slate-600 hover:text-blue-600">
                  3.5 Lessons Learned
                </a>

                <a href="#future" className="block text-slate-600 hover:text-blue-600">
                  3.6 Future Enhancements
                </a>

                <a href="#conclusion" className="block text-slate-600 hover:text-blue-600">
                  3.7 Conclusion
                </a>

              </nav>

            </div>

          </aside>


          {/* =========================
              MAIN ARTICLE
          ========================== */}

          <article className="min-w-0 rounded-2xl bg-white p-6 shadow-sm md:p-10 lg:p-14">

            <div className="space-y-14 text-lg leading-8 text-slate-700">


              {/* =========================
                  1. PROBLEM
              ========================== */}

              <section id="problem">

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  1. The Problem: Too Many Alerts, Too Little Context
                </h2>

                <div className="mt-6">

                  <p>
                    Modern cybersecurity teams face a common challenge: they
                    collect enormous amounts of security data but often
                    struggle to turn it into actionable intelligence. A
                    Security Operations Center (SOC) can generate hundreds or
                    even thousands of alerts every day. Many of these alerts
                    are repetitive, low-risk, or false positives. As a result,
                    analysts spend significant time reviewing logs instead of
                    investigating actual threats.
                  </p>

                  <p className="mt-6">
                    This challenge inspired me to build{" "}
                    <strong className="text-slate-900">
                      CyberGuard AI
                    </strong>
                    , a personal cybersecurity project that combines
                    traditional detection techniques with artificial
                    intelligence to help security analysts quickly understand
                    and respond to potential attacks.
                  </p>

                  <p className="mt-6">
                    The goal was simple: Transform raw security logs into
                    meaningful security insights through automation and local
                    AI analysis.
                  </p>

                </div>

                <div className="mt-8 rounded-xl border-l-4 border-blue-600 bg-blue-50 p-6">
                  <p className="font-semibold text-blue-900">
                    Project Goal
                  </p>

                  <p className="mt-2 text-blue-800">
                    Transform raw security logs into meaningful security
                    insights through automation and local AI analysis.
                  </p>
                </div>

              </section>


              {/* =========================
                  2. PROJECT VISION
              ========================== */}

              <section id="vision">

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  2. Project Vision
                </h2>

                <p className="mt-6">
                  CyberGuard AI was designed as a lightweight Security
                  Operations Center (SOC) platform that can:
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">

                  {[
                    "Detect suspicious activity from log files",
                    "Store security events for future investigation",
                    "Visualize threats through an interactive dashboard",
                    "Use AI to explain threats and recommend actions",
                    "Keep sensitive data private by running AI locally",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="rounded-xl border bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
                    >

                      <div className="flex gap-4">

                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                          {index + 1}
                        </span>

                        <p className="text-base leading-7">
                          {item}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

                <p className="mt-8">
                  Rather than replacing security analysts, the project
                  focuses on augmenting them by reducing manual investigation
                  time.
                </p>

              </section>


              {/* =========================
                  3. ARCHITECTURE
              ========================== */}

              <section id="architecture">

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  3. System Architecture
                </h2>

                <p className="mt-6">
                  The project follows a straightforward security monitoring
                  workflow:
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border bg-slate-50 p-4 shadow-sm">

                  <Image
                    src="/images/architecture.png"
                    alt="CyberGuard AI System Architecture"
                    width={1200}
                    height={700}
                    className="h-auto w-full rounded-xl"
                  />

                </div>

                <p className="mt-6">
                  Each stage adds additional value to the data until a simple
                  log entry becomes a security recommendation.
                </p>

              </section>


              {/* =========================
                  3.1 DETECTION
              ========================== */}

              <section id="detection">

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  3.1 Phase 1: Building the Detection Engine
                </h2>

                <p className="mt-6">
                  Every security platform starts with visibility. To simulate
                  real-world authentication activity, I created a log file
                  containing login events, including successful and failed
                  authentication attempts. The first challenge was identifying
                  suspicious behavior.
                </p>

                <h3 className="mt-8 text-2xl font-semibold text-slate-800">
                  Detecting Brute Force Attacks
                </h3>

                <p className="mt-4">
                  One of the most common attack techniques is a brute force
                  attack, where an attacker repeatedly attempts to guess
                  passwords. CyberGuard AI monitors failed login attempts and
                  tracks how many times each IP address appears in the logs.
                  When an IP exceeds a predefined threshold of failed
                  attempts, the system generates a security alert.
                </p>

                <p className="mt-6">
                  For example:
                </p>


                <div className="mt-6 overflow-x-auto rounded-xl border">

                  <table className="w-full min-w-[500px] text-left">

                    <thead className="bg-slate-100">

                      <tr>
                        <th className="border-b p-4 font-semibold">
                          Source IP
                        </th>

                        <th className="border-b p-4 font-semibold">
                          Failed Attempts
                        </th>

                        <th className="border-b p-4 font-semibold">
                          Result
                        </th>
                      </tr>

                    </thead>

                    <tbody>

                      <tr className="hover:bg-slate-50">

                        <td className="border-b p-4">
                          192.168.1.50
                        </td>

                        <td className="border-b p-4">
                          6
                        </td>

                        <td className="border-b p-4 font-semibold text-red-600">
                          Alert Generated
                        </td>

                      </tr>

                      <tr className="hover:bg-slate-50">

                        <td className="p-4">
                          192.168.1.75
                        </td>

                        <td className="p-4">
                          2
                        </td>

                        <td className="p-4 text-green-600">
                          No Alert
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

                <p className="mt-6">
                  This simple detection mechanism demonstrates how meaningful
                  security events can be extracted from otherwise noisy log
                  data.
                </p>

              </section>


              {/* =========================
                  3.2 AUDIT TRAIL
              ========================== */}

              <section id="audit">

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  3.2 Phase 2: Creating a Security Audit Trail
                </h2>

                <p className="mt-6">
                  Initially, alerts were displayed directly in the terminal.
                  While this approach was useful for testing, it has a major
                  limitation. Once the program stops running, the alert
                  history would disappear.
                </p>

                <p className="mt-6">
                  To solve this problem, SQLite is integrated as a lightweight
                  security event database. Every alert generated by the
                  detection engine is stored with; timestamp, alert type,
                  severity level, source IP and number of attempts.
                </p>

                <p className="mt-6">
                  This transformation enabled the project to move from a
                  simple script to a system capable of maintaining historical
                  records.
                </p>

                <div className="mt-8 rounded-xl bg-slate-900 p-6 text-white">

                  <p className="font-semibold">
                    This matters because persistent storage allows security
                    teams to:
                  </p>

                  <ol className="mt-4 space-y-2">

                    <li>1. Identify recurring attackers</li>
                    <li>2. Analyze attack trends</li>
                    <li>3. Generate reports</li>
                    <li>4. Maintain audit records</li>
                    <li>5. Support compliance requirements</li>

                  </ol>

                </div>

                <p className="mt-8 italic text-slate-600">
                  Instead of asking, "What happened today?", analysts can
                  begin asking, "What patterns have emerged over time?"
                </p>

              </section>


              {/* =========================
                  3.3 DASHBOARD
              ========================== */}

              <section id="dashboard">

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  3.3 Phase 3: Building a SOC Dashboard
                </h2>

                <p className="mt-6">
                  Security data becomes far more valuable when it is
                  visualized. To make the alert data easier to interpret, an
                  interactive dashboard was built using Streamlit. The
                  dashboard provides an immediate overview of the
                  organization's security posture.
                </p>

                <p className="mt-6">
                  Instead of reviewing rows of data manually, users gain
                  situational awareness within seconds.
                </p>

                <h3 className="mt-8 text-2xl font-semibold text-slate-800">
                  Dashboard Features
                </h3>

                <div className="mt-6 space-y-4">

                  <div className="rounded-xl border p-5">
                    <strong>1. Security Metrics</strong>
                    <p className="mt-2">
                      At a glance, users can view; total alerts detected,
                      high-severity incidents and recent activity levels
                    </p>
                  </div>

                  <div className="rounded-xl border p-5">
                    <strong>2. Top Attacking IP Addresses</strong>
                    <p className="mt-2">
                      A dedicated section highlights the most active sources
                      of suspicious activity. This helps prioritize
                      investigation efforts and quickly identify recurring
                      offenders.
                    </p>
                  </div>

                  <div className="rounded-xl border p-5">
                    <strong>3. Threat Visualization</strong>
                    <p className="mt-2">
                      Charts and visual summaries reveal trends that are
                      difficult to spot in raw database tables. Analysts can
                      immediately understand; alert frequency, severity
                      distribution and attack concentration.
                    </p>
                  </div>

                </div>

              </section>


              {/* =========================
                  3.4 AI
              ========================== */}

              <section id="ai">

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  3.4 Phase 4: Introducing the AI Security Analyst
                </h2>

                <p className="mt-6">
                  While dashboards help visualize threats, analysts still need
                  to answer critical questions:
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">

                  {[
                    "What does this alert mean?",
                    "How serious is it?",
                    "What should happen next?",
                  ].map((question, index) => (

                    <div
                      key={question}
                      className="rounded-xl bg-blue-50 p-5 text-center"
                    >

                      <div className="text-2xl font-bold text-blue-600">
                        {index + 1}
                      </div>

                      <p className="mt-2 font-medium text-slate-800">
                        {question}
                      </p>

                    </div>

                  ))}

                </div>

                <p className="mt-8">
                  This is where AI becomes valuable. CyberGuard AI integrates
                  a locally hosted Large Language Model using Ollama and Llama
                  3.2:3b.
                </p>

                <p className="mt-6">
                  This local AI is implemented because many organizations
                  hesitate to send security data to cloud-based AI services.
                  Running the model locally provides several benefits:
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">

                  {[
                    "Improved privacy",
                    "No external API costs",
                    "Reduced dependency on internet connectivity",
                    "Greater control over sensitive information",
                  ].map((benefit) => (

                    <div
                      key={benefit}
                      className="rounded-xl border bg-slate-50 p-5"
                    >
                      ✓ {benefit}
                    </div>

                  ))}

                </div>


                <h3 className="mt-10 text-2xl font-semibold text-slate-800">
                  Turning Alerts into Intelligence
                </h3>

                <p className="mt-4">
                  A raw alert may look like this:
                </p>

                <div className="mt-6 overflow-x-auto rounded-xl border">

                  <table className="w-full min-w-[500px] text-left">

                    <thead className="bg-slate-100">

                      <tr>
                        <th className="border-b p-4">Alert Type</th>
                        <th className="border-b p-4">Source IP</th>
                        <th className="border-b p-4">Attempts</th>
                      </tr>

                    </thead>

                    <tbody>

                      <tr>

                        <td className="border-b p-4">
                          Brute Force Attack
                        </td>

                        <td className="border-b p-4">
                          192.168.1.50
                        </td>

                        <td className="border-b p-4">
                          6
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

                <p className="mt-6">
                  For a junior analyst, this information raises several
                  questions. CyberGuard AI automatically converts the alert
                  into a concise security assessment.
                </p>

                <p className="mt-6">
                  The AI responds using a structured format:
                </p>

                <div className="mt-6 space-y-4">

                  <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-5">
                    <strong>Threat Summary</strong>
                    <p className="mt-1">
                      A brief explanation of what happened.
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-5">
                    <strong>Severity</strong>
                    <p className="mt-1">
                      An assessment of the risk level.
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-purple-600 bg-purple-50 p-5">
                    <strong>MITRE ATT&CK Mapping</strong>
                    <p className="mt-1">
                      Industry-standard classification of the attack
                      technique.
                    </p>
                  </div>

                  <div className="rounded-xl border-l-4 border-green-600 bg-green-50 p-5">
                    <strong>Recommended Actions</strong>
                    <p className="mt-1">
                      Practical steps security teams should take immediately.
                    </p>
                  </div>

                </div>

                <p className="mt-8 font-medium text-slate-900">
                  This transforms technical data into actionable guidance.
                </p>

              </section>


              {/* =========================
                  3.5 LESSONS
              ========================== */}

              <section id="lessons">

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  3.5 Challenges and Lessons Learned
                </h2>

                <p className="mt-6">
                  Building CyberGuard AI taught me several important lessons:
                </p>

                <div className="mt-6 space-y-5">

                  <div className="rounded-xl border p-6">
                    <h3 className="font-bold">
                      1. Security Data Is Only Valuable When Context Exists
                    </h3>

                    <p className="mt-2">
                      Raw logs are not intelligence. Meaningful analysis
                      requires detection logic, historical storage, and
                      interpretation.
                    </p>
                  </div>

                  <div className="rounded-xl border p-6">
                    <h3 className="font-bold">
                      2. Simplicity Often Wins
                    </h3>

                    <p className="mt-2">
                      A straightforward brute-force detection rule can still
                      uncover legitimate security concerns. Complexity is not
                      always necessary.
                    </p>
                  </div>

                  <div className="rounded-xl border p-6">
                    <h3 className="font-bold">
                      3. AI Works Best as an Assistant
                    </h3>

                    <p className="mt-2">
                      The most effective role for AI is helping analysts
                      understand and prioritize information rather than
                      replacing human decision-making.
                    </p>
                  </div>

                  <div className="rounded-xl border p-6">
                    <h3 className="font-bold">
                      4. Privacy Matters
                    </h3>

                    <p className="mt-2">
                      Local AI deployment offers a practical balance between
                      automation and data protection.
                    </p>
                  </div>

                </div>

              </section>


              {/* =========================
                  3.6 FUTURE
              ========================== */}

              <section id="future">

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  3.6 Future Enhancements
                </h2>

                <p className="mt-6">
                  CyberGuard AI is an ongoing project, and several improvements
                  are planned:
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                  {[
                    "Real-time log monitoring",
                    "Additional attack detection rules",
                    "Threat intelligence integration",
                    "Automated incident reports",
                    "Email and Slack notifications",
                    "Multi-user authentication",
                    "Risk scoring engine",
                    "Machine learning anomaly detection",
                    "Docker deployment",
                    "Cloud-hosted dashboard",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="flex gap-3 rounded-lg border bg-slate-50 p-4"
                    >

                      <span className="font-bold text-blue-600">
                        {index + 1}.
                      </span>

                      <span>{item}</span>

                    </div>

                  ))}

                </div>

                <p className="mt-8">
                  These enhancements would move the platform closer to a
                  production-grade SOC solution.
                </p>

              </section>


              {/* =========================
                  CONCLUSION
              ========================== */}

              <section id="conclusion">

                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  3.7 Conclusion
                </h2>

                <div className="mt-6 rounded-2xl bg-slate-900 p-8 text-lg leading-8 text-slate-200">

                  <p>
                    CyberGuard AI began as an experiment to explore the
                    intersection of cybersecurity and artificial intelligence.
                    What emerged was a complete security workflow capable of
                    detecting suspicious activity, preserving historical
                    evidence, visualizing threats, and generating AI-powered
                    security guidance.
                  </p>

                  <p className="mt-6">
                    The project reinforced an important lesson; The future of
                    cybersecurity is not just collecting more data. It is
                    helping people understand that data faster, more
                    accurately, and with greater context.
                  </p>

                  <p className="mt-6">
                    By combining traditional detection techniques with local
                    AI, CyberGuard AI demonstrates how modern security
                    operations can become more efficient, scalable, and
                    intelligent without sacrificing privacy.
                  </p>

                </div>

              </section>


              {/* =========================
                  END
              ========================== */}

              <div className="border-t pt-10 text-center">

                <p className="text-sm text-slate-500">
                  CyberGuard AI • Cybersecurity & Artificial Intelligence
                </p>

              </div>

            </div>

            {/* Navigation */}
              <div className="mt-10 flex flex-col justify-between gap-4 border-t pt-8 sm:flex-row">

                <Link
                  href="/blog"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  ← Back to Blog
                </Link>

              </div>


          </article>

        </div>

      </div>

    </main>
  );
}