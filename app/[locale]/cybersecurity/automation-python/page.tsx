import Link from "next/link";

export default function CybersecurityAutomationPython() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="text-6xl">🐍</div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-purple-600">
            Cybersecurity & Automation
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Cybersecurity Automation with Python
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Learn how Python can automate repetitive cybersecurity tasks,
            analyze security data, support vulnerability assessment, and
            improve security monitoring and incident response.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Introduction */}
        <section>
          <div className="rounded-2xl border border-purple-100 bg-purple-50 p-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Why Python for Cybersecurity?
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Cybersecurity teams frequently work with large amounts of logs,
              network information, security alerts, vulnerability data, and
              system information. Python provides a flexible way to automate
              repetitive tasks and build custom security workflows.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              Python can connect security tools, process data, analyze events,
              generate reports, interact with APIs, and support security
              monitoring applications.
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Python in Cybersecurity
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "📋",
                title: "Log Analysis",
                description:
                  "Parse authentication, application, system, and security logs to identify patterns and suspicious events.",
              },
              {
                icon: "🌐",
                title: "Network Analysis",
                description:
                  "Automate network information gathering and integrate network security tools into custom workflows.",
              },
              {
                icon: "🔍",
                title: "Vulnerability Assessment",
                description:
                  "Process scan results, identify security findings, calculate risk, and generate assessment reports.",
              },
              {
                icon: "🚨",
                title: "Threat Detection",
                description:
                  "Build scripts that detect predefined indicators and suspicious activity from security data.",
              },
              {
                icon: "📊",
                title: "Security Reporting",
                description:
                  "Transform security findings into structured reports, dashboards, and data visualizations.",
              },
              {
                icon: "🔗",
                title: "API Integration",
                description:
                  "Connect security applications and services through APIs to automate information exchange.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Libraries */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Useful Python Libraries
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Library</th>
                    <th className="px-6 py-4 font-semibold">Security Use</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">requests</td>
                    <td className="px-6 py-4 text-slate-600">
                      HTTP requests and API integration
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">socket</td>
                    <td className="px-6 py-4 text-slate-600">
                      Network communication and socket operations
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">subprocess</td>
                    <td className="px-6 py-4 text-slate-600">
                      Controlled interaction with local security tools
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">re</td>
                    <td className="px-6 py-4 text-slate-600">
                      Pattern matching and log parsing
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">json</td>
                    <td className="px-6 py-4 text-slate-600">
                      Processing structured security data
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">pandas</td>
                    <td className="px-6 py-4 text-slate-600">
                      Security data analysis and reporting
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">hashlib</td>
                    <td className="px-6 py-4 text-slate-600">
                      File hashing and integrity verification
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Automation Workflow */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Cybersecurity Automation Workflow
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-6">
            {[
              ["01", "Collect", "Security data"],
              ["02", "Parse", "Structure information"],
              ["03", "Analyze", "Identify patterns"],
              ["04", "Detect", "Find suspicious activity"],
              ["05", "Alert", "Notify analysts"],
              ["06", "Report", "Document findings"],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-sm font-bold text-purple-600">
                  {number}
                </div>

                <h3 className="mt-3 font-bold text-slate-900">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Example */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Example: Automated Log Analysis
          </h2>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="leading-8 text-slate-700">
              A Python-based security script can read authentication logs,
              identify repeated failed login attempts, group events by source,
              and create an alert when a predefined threshold is reached.
            </p>

            <div className="mt-6 rounded-xl bg-slate-900 p-6">
              <pre className="overflow-x-auto text-sm leading-7 text-slate-100">
                <code>{`from collections import Counter

failed_attempts = [
    "192.168.1.50",
    "192.168.1.50",
    "192.168.1.50",
    "192.168.1.20",
]

counts = Counter(failed_attempts)

for ip, count in counts.items():
    if count >= 3:
        print(f"Alert: repeated login failures from {ip}")`}</code>
              </pre>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              This example demonstrates basic defensive log analysis using
              sample data. Real-world automation should include appropriate
              validation, logging, error handling, and authorization.
            </p>
          </div>
        </section>

        {/* Python + Security Tools */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Python + Cybersecurity Tools
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Tool</th>
                    <th className="px-6 py-4 font-semibold">
                      Python Automation
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Nmap</td>
                    <td className="px-6 py-4 text-slate-600">
                      Process network discovery and scan results
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">Wireshark</td>
                    <td className="px-6 py-4 text-slate-600">
                      Process exported packet and network data
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">SIEM</td>
                    <td className="px-6 py-4 text-slate-600">
                      Query APIs and process security events
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">
                      Vulnerability Scanners
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Parse findings and generate risk reports
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Python + AI */}
        <section className="mt-16">
          <div className="rounded-2xl border border-purple-100 bg-purple-50 p-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Python + AI for Cybersecurity
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Python can also act as the integration layer between security
              data and artificial intelligence systems. Security events can be
              collected and processed before being provided to an AI model for
              analysis or recommendation generation.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                "Security Logs",
                "Python Processing",
                "AI Analysis",
                "Security Recommendation",
              ].map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-purple-100 bg-white p-5 text-center"
                >
                  <div className="text-sm font-bold text-purple-600">
                    {index + 1}
                  </div>

                  <p className="mt-2 font-semibold text-slate-900">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Practical Cybersecurity Automation Projects
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-4xl">🤖</div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                AI-Powered Security Analyst
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Build a Python application that analyzes security logs,
                identifies potential threats, stores alerts, and generates
                security recommendations using AI.
              </p>

              <p className="mt-4 text-sm font-semibold text-purple-600">
                Example: CyberGuard AI
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-4xl">🔍</div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Automated Vulnerability Assessment
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Automate network discovery, service enumeration, vulnerability
                matching, risk assessment, database storage, and security
                reporting.
              </p>

              <p className="mt-4 text-sm font-semibold text-purple-600">
                Example: Vulnerability Assessment & Risk Management Platform
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Python Security Automation Best Practices
          </h2>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4 leading-7 text-slate-700">
              <li>✓ Automate repetitive and well-defined tasks.</li>
              <li>✓ Validate input before processing security data.</li>
              <li>✓ Implement logging and error handling.</li>
              <li>✓ Protect credentials and API keys.</li>
              <li>✓ Test automation in controlled environments.</li>
              <li>✓ Maintain clear documentation.</li>
              <li>
                ✓ Only perform security testing against systems you are
                authorized to test.
              </li>
            </ul>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mt-16 rounded-2xl border border-purple-100 bg-purple-50 p-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Key Takeaways
          </h2>

          <ul className="mt-6 space-y-3 leading-7 text-slate-700">
            <li>
              • Python is useful for automating repetitive cybersecurity tasks.
            </li>

            <li>
              • Python can process logs, scan results, APIs, and security data.
            </li>

            <li>
              • Automation can improve consistency and reduce manual effort.
            </li>

            <li>
              • Python can integrate cybersecurity tools with databases,
              dashboards, and AI systems.
            </li>

            <li>
              • Secure development practices are essential when building
              security automation.
            </li>
          </ul>
        </section>

        {/* Related Topics */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900">
            Related Topics
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href="/en/cybersecurity/cybersecurity-tools"
              className="rounded-xl border bg-white p-5 font-semibold text-purple-700 hover:shadow-md"
            >
              Cybersecurity Tools →
            </Link>

            <Link
              href="/en/cybersecurity/basics-of-cybersecurity"
              className="rounded-xl border bg-white p-5 font-semibold text-purple-700 hover:shadow-md"
            >
              Basics of Cybersecurity →
            </Link>

            <Link
              href="/en/cybersecurity/incident-detection-response"
              className="rounded-xl border bg-white p-5 font-semibold text-purple-700 hover:shadow-md"
            >
              Incident Detection and Response →
            </Link>

            <Link
              href="/en/cybersecurity/disaster-recovery-business-continuity"
              className="rounded-xl border bg-white p-5 font-semibold text-purple-700 hover:shadow-md"
            >
              Disaster Recovery and Business Continuity →
            </Link>
            
            <Link
            href="/en/cybersecurity/tools-in-python"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Tools in Cybersecurity →
          </Link>
          </div>
        </section>

        {/* Back */}
        <div className="mt-16 text-center">
          <Link
            href="/en/cybersecurity"
            className="font-semibold text-purple-700 hover:underline"
          >
            ← Back to Cybersecurity
          </Link>
        </div>
      </section>
    </main>
  );
}