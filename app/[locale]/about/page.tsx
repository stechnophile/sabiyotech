import Image from "next/image";

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      {/* =====================================================
          1. ABOUT ME - TOP CENTER
      ====================================================== */}

      <section>
        <h1 className="text-center text-4xl font-bold text-slate-900 md:text-5xl">
          About Me
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          Learn more about my professional background, expertise, and journey
          in ICT, election technology, cybersecurity, and artificial intelligence.
        </p>
      </section>


      {/* =====================================================
          2. PHOTO LEFT + NAME & DESCRIPTION RIGHT
      ====================================================== */}

      <section className="mt-16">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT - PHOTO */}

          <div className="flex justify-center">

            <Image
              src="/images/yogesh.png"
              alt="Yogesh Aryal"
              width={380}
              height={450}
              className="rounded-3xl object-cover shadow-2xl"
            />

          </div>


          {/* RIGHT - PROFILE */}

          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Yogesh Aryal
            </h2>

            <p className="mt-3 text-xl font-medium text-blue-700">
              Senior ICT Specialist & IT Director | Election Technology,
              Cybersecurity & AI Governance
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              I am an ICT professional with over 10 years of progressive
              leadership experience in government digital transformation,
              critical IT infrastructure protection, and governance. My
              current research focuses on election technology, artificial
              intelligence and cybersecurity.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          3. KEY HIGHLIGHTS + TECHNICAL SKILLS
      ====================================================== */}

      <section className="mt-20">

        <div className="grid gap-8 lg:grid-cols-2">


          {/* KEY HIGHLIGHTS */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <h3 className="text-center text-2xl font-bold text-slate-900">
              KEY HIGHLIGHTS
            </h3>

            <div className="mx-auto mt-6 max-w-md space-y-4 text-left text-slate-600">

              <p>
                ✅ 10+ Years of ICT Leadership & Governance
              </p>

              <p>
                ✅ Election Technology & Integrity Practitioner
              </p>

              <p>
                ✅ AI & Cybersecurity Enthusiastic
              </p>

              <p>
                ✅ Partnership & Capacity Building
              </p>

            </div>

          </div>


          {/* TECHNICAL SKILLS */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <h3 className="text-center text-2xl font-bold text-slate-900">
              🛠️ Technical Skills
            </h3>

            <div className="mx-auto mt-6 max-w-md space-y-4 text-left text-slate-600">

              <p>
                ✅ Operating Systems (Linux, Windows)
              </p>

              <p>
                ✅ Programming Language (Python)
              </p>

              <p>
                ✅ Database Management (SQL)
              </p>

              <p>
                ✅ Security & Network Administration Tools (Splunk, Wireshark)
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          4. CONTACT + DOWNLOAD CV
      ====================================================== */}

      <section className="mt-14 flex justify-center">

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:yogesharyal2048@gmail.com"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
          >
            📧 Contact Me
          </a>

          <a
            href="/YOGESH_ARYAL_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-600 bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50 hover:shadow-lg"
          >
            📄 Download CV
          </a>

        </div>

      </section>


      {/* =====================================================
          5. EDUCATION & CAREER TIMELINE
      ====================================================== */}

      <section className="mt-24">

        <h1 className="text-center text-4xl font-bold text-slate-900">
          Academic & Professional Journey
        </h1>

        <p className="mt-4 text-center text-lg text-slate-600">
          A visual overview of my academic background, professional experience,
          and research journey.
        </p>

        <div className="mt-12 rounded-3xl bg-white p-6 shadow-xl">

          <Image
            src="/images/summary.png"
            alt="Education and Career Timeline"
            width={1400}
            height={800}
            className="h-auto w-full rounded-2xl"
          />

        </div>

      </section>

    </main>
  );
}