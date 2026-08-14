import Image from "next/image";

export default function buildingcyberguardaiBlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
        <article className="mt-16">
        <div className="mb-10 border-b pb-8">
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              Cybersecurity & Artificial Intelligence
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              CyberGuard AI: Building an AI-Powered Security Analyst from Scratch
            </h2>

            <p className="mt-3 text-slate-500">
              By Yogesh Aryal 
            </p>

            <p className="mt-2 text-slate-400">
              8 min read
            </p>
          </div>
          <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">

          <h3 className="text-3xl font-semibold text-slate-800">1. The Problem: Too Many Alerts, Too Little Context</h3>
          <p>
          Modern cybersecurity teams face a common challenge: they collect enormous amounts of security data but often struggle to turn it into actionable intelligence. A Security Operations Center (SOC) can generate hundreds or even thousands of alerts every day. Many of these alerts are repetitive, low-risk, or false positives. As a result, analysts spend significant time reviewing logs instead of investigating actual threats. This challenge inspired me to build <strong> CyberGuard AI</strong>, a personal cybersecurity project that combines traditional detection techniques with artificial intelligence to help security analysts quickly understand and respond to potential attacks. The goal was simple: Transform raw security logs into meaningful security insights through automation and local AI analysis.
          </p>
          
          <h3 className="text-3xl font-semibold text-slate-800">2. Project Vision</h3>

          <p>
           CyberGuard AI was designed as a lightweight Security Operations Center (SOC) platform that can: 
           <br />1.	Detect suspicious activity from log files
           <br />2.	Store security events for future investigation
           <br />3.	Visualize threats through an interactive dashboard
           <br />4.	Use AI to explain threats and recommend actions
           <br />5.	Keep sensitive data private by running AI locally
           <br />Rather than replacing security analysts, the project focuses on augmenting them by reducing manual investigation time.
           </p>

          <h3 className="text-3xl font-semibold text-slate-800">3. System Architecture</h3>

          <p>
          The project follows a straightforward security monitoring workflow: 
          <Image
            src="/images/architecture.png"
            alt="System Architecture"
            width={800}
            height={500}
            className="rounded-xl"
          />
          <br /> Each stage adds additional value to the data until a simple log entry becomes a security recommendation.
          </p>
          
          <h3 className="text-3xl font-semibold text-slate-800">3.1 Phase 1: Building the Detection Engine</h3>

          <p>
          Every security platform starts with visibility. To simulate real-world authentication activity, I created a log file containing login events, including successful and failed authentication attempts. The first challenge was identifying suspicious behavior.
          <br /> <strong> Detecting Brute Force Attacks </strong>
          <br />One of the most common attack techniques is a brute force attack, where an attacker repeatedly attempts to guess passwords. CyberGuard AI monitors failed login attempts and tracks how many times each IP address appears in the logs. When an IP exceeds a predefined threshold of failed attempts, the system generates a security alert. For example: 
          </p>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Source IP</th>
                <th className="border p-3">Failed Attempts</th>
                <th className="border p-3">Result</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">192.168.1.50</td>
                <td className="border p-3">6</td>
                <td className="border p-3">Alert Generated</td>
              </tr>

              <tr>
                <td className="border p-3">192.168.1.75</td>
                <td className="border p-3">2</td>
                <td className="border p-3">No Alert</td>
              </tr>
            </tbody>
          </table>

          <p>
          This simple detection mechanism demonstrates how meaningful security events can be extracted from otherwise noisy log data.
          </p>

          <h3 className="text-3xl font-semibold text-slate-800">3.2 Phase 2: Creating a Security Audit Trail</h3>
          <p>
          Initially, alerts were displayed directly in the terminal. While this approach was useful for testing, it has a major limitation. Once the program stops running, the alert history would disappear. To solve this problem, SQLite is integrated as a lightweight security event database. Every alert generated by the detection engine is stored with; timestamp, alert type, severity level, source IP and number of attempts. This transformation enabled the project to move from a simple script to a system capable of maintaining historical records. This matters because persistent storage allows security teams to:
          <br />1.	Identify recurring attackers
          <br />2.	Analyze attack trends
          <br />3.	Generate reports
          <br />4.	Maintain audit records
          <br />5.	Support compliance requirements
          <br />Instead of asking, "What happened today?", analysts can begin asking, "What patterns have emerged over time?"
          </p>

          <h3 className="text-3xl font-semibold text-slate-800">3.3 Phase 3: Building a SOC Dashboard</h3>
          <p>
          Security data becomes far more valuable when it is visualized. To make the alert data easier to interpret, an interactive dashboard was built using Streamlit. The dashboard provides an immediate overview of the organization's security posture. Instead of reviewing rows of data manually, users gain situational awareness within seconds.
          <br /><strong>Dashboard Features </strong>
          <br />1. Security Metrics: At a glance, users can view; total alerts detected, high-severity incidents and recent activity levels
          <br />2. Top Attacking IP Addresses: A dedicated section highlights the most active sources of suspicious activity. This helps prioritize investigation efforts and quickly identify recurring offenders.
          <br />3. Threat Visualization: Charts and visual summaries reveal trends that are difficult to spot in raw database tables. Analysts can immediately understand; alert frequency, severity distribution and attack concentration.
          </p>

          <h3 className="text-3xl font-semibold text-slate-800"> 3.4 Phase 4: Introducing the AI Security Analyst </h3>
          <p>
          While dashboards help visualize threats, analysts still need to answer critical questions:
          <br />1.	What does this alert mean?
          <br />2.	How serious is it?
          <br />3.	What should happen next?
          <br />This is where AI becomes valuable. CyberGuard AI integrates a locally hosted Large Language Model using Ollama and Llama 3.2:3b. This local AI is implemented because many organizations hesitate to send security data to cloud-based AI services. Running the model locally provides several benefits:
          <br />1.	Improved privacy
          <br />2.	No external API costs
          <br />3.	Reduced dependency on internet connectivity
          <br />4.	Greater control over sensitive information  
          <br /> <strong>Turning Alerts into Intelligence</strong> 
          A raw alert may look like this: 
          </p>
            <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Alert Type</th>
                <th className="border p-3">Source IP</th>
                <th className="border p-3">Attempts</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">Brute Force Attack</td>
                <td className="border p-3">192.168.1.50</td>
                <td className="border p-3">6</td>
               </tr>
            </tbody>
          </table>
          <p>
          <br /> For a junior analyst, this information raises several questions. CyberGuard AI automatically converts the alert into a concise security assessment. The AI responds using a structured format:
          <br /> <strong>Threat Summary</strong>
          <br /> A brief explanation of what happened.
          <br /> <strong>Severity</strong>
          <br /> An assessment of the risk level.
          <br /> <strong>MITRE ATT&CK Mapping</strong>
          <br />Industry-standard classification of the attack technique.
          <br /> <strong>Recommended Actions</strong>
          <br /> Practical steps security teams should take immediately.
          <br /> This transforms technical data into actionable guidance.
          </p>
          
          <h3 className="text-3xl font-semibold text-slate-800"> 3.5 Challenges and Lessons Learned</h3>
          <p>
