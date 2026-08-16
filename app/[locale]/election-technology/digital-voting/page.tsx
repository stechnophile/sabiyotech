import Link from "next/link";

export default function DigitalVoting() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      {/* Header */}
      <div className="text-center">

        <div className="text-6xl">
          🗳️
        </div>

        <p className="mt-6 font-semibold uppercase tracking-widest text-blue-600">
          Election Technology
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Digital Voting
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-600">
          Exploring the opportunities, technologies, security requirements,
          and democratic considerations surrounding electronic and
          internet-based voting.
        </p>

      </div>


      {/* Introduction */}
      <section className="mt-16">

        <h2 className="text-3xl font-bold text-slate-900">
          What is Digital Voting?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Digital voting refers to the use of electronic technologies to
          record, transmit, process, or support the casting of votes during
          an election. It can include electronic voting machines used at
          polling stations as well as internet-based voting systems that
          allow eligible voters to cast their ballots remotely.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Digital voting is often discussed as a way to improve accessibility,
          convenience, and administrative efficiency. However, voting is not
          simply a technical process. Any digital voting system must preserve
          fundamental democratic principles such as ballot secrecy, election
          integrity, transparency, accessibility, and public trust.
        </p>

      </section>


      {/* Types of Digital Voting */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Types of Digital Voting
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-4xl">🖥️</div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Electronic Voting Machines
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Electronic Voting Machines (EVMs) allow voters to select
              candidates electronically at designated polling locations.
              Depending on their design, systems may record votes digitally,
              produce a voter-verifiable paper record, or use other
              mechanisms to support verification.
            </p>
          </div>


          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-4xl">🌐</div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Internet Voting
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Internet voting allows eligible voters to cast ballots remotely
              using computers, smartphones, or other connected devices.
              It can potentially improve accessibility for citizens who live
              far from their registered constituencies or abroad.
            </p>
          </div>


          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-4xl">📱</div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Mobile Voting
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Mobile voting explores the use of smartphones and mobile
              applications to provide election-related voting services.
              Such systems require particularly strong authentication,
              application security, privacy protection, and device security.
            </p>
          </div>


          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-4xl">🏢</div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              Controlled Digital Voting Centers
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              A controlled voting center can provide electronic voting
              facilities in designated locations while maintaining physical
              supervision and election procedures. This approach can be
              considered as an intermediate model between traditional paper
              voting and remote internet voting.
            </p>
          </div>

        </div>

      </section>


      {/* Why Digital Voting */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Why Consider Digital Voting?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Interest in digital voting is increasing as governments and
          election management bodies explore ways to modernize electoral
          processes. Potential benefits include:
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {[
            "Improved accessibility for some groups of voters",
            "Potentially faster processing of election results",
            "Reduced dependence on physical election materials",
            "Improved administrative efficiency",
            "Greater convenience for eligible remote voters",
            "Better integration with digital election management systems",
            "Potential reduction in some types of manual counting errors",
            "Opportunities for improved election data management",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
            >
              <span className="mr-3 text-blue-600">✓</span>
              <span className="text-slate-700">{item}</span>
            </div>
          ))}

        </div>

      </section>


      {/* Challenges */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Challenges of Digital Voting
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          The introduction of digital voting creates a different set of
          technical, legal, operational, and social challenges. These
          challenges must be carefully assessed before adopting any
          voter-facing digital system.
        </p>

        <div className="mt-8 space-y-5">

          <div className="rounded-xl border-l-4 border-red-400 bg-red-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Cybersecurity
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Digital voting infrastructure could become a target for
              cyberattacks, malware, unauthorized access, denial-of-service
              attacks, and other forms of interference.
            </p>
          </div>


          <div className="rounded-xl border-l-4 border-orange-400 bg-orange-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Voter Authentication
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Election systems must establish that a voter is eligible to
              participate while preventing unauthorized individuals from
              voting on someone else's behalf.
            </p>
          </div>


          <div className="rounded-xl border-l-4 border-purple-400 bg-purple-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Ballot Secrecy
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              A fundamental challenge is ensuring that the system can verify
              voter eligibility without revealing how an individual voted.
            </p>
          </div>


          <div className="rounded-xl border-l-4 border-blue-400 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Transparency and Verifiability
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Citizens and election observers need meaningful ways to verify
              that the voting and counting processes operate as intended.
            </p>
          </div>


          <div className="rounded-xl border-l-4 border-green-400 bg-green-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Digital Divide
            </h3>

            <p className="mt-2 leading-7 text-slate-700">
              Not every citizen has equal access to reliable internet,
              digital devices, electricity, or digital skills. Digital voting
              should therefore avoid creating new barriers to participation.
            </p>
          </div>

        </div>

      </section>


      {/* Security Requirements */}
      <section className="mt-14 rounded-2xl bg-slate-900 p-8 text-white">

        <h2 className="text-3xl font-bold">
          Security Requirements
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          Security must be incorporated into every stage of a digital voting
          system. A secure system should protect voters, election officials,
          election infrastructure, and election data.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          {[
            "Strong voter authentication",
            "End-to-end security controls",
            "Encryption",
            "Secure system architecture",
            "Independent security testing",
            "Continuous monitoring",
            "Incident response capability",
            "Secure backups and recovery",
            "Detailed audit logging",
            "Regular vulnerability assessments",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg bg-white/10 p-4 text-slate-200"
            >
              🔐 {item}
            </div>
          ))}

        </div>

      </section>


      {/* Digital Voting and Trust */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Technology Is Only One Part of the Solution
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A technically sophisticated voting system does not automatically
          create a trustworthy election. Public confidence depends on the
          transparency of the electoral process, the credibility of election
          institutions, independent oversight, clear laws, and the ability
          of citizens and stakeholders to understand and verify the system.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          For this reason, digital voting should be approached as an
          institutional and governance transformation rather than simply
          a software development project.
        </p>

      </section>


      {/* Digital Voting in Nepal */}
      <section className="mt-14 rounded-2xl bg-blue-50 p-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Digital Voting in Nepal
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Nepal has already experienced limited use of electronic voting
          technology. During the 2008 Constituent Assembly election,
          Electronic Voting Machines were used in selected constituencies
          in Kathmandu as a pilot initiative.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Nepal's continuing digital transformation creates opportunities
          to explore election technology further. However, moving toward
          broader digital voting would require careful assessment of
          infrastructure, cybersecurity, legislation, accessibility,
          institutional capacity, and public trust.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          A gradual approach involving research, controlled pilots,
          independent testing, stakeholder consultation, and public
          awareness could provide valuable evidence before considering
          wider implementation.
        </p>

      </section>


      {/* Recommended Approach */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          A Possible Roadmap for Digital Voting
        </h2>

        <div className="mt-8 space-y-4">

          {[
            {
              number: "01",
              title: "Research and Assessment",
              text: "Study international experiences, national requirements, risks, costs, and technological options.",
            },
            {
              number: "02",
              title: "Legal and Policy Preparation",
              text: "Develop appropriate legislation, standards, regulations, certification procedures, and accountability mechanisms.",
            },
            {
              number: "03",
              title: "Controlled Pilot Projects",
              text: "Test selected technologies in limited and carefully controlled environments.",
            },
            {
              number: "04",
              title: "Independent Security Testing",
              text: "Conduct security assessments, penetration testing, audits, and independent technical reviews.",
            },
            {
              number: "05",
              title: "Public and Stakeholder Consultation",
              text: "Engage citizens, political parties, civil society, technology experts, election observers, and other stakeholders.",
            },
            {
              number: "06",
              title: "Gradual Expansion",
              text: "Consider broader deployment only after demonstrating security, reliability, accessibility, transparency, and public confidence.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="flex gap-5 rounded-xl border border-slate-200 bg-white p-6"
            >

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                {step.number}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </section>


      {/* Key Principles */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Key Principles for Digital Voting
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-green-50 p-6">
            <h3 className="text-xl font-bold">
              🔒 Security
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Protect the voting system against cyber threats and
              unauthorized interference.
            </p>
          </div>

          <div className="rounded-2xl bg-blue-50 p-6">
            <h3 className="text-xl font-bold">
              👁️ Transparency
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Provide meaningful mechanisms for verification and
              independent oversight.
            </p>
          </div>

          <div className="rounded-2xl bg-purple-50 p-6">
            <h3 className="text-xl font-bold">
              🤝 Trust
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Build confidence among voters, political stakeholders,
              election officials, and observers.
            </p>
          </div>

          <div className="rounded-2xl bg-orange-50 p-6">
            <h3 className="text-xl font-bold">
              ♿ Accessibility
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Ensure that digital voting does not exclude citizens who
              have limited digital access or skills.
            </p>
          </div>

          <div className="rounded-2xl bg-yellow-50 p-6">
            <h3 className="text-xl font-bold">
              ⚖️ Integrity
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Ensure that votes are recorded, protected, counted, and
              reported accurately.
            </p>
          </div>

          <div className="rounded-2xl bg-red-50 p-6">
            <h3 className="text-xl font-bold">
              🏛️ Accountability
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Clearly define responsibilities for technology providers,
              election officials, auditors, and other stakeholders.
            </p>
          </div>

        </div>

      </section>


      {/* Conclusion */}
      <section className="mt-14">

        <h2 className="text-3xl font-bold text-slate-900">
          Conclusion
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          Digital voting has the potential to transform how elections are
          conducted and how citizens participate in democratic processes.
          It may improve accessibility, administrative efficiency, and the
          experience of some groups of voters.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          At the same time, digital voting introduces complex cybersecurity,
          privacy, authentication, transparency, accessibility, legal, and
          governance challenges. These risks cannot be addressed by
          technology alone.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-700">
          The most responsible approach is therefore gradual and
          evidence-based: research first, establish appropriate legal and
          security frameworks, conduct controlled pilots, independently
          evaluate the results, engage stakeholders, and expand only when
          sufficient security, reliability, accessibility, and public trust
          have been demonstrated.
        </p>

      </section>


      {/* Related Topics */}
      <section className="mt-16 border-t pt-10">

        <h2 className="text-2xl font-bold text-slate-900">
          Related Topics
        </h2>

        <div className="mt-5 flex flex-wrap gap-4">

          <Link
            href="/en/election-technology/election-cybersecurity"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Election Cybersecurity →
          </Link>

          <Link
            href="/en/election-technology/election-management-systems"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Election Management Systems →
          </Link>

          <Link
            href="/en/election-technology/election-data-analytics"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Election Data Analytics →
          </Link>

          <Link
            href="/en/election-technology/artificial-intelligence"
            className="rounded-lg bg-slate-100 px-5 py-3 font-medium text-slate-700 hover:bg-slate-200"
          >
            Artificial Intelligence →
          </Link>

        </div>

      </section>

      {/* Back */}
      <div className="mt-16 border-t pt-8">
        <Link
          href="/en/election-technology"
          className="font-semibold text-blue-700 hover:underline"
        >
          ← Back to Election Technology
        </Link>
      </div>

    </main>
  );
}