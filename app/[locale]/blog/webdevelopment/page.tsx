import Image from "next/image";
import Link from "next/link";

export default function webdevelopmentBlogPage() {
  return (
    <main className="min-h-screen bg-neutral-50">

      {/* =========================
          ARTICLE HEADER
      ========================== */}
      <section className="relative overflow-hidden border-b bg-white">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">

          {/* Category */}
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Research & Innovation
          </span>

          {/* Title */}
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Architecting sabiyotech.com: A Guide to Personal Website Development
          </h1>

          {/* Author */}
          <p className="mt-6 text-lg text-slate-600">
            By Yogesh Aryal
          </p>

          {/* Reading time */}
          <p className="mt-2 text-sm font-medium text-slate-400">
            10 min read
          </p>

          {/* Accent */}
          <div className="mt-8 h-1 w-20 rounded-full bg-blue-600" />

        </div>
      </section>


      {/* =========================
          ARTICLE CONTENT
      ========================== */}
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-20">

        <div className="space-y-14 text-lg leading-8 text-slate-700">

          {/* =========================
              INTRODUCTION
          ========================== */}
          <section>

            <SectionTitle>
              Introduction
            </SectionTitle>

            <p>
              In today's digital landscape, your online presence often creates the first impression long before a résumé, LinkedIn profile, or business card. Whether you're a software developer, cybersecurity analyst, AI enthusiast, researcher, or technology leader, a personal website can serve as your digital headquarters-a place where your work, ideas, and professional identity come together. Recently, I built sabiyotech.com, a personal website focused on Artificial Intelligence, Cybersecurity, Election Technology, and Digital Transformation. The project was more than just creating web pages; it was an opportunity to apply modern software engineering practices, explore deployment automation, and establish a professional online brand. In this article, I'll walk through the complete journey-from planning and technology selection to deployment and domain configuration-so that anyone interested in building their own website can follow a proven roadmap.
            </p>

          </section>


          {/* =========================
              WHY WEBSITE
          ========================== */}
          <section>

            <SectionTitle>
              Why Every IT Professional Should Have a Personal Website
            </SectionTitle>

            <p>
              Many professionals rely solely on LinkedIn or social media platforms. While these platforms are useful, they come with limitations. A personal website gives you complete ownership over your content, design, and professional narrative. A well-designed personal website can help you:
            </p>

            <BulletList
              items={[
                "Showcase projects and technical achievements",
                "Publish research papers and technical articles",
                "Demonstrate practical skills to employers and clients",
                "Build a personal brand within your industry",
                "Create a central hub for networking and collaboration",
              ]}
            />

            <p className="mt-6">
              Think of it as your permanent digital portfolio that remains under your control.
            </p>

          </section>


          {/* =========================
              TECHNOLOGY STACK
          ========================== */}
          <section>

            <SectionTitle>
              Choosing the Right Technology Stack
            </SectionTitle>

            <p>
              One of the first decisions in any web project is selecting technologies that balance performance, scalability, and ease of development.
            </p>

            <p className="mt-6">
              For SabiyoTech, I selected a modern and widely adopted stack.
            </p>


            <SubTitle>
              Next.js and React
            </SubTitle>

            <p>
              The website was built using React and Next.js, one of the most popular frameworks for modern web development. Why Next.js?
            </p>

            <BulletList
              items={[
                "Excellent performance",
                "SEO-friendly architecture",
                "Server-Side Rendering (SSR)",
                "Static Site Generation (SSG)",
                "Simplified routing system",
                "Strong developer ecosystem",
              ]}
            />

            <p className="mt-6">
              These capabilities make Next.js ideal for portfolio websites, blogs, and professional platforms.
            </p>


            <SubTitle>
              Tailwind CSS
            </SubTitle>

            <p>
              For styling, I chose Tailwind CSS, a utility-first framework that significantly speeds up frontend development. Benefits include:
            </p>

            <BulletList
              items={[
                "Rapid UI creation",
                "Responsive design out of the box",
                "Consistent styling system",
                "Reduced custom CSS",
              ]}
            />

            <p className="mt-6">
              For example:
            </p>

            <CodeBlock>
              {"<div class=\"flex flex-col md:flex-row\">"}
            </CodeBlock>

            <p>
              This single line automatically changes layout behavior between mobile and desktop screens. Instead of writing lengthy CSS files, developers can focus on building features.
            </p>


            <SubTitle>
              Git and GitHub
            </SubTitle>

            <p>
              No professional project should exist without version control. Using Git and GitHub provided:
            </p>

            <BulletList
              items={[
                "Source code backup",
                "Change tracking",
                "Collaboration support",
                "Integration with deployment platforms",
              ]}
            />

            <p>
              Every update made during development was safely tracked and recoverable.
            </p>


            <SubTitle>
              Vercel
            </SubTitle>

            <p>
              To host the website, I selected Vercel, a platform designed specifically for modern frontend frameworks. Key advantages include:
            </p>

            <BulletList
              items={[
                "One-click deployment",
                "Automatic HTTPS",
                "Global CDN",
                "CI/CD integration",
                "Seamless GitHub connectivity",
              ]}
            />

            <p>
              For personal projects, Vercel's free tier is often more than sufficient.
            </p>

          </section>


          {/* =========================
              DEVELOPMENT ENVIRONMENT
          ========================== */}
          <section>

            <SectionTitle>
              Setting Up the Development Environment
            </SectionTitle>

            <p>
              Before writing code, it is important to ensure the development environment is correctly configured. The essential tools include:
            </p>

            <BulletList
              items={[
                "Node.js",
                "npm",
                "Git",
                "Visual Studio Code",
              ]}
            />

            <p className="mt-6">
              Verify installations using:
            </p>

            <CodeBlock>
{`node -v
npm -v
git --version`}
            </CodeBlock>

            <p>
              Once everything is installed, create a project workspace:
            </p>

            <CodeBlock>
{`mkdir ~/sabiyotech
cd ~/sabiyotech`}
            </CodeBlock>

            <p>
              Then start the development server:
            </p>

            <CodeBlock>
              {"npm run dev"}
            </CodeBlock>

            <p>
              The application becomes accessible at: http://localhost:3000
            </p>

            <p>
              One of the most satisfying aspects of modern development is seeing code changes instantly reflected in the browser.
            </p>

          </section>


          {/* =========================
              USER EXPERIENCE
          ========================== */}
          <section>

            <SectionTitle>
              Designing a Professional User Experience
            </SectionTitle>

            <p>
              Technology alone does not create a great website. User experience plays an equally important role.
            </p>


            <SubTitle>
              Dark Theme Design
            </SubTitle>

            <p>
              For sabiyotech.com, I adopted a dark theme because it:
            </p>

            <BulletList
              items={[
                "Reduces eye strain",
                "Looks modern and professional",
                "Enhances readability for technical content",
                "Matches the aesthetics of developer-focused platforms",
              ]}
            />


            <SubTitle>
              Responsive Design
            </SubTitle>

            <p>
              Users visit websites from phones, tablets, laptops, and large desktop monitors. A responsive design ensures the experience remains consistent across all devices. Tailwind makes this remarkably simple:
            </p>

            <CodeBlock>
{`grid-cols-1
md:grid-cols-2
lg:grid-cols-3`}
            </CodeBlock>

            <p>
              The layout automatically adapts based on screen size.
            </p>


            <SubTitle>
              Structuring the Homepage
            </SubTitle>

            <p>
              A professional homepage should answer a visitor's primary question: "Who are you and why should I care?" My homepage includes:
            </p>

            <BulletList
              items={[
                "Introduction: Professional title and specialization.",
                "About Section: A concise summary of experience and interests.",
                "Skills: Key technologies and competencies.",
                "Projects: Highlighted work and case studies.",
                "Contact Information: Methods for collaboration and networking.",
              ]}
            />

            <p>
              This structure allows visitors to quickly understand expertise and areas of interest.
            </p>

          </section>


          {/* =========================
              CI/CD
          ========================== */}
          <section>

            <SectionTitle>
              Understanding Modern CI/CD Workflows
            </SectionTitle>

            <p>
              One of the most valuable lessons from this project was learning how modern deployment pipelines work. In the past, developers manually uploaded files to servers.Today, the process is largely automated. The workflow looks like this:
            </p>

            <div className="my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center justify-center gap-3 text-center text-sm font-semibold text-slate-700 md:flex-row">
                <span className="rounded-lg bg-slate-100 px-4 py-3">
                  Local Code
                </span>

                <span className="text-blue-600">→</span>

                <span className="rounded-lg bg-slate-100 px-4 py-3">
                  Git / GitHub
                </span>

                <span className="text-blue-600">→</span>

                <span className="rounded-lg bg-slate-100 px-4 py-3">
                  Vercel
                </span>

                <span className="text-blue-600">→</span>

                <span className="rounded-lg bg-blue-100 px-4 py-3 text-blue-700">
                  Live Website
                </span>
              </div>
            </div>

            <p>
              Every code change follows this path automatically. This approach is known as Continuous Integration and Continuous Deployment (CI/CD).
            </p>


            <SubTitle>
              Integrating GitHub
            </SubTitle>

            <p>
              Once development begins, source code should immediately be placed under version control.
            </p>

            <CodeBlock>
{`git init
git add .
git commit -m "Initial SabiyoTech website"
git remote add origin REPOSITORY_URL
git branch -M main
git push -u origin main`}
            </CodeBlock>

            <p>
              A common issue many beginners encounter is GitHub authentication. Since password authentication is no longer supported, developers should use:
            </p>

            <BulletList
              items={[
                "Personal Access Tokens (PAT)",
                "SSH Keys",
              ]}
            />

            <p>
              Both methods provide improved security and reliability.
            </p>


            <SubTitle>
              Deploying to Vercel
            </SubTitle>

            <p>
              With the code hosted on GitHub, deployment becomes surprisingly simple.
            </p>

            <div className="my-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <ol className="space-y-3 text-slate-700">
                <li><strong>Step 1:</strong> Create a Vercel account.</li>
                <li><strong>Step 2:</strong> Import the GitHub repository.</li>
                <li><strong>Step 3:</strong> Authorize repository access.</li>
                <li><strong>Step 4:</strong> Deploy.</li>
              </ol>
            </div>

            <p>
              Vercel automatically detects:
            </p>

            <BulletList
              items={[
                "Framework type",
                "Build commands",
                "Output configuration",
              ]}
            />

            <p>
              Within minutes, the application is live.
            </p>


            <SubTitle>
              The Magic of Automatic Deployments
            </SubTitle>

            <p>
              Perhaps the most rewarding part of the workflow is deployment automation. Every time I execute:
            </p>

            <CodeBlock>
              {"git push"}
            </CodeBlock>

            <p>
              Vercel automatically:
            </p>

            <ol className="my-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
              <li>1. Pulls the latest source code</li>
              <li>2. Installs dependencies</li>
              <li>3. Builds the application</li>
              <li>4. Deploys the new version</li>
            </ol>

            <p>
              No manual uploads.
            </p>

            <p>
              No FTP clients.
            </p>

            <p>
              No server management headaches.
            </p>

            <p>
              This is how modern software teams operate today.
            </p>

          </section>


          {/* =========================
              CUSTOM DOMAIN
          ========================== */}
          <section>

            <SectionTitle>
              Connecting a Custom Domain
            </SectionTitle>

            <p>
              A custom domain dramatically improves professionalism. Let's Compare: sabiyotech.vercel.app with sabiyotech.com
            </p>

            <p>
              The difference in credibility is immediately noticeable. Within Vercel, adding a domain is straightforward:
            </p>

            <ol className="my-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
              <li>1. Open Project Settings</li>
              <li>2. Navigate to Domains</li>
              <li>3. Add the custom domain</li>
              <li>4. Verify ownership</li>
            </ol>

            <p>
              After DNS propagation, the website becomes accessible through the custom address.
            </p>


            <SubTitle>
              Understanding DNS Configuration
            </SubTitle>

            <p>
              DNS is often the least exciting-and most confusing-part of deployment. Think of DNS as the internet's phone book. It translates human-friendly names into server locations. For Vercel deployments, the following records are commonly required:
            </p>


            {/* DNS TABLE */}
            <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="overflow-x-auto">

                <table className="w-full min-w-[500px] border-collapse text-left">

                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border-b border-slate-200 p-4 font-semibold text-slate-800">
                        Record Type
                      </th>

                      <th className="border-b border-slate-200 p-4 font-semibold text-slate-800">
                        Host
                      </th>

                      <th className="border-b border-slate-200 p-4 font-semibold text-slate-800">
                        Target
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr className="transition hover:bg-slate-50">
                      <td className="border-b border-slate-200 p-4">
                        CNAME
                      </td>

                      <td className="border-b border-slate-200 p-4">
                        www
                      </td>

                      <td className="border-b border-slate-200 p-4 font-mono text-sm text-blue-700">
                        cname.vercel-dns.com
                      </td>
                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

            <p>
              The A record routes the root domain, while the CNAME routes the www subdomain. Many deployment issues ultimately come down to DNS configuration errors, so understanding these basics is invaluable.
            </p>

          </section>


          {/* =========================
              KEY LESSONS
          ========================== */}
          <section>

            <SectionTitle>
              Key Lessons from Building SabiyoTech
            </SectionTitle>

            <p>
              Every project teaches something new. These were my biggest takeaways:
            </p>

            <div className="my-8 space-y-4">

              <Lesson
                title="Plan Before Coding"
                text="A few hours of planning can save days of rework."
              />

              <Lesson
                title="Learn Git Early"
                text="Version control is a non-negotiable skill for modern developers."
              />

              <Lesson
                title="Automate Everything Possible"
                text="CI/CD dramatically improves productivity."
              />

              <Lesson
                title="Design for Mobile First"
                text="A large percentage of visitors will use mobile devices."
              />

              <Lesson
                title="Understand DNS"
                text="Even experienced developers occasionally struggle with domain configuration."
              />

            </div>

          </section>


          {/* =========================
              FINAL THOUGHTS
          ========================== */}
          <section>

            <SectionTitle>
              Final Thoughts
            </SectionTitle>

            <div className="rounded-2xl border-l-4 border-blue-600 bg-white p-6 shadow-sm md:p-8">

              <p>
                Building sabiyotech.com was far more than a web design exercise. It provided practical experience with modern frontend development, responsive design, Git-based workflows, cloud deployment, custom domains, and CI/CD automation. For students and aspiring technology professionals, a personal website is one of the highest-value projects you can build. It strengthens technical skills, creates a public portfolio, and establishes a professional digital presence that can support future job opportunities, research collaborations, consulting work, and personal branding efforts. If you're looking for a project that combines software development, DevOps, UI design, and professional growth into a single learning experience, building your own website is an excellent place to start.Your next employer, collaborator, or client may discover you through a single URL. Make it count.
              </p>

            </div>

          </section>

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


      {/* =========================
          ARTICLE FOOTER
      ========================== */}
      <section className="border-t border-slate-200 bg-white">

        <div className="mx-auto max-w-4xl px-6 py-12 text-center">

          <p className="text-sm text-slate-500">
            Research & Innovation
          </p>

        </div>

      </section>

    </main>
  );
}


/* =====================================================
   REUSABLE COMPONENTS
===================================================== */

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-7">

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {children}
      </h2>

      <div className="mt-4 h-1 w-12 rounded-full bg-blue-600" />

    </div>
  );
}


function SubTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="mt-10 mb-4 text-xl font-bold text-slate-800 md:text-2xl">
      {children}
    </h3>
  );
}


function BulletList({
  items,
}: {
  items: string[];
}) {
  return (
    <ul className="my-6 space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-slate-700"
        >
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />

          <span>{item}</span>
        </li>
      ))}

    </ul>
  );
}


function CodeBlock({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <pre className="my-6 overflow-x-auto rounded-2xl bg-slate-900 p-5 text-sm leading-7 text-slate-100 shadow-lg">
      <code>{children}</code>
    </pre>
  );
}


function Lesson({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      <h4 className="font-bold text-slate-900">
        {title}
      </h4>

      <p className="mt-1 text-base text-slate-600">
        {text}
      </p>

    </div>
  );
}