Building CyberGuard AI taught me several important lessons:
<br /> 1. Security Data Is Only Valuable When Context Exists: Raw logs are not intelligence. Meaningful analysis requires detection logic, historical storage, and interpretation.
<br /> 2. Simplicity Often Wins: A straightforward brute-force detection rule can still uncover legitimate security concerns. Complexity is not always necessary.
<br /> 3. AI Works Best as an Assistant: The most effective role for AI is helping analysts understand and prioritize information rather than replacing human decision-making.
<br /> 4. Privacy Matters: Local AI deployment offers a practical balance between automation and data protection.

          </p>
          <h3 className="text-3xl font-semibold text-slate-800">3.6 Future Enhancements </h3>

          <p>
            CyberGuard AI is an ongoing project, and several improvements are planned:
            <br /> 1.	Real-time log monitoring
            <br /> 2.	Additional attack detection rules
            <br /> 3.	Threat intelligence integration
            <br /> 4.	Automated incident reports
            <br /> 5.	Email and Slack notifications
            <br /> 6.	Multi-user authentication
            <br /> 7.	Risk scoring engine
            <br /> 8.	Machine learning anomaly detection
            <br /> 9.	Docker deployment
            <br /> 10.	Cloud-hosted dashboard
            <br /> These enhancements would move the platform closer to a production-grade SOC solution.
          </p>
          
          <h3 className="text-3xl font-semibold text-slate-800">3.7 Conclusion </h3>
          <p>
            CyberGuard AI began as an experiment to explore the intersection of cybersecurity and artificial intelligence. What emerged was a complete security workflow capable of detecting suspicious activity, preserving historical evidence, visualizing threats, and generating AI-powered security guidance. The project reinforced an important lesson; The future of cybersecurity is not just collecting more data. It is helping people understand that data faster, more accurately, and with greater context. By combining traditional detection techniques with local AI, CyberGuard AI demonstrates how modern security operations can become more efficient, scalable, and intelligent without sacrificing privacy.
          </p>
        </div>

      </article>

    </main>
  );
}