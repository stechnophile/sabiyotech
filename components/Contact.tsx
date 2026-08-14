import Feedback from "@/components/Feedback";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-slate-900">
          Contact & Collaboration
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Interested in election technology, AI, cybersecurity, digital governance, or research collaboration?
          <br /><strong>Feel free to reach out. </strong>
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">

        {/* Contact Information */}
        <div className="rounded-3xl bg-slate-100 p-8">

          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>

          <div className="mt-8 space-y-5 text-lg">

            <p>
              📧 Email:
              <span className="ml-2 font-medium">
                yogesharyal2048@gmail.com
              </span>
            </p>

            <p>
              📍 Location:
              <span className="ml-2 font-medium">
                Kathmandu, Nepal
              </span>
            </p>

            <p>
              🔗 LinkedIn:
              <span className="ml-2 text-blue-600">
                linkedin.com/in/yaryal
              </span>
            </p>

          </div>


        
        </div>

        {/* Contact Form */}
        <div className="rounded-3xl border p-8">

          <h2 className="text-3xl font-bold">
            Send a Message
          </h2>

          <form className="mt-8 space-y-4">

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

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-lg border p-3"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-lg border p-3"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* Feedback Section */}
      <div className="mt-20">
        <Feedback />
      </div>

    </main>
  );
}