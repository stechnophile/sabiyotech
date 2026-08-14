import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-neutral-50 overflow-hidden">

      {/* Top Navigation Area 
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <Image
            src="/profile.jpg"
            alt="Yogesh Aryal"
            width={50}
            height={50}
            className="rounded-full border"
          />

          <div>
            <h2 className="font-bold text-xl">
              Yogesh Aryal
            </h2>
          </div>
        </div>

        <div className="flex gap-6 text-sm underline">
          <a href="/resume">Resume</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      */}
      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 text-center mt-16">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Exploring the intersection of 
          <br /> Election Technology,
          <br /> <span className="text-gray-400"> Cybersecurity & Artificial Intelligence </span>
        </h1>
<br />
<br />
        <p className="mt-10 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover case studies, research, projects, and technical insights on safeguarding modern democratic processes and driving digital transformation. 
        </p>
<br />
<br />
        <div className="mt-8 flex justify-center gap-5 text-lg underline flex-wrap">
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
        <div className="mt-12 flex flex-wrap justify-center gap-3 px-6 lg:hidden">
          <div className="rounded-xl bg-blue-100 px-4 py-2 shadow">
            Election Technology
          </div>

          <div className="rounded-xl bg-purple-100 px-4 py-2 shadow">
            Artificial Intelligence
          </div>

          <div className="rounded-xl bg-green-100 px-4 py-2 shadow">
            Cybersecurity
          </div>

          <div className="rounded-xl bg-orange-100 px-4 py-2 shadow">
            Research & Innovation
          </div>
        </div>

        {/* Desktop Sticky Notes */}
        <div className="hidden lg:block">
          <StickyNote
            text="Election Technology"
            className="top-32 left-20 bg-blue-100 rotate-[-8deg]"
          />

          <StickyNote
            text="Artificial Intelligence"
            className="top-32 right-20 bg-purple-100 rotate-[6deg]"
          />

          <StickyNote
            text="Cybersecurity"
            className="bottom-32 left-20 bg-green-100 rotate-[5deg]"
          />

          <StickyNote
            text="Research & Innovation"
            className="bottom-32 right-20 bg-orange-100 rotate-[-6deg]"
          />
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