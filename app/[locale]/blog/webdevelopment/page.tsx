import Image from "next/image";

export default function webdevelopmentBlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
        <article className="mt-16">
        <div className="mb-10 border-b pb-8">
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              Research & Innovation 
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Building and Launching a Professional Personal Website: A Practical Journey with sabiyotech.com
            </h2>

            <p className="mt-3 text-slate-500">
              By Yogesh Aryal 
            </p>

            <p className="mt-2 text-slate-400">
              10 min read
            </p>
          </div>
          <div className="mt-10 space-y-6 text-lg leading-8 text-slate-700">

          <h3 className="text-3xl font-semibold text-slate-800">Introduction</h3>
          <p>
          In today's digital landscape, your online presence often creates the first impression long before a résumé, LinkedIn profile, or business card. Whether you're a software developer, cybersecurity analyst, AI enthusiast, researcher, or technology leader, a personal website can serve as your digital headquarters-a place where your work, ideas, and professional identity come together. Recently, I built sabiyotech.com, a personal website focused on Artificial Intelligence, Cybersecurity, Election Technology, and Digital Transformation. The project was more than just creating web pages; it was an opportunity to apply modern software engineering practices, explore deployment automation, and establish a professional online brand. In this article, I'll walk through the complete journey-from planning and technology selection to deployment and domain configuration-so that anyone interested in building their own website can follow a proven roadmap.
          </p>
          
          <h3 className="text-3xl font-semibold text-slate-800">Why Every IT Professional Should Have a Personal Website</h3>

          <p>
          Many professionals rely solely on LinkedIn or social media platforms. While these platforms are useful, they come with limitations. A personal website gives you complete ownership over your content, design, and professional narrative. A well-designed personal website can help you:
           <br />•	Showcase projects and technical achievements
           <br />•	Publish research papers and technical articles 
           <br />•	Demonstrate practical skills to employers and clients
           <br />•	Build a personal brand within your industry
           <br />•	Create a central hub for networking and collaboration
           <br />Think of it as your permanent digital portfolio that remains under your control. 
           </p>

          <h3 className="text-3xl font-semibold text-slate-800">Choosing the Right Technology Stack</h3>

          <p>
          One of the first decisions in any web project is selecting technologies that balance performance, scalability, and ease of development. 
          <br />For SabiyoTech, I selected a modern and widely adopted stack.
          <br /><strong>Next.js and React</strong>
          <br />The website was built using React and Next.js, one of the most popular frameworks for modern web development. Why Next.js?
          <br />•	Excellent performance
          <br />•	SEO-friendly architecture
          <br />•	Server-Side Rendering (SSR)
          <br />•	Static Site Generation (SSG)
          <br />•	Simplified routing system
          <br />•	Strong developer ecosystem
          <br />These capabilities make Next.js ideal for portfolio websites, blogs, and professional platforms.
          <br /><strong>Tailwind CSS</strong>
          <br />For styling, I chose Tailwind CSS, a utility-first framework that significantly speeds up frontend development. Benefits include:
          <br />•	Rapid UI creation
          <br />•	Responsive design out of the box
          <br />•	Consistent styling system
          <br />•	Reduced custom CSS
          <br />For example: &lt;div class="flex flex-col md:flex-row"&gt;
          <br />This single line automatically changes layout behavior between mobile and desktop screens. Instead of writing lengthy CSS files, developers can focus on building features.
          <br /><strong>Git and GitHub</strong>
          <br />No professional project should exist without version control. Using Git and GitHub provided:
          <br />•	Source code backup
          <br />•	Change tracking
          <br />•	Collaboration support
          <br />•	Integration with deployment platforms
          <br />Every update made during development was safely tracked and recoverable.
          <br /><strong>Vercel</strong>
          <br />To host the website, I selected Vercel, a platform designed specifically for modern frontend frameworks. Key advantages include:
          <br />•	One-click deployment
          <br />•	Automatic HTTPS
          <br />•	Global CDN
          <br />•	CI/CD integration
          <br />•	Seamless GitHub connectivity
          <br />For personal projects, Vercel's free tier is often more than sufficient.
          </p>
          
          <h3 className="text-3xl font-semibold text-slate-800">Setting Up the Development Environment</h3>

          <p>
          Before writing code, it is important to ensure the development environment is correctly configured. The essential tools include:
          <br />•	Node.js
          <br />•	npm
          <br />•	Git
          <br />•	Visual Studio Code
          <br />Verify installations using:
          <br />•	node -v
          <br />•	npm -v
          <br />•	git --version
          <br />Once everything is installed, create a project workspace:
          <br />•	mkdir ~/sabiyotech
          <br />•	cd ~/sabiyotech
          <br />Then start the development server:
          <br />•	npm run dev
          <br />The application becomes accessible at: http://localhost:3000
          <br />One of the most satisfying aspects of modern development is seeing code changes instantly reflected in the browser. 
          </p>
          <h3 className="text-3xl font-semibold text-slate-800">Designing a Professional User Experience</h3>
          <p>
          Technology alone does not create a great website. User experience plays an equally important role.
          <br /><strong>Dark Theme Design</strong>
          <br />For sabiyotech.com, I adopted a dark theme because it:
          <br />•	Reduces eye strain
          <br />•	Looks modern and professional
          <br />•	Enhances readability for technical content
          <br />•	Matches the aesthetics of developer-focused platforms

          <br /><strong>Responsive Design</strong>
          <br />Users visit websites from phones, tablets, laptops, and large desktop monitors. A responsive design ensures the experience remains consistent across all devices. Tailwind makes this remarkably simple:
          <br />•	grid-cols-1
          <br />•	md:grid-cols-2
          <br />•	lg:grid-cols-3
          <br />The layout automatically adapts based on screen size.

          <br /><strong>Structuring the Homepage</strong>
          <br />A professional homepage should answer a visitor's primary question: "Who are you and why should I care?" My homepage includes:
          <br />•	Introduction: Professional title and specialization.
          <br />•	About Section: A concise summary of experience and interests.
          <br />•	Skills: Key technologies and competencies.
          <br />•	Projects: Highlighted work and case studies.
          <br />•	Contact Information: Methods for collaboration and networking.
          <br />This structure allows visitors to quickly understand expertise and areas of interest.
          </p>

          <h3 className="text-3xl font-semibold text-slate-800">Understanding Modern CI/CD Workflows</h3>
          <p>
          One of the most valuable lessons from this project was learning how modern deployment pipelines work. In the past, developers manually uploaded files to servers.Today, the process is largely automated. The workflow looks like this:
          <br />Every code change follows this path automatically. This approach is known as Continuous Integration and Continuous Deployment (CI/CD).
          <br /><strong>Integrating GitHub</strong>
          <br />Once development begins, source code should immediately be placed under version control.
          <br />•	Initialize Git: git init
          <br />•	Stage files: git add .
          <br />•	Create a commit: git commit -m "Initial SabiyoTech website"
          <br />•	Connect GitHub: git remote add origin REPOSITORY_URL
          <br />•	Push code: git branch -M main / git push -u origin main
          <br />A common issue many beginners encounter is GitHub authentication. Since password authentication is no longer supported, developers should use:
          <br />•	Personal Access Tokens (PAT)
          <br />•	SSH Keys
          <br />Both methods provide improved security and reliability.

          <br /><strong>Deploying to Vercel</strong>
          <br />With the code hosted on GitHub, deployment becomes surprisingly simple.
          <br />•	Step 1: Create a Vercel account.
          <br />•	Step 2: Import the GitHub repository.
          <br />•	Step 3: Authorize repository access.
          <br />•	Step 4: Deploy.
          <br />Vercel automatically detects:
          <br />•	Framework type
          <br />•	Build commands
          <br />•	Output configuration
          <br />Within minutes, the application is live.
          
          <br /><strong>The Magic of Automatic Deployments</strong>
          <br />Perhaps the most rewarding part of the workflow is deployment automation. Every time I execute: git push
          <br />Vercel automatically:
          <br />1.	Pulls the latest source code
          <br />2.	Installs dependencies
          <br />3.	Builds the application
          <br />4.	Deploys the new version
          <br />No manual uploads. 
          <br />No FTP clients.
          <br />No server management headaches.
          <br />This is how modern software teams operate today.
          </p>
            
            
          <h3 className="text-3xl font-semibold text-slate-800"> Connecting a Custom Domain</h3>
          <p>
          A custom domain dramatically improves professionalism. Let's Compare: sabiyotech.vercel.app with sabiyotech.com
          <br />The difference in credibility is immediately noticeable. Within Vercel, adding a domain is straightforward:
          <br />1.	Open Project Settings
          <br />2.	Navigate to Domains
          <br />3.	Add the custom domain
          <br />4.	Verify ownership
          <br /> After DNS propagation, the website becomes accessible through the custom address.
          <br />
          <br /><strong>Understanding DNS Configuration</strong>
          <br />DNS is often the least exciting-and most confusing-part of deployment. Think of DNS as the internet's phone book. It translates human-friendly names into server locations. For Vercel deployments, the following records are commonly required:
          </p>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">Record Type</th>
                <th className="border p-3">Host</th>
                <th className="border p-3">Target</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">CNAME </td>
                <td className="border p-3">www</td>
                <td className="border p-3">cname.vercel-dns.com</td>
               </tr>
            </tbody>
          </table>
          <p>The A record routes the root domain, while the CNAME routes the www subdomain. Many deployment issues ultimately come down to DNS configuration errors, so understanding these basics is invaluable.
          </p>
          <h3 className="text-3xl font-semibold text-slate-800">Key Lessons from Building SabiyoTech </h3>

          <p>
          Every project teaches something new. These were my biggest takeaways:
          <br />•	Plan Before Coding: A few hours of planning can save days of rework.
          <br />•	Learn Git Early: Version control is a non-negotiable skill for modern developers.
          <br />•	Automate Everything Possible: CI/CD dramatically improves productivity.
          <br />•	Design for Mobile First: A large percentage of visitors will use mobile devices.
          <br />•	Understand DNS: Even experienced developers occasionally struggle with domain configuration.
          </p>
          
          <h3 className="text-3xl font-semibold text-slate-800">Final Thoughts </h3>
          <p>
          Building sabiyotech.com was far more than a web design exercise. It provided practical experience with modern frontend development, responsive design, Git-based workflows, cloud deployment, custom domains, and CI/CD automation. For students and aspiring technology professionals, a personal website is one of the highest-value projects you can build. It strengthens technical skills, creates a public portfolio, and establishes a professional digital presence that can support future job opportunities, research collaborations, consulting work, and personal branding efforts. If you're looking for a project that combines software development, DevOps, UI design, and professional growth into a single learning experience, building your own website is an excellent place to start.Your next employer, collaborator, or client may discover you through a single URL. Make it count.
          </p>
        </div>

      </article>

    </main>
  );
}