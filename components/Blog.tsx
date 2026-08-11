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
      category: "Cybersecurity",
      readTime: "8 min read",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-16">
      <h1 className="text-5xl font-bold text-slate-900">
        Blog & Research Articles
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Articles and research on election technology,
        cybersecurity, artificial intelligence, and digital democracy.
      </p>
    </div>
    
      <div className="mt-12 space-y-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/en/blog/${article.slug}`}
            className="block rounded-xl border p-6 hover:shadow-lg transition"
          >
            <span className="text-blue-600 text-sm">
              {article.category}
            </span>

            <h2 className="mt-2 text-2xl font-bold">
              {article.title}
            </h2>

            <p className="mt-2 text-gray-500">
              {article.readTime}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}