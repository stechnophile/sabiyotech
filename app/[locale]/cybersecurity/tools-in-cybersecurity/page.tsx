import Link from "next/link";

export default function CybersecurityTools() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="text-6xl">🛠️</div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Cybersecurity
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Cybersecurity Tools
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore the tools commonly used by cybersecurity professionals for
            security monitoring, network analysis, vulnerability assessment,
            incident response, penetration testing, and digital forensics.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Understanding Cybersecurity Tools
          </h2>

          <p className="mt-5 leading-8 text-slate-700">
            Cybersecurity tools help security professionals identify threats,
            analyze systems and networks, detect suspicious activity,
            investigate security incidents, assess vulnerabilities, and
            protect digital infrastructure.
          </p>

          <p className="mt-4 leading-8 text-slate-700">
            Different tools are designed for different security tasks. A
            security analyst may use network analysis tools to investigate
            traffic, vulnerability scanners to identify weaknesses, and SIEM
            platforms to monitor security events.
          </p>
        </div>

        {/* Tool Categories */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Major Categories of Cybersecurity Tools
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: "🌐",
                title: "Network Security Tools",
                description:
                  "Tools used to discover systems, analyze network traffic, monitor connections, and investigate network activity.",
              },
              {
                icon: "🔍",
                title: "Vulnerability Assessment Tools",
                description:
                  "Tools used to identify vulnerabilities, exposed services, configuration weaknesses, and security risks.",
              },
              {
                icon: "🚨",
                title: "SIEM and Security Monitoring",
                description:
                  "Platforms used to collect, correlate, search, and analyze security logs and events.",
              },
              {
                icon: "🖥️",
                title: "Endpoint Security Tools",
                description:
                  "Tools used to monitor endpoints, detect suspicious behavior, investigate incidents, and respond to threats.",
              },
              {
                icon: "🧪",
                title: "Application Security Tools",
                description:
                  "Tools used to identify security weaknesses in web applications, APIs, and software.",
              },
              {
                icon: "🔬",
                title: "Digital Forensics Tools",
                description:
                  "Tools used to collect, preserve, examine, and analyze digital evidence during investigations.",
              },
            ].map((tool) => (
              <div
                key={tool.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{tool.icon}</div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {tool.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Tools */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Commonly Used Cybersecurity Tools
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-slate-900">
                      Tool
                    </th>
                    <th className="px-6 py-4 font-semibold text-slate-900">
                      Primary Purpose
                    </th>
                    <th className="px-6 py-4 font-semibold text-slate-900">
                      Security Area
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold">Nmap</td>
                    <td className="px-6 py-4 text-slate-600">
                      Network discovery and service enumeration
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Network Security
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">Wireshark</td>
                    <td className="px-6 py-4 text-slate-600">
                      Network packet analysis
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Network Security
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">Splunk</td>
                    <td className="px-6 py-4 text-slate-600">
                      Log and security event analysis
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      SOC / SIEM
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">Burp Suite</td>
                    <td className="px-6 py-4 text-slate-600">
                      Web application security testing
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Application Security
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">Metasploit</td>
                    <td className="px-6 py-4 text-slate-600">
                      Security testing and exploit validation
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Security Testing
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">OpenVAS</td>
                    <td className="px-6 py-4 text-slate-600">
                      Vulnerability assessment
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Vulnerability Management
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold">Autopsy</td>
                    <td className="px-6 py-4 text-slate-600">
                      Digital forensic investigation
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      Digital Forensics
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SOC Workflow */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Cybersecurity Tools in a SOC Workflow
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              ["01", "Collect", "Logs, traffic, endpoint data"],
              ["02", "Monitor", "Security events and systems"],
              ["03", "Detect", "Suspicious activity"],
              ["04", "Investigate", "Analyze evidence"],
              ["05", "Respond", "Contain and recover"],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-bold text-blue-600">
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

        {/* Choosing Tools */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Choosing the Right Cybersecurity Tool
          </h2>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <ul className="space-y-4 text-slate-700">
              <li>✓ Define the security problem first.</li>
              <li>✓ Understand the tool's capabilities and limitations.</li>
              <li>✓ Consider the organization's environment and requirements.</li>
              <li>✓ Validate findings before taking action.</li>
              <li>✓ Keep tools updated and securely configured.</li>
              <li>✓ Use security testing tools only in authorized environments.</li>
            </ul>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mt-16 rounded-2xl border border-blue-100 bg-blue-50 p-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Key Takeaways
          </h2>

          <ul className="mt-6 space-y-3 leading-7 text-slate-700">
            <li>• Cybersecurity tools support different security functions.</li>
            <li>• No single tool provides complete security visibility.</li>
            <li>• Security professionals often combine multiple tools.</li>
            <li>• Tool output should be analyzed and validated.</li>
            <li>• Automation can improve the efficiency of security operations.</li>
          </ul>
        </section>

        {/* Related Topics */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900">
            Related Topics
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Link
              href="/en/cybersecurity/basics-of-cybersecurity"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Basics of Cybersecurity →
            </Link>

            <Link
              href="/en/cybersecurity/security-domains"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Security Domains →
            </Link>

            <Link
              href="/en/cybersecurity/incident-detection-response"
              className="rounded-xl border bg-white p-5 font-semibold text-blue-700 hover:shadow-md"
            >
              Incident Detection and Response →
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
        <div className="mt-16 text-center">
          <Link
            href="/en/cybersecurity"
            className="font-semibold text-blue-700 hover:underline"
          >
            ← Back to Cybersecurity
          </Link>
        </div>
      </section>
    </main>
  );
}