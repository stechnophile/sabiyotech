export default function Feedback() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-center">
          Share Your Feedback
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Your suggestions help improve this platform and research initiatives. 
          <br /> 
          <br /><strong>Please provide your feedback below.</strong>
        </p>

        <form className="mt-10 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            rows={5}
            placeholder="Your Feedback"
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}