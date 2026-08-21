import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Hero Content */}
      <div className="relative z-10">

        <div className="max-w-3xl mx-auto px-4 text-center mt-16">

          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight">
            Exploring the intersection
            <br />of
            <br />
            <span className="text-gray-400">
              Election Technology,
            </span>
            <br />
            <span className="text-gray-400">
              Cybersecurity & Artificial Intelligence
            </span>
            <br />for
            <br />
              Ensuring Reliable, Transparent, and Secure Elections.
          </h1>

          <br />
          <br />

          <p className="mt-2 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover case studies, research, projects, and technical
            insights on safeguarding modern democratic processes and
            driving digital transformation.
          </p>

          <br />
          <br />

          <div className="mt-2 flex justify-center gap-5 text-lg underline flex-wrap font-bold">

            <a href="https://linkedin.com/in/yaryal/">
              LinkedIn
            </a>

            <span>✦</span>

            <a href="https://github.com/stechnophile/myprofilewebsite">
              GitHub
            </a>

            <span>✦</span>

            <a href="/blog">
              Blog
            </a>

            <span>✦</span>

            <a href="/contact">
              Contact
            </a>

            <span>✦</span>

            <a href="/about">
              Resume
            </a>

          </div>

        </div>

        {/* Mobile Sticky Notes */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 px-6 lg:hidden font-['Comic_Sans_MS',cursive]">

          <div className="rounded-xl bg-blue-100/90 px-4 py-2 shadow">
            Election Technology
          </div>

          <div className="rounded-xl bg-purple-100/90 px-4 py-2 shadow">
            Artificial Intelligence
          </div>

          <div className="rounded-xl bg-green-100/90 px-4 py-2 shadow">
            Cybersecurity
          </div>

          <div className="rounded-xl bg-orange-100/90 px-4 py-2 shadow">
            Research & Innovation
          </div>

        </div>

        {/* Desktop Sticky Notes */}
        <div className="hidden lg:block">

          <StickyNote
            text="Election Technology"
            className="top-16 left-10 bg-blue-100/90 rotate-[-8deg] font-['Comic_Sans_MS',cursive]"
          />

          <StickyNote
            text="Artificial Intelligence"
            className="top-16 right-10 bg-purple-100/90 rotate-[6deg] font-['Comic_Sans_MS',cursive]"
          />

          <StickyNote
            text="Cybersecurity"
            className="bottom-16 left-10 bg-green-100/90 rotate-[5deg] font-['Comic_Sans_MS',cursive]"
          />

          <StickyNote
            text="Research & Innovation"
            className="bottom-16 right-10 bg-orange-100/90 rotate-[-6deg] font-['Comic_Sans_MS',cursive]"
          />

        </div>

      </div>

    </section>
  );
}

function StickyNote({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <div
      className={`absolute flex w-48 h-48 shadow-lg items-center justify-center text-center font-medium text-xl p-4 rounded-lg ${className}`}
    >
      {text}
    </div>
  );
}