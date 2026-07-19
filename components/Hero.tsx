export default function Hero() {
  return (
    <section 
        id="home"
        className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <p className="mb-4 text-blue-400 font-semibold tracking-widest uppercase">
            Election Technology • AI • Cybersecurity
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">
            Building the Future of
            <br />
            Secure, Transparent &
            <br />
            Inclusive Elections
          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-8">
            Welcome to my Election Technology Knowledge Hub.
            I share research, case studies, and insights on election
            technology, cybersecurity, artificial intelligence,
            and digital democracy.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-lg bg-blue-600 px-7 py-4 font-semibold hover:bg-blue-700 transition">
              Explore Articles
            </button>

            <button className="rounded-lg border border-white px-7 py-4 hover:bg-white hover:text-black transition">
              About Me
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}