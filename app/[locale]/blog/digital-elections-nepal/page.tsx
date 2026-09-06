"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function digitalelectionnepalBlogPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-slate-200">
        <div
          className="h-1 bg-blue-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main className="min-h-screen bg-slate-50">

        {/* Article Header */}
        <header className="border-b border-slate-200 bg-white">

          <div className="mx-auto max-w-5xl px-6 py-16">

            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
              <Link
                href="/en"
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>

              <span>→</span>

              <Link
                href="/en/blog"
                className="hover:text-blue-600 transition"
              >
                Blog
              </Link>

              <span>→</span>

              <span>Election Technology</span>
            </div>

            {/* Category */}
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Election Technology
            </span>

            {/* Title */}
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Digital Elections in Nepal: Are We Ready for the Future?
            </h1>

            {/* Author */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-slate-500">

              <span>
                By <strong className="text-slate-700">Yogesh Aryal</strong>
              </span>

              <span>•</span>

              <span> April, 2025</span>
              
              <span>•</span>

              <span>Election Technology</span>

              <span>•</span>

              <span>8 min read</span>

            </div>

            {/* Introduction */}
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              As Nepal continues its journey toward digital transformation,
              an important question is emerging: can technology make
              elections more accessible, efficient, and inclusive?
            </p>

          </div>

        </header>


        {/* Article Layout */}
        <div className="mx-auto max-w-6xl px-6 py-14">

          <div className="grid gap-12 lg:grid-cols-[220px_1fr]">

            {/* Table of Contents */}
            <aside className="hidden lg:block">

              <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                  In this article
                </p>

                <nav className="mt-5 space-y-3 text-sm">

                  <a
                    href="#introduction"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Introduction
                  </a>

                  <a
                    href="#digital-citizens"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    A New Generation of Digital Citizens
                  </a>

                  <a
                    href="#digital-readiness"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Nepal’s Digital Readiness
                  </a>

                  <a
                    href="#cybersecurity"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    The Cybersecurity Challenge
                  </a>

                  <a
                    href="#legal"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Legal and Institutional Preparedness
                  </a>

                  <a
                    href="#global"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Learning from Global Experience
                  </a>

                  <a
                    href="#next"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    What Should Nepal Do Next?
                  </a>

                  <a
                    href="#conclusion"
                    className="block text-slate-600 hover:text-blue-600"
                  >
                    Conclusion
                  </a>

                </nav>

              </div>

            </aside>


            {/* Article */}
            <article className="min-w-0 rounded-2xl bg-white p-6 shadow-sm md:p-10 lg:p-14">

              {/* Featured Image */}
              <div className="mb-12 overflow-hidden rounded-2xl">

                <Image
                  src="/images/digital-election.png"
                  alt="Digital Elections"
                  width={1200}
                  height={700}
                  priority
                  className="h-auto w-full object-cover"
                />

              </div>


              {/* Introduction */}
              <section id="introduction">

                <p className="text-lg leading-8 text-slate-700">

                  As Nepal continues its journey toward digital transformation,
                  an important question is emerging: can technology make
                  elections more accessible, efficient, and inclusive? While
                  digital elections are often viewed as a natural step in
                  modern governance, their implementation requires careful
                  planning, strong institutions, and public trust.

                </p>


                <p className="mt-6 text-lg leading-8 text-slate-700">

                  Nepal’s electoral system has traditionally relied on paper
                  ballots. This system has helped deliver credible and peaceful
                  elections and remains widely trusted by voters. The country’s
                  only significant experiment with electronic voting took place
                  during the 2008 Constituent Assembly election, when Electronic
                  Voting Machines (EVMs) were piloted in selected areas of
                  Kathmandu. Although technically successful, the initiative was
                  not expanded nationwide.

                </p>


                <p className="mt-6 text-lg leading-8 text-slate-700">

                  Today, however, Nepal faces new challenges that are prompting
                  renewed discussions about digital elections. Large-scale labor
                  migration, urbanization, and internal migration have weakened
                  the connection between many citizens and their registered
                  voting constituencies. Millions of Nepalis living abroad remain
                  unable to participate in elections, raising concerns about
                  democratic inclusion and representation. At the same time,
                  increasing internet access, mobile connectivity, and digital
                  literacy are transforming how citizens interact with public
                  services.

                </p>

              </section>


              {/* Digital Citizens */}
              <section
                id="digital-citizens"
                className="mt-16 scroll-mt-24"
              >

                <SectionTitle>
                  A New Generation of Digital Citizens
                </SectionTitle>

                <p className="text-lg leading-8 text-slate-700">

                  Nepal’s electorate is becoming younger and more digitally
                  connected. Many first-time voters regularly use online
                  banking, e-commerce platforms, digital payment systems, and
                  government services. For these citizens, long journeys to
                  polling stations and manual election processes may appear
                  outdated.

                </p>

                <p className="mt-6 text-lg leading-8 text-slate-700">

                  However, digital expectations must be balanced with realities
                  on the ground. While urban youth often possess strong digital
                  skills, many rural communities and migrant workers still face
                  challenges related to internet access and digital literacy.
                  Therefore, the goal should not be immediate internet voting
                  but rather the gradual introduction of technology that
                  improves accessibility and administrative efficiency without
                  excluding vulnerable populations.

                </p>

              </section>


              {/* Digital Readiness */}
              <section
                id="digital-readiness"
                className="mt-16 scroll-mt-24"
              >

                <SectionTitle>
                  Nepal’s Digital Readiness
                </SectionTitle>

                <p className="text-lg leading-8 text-slate-700">

                  Nepal’s digital landscape has improved significantly in
                  recent years. Mobile penetration exceeds the country’s
                  population, internet use continues to grow, and broadband
                  services have expanded across much of the nation. These
                  developments provide a promising foundation for future
                  digital election initiatives. The Election Commission of
                  Nepal (ECN) has also made considerable progress in digitizing
                  election administration. Integration with the National
                  Identity database, digital candidate nomination platforms,
                  and electronic result publication systems have improved
                  efficiency and transparency. These achievements demonstrate
                  that Nepal can successfully manage large-scale digital
                  election infrastructure.

                </p>


                <p className="mt-6 text-lg leading-8 text-slate-700">

                  Nevertheless, readiness for digital administration does not
                  automatically mean readiness for digital voting. Significant
                  challenges remain, particularly in rural connectivity, power
                  reliability, cybersecurity, and legal preparedness.

                </p>


                {/* Highlight */}
                <div className="my-10 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">

                  <p className="text-lg font-semibold leading-8 text-slate-800">
                    Digital administration does not automatically mean
                    readiness for digital voting.
                  </p>

                </div>

              </section>


              {/* Cybersecurity */}
              <section
                id="cybersecurity"
                className="mt-16 scroll-mt-24"
              >

                <SectionTitle>
                  The Cybersecurity Challenge
                </SectionTitle>

                <p className="text-lg leading-8 text-slate-700">

                  Any discussion of digital elections must address
                  cybersecurity. Election systems are attractive targets for
                  cybercriminals, hostile actors, and disinformation campaigns.
                  Risks include unauthorized access to voter databases,
                  denial-of-service attacks, phishing campaigns, misinformation,
                  and manipulation attempts.

                </p>


                <p className="mt-6 text-lg leading-8 text-slate-700">

                  The consequences of a successful cyberattack could be severe.
                  Beyond technical disruptions, even the perception of insecurity
                  can undermine public confidence in election results. This is
                  why robust cybersecurity measures-including continuous
                  monitoring, incident response capabilities, staff training,
                  and collaboration with national security agencies-must be
                  established before introducing voter-facing digital
                  technologies.

                </p>


                <p className="mt-6 text-lg leading-8 text-slate-700">

                  Citizens themselves also face risks. Fake websites, fraudulent
                  messages, and online disinformation can confuse voters and
                  damage trust. Public awareness and digital literacy will
                  therefore be just as important as technological safeguards.

                </p>


                {/* Cybersecurity Cards */}
                <div className="my-10 grid gap-4 md:grid-cols-3">

                  <div className="rounded-xl bg-red-50 p-5">
                    <div className="text-2xl">🔐</div>
                    <h4 className="mt-3 font-bold">
                      Security
                    </h4>
                  </div>

                  <div className="rounded-xl bg-orange-50 p-5">
                    <div className="text-2xl">🛡️</div>
                    <h4 className="mt-3 font-bold">
                      Resilience
                    </h4>
                  </div>

                  <div className="rounded-xl bg-blue-50 p-5">
                    <div className="text-2xl">🤝</div>
                    <h4 className="mt-3 font-bold">
                      Public Trust
                    </h4>
                  </div>

                </div>

              </section>


              {/* Legal */}
              <section
                id="legal"
                className="mt-16 scroll-mt-24"
              >

                <SectionTitle>
                  Legal and Institutional Preparedness
                </SectionTitle>

                <p className="text-lg leading-8 text-slate-700">

                  Nepal has taken positive steps through the National Cyber
                  Security Policy and existing election legislation, which
                  provide a foundation for digital innovation. However,
                  significant regulatory gaps remain. Detailed standards for
                  technology certification, independent security audits,
                  cybersecurity compliance, and accountability mechanisms are
                  still underdeveloped. Without these safeguards, introducing
                  electronic or online voting could create risks that outweigh
                  the benefits. Strong legal frameworks must come before
                  technological expansion.

                </p>

              </section>


              {/* Global Experience */}
              <section
                id="global"
                className="mt-16 scroll-mt-24"
              >

                <SectionTitle>
                  Learning from Global Experience
                </SectionTitle>

                <p className="text-lg leading-8 text-slate-700">

                  International examples offer valuable lessons. Estonia is
                  often cited as the global leader in internet voting, but its
                  success is built on decades of investment in digital identity
                  systems, cybersecurity infrastructure, and public trust.
                  Other countries have taken a more cautious approach. Germany
                  discontinued electronic voting due to transparency concerns,
                  while countries such as the Netherlands and Ireland abandoned
                  similar initiatives because of security and cost issues. These
                  experiences show that technology alone cannot guarantee
                  successful digital elections. Trust, transparency, and strong
                  institutions are equally important.

                </p>


                {/* Pull Quote */}
                <blockquote className="my-10 border-l-4 border-slate-900 bg-slate-50 p-6">

                  <p className="text-xl font-semibold leading-8 text-slate-800">

                    Technology alone cannot guarantee successful digital
                    elections. Trust, transparency, and strong institutions
                    are equally important.

                  </p>

                </blockquote>

              </section>


              {/* What Next */}
              <section
                id="next"
                className="mt-16 scroll-mt-24"
              >

                <SectionTitle>
                  What Should Nepal Do Next?
                </SectionTitle>

                <p className="text-lg leading-8 text-slate-700">

                  Rather than pursuing rapid implementation of electronic or
                  internet voting, Nepal should adopt a phased and
                  evidence-based approach.

                </p>


                <p className="mt-6 text-lg leading-8 text-slate-700">

                  In the short term, the focus should be on improving
                  participation without changing the voting method. Solutions
                  such as cross-constituency voting for internally migrated
                  citizens, stronger results transmission systems, and enhanced
                  election transparency can address many existing challenges.

                </p>


                <p className="mt-6 text-lg leading-8 text-slate-700">

                  In the medium term, Nepal could pilot controlled voting
                  options for overseas citizens through embassies and
                  designated voting centers. Such pilots should be carefully
                  monitored, independently audited, and supported by strong
                  cybersecurity safeguards.

                </p>


                <p className="mt-6 text-lg leading-8 text-slate-700">

                  Only in the long term, after demonstrating sufficient
                  institutional maturity, legal readiness, cybersecurity
                  capability, and public confidence, should Nepal consider
                  expanding voter-facing digital voting options. Even then,
                  digital voting should initially operate alongside traditional
                  paper ballots until reliability and trust are fully
                  established.

                </p>


                {/* Roadmap */}
                <div className="my-10 rounded-2xl bg-slate-900 p-8 text-white">

                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                    Suggested Approach
                  </p>

                  <div className="mt-6 grid gap-5 md:grid-cols-3">

                    <div>
                      <div className="text-3xl font-bold">
                        01
                      </div>

                      <p className="mt-2 font-semibold">
                        Short Term
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Improve participation and election administration.
                      </p>
                    </div>


                    <div>
                      <div className="text-3xl font-bold">
                        02
                      </div>

                      <p className="mt-2 font-semibold">
                        Medium Term
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Conduct controlled pilots and independent audits.
                      </p>
                    </div>


                    <div>
                      <div className="text-3xl font-bold">
                        03
                      </div>

                      <p className="mt-2 font-semibold">
                        Long Term
                      </p>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Consider voter-facing digital voting when readiness
                        is demonstrated.
                      </p>
                    </div>

                  </div>

                </div>

              </section>


              {/* Conclusion */}
              <section
                id="conclusion"
                className="mt-16 scroll-mt-24"
              >

                <SectionTitle>
                  Conclusion
                </SectionTitle>

                <p className="text-lg leading-8 text-slate-700">

                  Digital elections are not a quick fix for Nepal’s electoral
                  challenges. They represent a long-term institutional
                  transformation that requires careful planning, robust legal
                  safeguards, advanced cybersecurity capabilities, and broad
                  stakeholder trust. While technology can improve efficiency
                  and accessibility, it cannot replace transparency,
                  accountability, and public confidence. For now, Nepal’s most
                  practical path is to strengthen the digital foundations of
                  election administration while maintaining the trusted paper
                  ballot system. Through gradual reforms, pilot programs, and
                  inclusive stakeholder engagement, the country can modernize
                  its electoral processes without compromising democratic
                  integrity. Ultimately, the success of digital elections in
                  Nepal will depend not on technology itself, but on the
                  institutions, governance, and trust that support it.

                </p>

              </section>


              {/* Author / Discussion */}
              <div className="mt-16 border-t pt-10">

                <div className="rounded-2xl bg-slate-50 p-8">

                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Author
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    Yogesh Aryal
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Election Technology • Cybersecurity • Artificial
                    Intelligence • Digital Transformation
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

                <Link
                  href="/en/election-technology/digital-voting"
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Explore Digital Voting →
                </Link>

              </div>

            </article>

          </div>

        </div>

      </main>
    </>
  );
}


/* Reusable Section Heading */

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7">

      <div className="mb-3 h-1 w-12 rounded-full bg-blue-600" />

      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
        {children}
      </h2>

    </div>
  );
}