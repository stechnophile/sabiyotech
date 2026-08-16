import Link from "next/link";

export default function BlogPage() {
  const articles = [
    {
      slug: "digital-elections-nepal",
      title: "Digital Elections in Nepal: Are We Ready for the Future?",
      category: "Election Technology",
      readTime: "8 min read",
    },
    {
      slug: "building-cyberguard-ai",
      title: "CyberGuard AI: Building an AI-Powered Security Analyst from Scratch",
      category: "Cybersecurity & Artificial Intelligence",
      readTime: "8 min read",
    },
    {
      slug: "webdevelopment",
      title: "Architecting sabiyotech.com: A Guide to Personal Website Development ",
      category: "Research & Innovation",
      readTime: "10 min read",
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50">

      {/* Hero / Header */}
      <section className="relative overflow-hidden border-b bg-white">

        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">

          {/* Small Label */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Research & Knowledge
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Blog & Research Articles
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            Articles and blog posts on election technology, cybersecurity,
            artificial intelligence, and digital transformation.
          </p>

          {/* Decorative line */}
          <div className="mt-10 h-1 w-20 rounded-full bg-blue-600" />

        </div>
      </section>


      {/* Articles */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">

        <div className="grid gap-8">

          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/en/blog/${article.slug}`}
              className="group block"
            >

              <article
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:shadow-xl
                  md:p-9
                "
              >

                {/* Article number */}
                <div className="absolute right-6 top-6 text-5xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-blue-50">
                  0{index + 1}
                </div>


                {/* Category */}
                <div className="relative">
                  <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition group-hover:bg-blue-100">
                    {article.category}
                  </span>
                </div>


                {/* Title */}
                <h2 className="relative mt-5 max-w-4xl text-2xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-700 md:text-3xl">
                  {article.title}
                </h2>


                {/* Read time */}
                <div className="relative mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <span>◷</span>
                  <span>{article.readTime}</span>
                </div>


                {/* Read article */}
                <div className="relative mt-7 flex items-center font-semibold text-blue-700">
                  <span className="transition-all duration-300 group-hover:mr-2">
                    Read Article
                  </span>

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

              </article>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}