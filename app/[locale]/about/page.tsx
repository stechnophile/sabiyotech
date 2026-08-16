import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side - Photo */}
          <div className="flex justify-center">
            <Image
              src="/images/yogesh.png"
              alt="Yogesh Aryal"
              width={380}
              height={450}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

          {/* Right Side */}
          <div>

            <p className="font-semibold uppercase tracking-widest text-blue-600">
              About Me
            </p>

            <h2 className="mt-4 text-5xl font-bold text-slate-900">
              Yogesh Aryal
            </h2>

            <p className="mt-3 text-xl text-blue-700 font-medium">
              Senior ICT Director Specialist & IT Director | Election Technology, Cybersecurity & AI Governance
            </p>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              I am an ICT professional with over 10 years of progressive leadership experience in government digital transformation, critical IT infrastructure protection, and governance. My current research focuses on election technology, artificial intelligence and cybersecurity.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div>✅ 10+ Years of ICT Leadership & Governance</div>
              <div>✅ Election Technology & Integrity Practitioner</div>
              <div>✅ AI & Cybersecurity Enthusiastic</div>
              <div>✅ Partnership & Capacity Building </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="mailto:yogesharyal2048@gmail.com"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                📧 Contact Me
              </a>

              <a
                href="/resume/YOGESH_ARYAL_CV"
                download
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                📄 Download CV
              </a>
            </div>

          </div>
          
        </div>

      </div>

                {/* Education & Career Timeline */}

          <div className="mt-24">

            <h3 className="text-center text-4xl font-bold text-slate-900">
              Academic & Professional Journey
            </h3>

            <p className="mt-4 text-center text-lg text-slate-600">
              A visual overview of my academic background, professional experience, and research journey.
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

          </div>

    </section>
  );
}